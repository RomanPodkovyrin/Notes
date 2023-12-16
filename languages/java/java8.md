# Java 8

- [Java 8](#java-8)
  - [Lambda](#lambda)
    - [Functional Interfaces](#functional-interfaces)
  - [Streams](#streams)
    - [Stream Creation](#stream-creation)
    - [Method Types and Pipelines](#method-types-and-pipelines)
    - [Stream Pipeline](#stream-pipeline)
    - [Lazy Evaluation](#lazy-evaluation)
  - [Source](#source)


## Lambda

Functional approach to writing methods. Anonymous functions can be passed as arguments to other methods or stored in variables. Simplifies the use of APIs that rely on callbacks or event handlers.

```java
x -> x - 1 // single parameter
(x, y) -> x - y // multi-parameter
```

More complex expressions can be put between curly braces

```java
(x, y) -> {
code block
return ;
}
```

Lambdas are used when passed as a parameter to a function

```java
ArrayList<Integer> nums = new ArrayList<>();
nums.add(42);
nums.add(300);
nums.(90000);
nums.forEach( (n) -> { System.out.println(n);});
```

### Functional Interfaces

Functional Interfaces:

- `Consumer:` accepts a single input and returns no output
    - `void accept(T t);` Single Abstractor Method (**SAM**), Accepts single argument of type T
    - `default Consumer<T> and Then(Consumer<? super T> after);` default method used for composition
    
    ```java
    Consumer<String> printConsumer = t -> System.out.println(t);
    Stream<String> cities = Stream.of("London", "New York", "Mexico City");
    cities.forEach(printConsumer);
    ```
    
    - Composing Multiple consumers
    
    ```java
    Stream<String> cities = Stream.of("London", "New York", "Mexico City");
    Consumer<List<String>> upperCaseConsumer = list -> {
    	for (int i=0; i < list.size(); i++) {
    		list.set(i, list.get(i).toUpperCase());
    	}
    };
    Consumer<List<String>> printConsumer = list -> list.stream().forEach(System.out::println);
    
    upperCaseconsumer.andThen(printConsumer).accept(cities);
    ```
    
- `Supplier:` indicates that this implementation is a supplier of results
    - `get()`
    
    ```java
    Supplier<Double> doubleSupplier1 = () -> Math.random();
    DoubleSupplier doubleSupplier2 = Math::random;
    
    System.out.println(doubleSupplier1.get());
    System.out.println(doubleSupplier2.getAsDouble());
    
    ```
    
- `Predicate:` Boolean-valued function of an argument. Mainly used to filter data from Java Steam.  The filter method of a stream accepts a predicate to filter the data and returns a new stream satisfying the predicate
    - `test()` accepts an argument and returns a boolean value
    
    ```java
    List<String> names = Arrays.asList("Roman", "Scott", "Alex");
    Predicate<String> nameStartsWithS = str -> str.startsWith("S");
    
    names.stream().filter(nameStartsWithS).forEach(System.out::println);
    ```
    
- `Function:` a generic interface that takes 1 argument and produces a result. Has a Single Abstract Method (SAM) which accepts an argument of type T and produces a result of type R. Ex [stream.map](http://stream.map) method.
    
    ```java
    List<String> names = Array.asList("Roman", "Scott", "Alex");
    Function<String, Integer> nameMappingFunction = String::length;
    List<Integer> nameLength = name.stream().map(nameMappingFunction).collect(Collectors.toList());
    ```
    

## Streams

A new API for processing collections of data in a declarative way. Streams support lazy evaluation, parallel execution, and functional operations such as **map**, **filter**, **reduce**, and **collect**. 

- Stream is not a data structure and it never modifies the underlying data source.
    
    

### Stream Creation

```java
// Array
private static Employee[] arrayOfEmps = {
    new Employee(1, "Jeff Bezos", 100000.0), 
    new Employee(2, "Bill Gates", 200000.0), 
    new Employee(3, "Mark Zuckerberg", 300000.0)
};
Stream.of(arrayOfEmps);

// List
List<Employee> empList = Arrays.asList(arrayOfEmps);
empList.stream();
```

Java 8 added a new `stream()` method to the Collection interface

```java
// Create a stream out of individual objects
Stream.of(arrayOfEmps[0], arrayOfEmps[1], arrayOfEmps[2]);
// Or using a Stream.builder()
Stream.Builder<Employee> empStreamBuilder = Stream.builder();

empStreamBuilder.accept(arrayOfEmps[0]);
empStreamBuilder.accept(arrayOfEmps[1]);
empStreamBuilder.accept(arrayOfEmps[2]);

Stream<Employee> empStream = empStreamBuilder.build();
```

Stream operator:

- `forEach` Loops over stream elements
    
    ```java
    empList.stream().forEach(e -> e.salaryIncrement(10.0));
    ```
    
    - **It’s a terminal operation**: ************************after the operation is performed, the stream pipeline is considered consumed and can no longer be used
- `map` produces a new stream after applying a function to each element of the original stream.
    
    ```jsx
    Integer[] empIds = {1, 2, 3};
    List<Employee> employees = Stream.of(empIds)
    	.map(employeeRepository::findById)
    	.collect(Collectors.toList());
    
    assertEquals(employees.size(), empIds.length);
    ```
    
- `collect` Gets stuff out of the stream once we are done with it. Performs mutable fold operations (repackaging elements to some data structures and applying some additional logic.
- `filter` Produces a new stream that contains elements that pass the given predicate
    
    ```java
    Integer[] ids = {1, 2, 3, 4};
    
    List<Employee> employees = Stream.of(ids)
    	.map(empoyeeRepository::findById)
    	.filter(e -> e !=null)
    	.filter(e -> e.getSalary() > 200000)
    	.collect(Collectors.toList());
    ```
    
- `findFirst` returns an ********Optional******** for the first entry in the stream
    
    ```java
    Integer[] ids = {1, 2, 3, 4}
    
    Employee employee = Stream.of(ids)
    	.map(employeeRepository::findById)
    	.filter(e -> e != null)
      .filter(e -> e.getSalary() > 100000)
      .findFirst()
      .orElse(null);
    ```
    
- `toArray` Returns array of the stream
    
    ```java
    Employee[] employees = empList.stream().toArray(Employee[]::new);
    // Employee[]::new  creates an empty array which is filled with elements from the stream
    ```
    
- `flatMap` Fattens the data structure
    
    ```java
    List<List<String>> namesNested = Arrays.asList( 
        Arrays.asList("Jeff", "Bezos"), 
        Arrays.asList("Bill", "Gates"), 
        Arrays.asList("Mark", "Zuckerberg"));
    
    List<String> namesFlatStream = namesNested.stream()
        .flatMap(Collection::stream)
        .collect(Collectors.toList());
    ```
    
- `peek` Similar to forEach(), but unlike it it’s not terminal. Returns a new stream which can be used further.
    
    ```java
    Employee[] arrayOfEmps = {
      new Employee(1, "Jeff Bezos", 100000.0), 
      new Employee(2, "Bill Gates", 200000.0), 
      new Employee(3, "Mark Zuckerberg", 300000.0)
    };
    
    List<Employee> empList = Arrays.asList(arrayOfEmps);
    
    empList.stream()
      .peek(e -> e.salaryIncrement(10.0))
      .peek(System.out::println)
      .collect(Collectors.toList());
    ```
    

### Method Types and Pipelines

Operations:

- `Intermediate:` returns stream on which further processing can be done
- `Terminal:` Mark the stream as consumed, after which point it can no longer be used further.

### Stream Pipeline

 

- A stream pipeline consists of a steam source, followed by zero or more intermediate operation, and a terminal operation.
    
    
- Intermediate and terminal
    
    ```java
    Long count = empList.stream()
    	.filter(e -> e.getSalary() > 20000)
    	.count();
    ```
    
- Short-circuit operation: allows computations on **infinite** streams to complete in finite time.
    
    ```java
    Stream<Integer> infiniteStream = Stream.iterate(2, i -> i * 2);
    // Stream.iterate() creats an infinite stream
    
    List<Integer> collect = infiniteStream
      .skip(3)
      .limit(5)
      .collect(Collectors.toList());
    
    assertEquals(collect, Arrays.asList(16, 32, 64, 128, 256));
    ```
    

### Lazy Evaluation

- Computation of the source data is only performed when the terminal operation is initiated, and source elements are consumed only as needed
  - All Intermediate operations are lazy, so they’re not executed until a result of a processing is actually needed.

For example, `list.stream().filter(x -> x > 0).map(x -> x * 2).sum()` is a stream expression that filters a list of numbers by keeping only the positive ones, doubles each element, and returns the sum of the resulting list.

TODO:

- **Default methods**: You can provide default implementations for interface methods, which can be overridden by implementing classes if needed. Default methods enable backward compatibility and multiple inheritances of behaviour in interfaces. For example, `interface A { default void foo() { System.out.println("A"); } }` is an interface with a default method foo().
- **Method references**: You can refer to existing methods by name instead of writing lambda expressions. Method references are useful when you want to pass a method as an argument to another method or use it as a constructor reference. For example, `System.out::println` is a method reference that refers to the println method of the System.out class.
- **Optional**: A new class that represents a value that may or may not be present. Optional helps you avoid null pointer exceptions and write more robust code by forcing you to explicitly handle the absence of a value. For example, `Optional<String> name = Optional.ofNullable(getName()); name.ifPresent(System.out::println);` is an example of using Optional to get a name from a method that may return null and print it if it is present.

## Source

- https://www.w3schools.com/java/java_lambda.asp
- https://medium.com/swlh/understanding-java-8s-consumer-supplier-predicate-and-function-c1889b9423d
https://stackify.com/streams-guide-java-8/