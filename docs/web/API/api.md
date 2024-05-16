# 1. API Architectures


## 1.1. REST

REST - representational state transfer

```mermaid
sequenceDiagram
        participant Client
        participant Server
        Client->>Server: HTTP GET /endpoint
        Server->>Server: Retrieve data
        Server-->>Client: Return data as JSON
```

### 1.1.1. end point options

-   `:` - variable
    -   `/users/:username/repos`
-   `?` - Query parameters
-   `&` - Query parameters separator - `?query1=value1&query2=value2
`

### 1.1.2. HTTP methods

-   `GET`
    -   This request is used to get a resource from a server. If you perform a `GET` request, the server looks for the data you requested and sends it back to you. In other words, a `GET` request performs a `READ` operation. This is the default request method.
-   `POST`
    -   This request is used to create a new resource on a server. If you perform a `POST` request, the server creates a new entry in the database and tells you whether the creation is successful. In other words, a `POST` request performs an `CREATE` operation.
-   `PUT` & `PATCH`
    -   These two requests are used to update a resource on a server. If you perform a `PUT` or `PATCH` request, the server updates an entry in the database and tells you whether the update is successful. In other words, a `PUT` or `PATCH` request performs an `UPDATE` operation.
-   `DELETE`
    -   This request is used to delete a resource from a server. If you perform a `DELETE` request, the server deletes an entry in the database and tells you whether the deletion is successful. In other words, a `DELETE` request performs a `DELETE` operation.

### 1.1.3. Headers

Provides information to both client an server.

List of valid headers [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

Headers are `property-value pairs`

eg.

-   `Content-Type: application/json`

### 1.1.4. Data (Body)

Information to be sent to the server. This is usually used with `POST`, `PUT`, `PATCH` or `DELETE`

### 1.1.5. Authentication

There are 2 ways to authenticate yourself:

1. With a username and password
2. With a secret token (Like oAuth)

### 1.1.6. HTTP Status Codes and Error Messages

-   200+ means the request has `succeeded`.
-   300+ means the request is `redirected` to another URL
-   400+ means an `error that originates from the client` has occurred
-   500+ means an `error that originates from the server` has occurred

### 1.1.7. API Version

Requesting specific api version

1. Directly in the endpoint

    - https://api.twitter.com/1.1/account/settings.json

2. In a request header
    - Specify version with an `Accept` header

## 1.2. SOAP

## 1.3. GRAPHQL

```mermaid
graph TD
        subgraph Client
                C1[Frontend App]
        end
        subgraph GraphQL Server
                G1[GraphQL API]
        end
        subgraph Data Sources
                DB1[Database]
                API1[REST API]
        end
        C1 -->|Queries/Mutations| G1
        G1 -->|Resolves| DB1
        G1 -->|Resolves| API1
```

## 1.4. Apache Kafka

## 1.5. AsyncAPI

## 1.6. RPC

## 1.7. WebSocket

```mermaid
graph TD
        subgraph Client
                C1[Web App]
                C2[Mobile App]
        end
        subgraph WebSocket Server
                WS1[WebSocket API]
        end
        subgraph Backend Services
                B1[Service A]
                B2[Service B]
        end
        C1 -->|Real-time Updates| WS1
        C2 -->|Real-time Updates| WS1
        WS1 -->|Publish/Subscribe| B1
        WS1 -->|Publish/Subscribe| B2
```

## 1.8. Webhook

## 1.9. MQTT

## 1.10. AMQP

## 1.11. Resources

-   [Understanding And Using REST APIs](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)
