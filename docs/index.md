# Notes

## Legend

-   :construction: - Currently being worked on (WIP)
-   :no_entry: - Abandoned notes
-   :white_check_mark: - Done
-   :spider_web: - Outdated
-   :baby: - I am too new, nothing useful here yet

---

-   [Artificial Intelligence - A Modern Approach Book](ai/modernApproach.md) :no_entry:
-   [Architecture](Architecture/Engineering.md)
    <!-- - [Monolithic Architecture]() :baby: -->
    <!-- - [Client-Server Architecture]() :baby: -->
    <!-- - [Microservices Architecture]() :baby: -->
    <!-- - [Service-Oriented Architecture (SOA)]() :baby: -->
    -   [Event-Driven Architecture]() :baby:
    <!-- - [Layered Architecture]() :baby: -->
    <!-- -   [Model-View-Controller (MVC)]() :baby: -->
    <!-- -   [Component-Based Architecture]() :baby: -->
    <!-- -   [Hexagonal (Ports and Adapters) Architecture]() :baby: -->
    <!-- -   [Event Sourcing]() :baby: -->
    <!-- -   [CQRS (Command Query Responsibility Segregation)]() :baby: -->
    <!-- -   [Serverless Architecture]() :baby: -->
    <!-- -   [Blockchain-based Architecture]() :baby: -->
    <!-- -   [N-Tier Architecture]() :baby: -->
    <!-- -   [Container-Based Architecture]() :baby: -->
    <!-- -   [Server-Side Rendering (SSR) and Client-Side Rendering (CSR)]() :baby: -->
    <!-- -   [GraphQL-Based Architecture]() :baby: -->
-   [Data Structures & Algorithms](data%20structures%20&%20algorithms/dsaNotes.md) :construction: (WIP)
    <!-- - [Data Structures]() :baby: -->
    <!-- - [Sorting Algorithms]() :baby: -->
    <!-- - [Search Algorithms]() :baby: -->
    <!-- - [Algorithm Complexity analysis]() :baby: -->
-   Version Control
    -   [Git](versionControl/git/git.md) :construction:
-   Cloud Computing
    -   Azure
        -   [Azure AZ-900 Fundamentals](cloud/Azure/az-900/az-900-fundamentals.md) :white_check_mark:
        -   [Azure AZ-204 Developer](cloud/Azure/az-204/az-204-developer.md) :baby:
-   Languages
    -   [JavaScript](languages/js/js.md)
    -   [Java](languages/java/Java.md) :white_check_mark:
        -   [Java 8](languages/java/java8.md)
    -   [TypeScript](languages/typescript/TypeScript.md) :white_check_mark:
    -   [Python](languages/python/python.md) :construction: (WIP 90%)
    -   [Kotlin](languages/Kotlin/kotlin.md) :white_check_mark:
    -   [Go](languages/go/go.md) :baby:
-   Methodologies and Patterns
    -   [12 Factor App](patterns/12-factor-app.md) :construction: (WIP)
    -   [TDD](patterns/TDD/TDD.md) :white_check_mark:
-   [Testing](testing/testing.md)
    -   [Types of testing]() :baby: (unit, integration, end-to-end)
-   [Web Dev](web/web.md)
    -   [API Architectures](web/API/api.md) :construction:
    <!-- -   [Swagger]() :baby: -->
    <!-- -   [Postman]() :baby: -->
    -   [CSS](web/css/css.md)
    -   Libraries and Frameworks
        -   [ReactJS](web/libraries/ReactJS/reactjs/ReactJS.md)
        -   [Redux](web/libraries/ReactJS/redux/Redux.md)
        -   [Angular](web/libraries/angular/angular.md) :construction:
-   Backend
    -   [Databases](backend/databases/databasesNotes.md)
        -   [MongoDB]() :baby:
    -   Frameworks
        -   [Spring Boot](backend/frameworks/springboot.md)
-   Containerisation and Orchestration
    -   [Docker]() :baby:
    -   [Docker Compose](/containerisation/DockerCompose.md) :white_check_mark:
-   Authentication and Authorisation
    -   [User authentication methods](/authenticationAndAuthorisation/authentication.md) :baby:
    <!-- - [Role-based Access Control]() :baby: -->
    <!-- -   [Security best practices]() :baby: -->
-   Caching and Performance
    -   [Caching strategies]() :baby:
    <!-- - [Load balancing and scaling]() :baby: -->
    <!-- -   [Profiling and optimising code]() :baby: -->
-   Monitoring and Logging
    <!-- - [Log analysis and real-time monitoring]() :baby: -->
    
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
