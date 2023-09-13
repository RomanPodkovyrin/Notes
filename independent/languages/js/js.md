# 1. JavaScript

- [1. JavaScript](#1-javascript)
  - [1.1. JavaScript vs ECMAScript](#11-javascript-vs-ecmascript)
- [2. Printout](#2-printout)
- [3. Variable declaration and definition](#3-variable-declaration-and-definition)
- [4. Access modifiers](#4-access-modifiers)
- [5. Primitive Types in JavaScript](#5-primitive-types-in-javascript)
- [6. Reference](#6-reference)


JavaScript can function as both a **procedural** and an **object oriented language**.

Web browser is the runtime environment for client-side JavaScript. 

`Node.js` is a server side environment that is operates in a similar capacity to the JVM in java

## 1.1. JavaScript vs ECMAScript
- `ECMAScript/ES` is a specification for a scripting language. 
- Not all browsers support all ES features

# 2. Printout
```js
console.log("Hello World");
```
# 3. Variable declaration and definition
> JavaScript is dynamically-typed and does not require type constraints

```js
var myNum = 42;
myNum = "forty-two";
```
There are 3 keywords for declaration:
- `var` - was default before **ES6**. But due to issues, that's why there are other ways of declaring. 
  - **Scope**: Declared global outside function. And local when declared inside the function. 
  - **var variables can be re-declared and updated**
  - **Hoisting of var**: if var is referred to before declaration. Then interpreter assumes it was assigned to `undefined`
  - The problem is that var can be redefined in the middle of the code, which can cause unexpected answers. 
- `let` - now used as the preferred variable declaration. 
  - **Block scoped**: (A block lives in curly braces)
  - **Can be updated but not re-declared**
  - Those two can be combined, by redeclaring variables in blocks. 
  - **Hoisting of let**: Just like `var` it can be hoisted on the top, but unlike `var` you get `Reference Error`
- `const` - maintain constant values
  - **Block Scoped**: can only be accessed within the block they were declared
  - **Cannot be updated or re-declared**: Therefore it's constant
    - For a constant object, the object cannot be updated or redefined but the properties can be changed. 
  - **Hoisting of const**: Hoisted but no initialised just like let
# 4. Access modifiers
There are no access modifiers like in Java, everything is accessible. 

# 5. Primitive Types in JavaScript
- `Number` - equivalent to `double` in Java
- `String` - no such thing as a `char`
- `Boolean`
- `Symbol` - ES6 addition
- `Undefined` - implicitly assigned when variable is declared but not instantiated
- `Null` - Is an explicitly assigned. 


# 6. Reference
- [Transitioning from Java to JavaScript — Quick guide on the basics you need to immediately know](https://medium.com/@byrne.greg/transitioning-from-java-to-javascript-quick-guide-on-the-basics-you-need-to-immediately-know-ef95140a7d71)
- [var let and const whats the difference](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)