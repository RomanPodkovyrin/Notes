
## 1. **High-level Architecture of a Production App**

![Stream flow](img/app-architecture-light.excalidraw.svg#only-light)
![Stream flow](img/app-architecture-dark.excalidraw.svg#only-dark)

!!! info
    - **`CI/CD`** - Continuous Integration and Continuous Deployment  
    - **`Load Balancer`** - Ensures user requests are evenly distributed between servers  
        :white_check_mark: Example: **Nginx**  
    - **`Logging & Monitoring`** - Standard practice is to store logs on a separate server from the production server  
        :white_check_mark: Examples: **DataDog, Sentry, Prometheus**  
    - **`Alert Server`** - Accumulates and sends out issue updates, either to users or developer Slack chats, to inform about issues.

---

### 1.1. **Investigation Process**
:mag: Once developers are informed of an issue, follow these steps to investigate
    
1. **Identify** the issue in the logs  
2. Use **Pipelines** to deploy to a safe environment and **replicate** the issue  
    :warning: Never use **production** for this  
3. **Release a quick patch** to get things working again

---