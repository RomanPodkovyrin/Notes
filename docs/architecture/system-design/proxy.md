# 1. 📡 Proxy Servers

![](img/proxy-light.excalidraw.svg#only-light){width=500}
![](img/proxy-dark.excalidraw.svg#only-dark){width=500}

An intermediary server that sits between clients and servers, facilitating communication while providing additional benefits:

- 🧠 **Caching**: Stores frequently accessed resources to improve speed
- 🕵️ **Privacy**: Masks client identity and location
- ⚖️ **Load Balancing**: Distributes traffic across multiple servers
- 🛡️ **Security**: Filters malicious traffic and blocks unwanted content

## 1.1. 🔹 Proxy Types

!!! tip "🔄 Forward Proxy"
    Acts on behalf of clients, forwarding their requests to target servers:
    
    - ✅ Controls internet access in corporate networks
    - ✅ Provides content filtering and access control
    - ✅ Bypasses geo-restrictions

!!! tip "🔄 Reverse Proxy"
    Protects and optimizes server resources by intercepting incoming requests:
    
    - ✅ Distributes load across multiple backend servers
    - ✅ Provides SSL termination and content compression
    - ✅ Shields backend services from direct exposure

!!! warning "🌐 Open Proxy"
    Publicly accessible proxy that accepts connections from any user:
    
    - ⚠️ Often used for anonymity but poses security risks
    - ⚠️ May be compromised or monitored

!!! note "Common Specialized Proxies"

    **👁️ Transparent**: Client knows they're using a proxy; server sees client IP  
    **🕵️ Anonymous**: Server knows a proxy is used but can't identify the client  
    **🎭 Distorting**: Sends false client information to the destination  
    **🛡️ High Anonymity**: Completely conceals the use of a proxy and client identity

## 1.2. 💡 Implementation Examples

- **NGINX** and **HAProxy**: Popular reverse proxy solutions
- **Squid**: Common forward proxy implementation
- **Cloudflare**: Global CDN providing reverse proxy capabilities

## 1.3. 🔄 Forward Proxy

A forward proxy sits between client devices and the internet, forwarding client requests to web servers.

### 1.3.1. How Forward Proxies Work

1. Client sends request to the proxy server
2. Proxy evaluates the request against access control rules
3. If approved, proxy forwards request to the destination server
4. Proxy receives response and returns it to the client

### 1.3.2. Key Characteristics
- **Client-facing**: Serves client devices within a network
- **Outbound traffic**: Handles requests going from internal network to the internet
- **Client configured**: Clients must be configured to use the proxy
- **Client protection**: Hides client identities from destination servers

### 1.3.3. Common Uses 🎯
- **Access control**: Filter requests based on content/URL policies
- **Logging & monitoring**: Track user activity
- **Bandwidth savings**: Cache frequently accessed content
- **Anonymity**: Hide internal client IP addresses
- **Geolocation bypassing**: Access geo-restricted content
- **Security**: Scans for malware or harmful content

### 1.3.4. Examples of Forward Proxy Software 🖥️
- Squid
- Apache HTTP Server (with mod_proxy)
- Nginx (configured as forward proxy)
- HAProxy
- Tinyproxy

## 1.4. 🔄 Reverse Proxy

### 1.4.1. What is a Reverse Proxy?

A reverse proxy sits between client devices and backend servers, directing client requests to appropriate backend services.

### 1.4.2. How Reverse Proxies Work

- Client sends request to what appears to be the destination server
- Reverse proxy intercepts the request
- Proxy determines which backend server should receive the request
- Proxy forwards request to the selected backend server
- Backend server processes the request and returns response to proxy
- Proxy returns response to client

### 1.4.3. Key Characteristics 📋
- **Server-facing**: Protects and manages traffic to backend servers
- **Inbound traffic**: Handles requests coming from internet to internal services
- **Transparent to client**: Clients don't need any special configuration
- **Server protection**: Hides backend server details from clients

### 1.4.4. Common Uses 🎯
- **Load balancing**: Distribute client requests across multiple servers
- **SSL termination**: Handle HTTPS encryption/decryption to reduce backend load
- **Caching**: Store common responses to reduce backend workload
- **Compression**: Compress server responses before sending to clients
- **Security**: Hide backend infrastructure, provide WAF capabilities
- **Microservices gateway**: Route requests to appropriate microservices

### 1.4.5. Examples of Reverse Proxy Software
- Nginx
- Apache HTTP Server (with mod_proxy)
- HAProxy
- Traefik
- Envoy
- Caddy

## 1.5. Load Balancers

Load balancers distribute incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, optimizing resource utilization and improving application availability and reliability.

### 1.5.1. 🧩 Types of Load Balancers

#### 1.5.1.1. 🔧 Hardware Load Balancers

- Physical devices dedicated to load balancing
- Typically offer high performance and reliability
- Often expensive but provide specialized hardware acceleration

#### 1.5.1.2. 💻 Software Load Balancers

- Applications running on standard servers
- More flexible and cost-effective than hardware solutions
- Examples: NGINX, HAProxy, AWS ELB, Azure Load Balancer
- Easier to scale and integrate with cloud environments

#### 1.5.1.3. 🌐 DNS Load Balancing

- Uses Domain Name System to distribute traffic
- Simple implementation but limited control and monitoring
- Works by returning different IP addresses for the same domain
- Examples: Amazon Route 53, Cloudflare DNS

!!! note "Deployment Models"
    **🏢 On-premises**: Traditional data center deployment  
    **☁️ Cloud-based**: Managed services like AWS ELB, Azure Load Balancer  
    **🌉 Hybrid**: Combination of on-premises and cloud load balancers  
    **🌐 Global**: Distributed across multiple geographic regions

### 1.5.2. 📊 Load Balancing Algorithms

#### 1.5.2.1. 🔄 Round Robin

- Requests distributed sequentially to each server in turn
- Simple and fair but doesn't consider server load/capacity
- Useful when servers have similar capabilities
- Works well for servers with similar configuration and when load is equally distributable

#### 1.5.2.2. ⚖️ Weighted Round Robin

- Assigns different weights to servers based on capacity
- Servers with higher weights receive more connections
- Useful for heterogeneous environments

#### 1.5.2.3. 🔍 Least Connections

- Directs traffic to the server with fewest active connections
- Better utilization of resources compared to Round Robin
- Assumes all connections require similar processing power
- Ideal for longer tasks, or when a server is not evenly distributed

#### 1.5.2.4. ⏱️ Least Response Time

- Sends requests to server with lowest response time
- Combines least connections with server response time
- Provides better user experience for time-sensitive applications

!!! note "Advanced Algorithms"
    - **🧮 IP Hash**: Routes based on client IP address hash
        - Ensures client connects to the same server consistently
        - Useful for session persistence
    - **🧪 URL Hash**: Routes based on requested URL  
    - **🔄 Least Bandwidth**: Routes to server handling least traffic  
    - **🖥️ Resource-Based**: Routes based on CPU/memory metrics
    - **🌍Geographic**: Routes it to the server geographically closer to the user
        - Useful for global services for latency reduction.

### 1.5.3. 🔧 Load Balancer Features

#### 1.5.3.1. 🏥 Health Checks

- Regularly tests backend servers to ensure they're operational
- Automatically removes failed servers from rotation
- Parameters include check interval, timeout, retry attempts
- May check basic connectivity or application functionality

#### 1.5.3.2. 🔄 Session Persistence

- Ensures a client's requests are directed to the same server
- Methods include cookie-based, IP-based, or application-controlled
- Important for applications that maintain state on the server
- Also known as "sticky sessions"

#### 1.5.3.3. 🛡️ SSL Termination

- Handles SSL/TLS encryption/decryption at the load balancer
- Reduces computational load on backend servers
- Centralizes certificate management
- May re-encrypt traffic to backend servers if needed

!!! note "Security Features"
    **🔐 WAF Integration**: Web Application Firewall protection  
    **🚫 DDoS Mitigation**: Protection against distributed denial-of-service attacks  
    **🔍 Traffic Inspection**: Deep packet inspection capabilities  
    **⚠️ Rate Limiting**: Prevention of abuse through request limiting

### 1.5.4. 🏗️ Load Balancer Architectures  (Redundancy)

#### 1.5.4.1. ⚡ Active-Passive

- One active load balancer handles all traffic
- Passive/standby node takes over if active node fails
- Simple but doesn't utilize all resources during normal operation
- Provides high availability with minimal complexity

#### 1.5.4.2. 🔄 Active-Active

- Multiple load balancers actively handle traffic simultaneously
- Better resource utilization and higher throughput
- Requires more complex configuration
- Provides both high availability and scaling

#### 1.5.4.3. 🔍 Global Server Load Balancing (GSLB)

- Distributes traffic across multiple data centers
- Improves disaster recovery and user experience
- Can route users to geographically closest data center
- Often combines DNS-based routing with health checks

!!! note "Redundancy Considerations"
    **🔄 Failover Mechanisms**: How traffic is redirected during failures  
    **⏱️ Failover Time**: How quickly recovery occurs  
    **🔍 Monitoring**: How failures are detected  
    **🧪 Testing**: Regular validation of failover processes

### 1.5.5. 📊 Monitoring Load Balancers

#### 1.5.5.1. 📈 Key Metrics to Monitor

- Connection rate and count
- Request/response time
- Error rates
- Backend server health
- CPU/memory utilization
- Throughput (bandwidth)

#### 1.5.5.2. 🔍 Monitoring Tools

- Prometheus
- Grafana
- Datadog
- New Relic
- CloudWatch (AWS)
- Azure Monitor

!!! note "Critical Alerts"
    **🚨 Backend Server Failures**: When servers become unhealthy  
    **⚠️ High Latency**: When response times exceed thresholds  
    **📊 Capacity Limits**: When approaching maximum connections  
    **💽 Certificate Expiration**: When SSL/TLS certificates near expiry
