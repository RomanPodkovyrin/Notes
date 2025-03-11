---
icon: material/language-java
---
# Java 10


Java 10 (2018):

1. Local variable type inference (var keyword):
   Reduced boilerplate for local variable declarations.

   ```java
   var list = new ArrayList<String>();
   var stream = list.stream().map(String::toUpperCase);
   ```

2. Application Class-Data Sharing:
   Improved startup time and memory footprint for multiple JVMs.

