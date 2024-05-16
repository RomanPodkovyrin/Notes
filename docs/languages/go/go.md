# 1. Go

1. Statically typed
2. Strongly typed
3. Go is compiled
4. Fast Compile time
5. Built in concurrency
6. Simple

> Useful: go package docs <https://pkg.go.dev/>

## 1.1. Initialising the project

`Module` - Collection of Packages

`Package` - Folder that contains a collection of go files

Therefore when we are initialising a new project we are initialising a new module.

-   `go mod init my_module` initialise the module (usually it's the repo url)

The file `go.mod` contains:

```go
module my_module

go 1.21
```

> Note: when installing external packages, `go.mod` will also include those and their version.

## 1.2. Folder structure convention

//TODO

## 1.3. How to import local package

Say we have the following structure:

```bash
<root>/
 |-- util/
            |-- util1.go
            |-- util2.go
 |-- main.go
```

`util1.go`

```go
package util

func IntMin(a, b int) int {
        if a < b {
                return a
        }
        return b
}
```

`util2.go`

```go
package util

func IntMin(a, b int) int {
        if a < b {
                return a
        }
        return b
}
```

Because `util1.go` and `util2.go` are in the same package they can be called without explicit import

To call it from `main.go`

```go
package main
    util1 "companies-house-watcher/util"
    util2 "companies-house-watcher/util"
)

func main() {
    util1.IntMin(1, 2)
    util2.IntMin(1, 2)
}

```

## 1.4. File structure

```go
package main // special package name, tells the compiler to look for the entry point here (main function)
import "fmt"

func main(){
        fmt.Println("Hello World!")
}
```

## 1.5. Execution

-   `go build main.go` compiles into binary file
-   `./main` runs the program

or

-   `go run main.go` compiles and runs

## 1.6. All Key words

-   `break`
-   `default`
-   `func`
-   `interface`
-   `select`
-   `case`
-   `defer`
-   `go`
-   `map`
-   `struct`
-   `chan`
-   `else`
-   `goto`
-   `package`
-   `switch`
-   `const`
-   `fallthrough`
-   `if`
-   `range`
-   `type`
-   `continue`
-   `for`
-   `import`
-   `return`
-   `var`

## 1.7. Types

| Type                                          | Description                                                      | Default value          |
| --------------------------------------------- | ---------------------------------------------------------------- | ---------------------- |
| **bool**                                      | true or false                                                    | false                  |
| **float32**, **float64**                      | 4 and 8 byte decimal `20.2`                                      | 0.0                    |
| **int**                                       | Integers, `1`, `-10` either 32 or 64 bits, depends on the system | 0                      |
| **int8**, **int16**, **int32**, **int64**     | 1, 2, 4, 8 byte integers                                         | 0                      |
| **uint**                                      | Positive Integers either 32 or 64 bits, depends on the system    | 0                      |
| **uint8**, **uint16**, **uint32**, **uint64** | 1, 2, 4, 8 byte positive integer                                 | 0                      |
| **rune** (alias for **int32**)                | Used for characters                                              | 0                      |
| **string**                                    | Sequence of characters                                           | ""                     |
| **byte** (alias for **uint8**)                | a byte of 8 bits of non negative ints                            | 0                      |
| **complex64**, **complex128**                 | complex number `2+4i`, `-9.5+18.3i`                              | 0 Real and 0 Imaginary |

| Type      | Description    | Default value |
| --------- | -------------- | ------------- |
| Map       |                | nil           |
| Channel   |                | nil           |
| Interface |                | nil           |
| Slices    |                | nil           |
| Pointers  |                | nil           |
| Function  |                | nil           |
| error     | interface type | nil           |

## 1.8. Initialisation

```go
var defaultVar string // initialised with default value
var inferredVar = "string" // Infers the type from the assigned value

// Can assign multiple var at once(can, mix types too)
var intVal, boolVal, stringVal = 1, true, "Hello there!"
fmt.Println(intVal, boolVal, stringVal) //1 true Hello there!


// Sort hand variable declaration

intVal:= 2
intVal, boolVal, stringVal := 1, true, "Hello there!"
fmt.Println(intVal, boolVal, stringVal) //1 true Hello there!

```

### 1.8.1. Constant

```go
const pi float64 // cannot declare constants without values
const pi float64 = 3.141592653589793238462643383279502884197
pi = 1.2 // cannot do this
```

## 1.9. Strings

```go
var text string ="Hello \nWorld"
var text string `hello
world` // Allows to format the string directly
```

### 1.9.1. String length ⚠️

```go
fmt.Println(len("test")) // 4
// it returns the number of bytes rather than string length
// Ascii 1 byte, Unicode is either 1 or 2
// a = 1 byte
// γ = 2 byte
```

to make life easy, can import package for returning string length rather than number of bytes

```go
import "unicode/utf8"

fmt.Println(utf8.RuneCountInString("γ")) // 1
```

### 1.9.2. Runes

```go
var myRune rune = 'a'
fmt.Println(myRune) // 97
```

## 1.10. Casting

```go
var floatNum float32 = 10.1
var intNum int32 = 2

var result floatNum + float32(intNum)
fmt.Println(result) // 12.1
```

## 1.11. Function

```go
package main // special package name, tells the compiler to look for the entry point here (main function)
import "fmt"

func main() {
        printMe("Roman")

        var numerator int = 11
        var denominator int = 2
        var result int = intDivision(numerator, denominator)
        fmt.PrintLn(result) // 5
}

func printMe(name string) {
        fmt.Println("Hello", name) // Hello Roman
}

func intDivision(numerator int, denominator int) int {
        return numerator/denominator
}
```

### 1.11.1. Multiple returns

```go
func main() {
    var numerator int = 11
    var denominator int = 2
    var result, remainder int = intDivision(numerator, denominator)
    fmt.Printf("Result of division is %v and the remainder is %V", result, remainder)
    // Result of division is 5 and the remainder is 1
}

func intDivision(numerator int, denominator int) (int, int) {
    var result int = numerator/denominator
    var remainder int = numerator%denominator
    return result, remainder
}

```

### 1.11.2. Varadic functions

> Can be called with any number of trailing arguments

```go
package main

import "fmt"

func sum(nums ...int) {
    // here nums is [int]
    fmt.Print(nums, " ")
    total := 0

    for _, num := range nums {
        total += num
    }

    fmt.Println(total)
}


sum(1, 2) // [1 2] 3
sum(1, 2, 3) // [1 2 3] 6


// it can also be called with a slice by spreading it with ...
nums := []int{1, 2, 3, 4}
sum(nums...) // [ 1 2 3 4] 10
```

### 1.11.3. Closures

> Go supports **anonymous functions**, which can form closures

```go
 function closes over the variable i to form a closure.

func intSeq() func() int { // returns anonymous function which returns an integer
    i := 0
    // Anonymous function which *closes over* the variable `i` to form a closure
    return func() int {
        i++
        return i
    }
}


nextInt := intSeq() // assigns function to variable
// this function captures it's own i value which will be different
// for a newly initialised function variable

fmt.Println(nextInt()) // 1
fmt.Println(nextInt()) // 2
fmt.Println(nextInt()) // 3

newInts := intSeq()
fmt.Println(newInts()) // 1
```

### 1.11.4. Recursion

## 1.12. Error Handling

> Note: Unlike other programming languages, go doesn't use `try/catch` to handle errors. Go communicates error via an explicit separate return value Those are handled with
>
> -   `New()`
> -   `Errorf()`

```go

import (
    "errors"
    "fmt"
)

func main() {
    var numerator int = 11
    var denominator int = 2
    var result, remainder, err = intDivision(numerator, denominator)
    if err!=nil{
        fmt.Printf(err.Error())
        return
    }
    fmt.Printf("Result of division is %v and the remainder is %V", result, remainder)
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

## 1.13. Control flow

### 1.13.1. If/Else

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

Values can be declared in If statements, those will be available in current and subsecant branches

```go
if num := 9000; num < 0 {
    fmt.Println(num, "is negative")
} else if num < 10 {
    fmt.Println(num, "has 1 digit")
} else {
    fmt.Println(num, "has multiple digits")
}
```

> Note: There is no `ternary if` in Go 😭

### 1.13.2. Switch

```go

i := 2
switch i {
case 1:
    fmt.Println("one")
case 2, 3:
    fmt.Println("two and three")
case 4:
    fmt.Println("four")
default:
    fmt.Println("All other numvers")
}
```

Switch can be used without expressions making it behave like if/else

```go
        t := time.Now()
        switch {
        case t.Hour() < 12: // If
                fmt.Println("It's before noon")
        default: // else
                fmt.Println("It's after noon")
        }
```

Type switch compares types instead of values

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

        whatAmI(true) // I'm a bool
        whatAmI(1) // I'm an int
        whatAmI("hey") // Don't know type string
```

## 1.14. Data Structures

### 1.14.1. Arrays

> Note: Arrays are:
>
> -   Fixed length
> -   Same Type values
> -   Indexable
> -   Stored contiguously in memory

```go
// Array initialisation
var intArr [3]int32 // It's initialised with default value, there fore [0, 0, 0]
// or
var intArray [3]int32{1,2,3}
// or
intArray := [...]int32{1,2,3} // infered length

// Fixed Length: Can only hold 3 values
// Same type Value: Each value is of type int32
// array [0, 0, 0]
//                |    |    |
// index    0    1    2

// Contiguous store: each value of int32 is 4 bytes, overall intArr allocates 12 bytes

intArr[1] = 42 // sets the second element to 42

fmt.Println(intArr[0]) // access first element
fmt.Println(intArr[1:3]) // access element 1 and 2

// & - returns memory address
fmt.Println(&intArr[0]) // 0x14000122004
fmt.Println(&intArr[0]) // 0x14000122008
fmt.Println(&intArr[0]) // 0x1400012200c
```

2d arrays

```go
//            [row][column]
var twoD [2][3]int
for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
                twoD[i][j] = i + j
        }
}
fmt.Println(twoD) // [[0 1 2] [1 2 3]]
```

### 1.14.2. Slices

> Slices wraps arrays to give a more general, powerful, and convenient interface to sequences of data

```go
// Initialise a slice
var intSlice []int32 = []int32{4,5,6}
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


// can append another slice or multiple values
var intSlice2 []int32 = []int32{8,9}
intSlice = append(intSlice, intSlice2...) // [4, 5, 6, 7, 8, 9]
// or
intSlice = append(intSlice, 7, 8) // will render the same result
```

> Note 💡: Good idea to allocate expected amount of capacity to avoid constantly reallocating slice memory and affecting performance

| Function                              | Return                    | Description                                                                                           |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `make(type[], length, capacity)`      | `type[]`returns new slice | another way to create a slice. (Capacity is optional)                                                 |
| `append()`                            | slice with new capacity   | adds element to a slice                                                                               |
| `copy(destinationSlice, originSlice)` |                           | copy element of one slice to another. Does not change destination capacity, if origin differs in size |
| `len(slice)`                          | `int`                     | find the length of a slice                                                                            |
| `cap(int)`                            | `int`                     | capacity of the slice before it has to reallocate again                                               |

"Slice operator" `slice[low:high]`

```go
var l []string = []string{a, b, c, d, e, f}
//                                                     [a b c d e f]
fmt.Println("sl3:", s[2:5])//[c d e]
fmt.Println("sl3:", s[:5])// [a b c d e]
fmt.Println("sl3:", s[2:])// [c d e f]
```

Multi-dimensional data structures. Length of the inner slice can vary, unlike with multi-dimensional arrays

```go
twoD := make([][]int, 3)
for i := 0; i < 3; i++ {
        innerLen := i + 1
        twoD[i] = make([]int, innerLen)
        for j := 0; j < innerLen; j++ {
                twoD[i][j] = i + j
        }
}
fmt.Println("2d: ", twoD) // 2d:    [[0] [1 2] [2 3 4]]
```

More about slices implementation in go <https://go.dev/blog/slices-intro>

### 1.14.3. Maps `map[string]int32`

```go
var myMap = map[string]uint8 = make(map[string]uint8)
// Key - string, value uint8

// or direct Initialisation
var ageMap = map[string]uint8{"Roman": 26, "Wun": 30}
fmt.Println(ageMap["Roman"]) // 26
fmt.Println(ageMap["IDon't Exist"]) //⚠️ if doesn't exists, returns default value, ie 0 here
// can check if that value actually exists like this
var age, exists = ageMap("IDon't Exist") // age = 0, exists = false

// Delete entry form map
delete(ageMap, "Roman")

// Number of Key/Value Pairs
var pairs = len(ageMap)

// Remove all Keys
clear(ageMap)
```

Look at `maps` package for more useful utility functions

## 1.15. Iteration

### 1.15.1. `range`

> ⚠️: Has a random order of elements when using range with Map

```go
// SLICES
var nums []int{2, 3, 4}
sum := 0
for _, num := range nums {
    sum += num
}

for index, num := range nums {
    fmt.Println("index:", i, " num:", num)
}


// MAP
kvs := map[string]string{"a": "banana", "b": "apple",}
for key, value := range kvs {
    fmt.Printf("%s -> %s\n", k, v)
}
```

When iterating a string it iterates over Unicode code points.

-   First value is the starting byte index of the rune
-   Second is the rune itself

### 1.15.2. While loop

```go
for i<10 {
    fmt.Println(i)
    i = i + 1
}

// or
for {
    if i > = 10 {
        break
    }
    fmt.Println(i)
    i = i + 1
}
```

### 1.15.3. For loop

```go
for i := 7; i <=9: i ++ {
    fmt.Println(i)
}
```

can also use `continue` keyword

| shorthand | action           |
| --------- | ---------------- |
| i--       | decrements by 1  |
| i++       | increments by 1  |
| i+=10     | increments by 10 |
| i-+10     | decrements by 10 |
| i\*=10    | multiply by 10   |
| i/=10     | divide by 10     |

27:00

## 1.16. Sources

-   [Go By Example](https://gobyexample.com/)
-   [Programiz](https://www.programiz.com/golang)
