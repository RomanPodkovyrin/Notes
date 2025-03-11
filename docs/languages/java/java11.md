---
icon: material/language-java
---
# Java 11

Java 11 (2018):

1. HTTP Client (standardized):
   A modern HTTP client supporting HTTP/2 and WebSocket.

   ```java
   HttpClient client = HttpClient.newHttpClient();
   HttpRequest request = HttpRequest.newBuilder()
       .uri(URI.create("https://api.example.com"))
       .build();
   HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
   ```

2. Launch Single-File Source-Code Programs:
   Run Java source files directly without compilation.

   ```bash
   java HelloWorld.java
   ```

3. Removed JavaFX, Java EE and CORBA modules:
   These were removed from the core JDK.


