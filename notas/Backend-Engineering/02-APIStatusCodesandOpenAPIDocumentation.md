# API Status Codes and OpenAPI Documentation

## Ways to Return Information from a Request

An API can return data in different shapes depending on what the client needs.

### Return an Array

Arrays are useful when returning a collection of items.

Example:

```json
[
  {
    "id": 1,
    "name": "Jane Doe"
  },
  {
    "id": 2,
    "name": "John Smith"
  }
]
```

Example endpoint:

```http
GET /users
```

### Return an Object

Objects are useful when returning a single item or a response with extra metadata.

Example:

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

Example endpoint:

```http
GET /users/1
```

### Return Data as a Nested Object

Nested objects are useful when the response includes related data.

Example:

```json
{
  "id": 1,
  "title": "API Design Basics",
  "author": {
    "id": 10,
    "name": "Jane Doe"
  },
  "comments": [
    {
      "id": 100,
      "message": "Great post"
    }
  ]
}
```

Nested data can make responses easier to consume, but too much nesting can make responses large and harder to maintain.

## Status Codes

HTTP status codes tell the client what happened with the request.

Additional reference:

```text
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
```

### Status Code Categories

- `100-199`: Informational responses.
- `200-299`: Successful responses.
- `300-399`: Redirection messages.
- `400-499`: Client error responses.
- `500-599`: Server error responses.

### Common Status Codes

#### 200 OK

The request succeeded.

Example:

```http
GET /users/1
```

#### 201 Created

The request succeeded and a new resource was created.

Example:

```http
POST /users
```

#### 204 No Content

The request succeeded, but the response does not include a body.

This is common for delete operations.

Example:

```http
DELETE /users/1
```

#### 301 Moved Permanently

The resource has been permanently moved to a new URL.

#### 302 Found

The resource has been temporarily moved to another URL.

#### 400 Bad Request

There is an issue with the data sent from the client to the server.

Example causes:

- Missing required fields.
- Invalid JSON.
- Invalid data type.

#### 401 Unauthorized

The client is not authenticated.

This usually means the request is missing a valid token, session, or credentials.

Example:

```json
{
  "error": "Authentication is required"
}
```

#### 403 Forbidden

The client is authenticated, but does not have permission to access the resource.

Example:

```json
{
  "error": "You do not have permission to access this resource"
}
```

#### 404 Not Found

The requested resource does not exist.

Example:

```http
GET /users/9999
```

#### 500 Internal Server Error

The server failed because of an unexpected error.

This usually means something went wrong in the backend code, database, external service, or infrastructure.

## Middleware

Middleware is code that runs between the moment a request reaches the server and the moment the final response is returned.

Middleware is commonly used to add reusable behavior to multiple routes.

Common middleware responsibilities:

- Logging request information.
- Checking authentication.
- Checking authorization.
- Validating request data.
- Handling errors.
- Parsing JSON request bodies.
- Adding headers to responses.
- Enabling CORS.

### Middleware Example

Imagine the client sends this request:

```http
GET /profile
Authorization: Bearer token123
```

Before the request reaches the final `/profile` controller, middleware can check if the token is valid.

Simple flow:

```text
Request -> Authentication Middleware -> Route Handler -> Response
```

If the token is valid, the request continues.

If the token is invalid, the middleware can stop the request and return an error.

Example response:

```json
{
  "error": "Invalid token"
}
```

### Why Middleware Is Useful

Without middleware, we would need to repeat the same logic inside many endpoints.

For example, instead of checking authentication manually in every route, we can create one authentication middleware and reuse it wherever it is needed.

## API Documentation Specs

API documentation explains how an API works and how other developers can use it.

Good API documentation usually includes:

- Available endpoints.
- HTTP methods.
- Required headers.
- Path parameters.
- Query parameters.
- Request body examples.
- Response examples.
- Status codes.
- Authentication requirements.

## OpenAPI

**OpenAPI** is a standard specification used to describe REST APIs.

With OpenAPI, we can document API endpoints using a structured format such as YAML or JSON.

Common file names:

- `openapi.yml`
- `openapi.yaml`
- `openapi.json`

### OpenAPI YAML Example

```yaml
openapi: 3.0.0
info:
  title: Users API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get a user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: User found
        '404':
          description: User not found
```

This documentation says that the API has a `GET /users/{id}` endpoint that receives an `id` path parameter and can return `200` or `404`.

## Swagger

Swagger is a set of tools that works with the OpenAPI specification.

Swagger can be used to:

- Display API documentation in a browser.
- Test endpoints from the documentation page.
- Generate client SDKs.
- Generate server code templates.

Common Swagger tools:

- **Swagger UI**: Creates an interactive documentation page.
- **Swagger Editor**: Helps write and validate OpenAPI files.
- **Swagger Codegen**: Generates code from OpenAPI definitions.

In many projects, people say "Swagger documentation" when they are referring to API documentation based on the OpenAPI specification.

## Simple Comparison

| Tool or Format | Main Purpose |
| --- | --- |
| OpenAPI | Standard specification for documenting REST APIs. |
| YAML or JSON | File formats used to write OpenAPI documentation. |
| Swagger UI | Displays OpenAPI documentation in an interactive web page. |

## Example API Documentation Content

For each endpoint, documentation should clearly explain the request and response.

Example:

```http
GET /users/{id}
```

Description:

```text
Returns a user by ID.
```

Path parameters:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | integer | yes | The user ID. |

Successful response:

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

Possible status codes:

- `200 OK`: User found.
- `404 Not Found`: User does not exist.
- `500 Internal Server Error`: Unexpected server error.
