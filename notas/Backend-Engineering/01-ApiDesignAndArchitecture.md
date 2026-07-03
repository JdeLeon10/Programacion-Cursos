# API Design and Architecture

## API

**API** means **Application Programming Interface**.

An API allows us to build applications that communicate with each other. For example, a frontend application can call a backend API to read or modify data.

## Types of API

### REST or RESTful

**REST** means **Representational State Transfer**.

REST APIs expose resources through URLs and use HTTP methods to interact with those resources.

Main characteristics:

- Uses HTTP methods such as `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.
- Commonly uses JSON.
- Exposes resources through URLs.

**JSON** means **JavaScript Object Notation**.

Example:

```http
GET /users/10
```

### SOAP

**SOAP** means **Simple Object Access Protocol**.

SOAP was commonly used before REST became popular, so it can still be found in legacy or enterprise systems.

Main characteristics:

- Uses XML.
- Defines operations instead of resources.
- Usually consumes services through `POST` requests.

Example:

```http
POST /UserService
```

```xml
<GetUser>
  <id>10</id>
</GetUser>
```

### GraphQL

GraphQL allows clients to request exactly the data they need.

Instead of exposing many endpoints, the backend usually exposes one GraphQL endpoint that the frontend can connect to. The frontend sends queries to describe the shape of the data it wants.

Example:

```graphql
query {
  user(id: 10) {
    id
    name
    email
  }
}
```

### gRPC

**gRPC** means **gRPC Remote Procedure Call**.

gRPC allows applications to execute procedures or methods on a backend service. It commonly uses **Protocol Buffers**, also called **protobuf**, to define the structure of the services and messages.

With gRPC, a `.proto` file is created to define the methods that can be called and the data structures that are exchanged. Protocol Buffers are compact and efficient, which helps reduce payload size and allows fast communication between applications.

gRPC is commonly used in microservices architectures, especially for service-to-service communication.

### WebSocket

WebSocket creates a bidirectional communication channel between the client and the server.

This means the backend can send data to the frontend without waiting for the frontend to request it first. WebSockets are common in real-time applications.

Common examples:

- Chat applications.
- Notifications.
- Live dashboards.
- Multiplayer games.

## REST API

REST APIs are based on resources. A **resource** is an entity or object that we want to interact with, such as users, posts, comments, products, or orders.

Common HTTP methods:

- `GET`: Read data.
- `POST`: Create new data.
- `PUT`: Replace existing data.
- `PATCH`: Partially update existing data.
- `DELETE`: Remove data.

Example resource:

```http
/users
```

Example request:

```http
GET /users/10
```

### Request Body and Headers

For `POST`, `PUT`, and `PATCH` requests, we usually send a payload in the request body.

The body contains the information we want to create or update. Headers can also be used to send metadata, such as the content type or authentication information.

Example:

```http
POST /users
Content-Type: application/json
```

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### PUT vs PATCH

`PUT` replaces the full resource.

Example:

```http
PUT /users/10
```

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "status": "active"
}
```

`PATCH` partially updates a resource, meaning we can update only specific attributes instead of replacing all the content.

Example:

```http
PATCH /users/10
```

```json
{
  "status": "inactive"
}
```

### Idempotency

An operation is **idempotent** when making the same request multiple times produces the same final result.

For example, updating the same user with the same `PUT /users/10` request should keep updating user `10`. It should not create a new user every time the request is repeated.

This is important because clients or networks may retry requests.

Common examples:

- `GET` is idempotent because reading data does not change the resource.
- `PUT` should be idempotent because replacing the same resource multiple times should produce the same result.
- `DELETE` is usually idempotent because deleting the same resource multiple times should leave the resource deleted.
- `POST` is usually not idempotent because repeating it may create multiple resources.

## Nested Data vs Filtering

### Nested Data

Nested routes are useful when we want to access data that belongs to another resource.

Example:

```http
GET /posts/10/comments
```

This means: get the comments that belong to post `10`.

Nested routes are usually better for simple relationships and clear ownership.

### Filtering

Filtering uses query parameters to search, filter, sort, or paginate data.

Example:

```http
GET /comments?post_id=10
```

This means: get comments where `post_id` is `10`.

Filtering is often better for complex access patterns, especially when multiple filters can be combined.

Example:

```http
GET /comments?post_id=10&status=approved&sort=created_at
```

## Path, Query Parameters, and Body

### Do Not Use for Sensitive Information

Paths and query parameters should not be used for sensitive information because they can appear in browser history, logs, analytics tools, proxies, or server monitoring systems.

Use paths for unique resource identifiers.

Example:

```http
GET /users/123
```

Use query parameters for optional filtering, sorting, searching, or pagination.

Example:

```http
GET /users?status=active
```

### Use the Body for Sensitive or Complex Data

The request body is better for sending sensitive or complex information, especially in `POST`, `PUT`, or `PATCH` requests.

Example:

```http
POST /login
Content-Type: application/json
```

```json
{
  "email": "jane@example.com",
  "password": "secret-password"
}
```

Sensitive information should also be protected with HTTPS.

## Status Codes

HTTP status codes tell the client what happened with the request.

Common categories:

- `200`: Success.
- `300`: Redirect.
- `400`: Client errors.
- `500`: Server errors.

Common examples:

- `200 OK`: The request succeeded.
- `201 Created`: A resource was created successfully.
- `204 No Content`: The request succeeded, but there is no response body.
- `400 Bad Request`: The request is invalid.
- `401 Unauthorized`: Authentication is required or failed.
- `403 Forbidden`: The client is authenticated but does not have permission.
- `404 Not Found`: The resource does not exist.
- `409 Conflict`: The request conflicts with the current state of the resource.
- `500 Internal Server Error`: An unexpected server error occurred.
