

## 1. **Good Design Requirements**
- **`Scalability`** - System should grow with its user base  
- **`Maintainability`** - Ensure ease of future development and improvements  
- **`Efficiency`** - Optimal use of resources  
- **`Reliability`** - System remains stable when things go wrong

---

### 1.1. **3 Key Elements of System Design**

!!! info ":gear: **Moving Data**"
    - Ensure data flows seamlessly between components (user, system, databases)  
    - **Optimized for speed and security**

!!! info ":floppy_disk: **Storing Data**"
    - Consider **Access patterns, Indexing strategies, Backup solutions**  
    - Data should be **readily available** and **stored securely**

!!! info ":arrows_clockwise: **Transforming Data**"
    - Convert raw data into meaningful information  
    - Aggregate log files for analysis  
    - Convert user input into different formats


### 1.2. CAP Theorem A.K.A Brewer's Theorem

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

### 1.3. Availability

Usually measured as 99.999%

!!! example "Example"
    Running service with 99.9% availability, allows for 8.76 hour of downtime a year
    `365*24 * 0.001 = 8.76 Hours`

    99.999% only allows 5 mins of downtime a year
    
 
!!! note "SLO-Service Level Objectives"
    Example. Can set that our service should respond to the request within 300ms  99.9% of the time

!!! note "SLA-Service Level Agreements"
    More like format contracts with the users. They define a minimum level of service we're committing to provide. If your availability drops below our stated availability in the SLA, we might have to provide refunds.

### 1.4. Assessing System Resilience

We use the following criteria to assess system resilience:

- :shield: `Reliability`
    - Ensuring system works **correctly** and **consistently**
- :collision: `Fault Tolerance`
    - How does system handle **unexpected failures** or **attacks**
- :repeat: `Redundancy`
    - Having a system **backup** that takes over when part of the system fails
- :zap: `Speed`
    - `Throughput` - How much data our system can handle over a certain period of time
        - Server Throughput is measured in `RPS` (requests per second)
        - DB Throughput is measured in `QPS` (Queries per second)
        - Data throughput measured in `B/s` (Bytes per second)
    - `Latency` - How long it takes to handle a single request

!!! danger "Speed Optimization Trade-off"
    When it comes to optimising speed, it often affects other metrics. For example, increasing throughput by batching jobs will decrease latency.
