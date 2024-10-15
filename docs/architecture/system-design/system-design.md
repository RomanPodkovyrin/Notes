---
icon: material/connection
---

# 1. System Design

## 1.1. Computer Architecture

![](img/computer.excalidraw.svg){ width="300" }

Computures use bit's (0 or 1) to represent data and commands

- `bit` - 0 or 1
- `byte` - 8 bits
- `KB` - 1024 bytes
- `MB` - 1024 KBs
- `GB` - 1024 MBs
- `TB` - 1024 GBs
- etc...

## 1.2. Storage

Arranged from slowest to fastest and largest to smallest possible size:

- `HDD` | `SSD` - Non-volatile (retains data without power)
- `RAM` - Volatile (loses data without power)
- `Cache` - Order of CPU looking for data in cache (L1 -> L2 -> L3 -> RAM)

## 1.3. CPU

Fetches decodes and executes instructions

Can read/write from RAM/Disk/Cache data

## 1.4. High-level Architecture of a Production App

![Stream flow](img/app-architecture-light.excalidraw.svg#only-light)
![Stream flow](img/app-architecture-dark.excalidraw.svg#only-dark)

- `CI/CD` - Continuous Integration and Continuous Deployment
    - e.g. Jenkins, Github Actions

- `Load Balancer` - ensures the user requests are evenly distributed between servers
    - e.g. Nginx
- `Logging & Monitoring` - standard practice is to store those on a separate server from production server.
    - e.g. DataDog, Sentry, Prometheus
- `Alert Server` - Accumulates and sends out issue updates either to users or Developer Slack chat for example to inform of an issue

### Investigation Process

Once Developer were informed of an issue, it needs to be investigated, usually in the following order

1. Identify an issue in the logs
2. Using Pipelines deploy to a safe environment to replicate the issue
    - Never use production for this
3. Release a quick patch, to get things working again

## Good Design

- `Scalability` - system should grow with it's user base
- `Maintainability` - making it easier for future devs to maintain and improve our system
- `Efficiency` - making the best use of our resources
- `Reliability` - maintains it's composure when things go wrong

## 3 Key Elements of System Design

- `Moving Data` - ensuring data can flow seamlessly between components, either between user and system of databases. This needs to be optimised for speed and security.
- `Storing Data` - about understanding:
    - Access patterns
    - Indexing strategies
    - Backup solutions
    - Data is readily available
    - Stored securely
- `Transforming Data` - taking raw data and turning it into meaningful information
    - Aggregating log files for analysis
    - Converting user input into a different format

## CAP Theorem A.K.A Brewer's Theorem

![](img/cap-light.excalidraw.svg#only-light){width=400}
![](img/cap-dark.excalidraw.svg#only-dark){width=400}

- `Consistency` - Ensures all nodes in the distributed system have the same data at the same time. Change in one node should also be reflected in all nodes.
- `Availability` - System is always operational and responsive to requests regardless of partial node failure
- `Partition Tolerance` - Systems ability to continue functioning even if a network partition occur

Can only achieve 2 out of those properties at the same time

!!! note ""
    Can only achieve 2 out of those properties at the same time
    
    - `CA` - RDBMS
    - `AP` - Cassandra, DynamoDB
    - `CP` - MongoDB, HBase, Redis

# 2. Resources

- [System Design Concepts Course and Interview Prep | freeCodeCamp.org](https://www.youtube.com/watch?v=F2FmTdLtb_4) 9:00