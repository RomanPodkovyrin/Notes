
## 1. 💾 Caching and CDN

!!! info "Caching Overview :gear:"
    **Purpose:** Improves system performance and efficiency
    *Involves storing temporary data copies in cache*

### 1.1. 🔄 Common Caching Locations

!!! tip "1. Browser Caching :globe_with_meridians:"
    - **Local Storage:** 
        - :floppy_disk: Stores data locally instead of server requests
        - :wrench: Configurable via browser developer tools
    
    **Header Controls:** :control_knobs:
    
    - `max-age`: Defines cache duration
    - `stale-if-error`: Fallback behavior
    - `stale-while-revalidate`: Background refresh strategy

    **Metrics:** $Cache Ratio = Cache Hits \div (Cache Hits + Cache Misses)$

!!! tip "2. Server Caching"
    - **Storage Options:**
        - Server-side storage
        - Separate cache servers
        - In-memory (Redis) or disk storage

    **Caching Strategies:**
    
    1. **Write-around:**
        - :fast_forward: Direct storage writing
        - *Best for cases where data freshness is critical*
    
    2. **Write-through:**
        - :arrows_counterclockwise: Simultaneous cache/storage updates
        - *Ensures data consistency*
        - *Can be slower than write-around*
    
    3. **Write-back:**
        - :rocket: Cache-first approach, then to permanent storage
        - :warning: Risk of data loss during crashes

    **Eviction Policies:** :broom:
    
    - `LRU` (Least Recently Used)
    - `FIFO` (First In First Out)
    - `LFU` (Least Frequently Used)

!!! tip "3. Database Caching"
    - **Implementation:**
        - Internal database system
        - External cache layer (Redis/Memcache)
    
    **Process Flow:** :arrows_counterclockwise:
    
    1. :mag: Check cache first
    2. :white_check_mark: Return cached data if present
    3. :x: Execute query if cache miss
    4. :inbox_tray: Store new results in cache

    :bulb: *Optimal for read-heavy applications*
    
    :recycle: Uses same eviction policies as server caching

!!! tip "4. CDN (Content Delivery Networks) :earth_americas:"
    **Purpose:** Distributed server network for static content delivery
    
    **Request Flow:** :arrows_counterclockwise:
    
    1. User requests resource
    2. Request redirects to nearest CDN server
    3. If cached, delivers content
    4. If not cached, fetches from origin server, caches, and delivers
    
    **Content Types:** :file_folder:
    
    - :page_with_curl: JavaScript
    - :art: HTML/CSS
    - :camera: Images/Videos

    **Distribution Strategies:** :gear:
    
    1. **Pull-based:** :arrow_down:
        - Automatic content pulling
        - *Ideal for frequently updated static content*
        - Self-managing updates
    
    2. **Push-based:** :arrow_up:
        - Manual content distribution
        - *Best for large, infrequently updated files*
        - Requires active management
    
    **Control:** :control_knobs:
    
    - `Cache-Control` header defines cache duration

### 1.2. 🌐 When to Use Each Solution

!!! tip "Use CDN When :rocket:"
    **1. Content Type:**
    
    - Static assets delivery
        - Images
        - CSS files
        - JavaScript files
        - Video content
    
    **2. Requirements:**
    
    - :globe_with_meridians: Global user base
    - :zap: High availability needs
    - Origin server load reduction

!!! warning "Use Origin Server When :gear:"
    **1. Dynamic Content:**
    
    - :arrows_counterclockwise: Frequently changing data
    - :bust_in_silhouette: Personalized user content
    
    **2. Real-time Processing:**
    
    - :hourglass_flowing_sand: Time-critical operations
    - Up-to-date data access
    
    **3. Complex Operations:**
    
    - :brain: Advanced server-side logic
    - :no_entry_sign: Non-cacheable processes

### 1.3. Benefits Breakdown

!!! success "CDN Advantages :star:"
    1. **Reduced Latency** :zap:
        - *Geographically closer servers*
        - *Faster content delivery*
    
    2. **High Availability** :shield:
        - *Better load handling*
        - *Distributed traffic*
    
    3. **Enhanced Security** :lock:
        - *DDOS protection*
        - *Security features included*

!!! success "Caching Advantages :sparkles:"
    1. **Reduced Latency** :fast_forward:
        - *Quick data access*
        - *Faster response times*
    
    2. **Server Optimisation** 
        - *Lower resource usage*
        - *Reduced database load*
    
    3. **Better UX** :star2:
        - *Faster page loads*
        - *Smoother interactions*
