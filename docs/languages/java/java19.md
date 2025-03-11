---
icon: material/language-java
---
# Java 19 


Java 19 (2022):

1. Virtual Threads (preview):
   Lightweight threads for high-throughput concurrent applications.

   ```java
   try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
       IntStream.range(0, 10_000).forEach(i -> {
           executor.submit(() -> {
               Thread.sleep(Duration.ofSeconds(1));
               return i;
           });
       });
   }
   ```

2. Pattern Matching for switch (preview):
   Continued refinement of the feature introduced in Java 17.

3. Record Patterns (preview):
   Deconstructing record values in pattern matching.

   ```java
   record Point(int x, int y) {}
   
   static void printSum(Object obj) {
       if (obj instanceof Point(int x, int y)) {
           System.out.println(x + y);
       }
   }
   ```
