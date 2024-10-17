---
icon: material/connection
---

# 1. System Design

## 1.1. Computer Architecture

![](img/computer-light.excalidraw.svg#only-light){ width="300" }
![](img/computer-dark.excalidraw.svg#only-dark){ width="300" }

Computures use bit's (0 or 1) to represent data and commands

- `bit` - 0 or 1
- `byte` - 8 bits
- `KB` - 1024 bytes
- `MB` - 1024 KBs
- `GB` - 1024 MBs
- `TB` - 1024 GBs
- etc...

### 1.1.1. Storage

Arranged from slowest to fastest and largest to smallest possible size:

- `HDD` | `SSD` - Non-volatile (retains data without power)
- `RAM` - Volatile (loses data without power)
- `Cache` - Order of CPU looking for data in cache (L1 -> L2 -> L3 -> RAM)

### 1.1.2. CPU

Fetches decodes and executes instructions

Can read/write from RAM/Disk/Cache data

## 1.2. High-level Architecture of a Production App

![Stream flow](img/app-architecture-light.excalidraw.svg#only-light)
![Stream flow](img/app-architecture-dark.excalidraw.svg#only-dark)

-   `CI/CD` - Continuous Integration and Continuous Deployment

- `Load Balancer` - ensures the user requests are evenly distributed between servers
    - e.g. Nginx
- `Logging & Monitoring` - standard practice is to store those on a separate server from production server.
    - e.g. DataDog, Sentry, Prometheus
- `Alert Server` - Accumulates and sends out issue updates either to users or Developer Slack chat for example to inform of an issue

### 1.2.1. Investigation Process

Once Developer were informed of an issue, it needs to be investigated, usually in the following order

1. Identify an issue in the logs
2. Using Pipelines deploy to a safe environment to replicate the issue
    - Never use production for this
3. Release a quick patch, to get things working again

## 1.3. Good Design Requirements

- `Scalability` - system should grow with it's user base
- `Maintainability` - making it easier for future devs to maintain and improve our system
- `Efficiency` - making the best use of our resources
- `Reliability` - maintains it's composure when things go wrong

### 1.3.1. 3 Key Elements of System Design

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

### 1.3.2. CAP Theorem A.K.A Brewer's Theorem

Assumes distributed system

![](img/cap-light.excalidraw.svg#only-light){width=400}
![](img/cap-dark.excalidraw.svg#only-dark){width=400}

- `Consistency` - Ensures all nodes in the distributed system have the same data at the same time. Change in one node should also be reflected in all nodes.
    - Strong Consistency: All read and writes operations are guaranteed to be immediately consistent with each other, regardless of network delays or failures
- `Availability` - System is always operational and responsive to requests regardless of partial node failure
    - High Availability: The system remains operational and responds to requests even in presetns of network or other system issues.
- `Partition Tolerance` - Systems ability to continue functioning even if a network partition occur
    - Partition Tolerance: The system continues to operate, even when network communications between nodes is unreliable or fails.

Can only achieve 2 out of those properties at the same time

!!! note "Can only achieve 2 out of those properties at the same time"
    
    - `CA` - Prioritises both consistency and availability. They do not tolerate network partitions an always aim for strong consistency.
        - RDBMS
    - `AP` - Prioritise availability and partitioning tolerance over strict consistency. They systems may provide eventual consistency, where data may take some time to propagate and become consistent across all nodes.
        - Cassandra, DynamoDB
    - `CP` - Consistency is prioritised, even at the expense of availability. When network partition occurs, the system might choose to become temporary unavailable rather than risk delivering inconsistent data
        - MongoDB, HBase, Redis

Not about finding the perfect solution, it's about finding the best solution for our specific use case

### 1.3.3. Availability

Usually measured as 99.999%

!!! example "Example"
    Running service with 99.9% availability, allows for 8.76 hour of downtime a year
    `365*24 * 0.001 = 8.76 Hours`

    99.999% only allows 5 mins of downtime a year
    
 
!!! note "SLO-Service Level Objectives"
    Example. Can set that our service should respond to the request within 300ms  99.9% of the time

!!! note "SLA-Service Level Agreements"
    More like format contracts with the users. They define a minimum level of service we're committing to provide. If your availability drops below our stated availability in the SLA, we might have to provide refunds.

### 1.3.4. Accessing System Resilience

We use the following criteria to access that:

- `Reliability`
    - Ensuring system works correctly and consistently
- `Fault Tolerance`
    - How does system handle unexpected failures or attacks
- `Redundancy`
    - Having a system backup that takes over when part of the system fails
- `Speed`
    - `Throughput` - How much data our system can handle over a certain period of time
        - Server Throughput is measured in `RPS` requests per second
        - DB Throughput is measured in `QPS` Queries per second
        - Data throughput measured in `B/s` Bytes per second
    - `Latency` - How long it takes to handle a single requests

!!! danger ""
    When it comes to optimising speed, it often affects the other metric. For example increasing throughput by batching jobs, will decrease latency

## 1.4. Networking Basics

-   `IP Address` - unique identifier
    -   `IPv4` - 32-bit -> 4B addresses
    -   `IPv6` - 128-bit -> 340T

![](img/ipheader-light.excalidraw.svg#only-light){width=300}
![](img/ipheader-dark.excalidraw.svg#only-dark){width=300}

![](img/app-layer-light.excalidraw.svg#only-light){width=300}
![](img/app-layer-dark.excalidraw.svg#only-dark){width=300}

TRANSPORT LAYER

| Factor              | TCP                                                                   | UDP                                                                     |
| ------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `Connection type`     | Requires an established connection before transmitting data           | No connection is needed to start and end a data transfer                |
| `Data sequence`      | Can sequence data (send in a specific order)                          | Cannot sequence or arrange data                                         |
| `Data retransmission` | Can retransmit data if packets fail to arrive                         | No data retransmitting. Lost data can’t be retrieved                    |
|  `Delivery`           | Delivery is guaranteed                                                | Delivery is not guaranteed                                              |
| `Check for errors`    | Thorough error-checking guarantees data arrives in its intended state | Minimal error-checking covers the basics but may not prevent all errors |
| `Broadcasting`        | Not supported                                                         | Supported                                                               |
| `Speed`               | Slow, but complete data delivery                                      | Fast, but at risk of incomplete data delivery                           |

![](img/transport-layer-light.excalidraw.svg#only-light)
![](img/transport-layer-dark.excalidraw.svg#only-dark)

# 2. Resources

-   [System Design Concepts Course and Interview Prep | freeCodeCamp.org](https://www.youtube.com/watch?v=F2FmTdLtb_4) 14:42
-   [CAP Theorem](https://tsaiprabhanj.medium.com/cap-therom-a515a6c4c81e)
-   [TCP vs UDP: What’s the Difference and Which Protocol Is Better?](https://www.avast.com/c-tcp-vs-udp-difference#:~:text=The%20main%20difference%20between%20TCP,reliable%20but%20works%20more%20quickly.)
