# 1. The 12 Factor App

- [1. The 12 Factor App](#1-the-12-factor-app)
    - [1.1. I. Codebase](#11-i-codebase)
    - [1.2. II. Dependencies](#12-ii-dependencies)
    - [1.3. III. Config](#13-iii-config)
    - [1.4. IV. Backing Services](#14-iv-backing-services)
    - [1.5. V. Build, release, run](#15-v-build-release-run)
    - [1.6. VI. Processes](#16-vi-processes)
    - [1.7. VII. Port binding](#17-vii-port-binding)
    - [1.8. VIII. Concurrency](#18-viii-concurrency)
    - [1.9. IX. Disposability](#19-ix-disposability)
    - [1.10. X. Dev/prod parity](#110-x-devprod-parity)
    - [1.11. XI. Logs](#111-xi-logs)
    - [1.12. XII. Admin processes](#112-xii-admin-processes)
- [2. Resources](#2-resources)

In modern era, software is created as `web apps`, or `software-as-a-service`. 12 factor app is a methodology for building `software-as-a-service` apps that:

-   Use `declarative` formats for setup automation, to minimise time and cost for new developers joining the project.
-   Have a `clean contract` with the underlying OS, offering **maximum portability** between execution environments.
-   Are suitable for `deployment` on modern `cloud platforms`, obviating the need for servers and system administration;
-   `Minimise divergence` between development and production, enabling `continuous deployment` for maximum agility;
-   And can `scale up` without significant changes to tooling, architecture, or development practices.

## 1.1. I. Codebase

One codebase tracked in revision control, many deploys

> 12 factor app should always be tracked with `version control` system, such **Git**, **Mercurial**, **Subversion**

`Codebase` is a single repo in a centralised revision control system, or any set of repos who share a root commit

There are always a one-to-one correlation between the codebase and the app:

-   If there are multiple codebases, it's not an app - it's a `distributed system`
    -   Each component in a distributed system is an app, and each can individually comply with 12 factor
-   Multiple apps sharing the same code is a violation of 12 factor. The solution here is to factor shared code into libraries which can be included through the dependency manger.

![Codebase and Deploys](img/codebase-deploys.png)

There is only one codebase per app, but there will be many deploys of the app.

`Deploy` - is a running instance of the app. This is typically a production site, and one or more staging sites

## 1.2. II. Dependencies

Explicitly declare and isolate dependencies.

Most programming languages offer a packaging system for distributing support libraries.

**A 12 factor app never relies on implicit existence of system-wide packages.** It declares all dependencies, completely and exactly, via a _dependency declaration_ manifest. Furthermore, it uses a _dependency isolation_ tool during execution to ensure that no implicit dependencies "leak in" from the surrounding system. The full and explicit dependency specification is applied uniformly to both production and development.

> For example: In Python:
>
> -   **Pip** - is used for `declaration`
> -   **Virtualenv** - is used for `isolation`
>
> Both must always be used together to satisfy 12 factor

One benefit of `explicit dependency declaration` is that it simplifies setup for developers new to the app.

12 factor apps also do not rely on the implicit existence of any system tools. Example, ImageMagick or curl. There is no guarantee they will exist on all systems. The tool should be vendored into the app.

## 1.3. III. Config

Store config in the environment

An app's config is everything that is likely to vary between deploys (staging, production, developer environments, etc). This includes:

-   Resource handles to the database, Memcached, and other backing services
-   Credentials to external services such as Amazon S3 or any API Keys
-   Per-deploy values such as the canonical hostname for the deploy

> Apps sometimes store config values as constants in the code. This is a violation of 12 factor, which requires **strict separation of config from code**. Config varies substantially across deploys, code does not.

A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials.

Another approach to config is the use of config files which are not checked into revision control. Huge improvement over using constants which are check into code repo. However, can still be included in the repo by mistake.

**The 12 factor app stores config in environment variables** (env vars or env).

Another aspect of config management is grouping. Sometimes apps batch config into named groups ("environments") named after specific deploys, such as the `development`, `test`, `production` environments. This method does not scale cleanly: as more deploys of the apps are created, new environment names are necessary, such as `staging`, `qa`. As the project grows further, developers may add their own special environments, like `romans-staging`, resulting in a combinatorial explosion of config which makes managing deploys of the app very brittle.

In 12 factor app, env vars are granular controls, each fully orthogonal to other env vars. They are never grouped together as "environments", but instead are independently managed for each deploy. This is a model that scales up smoothly as the app naturally expands into more deploys over it's lifetime.

## 1.4. IV. Backing Services

Treat backing services as attached resources. Ex, datastores, messaging/queueing systems, SMTP services and caching systems.

**The code for a 12 factor app makes no distinction between local and third party services**. To the app, both are attached resources, accessed via a URL or other location/credential stored in the config. Should be able to swap out a local database for one managed by a third party without any changes to the app's code. Only the resource handle in the config needs to change.

> Resources can be attached to and detached from deploys at will.

## 1.5. V. Build, release, run

Strictly separate build and run stages

A codebase is transform into a (non-development) deploy through 3 stages:

-   `Build stage`: Using a version of the code at a commit specified by the deployment process, the build stage fetches vendors dependencies and compiles binaries and assets
-   `Release stage`: The resulting release contains both the build and the config and is ready for immediate execution in the execution environment.
-   `Run stage`(runtime): Runs app in the execution environment, by launching some set of app's process against a selected release.

**The 12 factor app uses strict separation between the build, release and run stages.**

![](img/release.png)

Every release should always have a unique release ID, such as a timestamp of the release, or an incrementing number. Releases are an append-only ledger and a release cannot be mutated once it's created. Any changes must crate new releases.

## 1.6. VI. Processes

Execute the app as one or more stateless processes.

**12 Factor processes are stateless are share-nothing.** Any data that needs to persist must be stored in a stateful backing service, typically a database.

## 1.7. VII. Port binding

Export services via port binding

**12 Factor app is completely self-contained** and does not rely on runtime injection of web server into the execution environment to create a web-facing service. The web app **exports HTTP as a service by binding to a port**, and listening to requests coming in on that port.

## 1.8. VIII. Concurrency

Scale out via the process model

**In the 12-factor app, processes are a first class citisen.** Processes in the 12 factor app take strong cues from the Unix process model for running service daemons

But an individual VM can only grow so large (vertical scale), so the application must also be able to span multiple processes running on multiple physical machines.

The process model truly shines when it comes time to scale out. The share-nothing, horizontally partitionable nature of twelve-factor app processes means that adding more concurrency is a simple and reliable operation. The array of process types and number of processes of each type is known as the process formation.

Twelve-factor app processes should never daemonize or write PID files. Instead, rely on the operating system’s process manager (such as systemd, a distributed process manager on a cloud platform, or a tool like Foreman in development) to manage output streams, respond to crashed processes, and handle user-initiated restarts and shutdowns.

## 1.9. IX. Disposability

Maximize robustness with fast startup and graceful shutdown

## 1.10. X. Dev/prod parity

## 1.11. XI. Logs

## 1.12. XII. Admin processes

# 2. Resources

-   [12factor.net](https://12factor.net/)
-   [An illustrated guide to 12 Factor Apps](https://www.redhat.com/architect/12-factor-app)
