# Go

1. Statically typed
2. Strongly typed
3. Go is compiled
4. Fast Compile time
5. Built in concurrency
6. Simple

- [Go](#go)
  - [Pros and Cons](#pros-and-cons)
  - [Initialising the project](#initialising-the-project)
  - [Folder structure convention](#folder-structure-convention)
  - [File structure](#file-structure)
  - [Execution](#execution)
  - [All Key words](#all-key-words)
  - [Types](#types)
  - [Initialisation](#initialisation)
  - [Sourced](#sourced)

## Pros and Cons

Pros:

- hello

Cons:

- hello
-

## Initialising the project

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

## Folder structure convention

## File structure

```go
package main // special package name, tells the compiler to look for the entry point here (main function)
import "fmt"

func main(){
    fmt.Println("Hello World!")
}
```

## Execution

- `go build main.go` compiles into binary file
- `./main` runs the program

or

- `go run main.go` compiles and runs

## All Key words

- break
- default
- func
- interface
- select
- case
- defer
- go
- map
- struct
- chan
- else
- goto
- package
- switch
- const
- fallthrough
- if
- range
- type
- continue
- for
- import
- return
- var


## Types

| Type                           | Description                               | Default value          |
| ------------------------------ | ----------------------------------------- | ---------------------- |
| bool                           | true or false                             | false                  |
| float32, float64               | 4 and 8 byte decimal `20.2`                            | 0.0                    |
| int                            | Integers, `1`, `-10` either 32 or 64 bits | 0                      |
| int8, int16, int32, int64      | 1, 2, 4, 8 byte integers                  | 0                      |
| uint                           | Positive Integers either 32 or 64 bits    | 0                      |
| uint8, uint16,uint32, uint64   | 1, 2, 4, 8 byte positive integer          | 0                      |
| rune     (alias for **int32**) | Used for characters                       | 0                      |
| string                         | Sequence of characters                    | ""                     |
| byte (alias for **uint8**)     | a byte of 8 bits of non negative ints     | 0                      |
| complex64,complex128           | complex number `2+4i`, `-9.5+18.3i`       | 0 Real and 0 Imaginary |

| Type      | Description | Default value |
| --------- | ----------- | ------------- |
| Map       |             | nil           |
| Channel   |             | nil           |
| Interface |             | nil           |
| Slices    |             | nil           |
| Pointers  |             | nil           |
| Function  |             | nil           |

## Initialisation

```go
var defaultVar string // initialised with default value
var inferedVar = "string" // Infers the type from the assigned value

```

## Sourced
