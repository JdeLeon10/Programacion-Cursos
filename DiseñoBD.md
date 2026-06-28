# Diseño de bases de datos

## Bases de datos relacionales - SQL

Se guardan en tablas con filas y columnas. Son ideales cuando la información tiene estructura clara, relaciones fuertes y se necesita consistencia.

- SQL Server
- MySQL
- PostgreSQL
- Oracle

Ejemplos de uso:

- Sistemas bancarios
- Sistemas de inventario
- E-commerce
- Aplicaciones administrativas
- Sistemas con reportes complejos

## Bases de datos no relacionales - NOSQL

La información no se guarda necesariamente en tablas. Dependiendo del motor, puede guardarse como documentos, pares clave-valor, grafos o columnas.

- MongoDB
- Redis
- DynamoDB

Ejemplos de uso:

- Sistemas con datos muy flexibles
- Caches
- Logs
- Analítica
- Chats
- Catálogos con estructuras variables

---

## Objetivo del diseño de base de datos

Diseñar una base de datos significa definir cómo se va a guardar, relacionar, proteger y consultar la información de un sistema.

Un buen diseño debe buscar:

- Evitar duplicidad innecesaria de datos
- Mantener consistencia
- Facilitar consultas eficientes
- Representar correctamente las reglas del negocio
- Permitir crecimiento futuro
- Proteger la integridad de la información
- Facilitar mantenimiento y evolución del sistema

---

## Conceptos clave

### Tabla

Representa una entidad del sistema.

Ejemplos:

- `users`
- `products`
- `orders`
- `payments`

### Columna

Representa un atributo de una entidad.

Ejemplo de tabla `users`:

```sql
id
name
email
password_hash
created_at
```

### Fila o registro

Representa una instancia concreta de una entidad.

Ejemplo:

```text
1 | Ana Pérez | ana@email.com
```

### Entidad

Objeto importante del negocio que necesita ser almacenado.

Ejemplos:

- Usuario
- Producto
- Orden
- Factura
- Curso
- Comentario

### Atributo

Característica de una entidad.

Ejemplo:

```text
Usuario: nombre, email, contraseña, fecha de creación
Producto: nombre, precio, stock, categoría
```

---

## Claves o keys

### Primary key

La `primary key` identifica de forma única cada registro de una tabla.

Características:

- No debe repetirse
- No debe ser `NULL`
- Debe ser estable
- Normalmente se llama `id`

Ejemplo:

```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL
);
```

### Foreign key

La `foreign key` conecta una tabla con otra. Sirve para representar relaciones.

Ejemplo:

```sql
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Aquí, `orders.user_id` apunta a `users.id`.

### Unique key

Garantiza que un valor no se repita.

Ejemplo:

```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

El email no puede estar repetido.

---

## Tipos de relaciones

### Uno a uno

Un registro de una tabla se relaciona con un solo registro de otra tabla.

Ejemplo:

```text
users 1 ---- 1 user_profiles
```

Un usuario tiene un perfil.

### Uno a muchos

Un registro de una tabla se relaciona con muchos registros de otra.

Ejemplo:

```text
users 1 ---- N orders
```

Un usuario puede tener muchas órdenes.

### Muchos a muchos

Muchos registros de una tabla se relacionan con muchos registros de otra.

Ejemplo:

```text
students N ---- N courses
```

Se resuelve con una tabla intermedia:

```text
students 1 ---- N course_students N ---- 1 courses
```

Ejemplo:

```sql
CREATE TABLE course_students (
  course_id BIGINT NOT NULL,
  student_id BIGINT NOT NULL,
  enrolled_at TIMESTAMP NOT NULL,
  PRIMARY KEY (course_id, student_id),
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```

---

## Normalización

La normalización es el proceso de organizar los datos para reducir duplicidad y evitar inconsistencias.

### Primera forma normal

Cada columna debe tener valores atómicos, no listas ni valores repetidos.

Incorrecto:

```text
user_id | phones
1       | 809-111-1111, 809-222-2222
```

Correcto:

```text
users
id | name

user_phones
id | user_id | phone
```

### Segunda forma normal

Cada columna debe depender completamente de la clave primaria.

Esto es especialmente importante cuando hay claves compuestas.

### Tercera forma normal

Las columnas no deben depender de otras columnas que no sean la clave primaria.

Ejemplo incorrecto:

```text
orders
id | user_id | user_email | total
```

Si el email pertenece al usuario, debe estar en `users`, no repetido en `orders`.

---

## Desnormalización

La desnormalización consiste en duplicar datos de forma controlada para mejorar rendimiento o simplificar consultas.

Ejemplo:

```text
orders
id | user_id | user_email_snapshot | total
```

Puede tener sentido guardar el email usado al momento de la compra, aunque luego el usuario cambie su email.

Debe hacerse solo cuando hay una razón clara.

---

## Integridad de datos

### NOT NULL

Indica que una columna siempre debe tener valor.

```sql
name VARCHAR(100) NOT NULL
```

### UNIQUE

Evita valores duplicados.

```sql
email VARCHAR(255) UNIQUE
```

### CHECK

Valida reglas simples.

```sql
price DECIMAL(10, 2) CHECK (price >= 0)
```

### DEFAULT

Asigna un valor por defecto.

```sql
status VARCHAR(20) DEFAULT 'pending'
```

### Foreign key constraints

Evitan que existan referencias inválidas.

Ejemplo: no debería existir una orden asociada a un usuario inexistente.

---

## Acciones referenciales

Cuando una tabla depende de otra, hay que decidir qué pasa al eliminar o actualizar registros.

### ON DELETE CASCADE

Si se elimina el registro padre, se eliminan automáticamente los registros hijos.

Ejemplo: eliminar un usuario elimina sus sesiones.

Debe usarse con cuidado.

### ON DELETE RESTRICT

Impide eliminar el registro padre si tiene registros relacionados.

Ejemplo: no permitir eliminar un cliente con facturas.

### ON DELETE SET NULL

Si se elimina el registro padre, la foreign key queda en `NULL`.

Ejemplo: un producto queda sin categoría.

---

## Índices

Un índice mejora la velocidad de búsqueda, filtrado y ordenamiento.

Ejemplo:

```sql
CREATE INDEX idx_users_email ON users(email);
```

Conviene crear índices en:

- Columnas usadas en `WHERE`
- Columnas usadas en `JOIN`
- Columnas usadas en `ORDER BY`
- Foreign keys
- Campos únicos como `email`

No conviene indexar todo porque:

- Ocupa espacio
- Hace más lentos los `INSERT`, `UPDATE` y `DELETE`
- Aumenta mantenimiento interno de la base de datos

---

## Transacciones

Una transacción agrupa varias operaciones que deben completarse juntas.

Ejemplo: crear una orden y descontar inventario.

```sql
BEGIN;

INSERT INTO orders (id, user_id, total) VALUES (1, 10, 500.00);
UPDATE products SET stock = stock - 1 WHERE id = 20;

COMMIT;
```

Si algo falla:

```sql
ROLLBACK;
```

---

## Propiedades ACID

### Atomicity

Todo ocurre completo o no ocurre nada.

### Consistency

La base de datos pasa de un estado válido a otro estado válido.

### Isolation

Las transacciones simultáneas no deben interferir incorrectamente entre sí.

### Durability

Una vez confirmado el cambio, debe persistir aunque haya fallos.

---

## Tipos de datos

Elegir bien los tipos de datos mejora integridad y rendimiento.

Ejemplos comunes:

- `VARCHAR`: texto de longitud variable
- `TEXT`: textos largos
- `INT`: números enteros
- `BIGINT`: enteros grandes
- `DECIMAL`: dinero o valores exactos
- `FLOAT`: valores aproximados
- `BOOLEAN`: verdadero o falso
- `DATE`: fecha
- `TIMESTAMP`: fecha y hora
- `UUID`: identificador único global
- `JSON` / `JSONB`: datos semiestructurados

Para dinero, normalmente se prefiere `DECIMAL`, no `FLOAT`.

---

## Fechas importantes

Muchas tablas deberían tener columnas de auditoría:

```sql
created_at TIMESTAMP NOT NULL
updated_at TIMESTAMP NOT NULL
deleted_at TIMESTAMP NULL
```

### created_at

Fecha de creación del registro.

### updated_at

Última fecha de modificación.

### deleted_at

Se usa para borrado lógico o `soft delete`.

---

## Soft delete vs hard delete

### Hard delete

El registro se elimina físicamente de la base de datos.

```sql
DELETE FROM users WHERE id = 1;
```

### Soft delete

El registro no se elimina, solo se marca como eliminado.

```text
deleted_at = '2026-01-01 10:00:00'
```

Ventajas:

- Permite recuperar datos
- Conserva historial
- Evita perder referencias importantes

Desventajas:

- Las consultas deben filtrar registros eliminados
- Puede aumentar el tamaño de la base de datos

---

## Nombres y convenciones

Recomendaciones comunes:

- Usar nombres claros
- Usar inglés si el proyecto lo define así
- Mantener consistencia
- Usar `snake_case` en SQL
- Nombrar tablas en plural o singular, pero no mezclar estilos
- Usar `created_at`, `updated_at`, `deleted_at`
- Usar `user_id`, `product_id`, `order_id` para foreign keys

Ejemplo:

```text
users
orders
order_items
product_categories
```

Evitar nombres ambiguos:

```text
data
info
details
table1
```

---

## Diseño de tablas

Antes de crear una tabla, conviene preguntarse:

- ¿Qué entidad representa?
- ¿Cuál es su clave primaria?
- ¿Qué columnas son obligatorias?
- ¿Qué columnas deben ser únicas?
- ¿Con qué otras tablas se relaciona?
- ¿Qué pasa si se elimina un registro relacionado?
- ¿Qué consultas se harán con más frecuencia?
- ¿Qué datos pueden cambiar con el tiempo?
- ¿Qué datos necesitan historial?

---

## Ejemplo de diseño para e-commerce

Tablas principales:

- `users`
- `products`
- `categories`
- `orders`
- `order_items`
- `payments`
- `addresses`

Relaciones:

```text
users 1 ---- N orders
orders 1 ---- N order_items
products 1 ---- N order_items
categories 1 ---- N products
orders 1 ---- N payments
users 1 ---- N addresses
```

Ejemplo de tabla `order_items`:

```sql
CREATE TABLE order_items (
  id BIGINT PRIMARY KEY,
  order_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(10, 2) NOT NULL CHECK (unit_price >= 0),
  created_at TIMESTAMP NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

Se guarda `unit_price` en `order_items` porque el precio histórico de la compra debe conservarse aunque luego cambie el precio del producto.

---

## SQL vs NoSQL

### Usar SQL cuando

- Hay relaciones importantes entre entidades
- Se necesita consistencia fuerte
- Se requieren transacciones
- Se harán consultas complejas
- El esquema de datos está relativamente claro
- Se necesita integridad referencial

### Usar NoSQL cuando

- El esquema cambia mucho
- Se necesita alta escalabilidad horizontal
- Los datos son documentos independientes
- Se trabaja con eventos, logs o cache
- Se necesita baja latencia en lecturas específicas

NoSQL no significa que no haya diseño. También necesita estructura, índices, reglas y decisiones claras.

---

## Modelado en NoSQL

En NoSQL se suele diseñar pensando primero en las consultas.

Preguntas importantes:

- ¿Cómo se va a leer la información?
- ¿Qué datos deben estar juntos?
- ¿Qué información puede duplicarse?
- ¿Qué nivel de consistencia se necesita?
- ¿Qué campos necesitan índices?

Ejemplo de documento en MongoDB:

```json
{
  "_id": "order_1",
  "userId": "user_1",
  "status": "paid",
  "items": [
    {
      "productId": "product_1",
      "name": "Keyboard",
      "quantity": 1,
      "unitPrice": 50.0
    }
  ],
  "createdAt": "2026-01-01T10:00:00Z"
}
```

Este diseño puede ser bueno si normalmente se consulta la orden completa.

---

## Migraciones

Las migraciones son cambios versionados en la estructura de la base de datos.

Ejemplos:

- Crear tablas
- Agregar columnas
- Crear índices
- Modificar constraints
- Eliminar columnas

Buenas prácticas:

- Nunca cambiar la base de datos manualmente en producción sin control
- Versionar las migraciones en Git
- Probar migraciones antes de ejecutarlas en producción
- Hacer cambios compatibles con la aplicación desplegada
- Tener plan de rollback cuando sea posible

---

## Seguridad

Buenas prácticas importantes:

- No guardar contraseñas en texto plano
- Guardar contraseñas como hash seguro
- Usar permisos mínimos para usuarios de base de datos
- No exponer credenciales en el código
- Usar variables de entorno o gestores de secretos
- Validar entradas para evitar SQL injection
- Usar consultas parametrizadas
- Cifrar datos sensibles cuando sea necesario
- Hacer backups periódicos

Ejemplo de mala práctica:

```sql
SELECT * FROM users WHERE email = '" + email + "';
```

Mejor usar parámetros desde el lenguaje o framework.

---

## Rendimiento

Cosas que un ingeniero debe revisar:

- Consultas lentas
- Índices faltantes
- Índices innecesarios
- Consultas con demasiados `JOIN`
- Consultas que traen más columnas de las necesarias
- Paginación eficiente
- Tamaño de tablas
- Bloqueos entre transacciones
- Uso de cache
- Planes de ejecución

Evitar:

```sql
SELECT * FROM users;
```

Preferir seleccionar solo las columnas necesarias:

```sql
SELECT id, name, email FROM users;
```

---

## Paginación

Para grandes volúmenes de datos, no se debe cargar todo de una vez.

Ejemplo con `LIMIT` y `OFFSET`:

```sql
SELECT id, name
FROM users
ORDER BY id
LIMIT 20 OFFSET 40;
```

Para tablas muy grandes, puede ser mejor paginar por cursor:

```sql
SELECT id, name
FROM users
WHERE id > 100
ORDER BY id
LIMIT 20;
```

---

## Concurrencia

La concurrencia ocurre cuando varios procesos intentan leer o modificar datos al mismo tiempo.

Problemas comunes:

- Lecturas sucias
- Actualizaciones perdidas
- Bloqueos
- Deadlocks
- Condiciones de carrera

Ejemplo típico:

```text
Dos usuarios intentan comprar el último producto en inventario al mismo tiempo.
```

Para manejarlo se usan:

- Transacciones
- Locks
- Constraints
- Niveles de aislamiento
- Actualizaciones atómicas

---

## Auditoría e historial

Algunos sistemas necesitan saber quién cambió qué y cuándo.

Columnas comunes:

```text
created_by
updated_by
deleted_by
created_at
updated_at
deleted_at
```

Para historial completo se pueden usar tablas de auditoría:

```text
user_changes
product_price_history
order_status_history
```

---

## Backups y recuperación

Toda base de datos importante necesita estrategia de backup.

Preguntas clave:

- ¿Cada cuánto se hacen backups?
- ¿Dónde se guardan?
- ¿Están cifrados?
- ¿Se prueban las restauraciones?
- ¿Cuánta información se puede perder como máximo?
- ¿Cuánto tiempo puede estar caído el sistema?

Conceptos importantes:

- `RPO`: cantidad máxima de datos que se acepta perder
- `RTO`: tiempo máximo aceptable para recuperar el servicio

---

## Errores comunes

- No definir primary keys
- No usar foreign keys cuando sí aplican
- Guardar listas separadas por comas en una columna
- Usar `FLOAT` para dinero
- No crear índices en columnas consultadas frecuentemente
- Crear demasiados índices
- Guardar contraseñas en texto plano
- No tener backups
- No versionar cambios de estructura
- Mezclar responsabilidades en una misma tabla
- No pensar en el crecimiento de datos
- Borrar datos importantes sin historial
- Diseñar tablas sin conocer las consultas reales

---

## Checklist para diseñar una base de datos

- Identificar entidades principales
- Definir atributos de cada entidad
- Elegir primary keys
- Definir relaciones
- Definir foreign keys
- Identificar campos obligatorios
- Identificar campos únicos
- Elegir tipos de datos correctos
- Normalizar donde tenga sentido
- Desnormalizar solo con justificación
- Definir índices necesarios
- Definir estrategia de borrado
- Definir auditoría si aplica
- Definir migraciones
- Definir backups
- Revisar seguridad
- Revisar consultas principales
- Probar con datos realistas

---

## Idea clave

Una base de datos no se diseña solo pensando en cómo guardar datos, sino en cómo mantenerlos correctos, seguros, consultables y preparados para evolucionar con el proyecto.
