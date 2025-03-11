---
icon: material/language-java
---
# Java 20


Java 20 (2023):

1. Scoped Values (incubator):
   A way to share data within and across threads without using ThreadLocal.

   ```java
   static final ScopedValue<String> USER = ScopedValue.newInstance();

   void doWork() {
       ScopedValue.where(USER, "Alice").run(() -> {
           System.out.println("User: " + USER.get());
       });
   }
   ```

2. Virtual Threads (preview):
   Continued refinement of the feature introduced in Java 19.

3. Pattern Matching for switch (preview):
   Further refinement and enhancements.
