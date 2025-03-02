
## 1. :globe_with_meridians: Networking Basics

!!! info "IP Addresses"
    - `IP Address` - unique identifier
        - `IPv4` - **32-bit** -> 4B addresses
        - `IPv6` - **128-bit** -> 340T addresses

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

### 1.1. DNS - Domain Name System

Translates domain names into IP addresses

`ICANN` - Internet Corporation For Assigned Names and Numbers, functioning of DNS is overseen by ICANN, which coordinates the global IP address base and domain name system

#### 1.1.1. Types of Records in DNS

| Type  | Description                                                           | Example                           |
|-------|-----------------------------------------------------------------------|-----------------------------------|
| A     | Maps a domain name to an IPv4 address                                 | example.com -> 192.168.0.42       |
| AAAA  | Maps a domain name to an IPv6 address                                 |                                   |
| CNAME | Canonical Name, direct an alias domain to a canonical domain          | example -> original.com           |
| TXT   | Allows to store text info, such as SPF and email verification records |                                   |
| NS    | Nameserver                                                            | coen.ns.cloudflare.com            |
| MX    | Main Exchanger                                                        | example.com -> mail.protonmail.ch |

### 1.2. Application Protocol

Here's the formatted version of your Markdown using the specified guidelines:

#### 1.2.1. :globe_with_meridians: HTTP

- HyperText Transfer Protocol
- Built on `TCP/IP`
- It's a **request-response** protocol
- Uses **Methods** and **Status Codes**

!!! tip "Key Features"
    - :arrow_up_down: **Stateless** protocol
    - :closed_lock_with_key: Supports **HTTPS** for secure communication
    - :repeat: Allows for **persistent connections** (HTTP/1.1+)

![](img/http-light.excalidraw.svg#only-light)
![](img/http-dark.excalidraw.svg#only-dark)

##### 1.2.1.1. Codes

!!! info "1xx Information Codes"
    - `100 Continue`: Indicates that the client should continue the request or ignore the response if the request is already finished
    - `101 Switching Protocols`:  Indicates protocol the server is switching too
    - `102 Processing`: WebDav, the server has received and is processing the request, not response is yet available.

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

Here's the formatted version of your Markdown using the specified guidelines:

#### 1.2.2. :electric_plug: Web Socket

!!! info "Web Socket Characteristics"
    - Full-duplex, **bidirectional** communication
    - Enables **real-time** data transfer
    - Runs over a single `TCP` connection
    - Designed for **low-latency**, **high-frequency** updates
    - Used for chats and streaming

![](img/websocket-light.excalidraw.svg#only-light)
![](img/websocket-dark.excalidraw.svg#only-dark)

#### 1.2.3. :video_camera: WebRTC

!!! info "WebRTC Features"
    - Web Real-Time Communication
    - Enables direct **peer-to-peer** communication
    - Supports **video**, **voice**, and **data** sharing
    - Works without plugins or additional software

#### 1.2.4. :satellite: MQTT

!!! info "MQTT Basics"
    - Message Queuing Telemetry Transport
    - Lightweight **publish-subscribe** messaging protocol
    - Designed for **constrained devices** and **low-bandwidth** networks
    - Uses a **broker** to manage message distribution

![](img/mqtt-light.excalidraw.svg#only-light)
![](img/mqtt-dark.excalidraw.svg#only-dark)

#### 1.2.5. :rabbit: AMQP

!!! info "AMQP Characteristics"
    - Advanced Message Queuing Protocol
    - Open standard for **message-oriented middleware**
    - Supports **point-to-point** and **publish-subscribe** patterns
    - Ensures **reliable** message delivery

#### 1.2.6. :envelope: SMTP

!!! info "SMTP Basics"
    - Simple Mail Transfer Protocol
    - Used for **sending** and **routing** email
    - Works on a **store-and-forward** model
    - Operates on `TCP port 25` by default

#### 1.2.7. :inbox_tray: IMAP

!!! info "IMAP Features"
    - Internet Message Access Protocol
    - **Retrieves** email messages from a mail server
    - Allows **management** of mailboxes on server
    - Keeps messages on server, enabling **access from multiple devices**

#### 1.2.8. :outbox_tray: POP3

!!! info "POP3 Characteristics"
    - Post Office Protocol version 3
    - Used to **retrieve** email from a mail server
    - Typically **downloads** messages to a local device
    - **Simpler** than IMAP, with fewer features

#### 1.2.9. :file_folder: FTP

!!! info "FTP Basics"
    - File Transfer Protocol
    - Used for **transferring files** between client and server
    - Supports both **binary** and **ASCII** file transfers
    - Uses separate **control** and **data** connections

#### 1.2.10. :closed_lock_with_key: SSH

!!! info "SSH Features"
    - Secure Shell
    - Provides **secure remote login** and other network services
    - **Encrypts** all traffic between client and server
    - Often used for **remote command execution** and **file transfers**

#### 1.2.11. :telephone_receiver: RPC

!!! info "RPC Characteristics"
    - Remote Procedure Call
    - Allows program to execute a procedure on **another computer**
    - Can be implemented over **various transport protocols**
    - **Abstracts** the complexities of network communication