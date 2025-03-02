
## 1. Computer Architecture

![](img/computer-light.excalidraw.svg#only-light){ width="300" }
![](img/computer-dark.excalidraw.svg#only-dark){ width="300" }

Computers use **bits** (0 or 1) to represent data and commands

- `bit` - 0 or 1
- `byte` - 8 bits
- `KB` - 1024 bytes
- `MB` - 1024 KBs
- `GB` - 1024 MBs
- `TB` - 1024 GBs
- *etc...*

### 1.1. Storage

Arranged from **slowest to fastest** and **largest to smallest** possible size:

- `HDD` | `SSD` - **Non-volatile** (retains data without power)
- `RAM` - **Volatile** (loses data without power)
- `Cache` - Order of CPU looking for data in cache (L1 -> L2 -> L3 -> RAM)

### 1.2. CPU

!!! tip "CPU Functions"
    - **Fetches**, **decodes**, and **executes** instructions
    - Can read/write from RAM/Disk/Cache data

!!! warning "Memory Access"
    CPU accesses memory in this order:
    
    1. L1 Cache
    2. L2 Cache
    3. L3 Cache
    4. RAM
    
    :zap: *Faster access, but smaller capacity as you go up the list*