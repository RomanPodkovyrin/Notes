

## 1. Databases

### 1.1. 🗄️ Database Types

#### 1.1.1. 🔢 Relational Databases (RDBMS)

- Store data in tables with rows and columns
- Use SQL (Structured Query Language)
- ACID compliant:
    - ✅ **A** tomicity - all or nothing, think about bank transaction and moving funds between two accounts
    - ✅ **C** onsistency - After transaction database should be in the consistent state
    - ✅ **I** solation - Transactions should be independent
    - ✅ **D** urability - Once Transaction is completed, the data is there to stay
- Examples: MySQL, PostgreSQL, Oracle, SQL Server
- Great for:
    - Transactions
    - Complex queries
    - Integrity

#### 1.1.2. 📑 NoSQL Databases

- Alternative to relational databases for unstructured data
- No Schemas and no foreign key to link tables together 
- Typically sacrifice ACID for performance and scalability
    - ✅ **A** tomicity - all or nothing, think about bank transaction and moving funds between two accounts
    - ❌ **C** onsistency - After transaction database should be in the consistent state
    - ✅ **I** solation - Transactions should be independent
    - ✅ **D** urability - Once Transaction is completed, the data is there to stay
- Examples: MongoDB, Cassandra and Redis
- Great for:
    - Scalability
    - Quick Iteration
    - Simple Queries


!!! note "NoSQL Categories"
    **📄 Document**: JSON-like documents (MongoDB, CouchDB)  
    **🔑 Key-Value**: Simple key-value pairs (Redis, DynamoDB)  
    **📊 Column-Family**: Column-oriented storage (Cassandra, HBase)  
    **🕸️ Graph**: Nodes and relationships (Neo4j, Amazon Neptune)

#### 1.1.3. 🧠 In-Memory Databases

- Store data primarily in memory for faster access
- Used for:
    - Caching
    - Session stores
    - Real-time analytics
- Examples: Redis, Memcached, VoltDB

#### 1.1.4. 📈 Time-Series Databases

- Optimized for time-stamped or time-series data
- Used for:
    - Metrics
    - Monitoring
    - IoT applications
- Examples: InfluxDB, TimescaleDB, Prometheus

### 1.2. 🏛️ Database Architecture

#### 1.2.1. 📏 Schema Design

- `Tables`, `columns`, `relationships` (relational)
- `Collections`, `documents`, `indexes` (document-based)
- Data models determine application interaction patterns

#### 1.2.2. 🔑 Keys and Indexes

- `Primary keys`: Unique identifiers for records
- `Foreign keys`: Create relationships between tables
- `Indexes`: Speed up queries but can slow down writes

!!! note "Index Types"
    **🔤 B-Tree**: General-purpose, balanced tree structure  
    **🔍 Hash**: Fast lookups for exact matches  
    **📝 Full-Text**: Optimized for text search  
    **📍 Spatial**: Geographic/geometric data queries

#### 1.2.3. 🌐 Scaling Approaches

##### 1.2.3.1. 🔼 Vertical Scaling (Scale Up)

- Add more resources (CPU, RAM) to a single server
- Simpler but has physical limitations
- No changes to application code required

##### 1.2.3.2. 🔁 Horizontal Scaling (Scale Out)

- Add more database servers to distribute load
- More complex but virtually unlimited scaling
- Requires application consideration

###### 1.2.3.2.1. Horizontal Scaling Patterns

- **🧩 Sharding**: Partitioning data across multiple servers
    - Split into smaller chunks to distribute, based on a shard key
    - Sharding Strategies:
        - `Range-based Sharding`: 
            - Based on the range of a given key
            - Efficient for range queries but can lead to hotspots
            - Example: Jan-Mar transactions on shard 1, Apr-Jun on shard 2
        - `Directory-based Sharding`: 
            - Lookup service to direct traffic to the database
            - For example, if have data with 4 seasons (Summer, Autumn, Winter and Spring), this will create a look up table that would point to one of 4 shards, based on the season
        - `Geographical Sharding`: 
            - Based on geographic location
            - Reduces latency for location-specific queries
            - Example: European users on EU servers, Asian users on APAC servers
        - `Hash-Based Sharding`:
            - Uses a hash function on the shard key to determine placement
            - Distributes data evenly but makes range queries difficult
            - Example: user_id % number_of_shards = shard_number
        - `Functional Sharding`:
            - Splits by feature or domain rather than data
            - Different services handle different functions
            - Example: Product catalog on one shard, user profiles on another
 
- **🔄 Replication**: Copies of data across multiple servers  
![](img/db-replication-light.excalidraw.svg#only-light){width=600}
![](img/db-replication-dark.excalidraw.svg#only-dark){width=600}



### 1.3. 🔍 Database Performance Optimisation

- Caching Layer
    - Implement distributed caching (Redis, Memcached) for frequently accessed data
    - Reduces database load and improves response times
    - Consider cache invalidation strategies to maintain consistency
- Intelligent Indexing
    - Create targeted indexes based on query patterns within each shard
    - Avoid over-indexing which impacts write performance
    - Consider column-oriented storage for analytical workloads
- Query Optimization
    - Rewrite queries to leverage sharding keys
    - Use query hints to direct queries to appropriate shards
    - Implement connection pooling for efficient resource utilization

- Monitoring & Analytics
    - Track shard performance metrics to identify hotspots
    - Implement automated rebalancing based on usage patterns
    - Use slow query logs to identify optimization opportunities

### 1.4. 🏗️ Database Design Patterns

#### 1.4.1. 🔄 Normalization and Denormalization

- Normalization: Reduce redundancy and dependency
- Denormalization: Duplicate data for performance
- Trade-offs between consistency and speed

!!! note "Design Considerations"
    **🏁 Performance Goals**: Speed vs. flexibility requirements  
    **📈 Data Volume**: Current and projected growth  
    **🔄 Access Patterns**: Read-heavy vs. write-heavy workloads  
    **🧩 Consistency Needs**: Strong vs. eventual consistency

!!! note "CAP Trade-offs"
    **🔄 CP Databases**: Consistent and partition tolerant (MongoDB, HBase)  
    **🔌 AP Databases**: Available and partition tolerant (Cassandra, CouchDB)  
    **🔒 CA Databases**: Consistent and available, but rare in distributed systems  
    **⚖️ Practical Approach**: Most systems balance these properties situationally


!!! note "Use Case Mapping"
    **💼 E-commerce**: Often PostgreSQL, MySQL, or MongoDB  
    **📱 Social Media**: Cassandra, Neo4j, or Redis + RDBMS  
    **📊 Analytics**: Redshift, Snowflake, or ClickHouse  
    **🔄 Caching**: Redis or Memcached
