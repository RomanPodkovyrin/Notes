---
icon: material/language-java
---
# Java 21


Java 21 (2023) - LTS:

1. Virtual Threads (standard):
   The preview feature from Java 19 and 20 became standard.

   ```java
   Thread.startVirtualThread(() -> {
       System.out.println("Running in a virtual thread");
   });
   ```

2. Pattern Matching for switch (standard):
   The preview feature from previous versions became standard.

   ```java
   static String formatterPatternSwitch(Object obj) {
       return switch (obj) {
           case Integer i -> String.format("int %d", i);
           case Long l    -> String.format("long %d", l);
           case Double d  -> String.format("double %f", d);
           case String s  -> String.format("String %s", s);
           case null      -> "null";
           default        -> obj.toString();
       };
   }
   ```

3. Record Patterns (standard):
   The preview feature from Java 19 became standard.

4. Sequenced Collections:
   New interfaces for collections with a defined encounter order.

   ```java
   SequencedCollection<String> list = new ArrayList<>(List.of("a", "b", "c"));
   String first = list.getFirst();
   String last = list.getLast();
   ```

5. Unnamed Classes and Instance Main Methods:
   Simplified syntax for small programs, useful for learning and testing.

   ```java
   void main() {
       System.out.println("Hello, World!");
   }
   ```