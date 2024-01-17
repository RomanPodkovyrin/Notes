# 1. Go

1. Statically typed
2. Strongly typed
3. Go is compiled
4. Fast Compile time
5. Built in concurrency
6. Simple

- [1. Go](#1-go)
  - [1.1. Initialising the project](#11-initialising-the-project)
  - [1.2. Folder structure convention](#12-folder-structure-convention)
  - [1.3. File structure](#13-file-structure)
  - [1.4. Execution](#14-execution)
  - [1.5. All Key words](#15-all-key-words)
  - [1.6. Types](#16-types)
  - [1.7. Initialisation](#17-initialisation)
    - [1.7.1. Constant](#171-constant)
  - [1.8. Strings](#18-strings)
    - [1.8.1. String length ⚠️](#181-string-length-️)
    - [1.8.2. Runes](#182-runes)
  - [1.9. Casting](#19-casting)
  - [1.10. Function](#110-function)
  - [1.11. Sources](#111-sources)

## 1.1. Initialising the project

`Module` - Collection of Packages

`Package` - Folder that contains a collection of go files

Therefore when we are initialising a new project we are initialising a new module.

- `go mod init my_module` initialise the module (usually it's the repo url)

The file `go.mod` contains:

```go
module my_module

go 1.21
```

> Note: when installing external packages, `go.mod` will also include those and their version.

## 1.2. Folder structure convention

//TODO

## 1.3. File structure

```go
package main // special package name, tells the compiler to look for the entry point here (main function)
import "fmt"

func main(){
    fmt.Println("Hello World!")
}
```

## 1.4. Execution

- `go build main.go` compiles into binary file
- `./main` runs the program

or

- `go run main.go` compiles and runs

## 1.5. All Key words

- `break`
- `default`
- `func`
- `interface`
- `select`
- `case`
- `defer`
- `go`
- `map`
- `struct`
- `chan`
- `else`
- `goto`
- `package`
- `switch`
- `const`
- `fallthrough`
- `if`
- `range`
- `type`
- `continue`
- `for`
- `import`
- `return`
- `var`


## 1.6. Types

| Type                                          | Description                                                      | Default value          |
| --------------------------------------------- | ---------------------------------------------------------------- | ---------------------- |
| **bool**                                      | true or false                                                    | false                  |
| **float32**, **float64**                      | 4 and 8 byte decimal `20.2`                                      | 0.0                    |
| **int**                                       | Integers, `1`, `-10` either 32 or 64 bits, depends on the system | 0                      |
| **int8**, **int16**, **int32**, **int64**     | 1, 2, 4, 8 byte integers                                         | 0                      |
| **uint**                                      | Positive Integers either 32 or 64 bits, depends on the system    | 0                      |
| **uint8**, **uint16**, **uint32**, **uint64** | 1, 2, 4, 8 byte positive integer                                 | 0                      |
| **rune**     (alias for **int32**)            | Used for characters                                              | 0                      |
| **string**                                    | Sequence of characters                                           | ""                     |
| **byte** (alias for **uint8**)                | a byte of 8 bits of non negative ints                            | 0                      |
| **complex64**, **complex128**                 | complex number `2+4i`, `-9.5+18.3i`                              | 0 Real and 0 Imaginary |

| Type      | Description | Default value |
| --------- | ----------- | ------------- |
| Map       |             | nil           |
| Channel   |             | nil           |
| Interface |             | nil           |
| Slices    |             | nil           |
| Pointers  |             | nil           |
| Function  |             | nil           |

## 1.7. Initialisation

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

### 1.7.1. Constant

```go
const pi float64 // cannot declare constants without values
const pi float64 = 3.141592653589793238462643383279502884197
pi = 1.2 // cannot do this
```

## 1.8. Strings

```go
var text string ="Hello \nWorld"
var text string `hello
world` // Allows to format the string directly
```

### 1.8.1. String length ⚠️

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

### 1.8.2. Runes

```go
var myRune rune = 'a'
fmt.Println(myRune) // 97
```

## 1.9. Casting

```go
var floatNum float32 = 10.1
var intNum int32 = 2

var result floatNum + float32(intNum)
fmt.Println(result) // 12.1
```

## 1.10. Function

```go
package main

func main(){
    
}

func printMe(){
    fmt.Println("Hello World")
}
```

## 1.11. Sources
