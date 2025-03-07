---
icon: material/language-go
---

#  1. Go

!!! info "Key Characteristics"
    1. Statically typed
    2. Strongly typed
    3. Compiled language
    4. Fast compilation
    5. Built-in concurrency
    6. Simple syntax

> 🔍 Useful: [Go package docs](https://pkg.go.dev/)

## 1.1. 📦 Initialising the Project

!!! abstract "Module Structure"
    - `Module`: Collection of Packages
    - `Package`: Folder containing Go files

- Initialize a module: `go mod init my_module` (usually repo URL)

The `go.mod` file contains:

```go
module my_module

go 1.21
```

!!! note ""
    When installing external packages, `go.mod` will include them with versions.

## 1.2. 📁 Folder Structure Convention

//TODO

## 1.3. 🔄 Importing Local Packages

Given this structure:

```bash
<root>/
 ├── util/
 │       ├── util1.go
 │       ├── util2.go
 └── main.go
```

!!! example "util1.go"
    ```go
    package util

    func IntMin(a, b int) int {
        if a < b {
            return a
        }
        return b
    }
    ```

!!! example "util2.go"
    ```go
    package util

    func IntMin(a, b int) int {
        if a < b {
            return a
        }
        return b
    }
    ```

!!! tip "Same Package"
    Files in the same package can call functions without explicit import.

!!! example "main.go"
    Example of how to call them from other paths
    ```go
    package main
    import (
        util1 "companies-house-watcher/util"
        util2 "companies-house-watcher/util"
    )

    func main() {
        util1.IntMin(1, 2)
        util2.IntMin(1, 2)
    }
    ```

## 1.4. 📄 File Structure

```go
package main // special package name, tells the compiler to look for the entry point here (main function)
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## 1.5. ▶️ Execution

!!! info inline end "Quick Run"
    `go run main.go` compiles and runs in one step

- `go build main.go` → compiles into binary
- `./main` → runs the program

## 1.6. 🔑 Keywords

```
break     default     func      interface   select
case      defer       go        map         struct
chan      else        goto      package     switch
const     fallthrough if        range       type
continue  for         import    return      var
```

## 1.7. 📊 Types

!!! info "Basic Types"
    | Type                                          | Description                                                      | Default value          |
    | --------------------------------------------- | ---------------------------------------------------------------- | ---------------------- |
    | **bool**                                      | true or false                                                    | false                  |
    | **float32**, **float64**                      | 4 and 8 byte decimal `20.2`                                      | 0.0                    |
    | **int**                                       | Integers, `1`, `-10` either 32 or 64 bits, depends on the system | 0                      |
    | **int8**, **int16**, **int32**, **int64**     | 1, 2, 4, 8 byte integers                                         | 0                      |
    | **uint**                                      | Positive integers either 32 or 64 bits, depends on the system    | 0                      |
    | **uint8**, **uint16**, **uint32**, **uint64** | 1, 2, 4, 8 byte positive integers                                | 0                      |
    | **rune** (alias for **int32**)                | Used for characters                                              | 0                      |
    | **string**                                    | Sequence of characters                                           | ""                     |
    | **byte** (alias for **uint8**)                | A byte of 8 bits of non-negative ints                            | 0                      |
    | **complex64**, **complex128**                 | Complex number `2+4i`, `-9.5+18.3i`                              | 0 Real and 0 Imaginary |

!!! info "Reference Types"
    | Type      | Description    | Default value |
    | --------- | -------------- | ------------- |
    | Map       | Key-value store| nil           |
    | Channel   | Communication  | nil           |
    | Interface | Type abstraction| nil          |
    | Slices    | Dynamic arrays | nil           |
    | Pointers  | Memory references| nil         |
    | Function  | Code block     | nil           |
    | error     | Interface type | nil           |

## 1.8. 🎯 Variable Initialization

```go
var defaultVar string // initialised with default value
var inferredVar = "string" // Infers type from value

// Multiple variables at once
var intVal, boolVal, stringVal = 1, true, "Hello there!"
fmt.Println(intVal, boolVal, stringVal) // 1 true Hello there!

// Short hand declaration
intVal := 2
intVal, boolVal, stringVal := 1, true, "Hello there!"
fmt.Println(intVal, boolVal, stringVal) // 1 true Hello there!
```

### 1.8.1. 🔒 Constants

```go
const pi float64 // cannot declare constants without values
const pi float64 = 3.141592653589793238462643383279502884197
pi = 1.2 // cannot do this - constants are immutable
```

## 1.9. 📝 Strings

```go
var text string = "Hello \nWorld"
var text string = `hello
world` // Allows direct string formatting with newlines
```

### 1.9.1. 📏 String Length ⚠️

!!! warning "Byte Count vs Character Count"
    ```go
    fmt.Println(len("test")) // 4
    // Returns number of bytes, not string length
    // ASCII: 1 byte, Unicode: 1 or 2+ bytes
    // a = 1 byte
    // γ = 2 bytes
    ```

!!! tip "Getting Correct String Length"
    ```go
    import "unicode/utf8"
    fmt.Println(utf8.RuneCountInString("γ")) // 1
    ```

### 1.9.2. 🔤 Runes

```go
var myRune rune = 'a'
fmt.Println(myRune) // 97 (ASCII value)
```

## 1.10. 🔄 Type Casting

```go
var floatNum float32 = 10.1
var intNum int32 = 2

var result = floatNum + float32(intNum)
fmt.Println(result) // 12.1
```

## 1.11. 🧩 Functions

!!! example "Basic Function"
    ```go
    package main // special package name
    // tells the compiler to look for the entry point here (main function)
    import "fmt"

    func main() {
        printMe("Roman")

        var numerator int = 11
        var denominator int = 2
        var result int = intDivision(numerator, denominator)
        fmt.Println(result) // 5
    }

    func printMe(name string) {
        fmt.Println("Hello", name) // Hello Roman
    }

    func intDivision(numerator int, denominator int) int {
        return numerator / denominator
    }
    ```

### 1.11.1. 📦 Multiple Returns

```go
func main() {
    var numerator int = 11
    var denominator int = 2
    var result, remainder int = intDivision(numerator, denominator)
    fmt.Printf("Result of division is %v and the remainder is %v", result, remainder)
    // Result of division is 5 and the remainder is 1
}

func intDivision(numerator int, denominator int) (int, int) {
    var result int = numerator / denominator
    var remainder int = numerator % denominator
    return result, remainder
}
```

### 1.11.2. 🔀 Variadic Functions

!!! tip "Variable Number of Arguments"
    Can be called with any number of trailing arguments

```go
package main

import "fmt"

func sum(nums ...int) {
    // here nums is []int (slice of integers)
    fmt.Print(nums, " ")
    total := 0

    for _, num := range nums {
        total += num
    }

    fmt.Println(total)
}

func main() {
    sum(1, 2) // [1 2] 3
    sum(1, 2, 3) // [1 2 3] 6

    // Can also be called with a slice by spreading it with ...
    nums := []int{1, 2, 3, 4}
    sum(nums...) // [1 2 3 4] 10
}
```

### 1.11.3. 🔄 Closures

!!! info "Anonymous Functions"
    Go supports **anonymous functions** which can form closures

```go
// Function closes over the variable i to form a closure
func intSeq() func() int { // returns anonymous function which returns an integer
    i := 0
    // Anonymous function which *closes over* the variable `i` to form a closure
    return func() int {
        i++
        return i
    }
}

func main() {
    nextInt := intSeq() // assigns function to variable
    // This function captures its own i value which will be different
    // for a newly initialised function variable

    fmt.Println(nextInt()) // 1
    fmt.Println(nextInt()) // 2
    fmt.Println(nextInt()) // 3

    newInts := intSeq()
    fmt.Println(newInts()) // 1
}
```

### 🔄 Recursion

## ⚠️ Error Handling

!!! warning "No Try/Catch"
    Unlike other languages, Go doesn't use `try/catch`. Instead, Go communicates errors via explicit separate return values handled with:
    
    - `errors.New()`
    - `fmt.Errorf()`

```go
import (
    "errors"
    "fmt"
)

func main() {
    var numerator int = 11
    var denominator int = 2
    var result, remainder, err = intDivision(numerator, denominator)
    if err != nil {
        fmt.Printf(err.Error())
        return
    }
    fmt.Printf("Result of division is %v and the remainder is %v", result, remainder)
    // Result of division is 5 and the remainder is 1
}

func intDivision(numerator int, denominator int) (int, int, error) {
    var err error
    if denominator == 0 {
            return 0, 0, err
    }
    var result int = numerator/denominator
    var remainder int = numerator%denominator
    return result, remainder
}
```

//TODO:conitnue
// https://www.programiz.com/golang/errors
// https://go.dev/blog/error-handling-and-go

## 🔀 Control Flow

### 🔍 If/Else

```go
num := 42
if num < 0 {
    fmt.Println(num, "is negative")
} else if num < 10 {
    fmt.Println(num, "has 1 digit")
} else {
    fmt.Println(num, "has multiple digits")
}
```

!!! tip "Scoped Variables"
    Values can be declared in if statements and will be available in current and subsequent branches:

```go
if num := 9000; num < 0 {
    fmt.Println(num, "is negative")
} else if num < 10 {
    fmt.Println(num, "has 1 digit")
} else {
    fmt.Println(num, "has multiple digits")
}
```

!!! bug "Missing Feature"
    There is no `ternary if` in Go 😭

### 🔄 Switch

```go
i := 2
switch i {
case 1:
    fmt.Println("one")
case 2, 3:
    fmt.Println("two or three")
case 4:
    fmt.Println("four")
default:
    fmt.Println("All other numbers")
}
```

!!! example "Switch Without Expression"
    Switch can be used without expressions, making it behave like if/else:

```go
t := time.Now()
switch {
case t.Hour() < 12: // If
    fmt.Println("It's before noon")
default: // else
    fmt.Println("It's after noon")
}
```

!!! info "Type Switch"
    Type switch compares types instead of values:

```go
whatAmI := func(i interface{}) {
    switch t := i.(type) {
    case bool:
        fmt.Println("I'm a bool")
    case int:
        fmt.Println("I'm an int")
    default:
        fmt.Printf("Don't know type %T\n", t)
    }
}

whatAmI(true)  // I'm a bool
whatAmI(1)     // I'm an int
whatAmI("hey") // Don't know type string
```

## 📚 Data Structures

### 📊 Arrays

!!! abstract "Array Characteristics"
    - Fixed length
    - Same type values
    - Indexable
    - Stored contiguously in memory

```go
// Array initialisation
var intArr [3]int32 // Initialised with default values: [0, 0, 0]
// or
var intArray [3]int32{1, 2, 3}
// or
intArray := [...]int32{1, 2, 3} // Inferred length

// Fixed Length: Can only hold 3 values
// Same type Value: Each value is of type int32
// array [0, 0, 0]
//       |    |    |
// index 0    1    2

// Contiguous store: each value of int32 is 4 bytes, overall intArr allocates 12 bytes

intArr[1] = 42 // Sets the second element to 42

fmt.Println(intArr[0])     // Access first element
fmt.Println(intArr[1:3])   // Access elements 1 and 2

// & - returns memory address
fmt.Println(&intArr[0])    // 0x14000122004
fmt.Println(&intArr[1])    // 0x14000122008
fmt.Println(&intArr[2])    // 0x1400012200c
```

!!! example "2D Arrays"
    ```go
    //       [row][column]
    var twoD [2][3]int
    for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
            twoD[i][j] = i + j
        }
    }
    fmt.Println(twoD) // [[0 1 2] [1 2 3]]
    ```

### 🔪 1.14.2. Slices

!!! info "Slices in Go"
    Slices wrap arrays to give a more general, powerful, and convenient interface to sequences of data.

!!! example "Slice Initialization"
    ```go
    // Initialise a slice
    var intSlice []int32 = []int32{4, 5, 6}
    // or
    var intSlice []int32 = make(int32[], 3)
    intSlice[0] = 4
    intSlice[1] = 5
    intSlice[2] = 6

    // [4, 5, 6]
    fmt.Println(len(intSlice), cap(intSlice)) // 3, 3
    intSlice = append(intSlice, 7) // changes the memory location
    // [4, 5, 6, 7, *, *]
    // 🚫: * cannot be accessed unless more elements are appended
    fmt.Println(len(intSlice), cap(intSlice)) // 4, 6

    // Can append another slice or multiple values
    var intSlice2 []int32 = []int32{8, 9}
    intSlice = append(intSlice, intSlice2...) // [4, 5, 6, 7, 8, 9]
    // or
    intSlice = append(intSlice, 7, 8) // will render the same result
    ```

!!! tip inline end "Performance Tip" 
    Allocate expected amount of capacity to avoid constantly reallocating slice memory and affecting performance.

!!! info "Slice Functions"
    | Function | Return | Description |
    |----------|--------|-------------|
    | `make(type[], length, capacity)` | `type[]` returns new slice | Create a slice (capacity is optional) |
    | `append()` | slice with new capacity | Adds element to a slice |
    | `copy(destinationSlice, originSlice)` | | Copy elements between slices. Doesn't change destination capacity |
    | `len(slice)` | `int` | Find the length of a slice |
    | `cap(int)` | `int` | Capacity of the slice before reallocation |

!!! example "Slice Operator"
    ```go
    var l []string = []string{"a", "b", "c", "d", "e", "f"}
    //                         [a b c d e f]
    fmt.Println("sl3:", l[2:5])  // [c d e]
    fmt.Println("sl3:", l[:5])   // [a b c d e]
    fmt.Println("sl3:", l[2:])   // [c d e f]
    ```

!!! example "Multi-dimensional Slices"
    Length of inner slices can vary, unlike multi-dimensional arrays
    ```go
    twoD := make([][]int, 3)
    for i := 0; i < 3; i++ {
            innerLen := i + 1
            twoD[i] = make([]int, innerLen)
            for j := 0; j < innerLen; j++ {
                    twoD[i][j] = i + j
            }
    }
    fmt.Println("2d: ", twoD) // 2d: [[0] [1 2] [2 3 4]]
    ```

More about slices implementation in Go: <https://go.dev/blog/slices-intro>

### 🗺️ 1.14.3. Maps `map[string]int32`

!!! example "Map Usage"
    ```go
    var myMap map[string]uint8 = make(map[string]uint8)
    // Key - string, value uint8

    // or direct initialization
    var ageMap = map[string]uint8{"Roman": 26, "Wun": 30}
    fmt.Println(ageMap["Roman"]) // 26
    fmt.Println(ageMap["IDon't Exist"]) //⚠️ if doesn't exist, returns default value (0 here)
    
    // Check if value actually exists
    var age, exists = ageMap["IDon't Exist"] // age = 0, exists = false

    // Delete entry from map
    delete(ageMap, "Roman")

    // Number of Key/Value Pairs
    var pairs = len(ageMap)

    // Remove all Keys
    clear(ageMap)
    ```

!!! tip
    Look at `maps` package for more useful utility functions

## 🔄 1.15. Iteration

### 1.15.1. `range`

!!! warning
    Has a random order of elements when using range with Map

!!! example "Range with Slices"
    ```go
    // SLICES
    var nums = []int{2, 3, 4}
    sum := 0
    for _, num := range nums {
        sum += num
    }

    for index, num := range nums {
        fmt.Println("index:", index, " num:", num)
    }
    ```

!!! example "Range with Maps"
    ```go
    // MAP
    kvs := map[string]string{"a": "banana", "b": "apple"}
    for key, value := range kvs {
        fmt.Printf("%s -> %s\n", key, value)
    }
    ```

!!! info
    When iterating a string, it iterates over Unicode code points:
    
    - First value is the starting byte index of the rune
    - Second is the rune itself

### 🔁 1.15.2. While Loop

!!! example
    ```go
    for i < 10 {
        fmt.Println(i)
        i = i + 1
    }

    // or
    for {
        if i >= 10 {
            break
        }
        fmt.Println(i)
        i = i + 1
    }
    ```

### 🔄 1.15.3. For Loop

!!! example
    ```go
    for i := 7; i <= 9; i++ {
        fmt.Println(i)
    }
    ```

!!! tip
    Can also use `continue` keyword


| Shorthand | Action |
|-----------|--------|
| i-- | Decrements by 1 |
| i++ | Increments by 1 |
| i+=10 | Increments by 10 |
| i-=10 | Decrements by 10 |
| i*=10 | Multiply by 10 |
| i/=10 | Divide by 10 |

## 📚 1.16. Sources

- [Go By Example](https://gobyexample.com/)
- [Programiz](https://www.programiz.com/golang)