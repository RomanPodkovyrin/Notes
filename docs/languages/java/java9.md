---
icon: material/language-java
---
# Java 9


Java 9 (2017):

1. Module System (Project Jigsaw):
   Introduced modular programming to Java.

   ```java
   // module-info.java
   module com.example.myapp {
       requires java.logging;
       exports com.example.myapp.api;
   }
   ```

2. JShell (REPL):
   Interactive Java shell for quick testing and prototyping.

3. Improved Javadoc:
   Added search functionality and HTML5 support.

4. Collection Factory Methods:
   Convenient ways to create immutable collections.

   ```java
   List<String> list = List.of("a", "b", "c");
   Set<String> set = Set.of("x", "y", "z");
   Map<String, Integer> map = Map.of("key1", 1, "key2", 2);
   ```
Platform Module System (Project Jigsaw)
Interface Private Methods
Try-With Resources
Anonymous Classes
@SafeVarargs Annotation
Collection Factory Methods
Process API Improvement
New Version-String Scheme
JShell: The Java Shell (REPL)
Process API Improvement
Control Panel
Stream API Improvement
Installer Enhancement for Microsoft windows and many
more
## Source
- [Java 9 Features | Java Point]