# 1. Kotlin

It is a high level strongly statically typed language that combines functional and technical part in a same place

- [1. Kotlin](#1-kotlin)
- [2. Hello World](#2-hello-world)
- [3. Comments](#3-comments)
  - [3.1. Single-line Comments](#31-single-line-comments)
  - [3.2. Multi-line Comments](#32-multi-line-comments)
- [4. Variables](#4-variables)
  - [4.1. Variable Types](#41-variable-types)
  - [4.2. Notes on `val`](#42-notes-on-val)
- [5. Data Types](#5-data-types)
  - [5.1. Integer types](#51-integer-types)
  - [5.2. Floating-point types](#52-floating-point-types)
  - [5.3. Booleans](#53-booleans)
  - [5.4. Characters](#54-characters)
  - [5.5. Strings](#55-strings)
  - [5.6. Type Conversion](#56-type-conversion)
- [6. Operations](#6-operations)
  - [6.1. Addition assignment](#61-addition-assignment)
  - [6.2. Comparison Operators](#62-comparison-operators)
  - [6.3. Logic Operator](#63-logic-operator)
- [7. String](#7-string)
  - [7.1. Access a String](#71-access-a-string)
  - [7.2. Length](#72-length)
  - [7.3. String Functions](#73-string-functions)
  - [7.4. Comparing Strings](#74-comparing-strings)
  - [7.5. Finding a String in a String](#75-finding-a-string-in-a-string)
  - [7.6. String Concatenation](#76-string-concatenation)
  - [7.7. Quotes Inside a String](#77-quotes-inside-a-string)
  - [7.8. String Templates](#78-string-templates)
- [8. Boolean](#8-boolean)
- [9. If ... Else](#9-if--else)
  - [9.1. if](#91-if)
  - [9.2. else](#92-else)
  - [9.3. else if](#93-else-if)
  - [9.4. if..else expression](#94-ifelse-expression)
- [10. When](#10-when)
- [11. While Loop](#11-while-loop)
  - [11.1. Do..While Loop](#111-dowhile-loop)
- [12. Break and Continue](#12-break-and-continue)
- [13. Arrays](#13-arrays)
  - [13.1. Primitive type arrays](#131-primitive-type-arrays)
  - [13.2. Change an Array Element](#132-change-an-array-element)
  - [13.3. Access the Elements of an Array](#133-access-the-elements-of-an-array)
  - [13.4. Array Length/Size](#134-array-lengthsize)
  - [13.5. Check if an Element Exists](#135-check-if-an-element-exists)
  - [13.6. Loop Through an Array](#136-loop-through-an-array)
- [14. Collections](#14-collections)
  - [14.1. Iteration](#141-iteration)
  - [14.2. Check if collection contains an object](#142-check-if-collection-contains-an-object)
  - [14.3. Use Lambda expressions to filter and map collections](#143-use-lambda-expressions-to-filter-and-map-collections)
- [15. Nullable Values and null checks](#15-nullable-values-and-null-checks)
- [16. Type checks and automatic casts](#16-type-checks-and-automatic-casts)
- [17. Null Safety](#17-null-safety)
  - [17.1. Safe call](#171-safe-call)
  - [17.2. Elvis](#172-elvis)
  - [17.3. The !! operator](#173-the--operator)
- [18. For Loop](#18-for-loop)
  - [18.1. Ranges](#181-ranges)
  - [18.2. Check if a Value Exists](#182-check-if-a-value-exists)
  - [18.3. Break or Continue](#183-break-or-continue)
- [19. Functions](#19-functions)
  - [19.1. Parameters](#191-parameters)
    - [19.1.1. Variable Arguments](#1911-variable-arguments)
  - [19.2. Return Values](#192-return-values)
    - [19.2.1. Short hand for Return Values](#1921-short-hand-for-return-values)
    - [19.2.2. Void/Unit Return type](#1922-voidunit-return-type)
- [20. OOP](#20-oop)
  - [20.1. Classes and Objects](#201-classes-and-objects)
    - [20.1.1. Create a Class](#2011-create-a-class)
    - [20.1.2. Create an Object](#2012-create-an-object)
  - [20.2. Constructor](#202-constructor)
  - [20.3. Class Functions](#203-class-functions)
    - [20.3.1. Class Function Parameters](#2031-class-function-parameters)
  - [20.4. Inheritance (Subclass and Superclass)](#204-inheritance-subclass-and-superclass)
- [21. Package Definition and Imports](#21-package-definition-and-imports)
- [22. Program Entry Point](#22-program-entry-point)
- [23. References](#23-references)

# 2. Hello World

```kotlin
fun main() {
    println("Hello World)
}
```

# 3. Comments

## 3.1. Single-line Comments

```kotlin
// This is a comment
println("Hello World")
```

## 3.2. Multi-line Comments

```kotlin
/* The code below will print the words Hello World
to the screen, and it is amazing */
println("Hello World")
```

# 4. Variables

```kotlin
var mutableVariable = value // variable or mutable
val constantValue = value // constant or immutable
```

## 4.1. Variable Types

Variables in Kotlin do not need to be declared with a specified type. Kotlin is smart casing types

```kotlin
var name = "John"      // String (text)
val birthyear = 1975   // Int (number)
```

But you can specify the type

```kotlin
var name: String = "John" // String
val birthyear: Int = 1975 // Int
```

> You can also declare variable without a value, but you need to give it a type to make this possible

## 4.2. Notes on `val`

When you create a variable with the `val` keyword, the value **cannot** be changed/reassigned

# 5. Data Types

```kotlin
val myNum = 5             // Int
val myDoubleNum = 5.99    // Double
val myLetter = 'D'        // Char
val myBoolean = true      // Boolean
val myText = "Hello"      // String
```

## 5.1. Integer types

| Type  | Size (bits) | Min value                               | Max value                                |
| ----- | ----------- | --------------------------------------- | ---------------------------------------- |
| Byte  | 8           | -128                                    | 127                                      |
| Short | 16          | -32768                                  | 32767                                    |
| Int   | 32          | -2,147,483,648 ($-2 ^ {31}$)            | 2,147,483,647 ($2 ^{31}$- 1)             |
| Long  | 64          | -9,223,372,036,854,775,808 ($-2 ^{63}$) | 9,223,372,036,854,775,807 ($2^ {63}$- 1) |

```kotlin
val one = 1 // Int
val threeBillion = 3000000000 // Long
val oneLong = 1L // Long
val oneByte: Byte = 1
```
## 5.2. Floating-point types
| Type   | Size (bits) | Significant bits | Exponent bits | Decimal digits |
| ------ | ----------- | ---------------- | ------------- | -------------- |
| Float  | 32          | 24               | 8             | 6-7            |
| Double | 64          | 53               | 11            | 15-16          |



```kotlin
val pi = 3.14 // Double
val one: Double = 1 // Error: type mismatch
val oneDouble = 1.0 // Double


val e = 2.7182818284 // Double
val eFloat = 2.7182818284f // Float, actual value is 2.7182817
```

Can use underscore to make integer values more readable
```kotlin
val oneMillion = 1_000_000
val creditCardNumber = 1234_5678_9012_3456L
val socialSecurityNumber = 999_99_9999L
val hexBytes = 0xFF_EC_DE_5E
val bytes = 0b11010010_01101001_10010100_10010010
```

## 5.3. Booleans
```kotlin
val isKotlinFun: Boolean = true
val isFishTasty: Boolean = false
println(isKotlinFun)   // Outputs true
println(isFishTasty)   // Outputs false 
```
## 5.4. Characters
```kotlin
val myGrade: Char = 'B'
println(myGrade) 
```
> Can't use ASCII values to display a characters like in java
## 5.5. Strings
```kotlin
val myText: String = "Hello World"
println(myText)
```
## 5.6. Type Conversion 
```kotlin
val x: Int = 5
val y: Long = x.toLong()
println(y) 
```
# 6. Operations
- `+`
- `-`
- `*`
- `/`
- `%` - modulus - returns the division remainder
- `++` - increment the value - `++x`
- `--` - decrement the value 
  
## 6.1. Addition assignment
```kotlin
var x = 10
x += 5
```
> Can do the same thing with other operators like
> +, -, *, /, %

## 6.2. Comparison Operators
- `==`
- `!=`
- `>`
- `<`
- `>=`
- `<=`

## 6.3. Logic Operator
- `&&`
- `||`
- `!`

# 7. String
```kotlin
var greeting = "Hello"
var greeting: String = "Hello"
```
## 7.1. Access a String
```kotlin
var txt = "Hello World"
println(txt[0]) // first element (H)
println(txt[2]) // third element (l) 
```
## 7.2. Length
```kotlin
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
println("The length of the txt string is: " + txt.length) 
```
## 7.3. String Functions
```kotlin
var txt = "Hello World"
println(txt.toUpperCase())   // Outputs "HELLO WORLD"
println(txt.toLowerCase())   // Outputs "hello world" 
```
## 7.4. Comparing Strings
```kotlin
var txt1 = "Hello World"
var txt2 = "Hello World"
println(txt1.compareTo(txt2))  // Outputs 0 (they are equal) 
```
## 7.5. Finding a String in a String 
```kotlin
var txt = "Please locate where 'locate' occurs!"
println(txt.indexOf("locate"))  // Outputs 7 
```
## 7.6. String Concatenation

```kotlin
var firstName = "John"
var lastName = "Doe"
println(firstName + " " + lastName) 
```
OR
```kotlin
var firstName = "John "
var lastName = "Doe"
println(firstName.plus(lastName)) 
```

## 7.7. Quotes Inside a String
```kotlin
var txt1 = "It's alright"
var txt2 = "That's great"
```
## 7.8. String Templates
```kotlin
var a = 1
// simple name in template:
val s1 = "a is $a" 

a = 2
// arbitrary expression in template:
val s2 = "${s1.replace("is", "was")}, but now is $a"
// outputs "a was 1, but now is 2"
```

# 8. Boolean
```kotlin
val x = 10
val y = 9
println(x > y) // Returns true, because 10 is greater than 9 
```
```kotlin
println(10 == 15); // Returns false, because 10 is not equal to 15 
```
# 9. If ... Else

- Less than: `a < b`
- Less than or equal to: `a <= b`
- Greater than: `a > b`
- Greater than or equal to: `a >= b`
- Equal to `a == b`
- Not Equal to: `a != b`

> Unlike java, `if .. else` can be used as a **statement** or as an **expression** (to assign a value to a variable) in Kotlin

## 9.1. if
```kotlin
if (condition) {
  // block of code to be executed if the condition is true
}
```
## 9.2. else
```kotlin
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```
## 9.3. else if
```kotlin
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```
## 9.4. if..else expression
```kotlin
val time = 20
val greeting = if (time < 18) {
  "Good day."
} else {
  "Good evening."
}
println(greeting) 
```
> When using `if` as an expression, you **must** also include `else` (required)
# 10. When
```kotlin

val day = 4

val result = when (day) {
  1 -> "Monday"
  2 -> "Tuesday"
  3 -> "Wednesday"
  4 -> "Thursday"
  5 -> "Friday"
  6 -> "Saturday"
  7 -> "Sunday"
  else -> "Invalid day."
}
println(result)

// Outputs "Thursday" (day 4) 
```

```kotlin
fun describe(obj: Any): String =
    when (obj) {
        1          -> "One"
        "Hello"    -> "Greeting"
        is Long    -> "Long"
        !is String -> "Not a string"
        parseInt(s) -> print("s encodes x")
        else       -> "Unknown"
    }
```

```kotlin
when {
    x.isOdd() -> print("x is odd")
    y.isEven() -> print("y is even")
    else -> print("x+y is odd")
}
```
# 11. While Loop
```kotlin
while (condition) {
  // code block to be executed
}
```
## 11.1. Do..While Loop
```kotlin
do {
  // code block to be executed
}
while (condition);
```
# 12. Break and Continue
Jump out of a loop
```kotlin
var i = 0
while (i < 10) {
  println(i)
  i++
  if (i == 4) {
    break
  }
}
```
Goes to the next iteration
```kotlin
var i = 0
while (i < 10) {
  if (i == 4) {
    i++
    continue
  }
  println(i)
  i++
}
```

Can also use tags to specify exact loop
```kotlin
loop@ for (i in 1..100) {
    for (j in 1..100) {
        if (...) break@loop
    }
}
```
Same with `return` when using lambda expressions
```kotlin
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach lit@{
        if (it == 3) return@lit // local return to the caller of the lambda - the forEach loop
        print(it)
    }
    print(" done with explicit label")
}
```

# 13. Arrays
```kotlin
val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
```
```kotlin
// Creates an Array<String> with values ["0", "1", "4", "9", "16"]
val asc = Array(5) { i -> (i * i).toString() }
asc.forEach { println(it) }
```
## 13.1. Primitive type arrays
`ByteArray`, `ShortArray`, `IntArray`
```kotlin
val x: IntArray = intArrayOf(1, 2, 3)
x[0] = x[1] + x[2]
```
```kotlin
// Array of int of size 5 with values [0, 0, 0, 0, 0]
val arr = IntArray(5)

// e.g. initialise the values in the array with a constant
// Array of int of size 5 with values [42, 42, 42, 42, 42]
val arr = IntArray(5) { 42 }

// e.g. initialise the values in the array using a lambda
// Array of int of size 5 with values [0, 1, 2, 3, 4] (values initialised to their index value)
var arr = IntArray(5) { it * 1 }
```

## 13.2. Change an Array Element
```kotlin
val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
cars[0] = "Opel"
println(cars[0])
// Now outputs Opel instead of Volvo
```
## 13.3. Access the Elements of an Array
```kotlin
val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
println(cars[0])
// Outputs Volvo
```
## 13.4. Array Length/Size
```kotlin
val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
println(cars.size)
// Outputs 4
```
## 13.5. Check if an Element Exists
```kotlin
val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
if ("Volvo" in cars) {
  println("It exists!")
} else {
  println("It does not exist.")
}
```
## 13.6. Loop Through an Array
```kotlin
val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
for (x in cars) {
  println(x)
}
```
# 14. Collections
## 14.1. Iteration
```kotlin
for (item in items) {
    println(item)
}
```
```kotlin
fun saysHello(greeting: String, vararg itemsToGreat:String) {
    itemsToGreat.forEach{itemToGreat ->
        println("$greeting $itemToGreat")
    }
}


fun main() {
    var interestingThings = arrayOf("Kotlin", "Programming", "Comics")
    saysHello("Hello", *interestingThings)

```
## 14.2. Check if collection contains an object

```kotlin
when {
    "orange" in items -> println("juicy")
    "apple" in items -> println("apple is fine too")
}
```
## 14.3. Use Lambda expressions to filter and map collections
```kotlin
val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
fruits
    .filter { it.startsWith("a") }
    .sortedBy { it }
    .map { it.uppercase() }
    .forEach { println(it) }        
```

```kotlin
val list2 = listOf("Kotlin", "Java", "C++", "JavaScript", null, null)
    list2
        .filterNotNull()
        .filter(predicate)
//        .take(3)
//        .map{it.length}
        .associate{it to it.length}
        .forEach {
            println(it)
        }
```
# 15. Nullable Values and null checks
A reference must be explicitly marked as nullable when `null` value is possible. Nullable type names have `?` at the end.
```kotlin
fun parseInt(str: String): Int? {
    // ...
}
```
# 16. Type checks and automatic casts
```kotlin
fun getStringLength(obj: Any): Int? {
    if (obj is String) {
        // `obj` is automatically cast to `String` in this branch
        return obj.length
    }

    // `obj` is still of type `Any` outside of the type-checked branch
    return null
}
```
or 
```kotlin
fun getStringLength(obj: Any): Int? {
    if (obj !is String) return null

    // `obj` is automatically cast to `String` in this branch
    return obj.length
}
```
or
```kotlin
fun getStringLength(obj: Any): Int? {
    // `obj` is automatically cast to `String` on the right-hand side of `&&`
    if (obj is String && obj.length > 0) {
        return obj.length
    }

    return null
}
```
# 17. Null Safety
Checking for null in conditions
```kotlin
val l = if (b != null) b.length else -1
```
## 17.1. Safe call
```kotlin
val a = "Kotlin"
val b: String? = null
println(b?.length) // returns null
println(a?.length) // Unnecessary safe call
```

safe calls are usefull in chains
```kotlin
bob?.department?.head?.name
```
Use `let` to perform operations only for non-null values
```kotlin
val listWithNulls: List<String?> = listOf("Kotlin", null)
for (item in listWithNulls) {
    item?.let { println(it) } // prints Kotlin and ignores null
}
```
A safe call can also be placed on the left side of an assignment. Then, if one of the receivers in the safe calls chain is `null`, the assignment is skipped, and the expression on the right is not evaluated at all:
```kotlin
// If either `person` or `person.department` is null, the function is not called:
person?.department?.head = managersPool.getManager()
```
## 17.2. Elvis
```kotlin
val l = b ?: -1
// l = b if b is not null
// l = -1 if b is null
```
## 17.3. The !! operator
**Not-null assertion**
Converts any value to a non-null type and throws an exception if the value is null
```kotlin
val l = b!!.length
```

# 18. For Loop
Unlike Java and other languages, there is no traditional `for` loop in kotlin
```kotlin
for (x in 1..10 step 2) {
    print(x)
}
// 13579
println()
for (x in 9 downTo 0 step 3) {
    print(x)
}
//9630
```

`For` iterates through anything that provides an iterator. That means that it:
-  has a member or an extension function `iterator()` that returns `Iterator<>`:

   - has a member or an extension function `next()`

   - has a member or an extension function `hasNext()` that returns `Boolean`.

All of these three functions need to be marked as `operator`.

## 18.1. Ranges
```kotlin
for (chars in 'a'..'x') {
  println(chars)
}
```
```kotlin
for (nums in 5..15) {
  println(nums)
}
```
> The first and last value are included in the range
## 18.2. Check if a Value Exists
```kotlin
val nums = arrayOf(2, 4, 6, 8)
if (2 in nums) {
  println("It exists!")
} else {
  println("It does not exist.")
}
```
## 18.3. Break or Continue
Can also be used with for loop
# 19. Functions
```kotlin
fun main() {
  println("Hello World")
} 

fun myFunction() {
  println("I just got executed!")
}
```
## 19.1. Parameters
```kotlin
 fun myFunction(fname: String, age: Int) {
  println(fname + " is " + age)
}

fun main() {
  myFunction("John", 35)
  myFunction("Jane", 32)
  myFunction("George", 15)
}
```
### 19.1.1. Variable Arguments
```kotlin
fun saysHello(greeting: String, vararg itemsToGreat:String) {
    itemsToGreat.forEach{itemToGreat ->
        println("$greeting $itemToGreat")
    }
}


fun main() {
    var interestingThings = arrayOf("Kotlin", "Programming", "Comics")
    saysHello("Hello", *interestingThings)
    // or
    //saysHello("Hello", "Kotlin", "Programming", "Comics")

```
## 19.2. Return Values
```kotlin

fun myFunction(x: Int): Int {
  return (x + 5)
}

fun main() {
  var result = myFunction(3)
  println(result)
}
```
### 19.2.1. Short hand for Return Values
```kotlin
fun myFunction(x: Int, y: Int) = x + y // Return type is inferred

fun main() {
  var result = myFunction(3, 5)
  println(result)
}
```
### 19.2.2. Void/Unit Return type
```kotlin
fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}
```
But Unit can be omitted
# 20. OOP
## 20.1. Classes and Objects
### 20.1.1. Create a Class
```kotlin
class Car {
  var brand = ""
  var model = ""
  var year = 0
}
```
> Good practice to start class name with a Capital letter

### 20.1.2. Create an Object
```kotlin
// Create a c1 object of the Car class
val c1 = Car()

// Access the properties and add some values to it
c1.brand = "Ford"
c1.model = "Mustang"
c1.year = 1969

println(c1.brand)   // Outputs Ford
println(c1.model)   // Outputs Mustang
println(c1.year)    // Outputs 1969 
```
## 20.2. Constructor
```kotlin
class Car(var brand: String, var model: String, var year: Int)

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)
} 
```
## 20.3. Class Functions
```kotlin
class Car(var brand: String, var model: String, var year: Int) {
  // Class function
  fun drive() {
    println("Wrooom!")
  }
}

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)

  // Call the function
  c1.drive() 
} 
```
### 20.3.1. Class Function Parameters
```kotlin
class Car(var brand: String, var model: String, var year: Int) {
  // Class function
  fun drive() {
    println("Wrooom!")
  }

  // Class function with parameters
  fun speed(maxSpeed: Int) {
    println("Max speed is: " + maxSpeed)
  }
}

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)

  // Call the functions
  c1.drive()
  c1.speed(200)
} 
```

## 20.4. Inheritance (Subclass and Superclass)

- `subclass` (child) - the class that inherits from another class
- `superclass` (parent) - the class being inherited from

```kotlin
// Superclass
open class MyParentClass {
  val x = 5
}

// Subclass
class MyChildClass: MyParentClass() {
  fun myFunction() {
    println(x) // x is now inherited from the superclass
  }
}

// Create an object of MyChildClass and call myFunction
fun main() {
  val myObj = MyChildClass()
  myObj.myFunction()
} 
```
> `open` keyword in front of the **superclass**/parent , to make this the class other classes should inherit properties and functions from. As classes are final by default
# 21. Package Definition and Imports
```kotlin
package my.demo

import kotlin.text.*

// ...
```
# 22. Program Entry Point
```kotlin
fun main() {
    println("Hello world!")
}
// or
fun main(args: Array<String>) {
    println(args.contentToString())
}
```
# 23. References

- [W3schools](https://www.w3schools.com/kotlin/kotlin_comments.php)
- [Kotlin Types](https://kotlinlang.org/docs/basic-types.html#floating-point-types)
- [Kotlin Basics](https://kotlinlang.org/docs/basic-syntax.html#print-to-the-standard-output)
- [Kotlin Returns](https://kotlinlang.org/docs/returns.html#return-at-labels)
