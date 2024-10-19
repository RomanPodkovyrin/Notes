# :lock: Authentication Methods

Two main ways of doing user authentication:

1. Session Cookies
2. JWT (JSON Web Tokens)

## :cookie: Session

!!! info "Stateful Authentication"
    - Managed on the server
    - Creates a stateful session between client and server

![session diagram](img/session.drawio.svg)

### :clipboard: Authentication Steps:

1. User submits login form
2. Server validates and creates a session stored in the database
3. Server responds to the client with a session ID
4. Client browser stores session ID in the cookie
5. Browser sends cookies with future requests for authentication

### :x: Cons:

- Vulnerable to CSRF (Cross-Site Request Forgery)
- Session storage on server introduces scalability issues in horizontally scaled cloud databases

## :key: (JWT) Token-Based Authentication

!!! info "Stateless Authentication"
    - Managed on the client
    - JWT: JSON Web Token

![token diagram](img/token.drawio.svg)

### :clipboard: Authentication Steps:

1. User submits login form
2. Server creates JWT (signed with a private key)
3. Server sends JWT to the client
4. Client browser saves JWT in local storage
5. Future requests include signed JWT header for validation

The user information is stored in the JWT, which gets deserialized once the JWT signature is verified.

!!! tip "JWT Signing"
    JWT can be signed using:
    
    - A secret (**HMAC algorithm**)
    - A public/private key pair (**RSA** or **ECDSA**)

![jwt diagram](img/jwt.drawio.svg)

### :bulb: JWT Use Cases:

- **Authorization**: Allows user access to permitted services, resources, and routes
- **Information Exchange**: Secure method for transmitting verified information between parties

### :package: Payload Content:

1. **Registered Claims**:
    - `iss`: Issuer
    - `sub`: Subject
    - `aud`: Audience
    - `exp`: Expiration Time
    - `nbf`: Not Before
    - `iat`: Issued At
    - `jti`: JWT ID
    - `typ`: Type
    - `cty`: Content Type

2. **Public Claims**: [IANA JWT Claims Registry](https://www.iana.org/assignments/jwt/jwt.xhtml)
3. **Private Claims**: Custom claims can be added

!!! warning "Note"
    Keep JWTs small as they are sent through HTTP headers.

### :white_check_mark: Pros:

- No server-side storage required (all info in token)
- Solves scaling issues (validated with server's private key)
- Can use same JWT across different services (e.g., microservices)

### :x: Cons:

- JWT can be hijacked
- Harder to revoke due to stateless nature

## :books: Resources

- [JWT.IO](https://jwt.io/)
- [RFC 7519: JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1)