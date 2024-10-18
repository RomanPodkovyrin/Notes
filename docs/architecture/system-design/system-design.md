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

### 1.4.1. DNS - Domain Name System

Translates domain names into IP addresses

`ICANN` - Internet Corporation For Assigned Names and Numbers, functioning of DNS is overseen by ICANN, which coordinates the global IP address base and domain name system

#### 1.4.1.1. Types of Records in DNS

| Type  | Description                                                           | Example                           |
|-------|-----------------------------------------------------------------------|-----------------------------------|
| A     | Maps a domain name to an IPv4 address                                 | example.com -> 192.168.0.42       |
| AAAA  | Maps a domain name to an IPv6 address                                 |                                   |
| CNAME | Canonical Name, direct an alias domain to a canonical domain          | example -> original.com           |
| TXT   | Allows to store text info, such as SPF and email verification records |                                   |
| NS    | Nameserver                                                            | coen.ns.cloudflare.com            |
| MX    | Main Exchanger                                                        | example.com -> mail.protonmail.ch |

### 1.4.2. Application Protocol

#### 1.4.2.1. HTTP

- Hypertext transfer protocol
- Build on TCP/IP
- It's a request response protocol
- Uses Methods and Status Codes

![](img/http-light.excalidraw.svg#only-light)
![](img/http-dark.excalidraw.svg#only-dark)

##### 1.4.2.1.1. Codes

!!! success "2xx Success Codes"
    - `200 OK`: The standard response for successful request
    - `201 Created`: Signifies that a new resource has been successfully created
    - `204 No Content`: Indicates that the server successfully processed the request, but is not return any content

!!! warning "3xx Redirection Codes"
    - `301 Moved Permanently`: The URL of the requested resource has been changed permanently. The new URL is given in the response
    - `302 Found`: Indicated that the resource is temporarily located at another URI
    - `304 Not Modified`: Informs the client that the chached version of the response is still valid and can be used

!!! failure "4xx Client Error Codes"
    - `400 Bad Request`: The server cannot process the requested due to a client error
    - `401 Unauthorized`: Authentication is required for the requested to be completed
    - `403 Forbidden`: The server understands the requested but refuses to authorize it
    - `404 Not Found`: The server can't find the requested resource
    - `429 Too Many Requests`: The user has sent too many requests in a given amount of time

!!! bug "5xx Server Error Codes"
    - `500 Internal Server Error`: A generic error message when the server encounters an unexpected condition
    - `501 Not Implemented`: The server does not support the functionality required to fulfil the request
    - `503 Service Unavailable`: The server is not ready to handle the request, often used for maintenance or overload

#### 1.4.2.2. Web Socket

- Full-duplex, bidirectional communication
- Enables real-time data transfer
- Runs over a single TCP connection
- Designed for low-latency, high-frequency updates
- Etc, used for chats and streaming

![](img/websocket-light.excalidraw.svg#only-light)
![](img/websocket-dark.excalidraw.svg#only-dark)

#### 1.4.2.3. WebRTC

- Web Real-Time Communication
- Enables direct peer-to-peer communication
- Supports video, voice, and data sharing
- Works without plugins or additional software

#### 1.4.2.4. MQTT

- Message Queuing Telemetry Transport
- Lightweight publish-subscribe messaging protocol
- Designed for constrained devices and low-bandwidth networks
- Uses a broker to manage message distribution

![](img/mqtt-light.excalidraw.svg#only-light)
![](img/mqtt-dark.excalidraw.svg#only-dark)

#### 1.4.2.5. AMQP

- Advanced Message Queuing Protocol
- Open standard for message-oriented middleware
- Supports point-to-point and publish-subscribe patterns
- Ensures reliable message delivery

#### 1.4.2.6. SMTP

- Simple Mail Transfer Protocol
- Used for sending and routing email
- Works on a store-and-forward model
- Operates on TCP port 25 by default

#### 1.4.2.7. IMAP

- Internet Message Access Protocol
- Retrieves email messages from a mail server
- Allows management of mailboxes on server
- Keeps messages on server, enabling access from multiple devices

#### 1.4.2.8. POP3

- Post Office Protocol version 3
- Used to retrieve email from a mail server
- Typically downloads messages to a local device
- Simpler than IMAP, with fewer features

#### 1.4.2.9. FTP

- Used for transferring files between client and server
- Supports both binary and ASCII file transfers
- Uses separate control and data connections

#### 1.4.2.10. SSH

- Secure Shell
- Provides secure remote login and other network services
- Encrypts all traffic between client and server
- Often used for remote command execution and file transfers

#### 1.4.2.11. RPC

- Remote Procedure Call
- Allows program to execute a procedure on another computer
- Can be implemented over various transport protocols
- Abstracts the complexities of network communication


## API Design


# 2. Resources

-   [System Design Concepts Course and Interview Prep | freeCodeCamp.org](https://www.youtube.com/watch?v=F2FmTdLtb_4) 14:42
-   [CAP Theorem](https://tsaiprabhanj.medium.com/cap-therom-a515a6c4c81e)
-   [TCP vs UDP: What’s the Difference and Which Protocol Is Better?](https://www.avast.com/c-tcp-vs-udp-difference#:~:text=The%20main%20difference%20between%20TCP,reliable%20but%20works%20more%20quickly.)