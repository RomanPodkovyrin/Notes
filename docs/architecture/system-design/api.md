## 1. API Design

### 1.1. CRUD Operations

Basic operation of any data driven application

![](img/crud-light.excalidraw.svg#only-light){width=300}
![](img/crud-dark.excalidraw.svg#only-dark){width=300}

HTTP Example

- `CREATE` -> `POST` /api/products
- `READ` -> `GET` /api/products
- `UPDATE` -> `PUT` /api/products/:id
- `DELETE` -> `DELETE` /api/products/:id

### 1.2. Communication formats
!!! info "**JSON** (JavaScript Object Notation)"

    - **Characteristics:**
        - `Lightweight` data-interchange format
        - `Human-readable` and easy to understand
        - Based on a `subset of JavaScript`
    - **Structure:**
        - Uses `key-value pairs` and `arrays`
        - Supports `nested` structures
    - **Data Types:**
        - `String`, `Number`, `Boolean`, `Array`, `Object`, `null`
    - :white_check_mark: **Pros:**
        - `Wide support` across languages and platforms
        - Easy to `parse` and `generate`
        - Compact compared to XML
    - :x: **Cons:**
        - No support for `comments`
        - Limited `data type` support (e.g., no date type)
    - :bulb: **Use Cases:**
        - `Web APIs`, `Configuration` files, `Data storage`

!!! info "**XML** (eXtensible Markup Language)"

    - **Characteristics:**
        - `Markup language` that defines a set of rules for encoding documents
        - `Self-descriptive` and flexible
    - **Structure:**
        - Uses `tags` to define elements
        - Supports `attributes` within tags
    - :gear: **Features:**
        - `Namespaces` for avoiding name conflicts
        - `DTD` and `XML Schema` for defining structure
    - :white_check_mark: **Pros:**
        - `Highly extensible`
        - Strong `support for metadata`
        - `Validation` capabilities
    - :x: **Cons:**
        - More `verbose` than JSON or Protocol Buffers
        - Can be `overly complex` for simple data
    - :bulb: **Use Cases:**
        - `SOAP` web services, `Configuration` files, `Data interchange` in enterprise systems

!!! info "**Protocol Buffers** (Protobuf)"

    - **Characteristics:**
        - `Binary` serialization format developed by Google
        - `Language-neutral`, platform-neutral, extensible
    - **Structure:**
        - Defines message types in `.proto` files
        - Strongly `typed fields`
    - :gear: **Features:**
        - `Backward` and `forward compatibility`
        - `Code generation` for multiple languages
    - :white_check_mark: **Pros:**
        - `Smaller` size compared to JSON and XML
        - `Faster` parsing and serialization
        - `Strict typing` reduces errors
    - :x: **Cons:**
        - Not `human-readable` in binary form
        - Requires `additional tooling` for development
        - Less `flexible` than JSON or XML for dynamic structures
    - :bulb: **Use Cases:**
        - `High-performance` RPC systems (e.g., gRPC)
        - `Inter-service communication` in microservices
        - `Data storage` where space efficiency is crucial

:bar_chart: **Comparison**

- `JSON`: Best for web applications and APIs where human readability is important
- `XML`: Suitable for complex data with metadata requirements and where extensive tooling support is beneficial
- `Protocol Buffers`: Ideal for high-performance scenarios and when working with strongly typed data in multiple languages

### 1.3. API Paradigms

!!! info " **REST** (Representational State Transfer)"
    - **Characteristics:**
        - `Stateless` architecture
        - Uses `standard HTTP methods` (GET, POST, PUT, DELETE)
        - Typically uses `JSON` for data exchange
        - `Resource-oriented` design
    - :white_check_mark: **Pros:**
        - Simple and widely adopted
        - Scalable and cacheable
        - Separation of client and server
    - :x: **Cons:**
        - Potential for `over-fetching` or `under-fetching` data
        - Multiple round trips for complex data requirements

!!! info "**GraphQL**"
    - **Characteristics:**
        - `Single endpoint` for all operations
        - `Strongly typed schema`-based queries
        - Allows clients to request `specific data`
    - :white_check_mark: **Pros:**
        - Avoids over-fetching and under-fetching
        - `Flexible` data retrieval
        - Strong typing and introspection
    - :x: **Cons:**
        - Complex queries can impact `server performance`
        - Only uses `POST` requests
        - Always responds with `HTTP 200` (error handling complexity)
        - Steeper learning curve

!!! info "**gRPC** (Google Remote Procedure Call)"
    - **Characteristics:**
        - Built on `HTTP/2` protocol
        - Uses `Protocol Buffers` for serialization
        - Supports `streaming` (unary, server, client, bidirectional)
    - :white_check_mark: **Pros:**
        - `High performance` and low latency
        - Efficient `binary serialization`
        - Strong typing with protocol buffers
        - Supports `multiplexing` and server push
    - :x: **Cons:**
        - Less `human-readable` (binary format)
        - Requires HTTP/2 support
        - Limited `browser support`
        - Steeper learning curve compared to REST

:bulb: **Use Cases**

- `REST`: Good for public APIs and CRUD operations
- `GraphQL`: Ideal for complex data requirements and multiple client types
- `gRPC`: Excellent for microservices and high-performance inter-service communication

### 1.4. Backward Compatibility and Versioning

To ensure redesigns or changes don't break existing functionality, implement versioned URLs for different API versions.

!!! note "REST API Versioning"
    - **Current Version:** `/api/v2/products`
        - *Serves current clients*
        - :white_check_mark: Latest features and improvements
    - **Legacy Version:** `/api/v1/products`
        - *Serves older clients*
        - :warning: May be deprecated in future

!!! note "GraphQL Versioning"
    - **Current Version:** `products_v2`
        - *Serves current clients*
        - :white_check_mark: Latest schema and resolvers
    - **Legacy Version:** `products`
        - *Serves older clients*
        - :warning: Consider migration timeline

### 1.5. API Best Practices

!!! tip "Security Measures"
    # 1. Rate Limiter :shield:
    - **Purpose:** Prevents DDOS attacks and excessive API usage
    - **Implementation:**
        - Set request limits per user/IP
        - `429 Too Many Requests` response when exceeded
        - Helps maintain API stability

    # 2. CORS (Cross-Origin Resource Sharing) :globe_with_meridians:
    - **Purpose:** Controls domain access to API
    - **Implementation:**
        - Define allowed origins
        - Set appropriate headers
        - Prevents unauthorized cross-site interactions
