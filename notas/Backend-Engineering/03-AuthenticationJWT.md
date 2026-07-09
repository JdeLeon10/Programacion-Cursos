# JWT en ASP.NET Core Web API

JWT significa **JSON Web Token**. Es un formato de token usado comúnmente para autenticar y autorizar usuarios en aplicaciones web, APIs, aplicaciones móviles y sistemas distribuidos.

En una API construida con ASP.NET Core, JWT permite que el servidor identifique al usuario que está haciendo una petición sin tener que guardar una sesión activa en memoria o en base de datos.

## ¿Por qué se necesita JWT?

En una Web API normalmente se busca que el backend sea **stateless**, es decir, que no dependa de una sesión guardada en el servidor para saber quién es el usuario.

Con JWT el flujo suele ser así:

1. El usuario envía sus credenciales al endpoint de login.
2. La API valida esas credenciales.
3. Si son correctas, la API genera un JWT firmado.
4. El cliente guarda ese token.
5. En cada petición protegida, el cliente envía el token en el header `Authorization`.
6. La API valida el token antes de permitir el acceso al recurso.

Ejemplo del header enviado por el cliente:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

JWT es útil porque:

- Permite proteger endpoints con `[Authorize]`.
- Evita manejar sesiones tradicionales en el servidor.
- Funciona bien con frontends separados como React, Angular, Vue o aplicaciones móviles.
- Permite incluir información del usuario mediante claims.
- Es estándar y ampliamente soportado.

## Estructura básica de un JWT

Un JWT tiene tres partes separadas por puntos:

```text
header.payload.signature
```

Por ejemplo:

```text
xxxxx.yyyyy.zzzzz
```

Las partes son:

- `header`: contiene información del algoritmo usado para firmar el token.
- `payload`: contiene los claims, por ejemplo el id del usuario, email o roles.
- `signature`: permite comprobar que el token no fue alterado.

Importante: el contenido del payload no está encriptado, solo codificado. Por eso no se debe guardar información sensible como contraseñas, números de tarjeta o secretos privados dentro del JWT.

## Pasos para configurar JWT en ASP.NET Core Web API

### 1. Instalar el paquete necesario

Para usar autenticación JWT en ASP.NET Core, instala el paquete:

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

## 2. Agregar configuración en `appsettings.json`

Puedes agregar una sección como esta:

```json
{
  "Jwt": {
    "Key": "esta-es-una-llave-secreta-larga-para-firmar-el-token",
    "Issuer": "MiApi",
    "Audience": "MiApiClientes",
    "ExpiresInMinutes": 60
  }
}
```

Significado de cada valor:

- `Key`: llave secreta usada para firmar el token.
- `Issuer`: quién emite el token, normalmente tu API.
- `Audience`: quién consume el token, por ejemplo tu frontend o clientes autorizados.
- `ExpiresInMinutes`: tiempo de expiración del token.

En un proyecto real, la llave secreta no debería estar directamente en el repositorio. Es mejor usar variables de entorno, Azure Key Vault, AWS Secrets Manager o Secret Manager en desarrollo.

## 3. Configurar JWT en `Program.cs`

Ejemplo usando .NET 6 o superior:

```csharp
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var jwtKey = builder.Configuration["Jwt:Key"];
var jwtIssuer = builder.Configuration["Jwt:Issuer"];
var jwtAudience = builder.Configuration["Jwt:Audience"];

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtIssuer,
            ValidAudience = jwtAudience,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtKey!))
        };
    });

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

El orden de estos middlewares es importante:

```csharp
app.UseAuthentication();
app.UseAuthorization();
```

`UseAuthentication` debe ir antes de `UseAuthorization`, porque primero se identifica al usuario y luego se valida si tiene permisos para acceder al recurso.

## 4. Crear un método para generar el token

Un ejemplo simple de generación de JWT sería:

```csharp
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public string GenerateToken(IConfiguration configuration, string userId, string email)
{
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, userId),
        new Claim(ClaimTypes.Email, email)
    };

    var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(configuration["Jwt:Key"]!));

    var credentials = new SigningCredentials(
        key,
        SecurityAlgorithms.HmacSha256);

    var expiresInMinutes = Convert.ToDouble(
        configuration["Jwt:ExpiresInMinutes"]);

    var token = new JwtSecurityToken(
        issuer: configuration["Jwt:Issuer"],
        audience: configuration["Jwt:Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddMinutes(expiresInMinutes),
        signingCredentials: credentials);

    return new JwtSecurityTokenHandler().WriteToken(token);
}
```

Este método crea un token con claims básicos del usuario y lo firma usando la llave configurada.

## 5. Crear un endpoint de login

Ejemplo simple de un controlador de autenticación:

```csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
        if (request.Email != "admin@test.com" || request.Password != "123456")
        {
            return Unauthorized();
        }

        var token = GenerateToken(_configuration, "1", request.Email);

        return Ok(new
        {
            accessToken = token
        });
    }

    private static string GenerateToken(
        IConfiguration configuration,
        string userId,
        string email)
    {
        var claims = new[]
        {
            new System.Security.Claims.Claim(
                System.Security.Claims.ClaimTypes.NameIdentifier,
                userId),
            new System.Security.Claims.Claim(
                System.Security.Claims.ClaimTypes.Email,
                email)
        };

        var key = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(
            System.Text.Encoding.UTF8.GetBytes(configuration["Jwt:Key"]!));

        var credentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(
            key,
            Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256);

        var expiresInMinutes = Convert.ToDouble(
            configuration["Jwt:ExpiresInMinutes"]);

        var token = new System.IdentityModel.Tokens.Jwt.JwtSecurityToken(
            issuer: configuration["Jwt:Issuer"],
            audience: configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(expiresInMinutes),
            signingCredentials: credentials);

        return new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler()
            .WriteToken(token);
    }
}

public class LoginRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
```

Este ejemplo usa credenciales fijas solo para demostrar el flujo. En una aplicación real, las credenciales deberían validarse contra una base de datos, ASP.NET Core Identity u otro sistema de autenticación.

## 6. Proteger endpoints con `[Authorize]`

Una vez configurado JWT, puedes proteger controladores o acciones usando `[Authorize]`:

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(new[]
        {
            new { Id = 1, Name = "Laptop" },
            new { Id = 2, Name = "Mouse" }
        });
    }
}
```

Si el cliente no envía un token válido, la API responderá con `401 Unauthorized`.

También puedes permitir acceso público a endpoints específicos usando `[AllowAnonymous]`:

```csharp
using Microsoft.AspNetCore.Authorization;

[AllowAnonymous]
[HttpGet("public")]
public IActionResult PublicEndpoint()
{
    return Ok("Este endpoint no requiere token.");
}
```

## 7. Enviar el token desde el cliente

Después de hacer login, el cliente debe guardar el token y enviarlo en cada petición protegida:

```http
GET /api/products HTTP/1.1
Host: localhost:5001
Authorization: Bearer <access_token>
```

Ejemplo usando JavaScript:

```javascript
const response = await fetch("https://localhost:5001/api/products", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

## Claims y roles

Los claims son datos asociados al usuario dentro del token. Algunos ejemplos comunes son:

- Id del usuario.
- Email.
- Nombre.
- Roles.
- Permisos.

Ejemplo agregando un rol:

```csharp
var claims = new[]
{
    new Claim(ClaimTypes.NameIdentifier, userId),
    new Claim(ClaimTypes.Email, email),
    new Claim(ClaimTypes.Role, "Admin")
};
```

Luego puedes proteger un endpoint por rol:

```csharp
[Authorize(Roles = "Admin")]
[HttpDelete("{id}")]
public IActionResult DeleteProduct(int id)
{
    return NoContent();
}
```

## Buenas prácticas

- Usar siempre HTTPS.
- No guardar contraseñas ni datos sensibles dentro del JWT.
- Usar una llave secreta larga y segura.
- No dejar la llave secreta escrita directamente en el código fuente.
- Configurar expiraciones razonables para los tokens.
- Considerar refresh tokens si se necesita mantener sesiones por más tiempo.
- Validar `Issuer`, `Audience`, firma y expiración.
- No confiar en el contenido del token si la firma no fue validada.