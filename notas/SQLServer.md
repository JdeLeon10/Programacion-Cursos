# SQL Server

## Conceptos basicos

### Base de datos

Una base de datos almacena informacion organizada en tablas. En SQL Server se trabaja normalmente seleccionando primero la base de datos activa con `USE`.

```sql
CREATE DATABASE CursoSQLServer;
USE CursoSQLServer;
```

Para eliminar una base de datos:

```sql
DROP DATABASE CursoSQLServer;
```

### Entidad

Una entidad es un objeto, concepto o dato que queremos representar de forma agrupada. En una base de datos suele convertirse en una tabla.

### Tabla

Una tabla agrupa registros en filas y columnas.

Ejemplo de tabla `users`:

```sql
CREATE TABLE users (
    users_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(50) NOT NULL,
    age INT NULL,
    email VARCHAR(100) NULL
);
```

Detalles importantes:

- `PRIMARY KEY`: identifica cada fila de forma unica.
- `IDENTITY(1,1)`: genera numeros automaticos empezando en 1 e incrementando de 1 en 1.
- `NOT NULL`: obliga a que el campo tenga valor.
- `NULL`: permite que el campo no tenga valor.
- `VARCHAR(50)`: texto de hasta 50 caracteres.

## Tipos de datos comunes

Antes de crear tablas conviene elegir bien el tipo de dato de cada columna. El tipo define que valores se pueden guardar, cuanto espacio ocupan y que operaciones puedes hacer con ellos.

### Numericos

| Tipo | Uso comun | Ejemplo |
| ---- | --------- | ------- |
| `INT` | Numeros enteros | `age INT` |
| `BIGINT` | Enteros muy grandes | `views BIGINT` |
| `DECIMAL(p, s)` | Numeros exactos con decimales | `price DECIMAL(10, 2)` |
| `FLOAT` | Numeros aproximados con decimales | `measurement FLOAT` |

Ejemplo:

```sql
CREATE TABLE products (
    product_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);
```

`DECIMAL(10, 2)` significa hasta 10 digitos en total, con 2 digitos despues del punto decimal. Es mejor que `FLOAT` para dinero porque evita aproximaciones.

### Texto

| Tipo | Uso comun | Ejemplo |
| ---- | --------- | ------- |
| `CHAR(n)` | Texto de longitud fija | `country_code CHAR(2)` |
| `VARCHAR(n)` | Texto de longitud variable | `email VARCHAR(100)` |
| `VARCHAR(MAX)` | Texto largo | `description VARCHAR(MAX)` |
| `NCHAR(n)` | Texto Unicode de longitud fija | `code NCHAR(2)` |
| `NVARCHAR(n)` | Texto Unicode de longitud variable | `name NVARCHAR(100)` |

Usa `NVARCHAR` si necesitas guardar caracteres especiales o multiples idiomas. Usa `VARCHAR` cuando sabes que el texto sera simple y quieres ahorrar espacio.

### Fechas y horas

| Tipo | Uso comun | Ejemplo |
| ---- | --------- | ------- |
| `DATE` | Solo fecha | `birth_date DATE` |
| `TIME` | Solo hora | `start_time TIME` |
| `DATETIME2` | Fecha y hora precisa | `created_at DATETIME2` |

Ejemplo:

```sql
CREATE TABLE events (
    event_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    created_at DATETIME2 NOT NULL DEFAULT SYSDATETIME()
);
```

`SYSDATETIME()` devuelve la fecha y hora actual del servidor con buena precision.

### Booleanos

SQL Server usa `BIT` para valores tipo verdadero/falso.

```sql
CREATE TABLE settings (
    settings_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    notifications_enabled BIT NOT NULL DEFAULT 1
);
```

Valores comunes:

- `1`: verdadero.
- `0`: falso.
- `NULL`: desconocido o no definido, si la columna permite `NULL`.

### Identificadores unicos

`UNIQUEIDENTIFIER` guarda valores tipo GUID/UUID.

```sql
CREATE TABLE api_keys (
    api_key_id UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_api_keys PRIMARY KEY (api_key_id)
);
```

Se usa cuando necesitas identificadores globalmente unicos, aunque para tablas simples suele bastar con `INT IDENTITY`.

### Recomendaciones rapidas

- Usa `INT IDENTITY` para claves primarias simples.
- Usa `VARCHAR(n)` o `NVARCHAR(n)` con un limite razonable, no siempre `MAX`.
- Usa `DECIMAL` para dinero o calculos exactos.
- Usa `DATETIME2` para fechas con hora.
- Usa `BIT` para valores de verdadero/falso.
- Evita guardar numeros como texto si despues necesitaras ordenarlos o calcular con ellos.

## Creacion de tablas

### Tabla con restricciones

```sql
CREATE TABLE person (
    person_id INT NOT NULL IDENTITY(1,1),
    person_name VARCHAR(50) NOT NULL,
    person_email VARCHAR(100) NULL,
    person_age INT NULL,
    CONSTRAINT uq_person_name UNIQUE (person_name),
    CONSTRAINT pk_person PRIMARY KEY (person_id),
    CONSTRAINT chk_person_age CHECK (person_age IS NULL OR person_age >= 18)
);
```

Restricciones comunes:

- `PRIMARY KEY`: clave primaria.
- `UNIQUE`: evita valores repetidos en una columna o combinacion de columnas.
- `CHECK`: valida una condicion antes de insertar o actualizar.
- `DEFAULT`: asigna un valor por defecto si no se especifica.
- `FOREIGN KEY`: crea una relacion con otra tabla.

Ejemplo con `DEFAULT`:

```sql
CREATE TABLE products (
    product_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100) NOT NULL,
    active BIT NOT NULL DEFAULT 1
);
```

### Eliminar tablas

```sql
DROP TABLE products;
```

> `DROP TABLE` elimina la tabla y sus datos. Para borrar solo filas se usa `DELETE` o `TRUNCATE`.

## Insercion de datos

```sql
INSERT INTO users (name, age, email)
VALUES
    ('Usuario 1', 36, 'usuario1@example.com'),
    ('Usuario 2', 23, 'usuario2@example.com'),
    ('Usuario 3', NULL, 'usuario3@example.com'),
    ('Usuario 4', 21, 'usuario4@example.com');
```

Notas:

- Usa `NULL`, no texto como `'null'`, cuando quieras representar ausencia de valor.
- Si ejecutas varias veces el mismo `INSERT`, se duplicaran los datos salvo que exista una restriccion que lo impida.
- Para agregar una nueva columna o modificar estructura, crea una instruccion nueva con `ALTER TABLE` en lugar de reejecutar todo el script de insercion.

## Consultas basicas

### SELECT

`SELECT` permite consultar datos de una tabla. Puedes pedir todas las columnas con `*` o solo las columnas que necesitas.

```sql
SELECT * FROM users;
SELECT name FROM users;
SELECT name, email FROM users;
```

Ejemplo de resultado para `SELECT * FROM users;`:

| users_id | name      | age  | email                | country   |
| -------- | --------- | ---- | -------------------- | --------- |
| 1        | Usuario 1 | 36   | usuario1@example.com | España    |
| 2        | Usuario 2 | 23   | usuario2@example.com | Guatemala |
| 3        | Usuario 3 | NULL | usuario3@example.com | Guatemala |
| 4        | Usuario 4 | 21   | usuario4@example.com | Mexico    |

Ejemplo de resultado para `SELECT name FROM users;`:

| name      |
| --------- |
| Usuario 1 |
| Usuario 2 |
| Usuario 3 |
| Usuario 4 |

Ejemplo de resultado para `SELECT name, email FROM users;`:

| name      | email                |
| --------- | -------------------- |
| Usuario 1 | usuario1@example.com |
| Usuario 2 | usuario2@example.com |
| Usuario 3 | usuario3@example.com |
| Usuario 4 | usuario4@example.com |

### DISTINCT

`DISTINCT` elimina valores repetidos del resultado. No modifica los datos guardados en la tabla, solo cambia lo que devuelve la consulta.

Es util cuando quieres ver una lista de valores unicos, por ejemplo todas las edades registradas sin repetir o todos los paises existentes en `users`.

```sql
SELECT DISTINCT age FROM users;
SELECT DISTINCT country FROM users;
```

Ejemplo de resultado para `SELECT DISTINCT age FROM users;`:

| age  |
| ---- |
| 36   |
| 23   |
| NULL |
| 21   |

Ejemplo de resultado para `SELECT DISTINCT country FROM users;`:

| country   |
| --------- |
| España    |
| Guatemala |
| Mexico    |

Observa que `Guatemala` aparece dos veces en la tabla original, pero con `DISTINCT` solo aparece una vez.

### WHERE

Filtra filas segun una condicion.

```sql
SELECT * FROM users WHERE age = 40;
SELECT DISTINCT age FROM users WHERE age = 40;
```

### ORDER BY

Ordena resultados.

```sql
SELECT * FROM users ORDER BY age;
SELECT * FROM users ORDER BY age ASC;
SELECT * FROM users ORDER BY age DESC;
```

### TOP

Limita la cantidad de filas devueltas.

```sql
SELECT TOP 3 * FROM users;
```

### Alias con AS

```sql
SELECT name AS nombre FROM users;
SELECT MAX(age) AS edad_maxima FROM users;
```

## Filtros y operadores

### LIKE

Busca patrones de texto.

```sql
SELECT * FROM users WHERE country LIKE 'G%';
SELECT * FROM users WHERE email LIKE '%@example.com';
SELECT * FROM users WHERE email LIKE 'usuario%@example.com';
```

Patrones comunes:

- `'G%'`: empieza con `G`.
- `'%example%'`: contiene `example`.
- `'%@example.com'`: termina en `@example.com`.

### NOT

```sql
SELECT * FROM users WHERE email NOT LIKE '%@example.com';
```

### AND

Todas las condiciones deben cumplirse.

```sql
SELECT *
FROM users
WHERE age = 23
  AND email LIKE '%@example.com';
```

### OR

Al menos una condicion debe cumplirse.

```sql
SELECT *
FROM users
WHERE email LIKE 'usuario%@example.com'
   OR email LIKE 'admin%@example.com';
```

### IN

Busca coincidencias dentro de una lista.

```sql
SELECT * FROM users WHERE name IN ('Usuario 2', 'Usuario 3');
```

### BETWEEN

Busca valores dentro de un rango inclusivo.

```sql
SELECT * FROM users WHERE age BETWEEN 20 AND 25;
```

### NULL

`NULL` no se compara con `=`. Se usa `IS NULL` o `IS NOT NULL`.

```sql
SELECT * FROM users WHERE age IS NULL;
SELECT * FROM users WHERE age IS NOT NULL;
```

## Funciones utiles

### Agregacion

```sql
SELECT MAX(age) AS edad_maxima FROM users;
SELECT MIN(age) AS edad_minima FROM users;
SELECT SUM(age) AS suma_edades FROM users;
SELECT AVG(age) AS promedio_edad FROM users;
```

### CONCAT

```sql
SELECT CONCAT('Usuario: ', name, ' - Email: ', email) AS contacto
FROM users;
```

### CASE

Permite crear condiciones dentro de una consulta.

```sql
SELECT
    name,
    age,
    CASE
        WHEN age >= 18 THEN 'Mayor de edad'
        WHEN age IS NULL THEN 'Edad pendiente'
        ELSE 'Menor de edad'
    END AS estado_edad
FROM users;
```

### ISNULL

Sustituye valores `NULL` por un valor por defecto al consultar.

```sql
SELECT
    name,
    ISNULL(email, 'PENDIENTE') AS email,
    ISNULL(age, 0) AS age
FROM users;
```

Ejemplo de datos originales:

| name      | email                | age  |
| --------- | -------------------- | ---- |
| Usuario 1 | usuario1@example.com | 36   |
| Usuario 2 | NULL                 | 23   |
| Usuario 3 | usuario3@example.com | NULL |
| Usuario 4 | usuario4@example.com | 21   |

Resultado usando `ISNULL`:

| name      | email                | age |
| --------- | -------------------- | --- |
| Usuario 1 | usuario1@example.com | 36  |
| Usuario 2 | PENDIENTE            | 23  |
| Usuario 3 | usuario3@example.com | 0   |
| Usuario 4 | usuario4@example.com | 21  |

En este ejemplo, `ISNULL(email, 'PENDIENTE')` muestra `PENDIENTE` cuando `email` es `NULL`, e `ISNULL(age, 0)` muestra `0` cuando `age` es `NULL`. La tabla original no cambia; solo cambia el resultado de la consulta.

## Modificacion de datos y estructura

### UPDATE

```sql
UPDATE users
SET email = 'usuario2@example.com'
WHERE users_id = 2;
```

Actualizar varias columnas:

```sql
UPDATE users
SET age = 24,
    email = 'nuevo@example.com'
WHERE users_id = 7;
```

> Siempre usa `WHERE` en `UPDATE`, salvo que realmente quieras actualizar todas las filas.

### DELETE

```sql
DELETE FROM users WHERE users_id IN (4, 5, 6);
```

> Siempre usa `WHERE` en `DELETE`, salvo que realmente quieras borrar todas las filas.

### ALTER TABLE

Agregar columna:

```sql
ALTER TABLE users ADD country VARCHAR(50) NULL;
```

Eliminar columna:

```sql
ALTER TABLE users DROP COLUMN nationality;
```

Renombrar columna:

```sql
EXEC sp_rename 'users.name', 'nombre', 'COLUMN';
EXEC sp_rename 'users.nombre', 'name', 'COLUMN';
```

## Relaciones entre tablas

### Clave primaria y clave foranea

Una clave primaria identifica de forma unica un registro. Una clave foranea apunta a la clave primaria de otra tabla.

Sintaxis general:

```sql
CONSTRAINT nombre_constraint
FOREIGN KEY (columna_local)
REFERENCES tabla_referenciada(columna_referenciada)
```

### Relacion 1:1

Ejemplo: un usuario tiene un DPI y un DPI pertenece a un usuario.

```sql
CREATE TABLE DPI (
    DPI_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    DPI_number INT NOT NULL,
    users_id INT NOT NULL UNIQUE,
    CONSTRAINT fk_DPI_users
        FOREIGN KEY (users_id)
        REFERENCES users(users_id)
);
```

El `UNIQUE` en `users_id` ayuda a garantizar que un usuario no tenga varios DPI registrados en esta tabla.

Insertar datos:

```sql
INSERT INTO DPI (DPI_number, users_id)
VALUES
    (11111, 1),
    (22222, 2),
    (33333, 3);
```

### Relacion 1:N

Ejemplo: una empresa puede tener muchos usuarios, pero cada usuario pertenece a una empresa.

```sql
CREATE TABLE companies (
    company_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    company_name VARCHAR(50) NOT NULL
);

ALTER TABLE users ADD company_id INT NULL;

ALTER TABLE users ADD CONSTRAINT fk_users_companies
    FOREIGN KEY (company_id)
    REFERENCES companies(company_id);
```

Insertar y relacionar datos:

```sql
INSERT INTO companies (company_name)
VALUES ('Empresa A'), ('Empresa B'), ('Empresa C');

UPDATE users SET company_id = 1 WHERE users_id = 1;
UPDATE users SET company_id = 2 WHERE users_id = 2;
UPDATE users SET company_id = 3 WHERE users_id = 3;
```

### Relacion N:N

Ejemplo: un usuario puede conocer muchos lenguajes y un lenguaje puede estar asociado a muchos usuarios.

Para esto se usa una tabla intermedia.

```sql
CREATE TABLE languages (
    languages_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    languages_name VARCHAR(50) NOT NULL
);

CREATE TABLE user_languages (
    user_languages_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    users_id INT NOT NULL,
    languages_id INT NOT NULL,
    CONSTRAINT fk_user_languages_users
        FOREIGN KEY (users_id)
        REFERENCES users(users_id),
    CONSTRAINT fk_user_languages_languages
        FOREIGN KEY (languages_id)
        REFERENCES languages(languages_id),
    CONSTRAINT uq_user_languages UNIQUE (users_id, languages_id)
);
```

La restriccion `UNIQUE (users_id, languages_id)` evita registrar dos veces que el mismo usuario conoce el mismo lenguaje.

Insertar datos:

```sql
INSERT INTO languages (languages_name)
VALUES ('Swift'), ('Kotlin'), ('Java'), ('Python'), ('C#'), ('Go'), ('JavaScript');

INSERT INTO user_languages (users_id, languages_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 5),
    (2, 7),
    (3, 6),
    (3, 7);
```

## JOIN

Los `JOIN` combinan datos de varias tablas usando columnas relacionadas.

Para entenderlos visualmente, usaremos estas tablas de ejemplo.

Tabla `users`:

| users_id | name      | company_id |
| -------- | --------- | ---------- |
| 1        | Usuario 1 | 1          |
| 2        | Usuario 2 | 2          |
| 3        | Usuario 3 | 3          |
| 4        | Usuario 4 | NULL       |

Tabla `DPI`:

| DPI_id | DPI_number | users_id |
| ------ | ---------- | -------- |
| 1      | 11111      | 1        |
| 2      | 22222      | 2        |
| 3      | 33333      | 3        |

Tabla `companies`:

| company_id | company_name |
| ---------- | ------------ |
| 1          | Empresa A    |
| 2          | Empresa B    |
| 3          | Empresa C    |

Tabla `languages`:

| languages_id | languages_name |
| ------------ | -------------- |
| 1            | Swift          |
| 2            | Kotlin         |
| 5            | C#             |
| 6            | Go             |
| 7            | JavaScript     |

Tabla intermedia `user_languages`:

| user_languages_id | users_id | languages_id |
| ----------------- | -------- | ------------ |
| 1                 | 1        | 1            |
| 2                 | 1        | 2            |
| 3                 | 2        | 5            |
| 4                 | 2        | 7            |
| 5                 | 3        | 6            |
| 6                 | 3        | 7            |

Sintaxis general de un `JOIN`:

```sql
SELECT tabla1.columna, tabla2.columna
FROM tabla1
INNER JOIN tabla2 ON tabla1.columna_relacionada = tabla2.columna_relacionada;
```

Lectura de la sintaxis:

- `SELECT tabla1.columna, tabla2.columna`: columnas que quieres mostrar en el resultado.
- `FROM tabla1`: tabla principal desde donde empieza la consulta.
- `INNER JOIN tabla2`: segunda tabla que quieres unir.
- `ON tabla1.columna_relacionada = tabla2.columna_relacionada`: condicion que indica como se conectan ambas tablas.

Aplicado al ejemplo de `users` y `DPI`:

```sql
SELECT users.name, DPI.DPI_number
FROM users
INNER JOIN DPI ON users.users_id = DPI.users_id;
```

Lectura del ejemplo:

- Mostrar `users.name` y `DPI.DPI_number`.
- Empezar desde la tabla `users`.
- Unir con la tabla `DPI`.
- Relacionar ambas tablas cuando `users.users_id` sea igual a `DPI.users_id`.

### INNER JOIN

Devuelve solo las filas que tienen coincidencia en ambas tablas.

Relacion 1:1 entre `users` y `DPI`:

```sql
SELECT users.name, DPI.DPI_number
FROM users
INNER JOIN DPI ON users.users_id = DPI.users_id;
```

Resultado:

| name      | DPI_number |
| --------- | ---------- |
| Usuario 1 | 11111      |
| Usuario 2 | 22222      |
| Usuario 3 | 33333      |

`Usuario 4` no aparece porque no tiene coincidencia en la tabla `DPI`.

Relacion 1:N entre `users` y `companies`:

```sql
SELECT users.name, companies.company_name
FROM users
INNER JOIN companies ON users.company_id = companies.company_id;
```

Resultado:

| name      | company_name |
| --------- | ------------ |
| Usuario 1 | Empresa A    |
| Usuario 2 | Empresa B    |
| Usuario 3 | Empresa C    |

`Usuario 4` no aparece porque su `company_id` es `NULL`, por lo tanto no coincide con ninguna empresa.

Relacion N:N entre `users`, `user_languages` y `languages`:

```sql
SELECT users.name, languages.languages_name
FROM user_languages
INNER JOIN users ON user_languages.users_id = users.users_id
INNER JOIN languages ON user_languages.languages_id = languages.languages_id;
```

Resultado:

| name      | languages_name |
| --------- | -------------- |
| Usuario 1 | Swift          |
| Usuario 1 | Kotlin         |
| Usuario 2 | C#             |
| Usuario 2 | JavaScript     |
| Usuario 3 | Go             |
| Usuario 3 | JavaScript     |

Aqui un usuario puede aparecer varias veces porque puede estar relacionado con varios lenguajes. La tabla `user_languages` es la que conecta `users` con `languages`.

> Correccion importante: en una relacion N:N, la tabla intermedia debe unirse con `languages` usando `user_languages.languages_id = languages.languages_id`, no usando `user_languages.user_languages_id`.

### LEFT JOIN

Devuelve todas las filas de la tabla izquierda y las coincidencias de la derecha. Si no hay coincidencia, las columnas de la derecha aparecen como `NULL`.

La sintaxis es muy parecida a `INNER JOIN`; la diferencia esta en que `LEFT JOIN` conserva todas las filas de la tabla que esta en el `FROM`.

Sintaxis general:

```sql
SELECT tabla1.columna, tabla2.columna
FROM tabla1
LEFT JOIN tabla2 ON tabla1.columna_relacionada = tabla2.columna_relacionada;
```

Lectura de la sintaxis:

- `SELECT tabla1.columna, tabla2.columna`: columnas que quieres mostrar.
- `FROM tabla1`: tabla izquierda; todas sus filas se mantienen en el resultado.
- `LEFT JOIN tabla2`: tabla derecha; solo aporta datos cuando hay coincidencia.
- `ON tabla1.columna_relacionada = tabla2.columna_relacionada`: condicion que conecta ambas tablas.

Aplicado al ejemplo de `users` y `DPI`:

```sql
SELECT users.name, DPI.DPI_number
FROM users
LEFT JOIN DPI ON users.users_id = DPI.users_id;
```

Lectura del ejemplo:

- Mostrar `users.name` y `DPI.DPI_number`.
- Empezar desde `users`, que es la tabla izquierda.
- Unir con `DPI`, que es la tabla derecha.
- Mantener todos los usuarios aunque no tengan coincidencia en `DPI`.
- Si un usuario no tiene DPI, `DPI.DPI_number` aparece como `NULL`.

Resultado:

| name      | DPI_number |
| --------- | ---------- |
| Usuario 1 | 11111      |
| Usuario 2 | 22222      |
| Usuario 3 | 33333      |
| Usuario 4 | NULL       |

Sirve, por ejemplo, para listar todos los usuarios aunque algunos no tengan DPI registrado.

## Indices

Un indice ayuda a mejorar el rendimiento de consultas, especialmente en columnas usadas frecuentemente en filtros, busquedas o joins.

Crear indice:

```sql
CREATE INDEX idx_users_name ON users(name);
```

Consulta que puede aprovechar el indice:

```sql
SELECT * FROM users WHERE name = 'Usuario 1';
```

Eliminar indice:

```sql
DROP INDEX idx_users_name ON users;
```

Notas:

- Los indices aceleran lecturas, pero pueden hacer mas lentas las escrituras porque tambien deben actualizarse.
- No conviene crear indices sin necesidad real.
- Las claves primarias normalmente crean un indice automaticamente.

## Triggers

Un trigger es codigo que se ejecuta automaticamente cuando ocurre un evento en una tabla, como `INSERT`, `UPDATE` o `DELETE`.

Ejemplo: guardar historial del email anterior cuando se actualiza el email de un usuario.

```sql
CREATE TABLE email_history (
    id_email INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    users_id INT NOT NULL,
    old_email VARCHAR(100) NULL,
    changed_at DATETIME2 NOT NULL DEFAULT SYSDATETIME()
);
```

Crear trigger:

```sql
CREATE TRIGGER tg_users_email_history
ON users
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO email_history (users_id, old_email)
    SELECT deleted.users_id, deleted.email
    FROM deleted
    INNER JOIN inserted ON deleted.users_id = inserted.users_id
    WHERE ISNULL(deleted.email, '') <> ISNULL(inserted.email, '');
END;
```

Probar el trigger:

```sql
UPDATE users
SET email = 'nuevoemail@example.com'
WHERE users_id = 1;

SELECT * FROM email_history;
```

Eliminar trigger:

```sql
DROP TRIGGER tg_users_email_history;
```

Tablas especiales dentro de triggers:

- `inserted`: contiene los valores nuevos.
- `deleted`: contiene los valores anteriores en `UPDATE` y los eliminados en `DELETE`.

## Vistas

Una vista es una consulta guardada que se puede consultar como si fuera una tabla. Sirve para simplificar consultas frecuentes o exponer solo ciertas columnas.

```sql
CREATE VIEW v_adult_users AS
SELECT name, age
FROM users
WHERE age >= 18;
```

Consultar vista:

```sql
SELECT * FROM v_adult_users;
```

Modificar vista:

```sql
ALTER VIEW v_adult_users AS
SELECT users_id, name, age
FROM users
WHERE age >= 18;
```

Eliminar vista:

```sql
DROP VIEW v_adult_users;
```

## Procedimientos almacenados

Un procedimiento almacenado, o `stored procedure`, es un bloque de instrucciones SQL que se guarda dentro de la base de datos y se puede ejecutar cuando sea necesario.

Existe para evitar repetir consultas o procesos completos una y otra vez. En lugar de escribir varias instrucciones cada vez, las guardas con un nombre y luego las ejecutas con `EXEC`.

Usos comunes:

- Reutilizar consultas frecuentes.
- Encapsular reglas de negocio dentro de la base de datos.
- Ejecutar operaciones con parametros.
- Centralizar procesos como crear usuarios, actualizar datos o generar reportes.
- Reducir errores por copiar y pegar consultas manualmente.

### Sintaxis basica

```sql
CREATE PROCEDURE nombre_procedimiento
AS
BEGIN
    -- Instrucciones SQL
END;
```

Ejemplo simple: listar usuarios adultos.

```sql
CREATE PROCEDURE sp_get_adult_users
AS
BEGIN
    SELECT users_id, name, age, email
    FROM users
    WHERE age >= 18;
END;
```

Ejecutar el procedimiento:

```sql
EXEC sp_get_adult_users;
```

Resultado esperado:

| users_id | name      | age | email                |
| -------- | --------- | --- | -------------------- |
| 1        | Usuario 1 | 36  | usuario1@example.com |
| 2        | Usuario 2 | 23  | usuario2@example.com |
| 4        | Usuario 4 | 21  | usuario4@example.com |

### Procedimiento con parametros

Los parametros permiten enviar valores al procedimiento para hacerlo mas flexible.

Sintaxis general:

```sql
CREATE PROCEDURE nombre_procedimiento
    @parametro TIPO_DATO
AS
BEGIN
    -- Instrucciones que usan @parametro
END;
```

Ejemplo: buscar usuarios por pais.

```sql
CREATE PROCEDURE sp_get_users_by_country
    @country VARCHAR(50)
AS
BEGIN
    SELECT users_id, name, age, email, country
    FROM users
    WHERE country = @country;
END;
```

Ejecutar enviando un parametro:

```sql
EXEC sp_get_users_by_country @country = 'Guatemala';
```

Resultado esperado:

| users_id | name      | age  | email                | country   |
| -------- | --------- | ---- | -------------------- | --------- |
| 2        | Usuario 2 | 23   | usuario2@example.com | Guatemala |
| 3        | Usuario 3 | NULL | usuario3@example.com | Guatemala |

### Procedimiento para insertar datos

Tambien se pueden usar procedimientos para insertar datos de forma controlada.

```sql
CREATE PROCEDURE sp_create_user
    @name VARCHAR(50),
    @age INT,
    @email VARCHAR(100),
    @country VARCHAR(50)
AS
BEGIN
    INSERT INTO users (name, age, email, country)
    VALUES (@name, @age, @email, @country);
END;
```

Ejecutar el procedimiento:

```sql
EXEC sp_create_user
    @name = 'Usuario 5',
    @age = 30,
    @email = 'usuario5@example.com',
    @country = 'El Salvador';
```

Esto inserta una nueva fila en `users` usando los valores enviados como parametros.

### Modificar un procedimiento

Para cambiar un procedimiento existente se usa `ALTER PROCEDURE`.

```sql
ALTER PROCEDURE sp_get_adult_users
AS
BEGIN
    SELECT users_id, name, age, email, country
    FROM users
    WHERE age >= 18
    ORDER BY age DESC;
END;
```

### Eliminar un procedimiento

```sql
DROP PROCEDURE sp_get_adult_users;
```

### Notas importantes

- Los parametros en SQL Server empiezan con `@`.
- `EXEC` se usa para ejecutar procedimientos almacenados.
- Los procedimientos pueden contener `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN` y otras instrucciones SQL.
- Conviene que el nombre describa claramente lo que hace, por ejemplo `sp_get_users_by_country`.
- Evita guardar logica innecesariamente compleja en procedimientos si puede mantenerse mejor en la aplicacion.

## Transacciones

Una transaccion permite agrupar varias operaciones SQL para que se ejecuten como una sola unidad de trabajo.

Existe para proteger la consistencia de los datos. Si todas las operaciones salen bien, confirmas los cambios con `COMMIT`. Si algo falla, puedes deshacer todo con `ROLLBACK`.

Usos comunes:

- Evitar cambios incompletos cuando una operacion tiene varios pasos.
- Proteger operaciones importantes como pagos, inventario o transferencias.
- Asegurar que varias tablas relacionadas se actualicen juntas.
- Probar cambios manuales y revertirlos si el resultado no es correcto.

### Sintaxis basica

```sql
BEGIN TRANSACTION;

-- Instrucciones SQL

COMMIT;
```

Ejemplo: actualizar el pais de un usuario y confirmar el cambio.

```sql
BEGIN TRANSACTION;

UPDATE users
SET country = 'Guatemala'
WHERE users_id = 1;

COMMIT;
```

Si ejecutas `COMMIT`, el cambio queda guardado.

### Deshacer una transaccion

`ROLLBACK` revierte los cambios hechos dentro de la transaccion.

```sql
BEGIN TRANSACTION;

UPDATE users
SET country = 'Pendiente'
WHERE users_id = 1;

ROLLBACK;
```

En este caso, el `UPDATE` no queda guardado porque la transaccion se revierte.

### Ejemplo con varias operaciones

Supongamos que quieres crear un usuario y asignarle un lenguaje. Ambas operaciones deberian funcionar juntas.

```sql
BEGIN TRANSACTION;

INSERT INTO users (name, age, email, country)
VALUES ('Usuario 6', 28, 'usuario6@example.com', 'Guatemala');

DECLARE @new_user_id INT = SCOPE_IDENTITY();

INSERT INTO user_languages (users_id, languages_id)
VALUES (@new_user_id, 7);

COMMIT;
```

Si el usuario se inserta, pero falla la relacion con `user_languages`, no conviene dejar el usuario creado a medias. Para eso se usa el patron con `TRY/CATCH`.

### Transaccion con TRY/CATCH

Este patron permite confirmar si todo sale bien o revertir si ocurre un error.

```sql
BEGIN TRY
    BEGIN TRANSACTION;

    INSERT INTO users (name, age, email, country)
    VALUES ('Usuario 7', 32, 'usuario7@example.com', 'Guatemala');

    DECLARE @new_user_id INT = SCOPE_IDENTITY();

    INSERT INTO user_languages (users_id, languages_id)
    VALUES (@new_user_id, 7);

    COMMIT;
END TRY
BEGIN CATCH
    ROLLBACK;

    SELECT ERROR_MESSAGE() AS error_message;
END CATCH;
```

Que hace este ejemplo:

- `BEGIN TRY`: intenta ejecutar las instrucciones.
- `BEGIN TRANSACTION`: inicia la transaccion.
- `COMMIT`: confirma los cambios si no hubo errores.
- `BEGIN CATCH`: captura el error si algo falla.
- `ROLLBACK`: revierte todos los cambios de la transaccion.
- `ERROR_MESSAGE()`: muestra el mensaje del error.

### Transacciones dentro de procedimientos almacenados

Las transacciones suelen combinarse con procedimientos almacenados cuando quieres guardar una operacion completa y segura.

```sql
CREATE PROCEDURE sp_create_user_with_language
    @name VARCHAR(50),
    @age INT,
    @email VARCHAR(100),
    @country VARCHAR(50),
    @languages_id INT
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;

        INSERT INTO users (name, age, email, country)
        VALUES (@name, @age, @email, @country);

        DECLARE @new_user_id INT = SCOPE_IDENTITY();

        INSERT INTO user_languages (users_id, languages_id)
        VALUES (@new_user_id, @languages_id);

        COMMIT;
    END TRY
    BEGIN CATCH
        ROLLBACK;
        SELECT ERROR_MESSAGE() AS error_message;
    END CATCH;
END;
```

Ejecutar el procedimiento:

```sql
EXEC sp_create_user_with_language
    @name = 'Usuario 8',
    @age = 26,
    @email = 'usuario8@example.com',
    @country = 'Guatemala',
    @languages_id = 7;
```

### Notas importantes

- Una transaccion abierta bloquea recursos hasta que se hace `COMMIT` o `ROLLBACK`.
- No dejes transacciones abiertas por mucho tiempo.
- Usa `TRY/CATCH` cuando una transaccion tenga varias operaciones importantes.
- Si haces pruebas manuales, puedes usar `BEGIN TRANSACTION`, revisar con `SELECT` y luego decidir entre `COMMIT` o `ROLLBACK`.
- `ROLLBACK` solo revierte cambios dentro de la transaccion actual.

## Buenas practicas

- Usa nombres consistentes para tablas, columnas y constraints.
- Evita reejecutar scripts completos con `INSERT` si ya hay datos cargados.
- Usa `WHERE` en `UPDATE` y `DELETE` para evitar cambios masivos accidentales.
- Usa `NULL` solo cuando el dato realmente pueda faltar.
- Define claves primarias en todas las tablas.
- Define claves foraneas para proteger la integridad de las relaciones.
- Usa `UNIQUE` cuando no deben existir duplicados.
- Crea indices solo cuando ayuden a consultas reales.
- En relaciones N:N, usa siempre una tabla intermedia.
- Al escribir `JOIN`, verifica que estes uniendo columnas equivalentes: clave foranea contra clave primaria.
