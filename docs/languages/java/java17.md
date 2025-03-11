---
icon: material/language-java
---
# Java 17 


Java 17 (2021) - LTS:

1. Sealed Classes (standard):
   The preview feature from Java 15 became standard.

2. Pattern Matching for switch (preview):
   Extended pattern matching to switch statements and expressions.

   ```java
   String formatted = switch (obj) {
       case Integer i -> String.format("int %d", i);
       case Long l    -> String.format("long %d", l);
       case Double d  -> String.format("double %f", d);
       case String s  -> String.format("String %s", s);
       default        -> obj.toString();
   };
   ```

3. Strong encapsulation of JDK internals:
   Further restricted access to internal APIs.
