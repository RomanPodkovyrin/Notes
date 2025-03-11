---
icon: material/language-java
---
# Java 14


Java 14 (2020):

1. Switch expressions (standard):
   The preview feature from Java 12 became standard.

2. Records (preview):
   Compact syntax for classes that are simple data carriers.

   ```java
   record Point(int x, int y) {}
   ```

3. Pattern Matching for instanceof (preview):
   Simplified type checking and casting.

   ```java
   if (obj instanceof String s) {
       System.out.println(s.length());
   }
   ```
