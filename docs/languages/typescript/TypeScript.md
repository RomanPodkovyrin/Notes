# 1. TypeScript
- [1. TypeScript](#1-typescript)
  - [1.1. tsconfig.json](#11-tsconfigjson)
  - [1.2. Types](#12-types)
    - [1.2.1. Boolean](#121-boolean)
    - [1.2.2. Number](#122-number)
    - [1.2.3. String](#123-string)
    - [1.2.4. Array](#124-array)
    - [1.2.5. Tuple](#125-tuple)
    - [1.2.6. Enum](#126-enum)
    - [1.2.7. Unknown](#127-unknown)
    - [1.2.8. Any](#128-any)
    - [1.2.9. Void](#129-void)
    - [1.2.10. Null and Undefined](#1210-null-and-undefined)
    - [1.2.11. Never](#1211-never)
    - [1.2.12. Object](#1212-object)
  - [1.3. Interface and Fields](#13-interface-and-fields)
  - [1.4. Extending Interfaces](#14-extending-interfaces)
  - [1.5. Type Aliases](#15-type-aliases)
  - [1.6. Union Types](#16-union-types)
  - [1.7. Intersection Types](#17-intersection-types)
  - [1.8. Literal Types](#18-literal-types)
  - [1.9. Nullable Types](#19-nullable-types)
  - [1.10. Optional Chaining](#110-optional-chaining)
  - [1.11. Indexing Interlude](#111-indexing-interlude)
- [2. Reference](#2-reference)

A typed superset of JavaScript
``` typescript
let message: string = 'Hello World';
console.log(message);
```

> To compile code type `tsc helloworld.ts` this compiles it into JavaScript file
> To run `node helloworld.js`

## 1.1. tsconfig.json
Can specify to the compiler how to compile the code
`tsc --init` will create the config with options and their explanations
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src", // src files
    "outDir": "./dist" // generated js code
  }
}
```
## 1.2. Types
JavaScript:
- number
- string
- boolean
- null
- undefined
- object

TypeScript adds:
- any
- unknown
- never
- enum
- tuple


### 1.2.1. Boolean
``` typescript
let isDone: boolean = false;
```
### 1.2.2. Number
``` typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```
### 1.2.3. String
``` typescript
let color: string = "blue";
color = 'red';
```
template names 
``` typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
```
### 1.2.4. Array
``` typescript
let list: number[] = [1, 2, 3];
// or using generic type
let list: Array<number> = [1, 2, 3];
```
### 1.2.5. Tuple
``` typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.
```

accessing it 
``` typescript
// OK
console.log(x[0].substring(1));

console.log(x[1].substring(1));
Property 'substring' does not exist on type 'number'.
```
### 1.2.6. Enum
``` typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```
by default enums begin numbering their members starting at `0`, you can manually change this
``` typescript
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);

// or change all values

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```
### 1.2.7. Unknown
``` typescript
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
```
### 1.2.8. Any

> Should be avoided as it defeats the whole point of TS
``` typescript
let lever; // if variable is initialised but not assigned, the compiler assumes it's any
```
``` typescript
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
```
### 1.2.9. Void
``` typescript
function warnUser(): void {
  console.log("This is my warning message");
}
```
### 1.2.10. Null and Undefined
``` typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
### 1.2.11. Never
``` typescript
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```
### 1.2.12. Object
``` typescript
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

create(42);
Argument of type '42' is not assignable to parameter of type 'object | null'.

create("string");
Argument of type '"string"' is not assignable to parameter of type 'object | null'.

create(false);
Argument of type 'false' is not assignable to parameter of type 'object | null'.

create(undefined);
Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
```
## 1.3. Interface and Fields
TypeScript interfaces are one of the most powerful construct of the language. Interfaces help in sharing "models" across you application so that any developer can pick that shape and **conform to it** when writing code.
> [filterByTerm.ts](code/filterByTerm.ts)
``` ts
interface Link {
  url: string;
}

function filterByTerm(input: Array<Link>, searchTerm: string) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

filterByTerm(
  [{ url: "string1" }, { url: "string2" }, { url: "string3" }],
  "java"
);
```
Simple interface can be defined like this
```ts
interface Link {
  url: string;
}
```
More fields can also be added
``` ts
interface Link {
  description: string;
  id: number;
  url: string;
}
```
> Any objects of type Link must implement those fields

You can make those fields optional by adding a question mark
```ts
interface Link {
  description?: string;
  id?: number;
  url: string;
}
```

## 1.4. Extending Interfaces
Let's say we need new entity called `TranslatedLink`, it will have a very similar fields to `Link`
- id, number
- url, string
- description, string
- language, string

Lets inherit those fields

> [extendedInterface.ts](code/extendedInterface.ts)
```ts
interface Link {
  description?: string;
  id?: number;
  url: string;
}

interface TranslatedLink extends Link {
  language: string;
}

const link1: TranslatedLink = {
  description:
    "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
  id: 1,
  url: "www.valentinog.com/typescript/",
  language: "en",
};
```

## 1.5. Type Aliases
```TypeScript
type Employee {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
  id:1,
  name: 'Roman',
  retire: (date: Date) => {
    console.log(date);
  }
}
```

## 1.6. Union Types
```typescript
function kgToLbs(weight: number | string) {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10kg');
```

## 1.7. Intersection Types

```typescript
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggable & Resizable:

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}
```
## 1.8. Literal Types

```typescript
// can either be 50 or 100
// Can type it with Literal (exact, specific)

type Quantity = 50 | 100;
let quantity: Quantity = 50;
```

## 1.9. Nullable Types

```typescript
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());  
  }
  
}

greet(null)
```

## 1.10. Optional Chaining


```typescript
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday:  new Date()};
}

let customer = getCustomer(0);
// Optional Property access operator
console.log(customer?.birthday); //costumer could possibly be null
```

`?.` only executes if not `null` or `undefined`

```typescript
// Optional element access operator

let log: any = null;
log?.('a');
```

## 1.11. Indexing Interlude
# 2. Reference
- [Valentinog](https://www.valentinog.com/blog/typescript/)
- [VisualStudio](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
- [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/basic-types.html)