# 1. :factory: The 12 Factor App

In the modern era, software is created as `web apps` or `software-as-a-service`. The 12 factor app is a methodology for building `software-as-a-service` apps that:

!!! info "Key Principles"
    - Use **declarative** formats for setup automation
    - Have a **clean contract** with the underlying OS
    - Are suitable for **deployment** on modern **cloud platforms**
    - **Minimize divergence** between development and production
    - Can **scale up** without significant changes

## 1.1. :one: I. Codebase

!!! tip "One codebase tracked in revision control, many deploys"
    - Always tracked with **version control** system (e.g., Git, Mercurial, Subversion)
    - One-to-one correlation between codebase and app
    - Multiple codebases = distributed system
    - Shared code should be factored into libraries

![Codebase and Deploys](img/codebase-deploys.png)

## 1.2. :two: II. Dependencies

!!! warning "Explicitly declare and isolate dependencies"
    - **Never rely on implicit system-wide packages**
    - Declare all dependencies via a *dependency declaration* manifest
    - Use a *dependency isolation* tool during execution

> :bulb: Example in Python:
> - **Pip** for `declaration`
> - **Virtualenv** for `isolation`

## 1.3. :three: III. Config

!!! important "Store config in the environment"
    - Config includes: database handles, credentials, per-deploy values
    - **Strict separation of config from code**
    - Store config in **environment variables**

:x: Avoid:
- Constants in code
- Config files not in revision control
- Grouped "environments" (e.g., development, test, production)

## 1.4. :four: IV. Backing Services

!!! info "Treat backing services as attached resources"
    - Examples: datastores, messaging systems, SMTP services, caching systems
    - **No distinction between local and third-party services**
    - Access via URL or credentials stored in config

## 1.5. :five: V. Build, release, run

!!! tip "Strictly separate build and run stages"
    1. **Build stage**: Fetch dependencies, compile binaries and assets
    2. **Release stage**: Combine build with config
    3. **Run stage**: Execute app in the environment

![Release Process](img/release.png)

## 1.6. :six: VI. Processes

!!! important "Execute the app as one or more stateless processes"
    - Processes are **stateless and share-nothing**
    - Persist data in stateful backing services (e.g., databases)

## 1.7. :seven: VII. Port binding

!!! tip "Export services via port binding"
    - App is **completely self-contained**
    - Exports HTTP as a service by binding to a port

## 1.8. :eight: VIII. Concurrency

!!! info "Scale out via the process model"
    - Processes are a **first-class citizen**
    - Enable horizontal scaling
    - Rely on the OS's process manager

## 1.9. :nine: IX. Disposability

!!! tip "Maximize robustness with fast startup and graceful shutdown"

## 1.10. :keycap_ten: X. Dev/prod parity

## 1.11. :one::one: XI. Logs

## 1.12. :one::two: XII. Admin processes

# 2. :books: Resources

- [12factor.net](https://12factor.net/)
- [An illustrated guide to 12 Factor Apps](https://www.redhat.com/architect/12-factor-app)