---
icon: material/language-java
---
# Java 12


Java 12 (2019):

1. Switch expressions (preview):
   Enhanced switch statement to work as an expression.

   ```java
   String result = switch (day) {
       case MONDAY, FRIDAY, SUNDAY -> "Weekend";
       case TUESDAY -> "Long day";
       case THURSDAY, SATURDAY -> "Short day";
       case WEDNESDAY -> "Midweek";
       default -> "Unknown day";
   };
   ```

2. Microbenchmark Suite:
   Added JMH benchmarks to the JDK source code.

