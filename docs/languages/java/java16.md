---
icon: material/language-java
---
# Java 16


Java 16 (2021):

1. Records (standard):
   The preview feature from Java 14 became standard.

2. Pattern Matching for instanceof (standard):
   The preview feature from Java 14 became standard.

3. Unix-Domain Socket Channels:
   Support for Unix domain sockets as a connection mechanism.

   ```java
   var socketPath = UnixDomainSocketAddress.of("/path/to/socket");
   var channel = UnixDomainSocketChannel.open(socketPath);
   ```
