---
icon: material/language-java
---
# Java 15

Java 15 (2020):

1. Sealed Classes (preview):
   Restrict which classes can extend a sealed class.

   ```java
   public sealed class Shape 
       permits Circle, Rectangle, Square {}
   ```

2. Hidden Classes:
   Classes that cannot be used directly by the bytecode of other classes.

3. Text Blocks (standard):
   The preview feature from Java 13 became standard.
