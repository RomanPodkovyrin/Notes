# 1. Comlexity 
## 1.1. Time Complexity

<https://www.bigocheatsheet.com/>

`Big O` - a mathematical notation that describes the limiting behaviour of a function when the argument tends towards a particular value or infinity.

![](img/BigOGraph.jpg)

**Polynomial Runtimes** - Considered efficient and adequate to be used.

| Big O        | Name             | Example                       |
| ------------ | ---------------- | ----------------------------- |
| `O(1)`       | Constant Time    | Accessing a HashMap element   |
| `O(log n)`   | Logarithmic Time | Basically reverse of exponent |
| `O(n)`       | Linear Time      | Iterating an array            |
| `O(n^2)`     | Quadratic Time   | Bubble sort                   |
| `O(n log n)` | Quasilinear Time | Merge sort                    |

**Exponential Runtimes** - Number increases exponentially, far too expensive to be used.

| Big O    | Name                                | Example                                |
| -------- | ----------------------------------- | -------------------------------------- |
| `O(2^n)` | Exponential Time                    | Usually used in brute force algorithms |
| `O(n!)`  | Factorial Time / Combinatorial Time | Travelling salesman                    |

## 1.2. Space Complexity

Like time complexity, is measured in the worst case scenario.

The size of the data structure doesn't matter in space complexity calculation. What matters is how much additional storage is needed as the algorithm progresses.

## 1.3. Recursion and Space Complexity

> In languages like python which prefer iterative approaches, languages have maximum recursive depth after which the operation fails.
>
> > Some languages have tail optimisation, which means there is no recursive depth.

-   Recursive approach doesn't modify underlying data
-   In recursive approach additional storage is used for arguments and function calls to be stored on the stack (Hence the stack overflow error)


# Resources

- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
