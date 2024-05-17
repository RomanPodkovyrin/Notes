# 1. Algorithms
## 1.1. Search Algorithms

### 1.1.1. Linear Search - `O(n)`

List **L** of **n** and target **T**, find the index of the target **T** in **L**.

1. Set i to 0.
2. If $L_i$ = T, the search terminates successfully; return i.
3. Increase i by 1.
4. If i < n, go to step 2. Otherwise, the search terminates unsuccessfully.

> If the list is ordered, can improve worst case scenario if the value is not present by checking if the value should have been passed by then

=== "Java"

    ``` java
    public class Search {
            public static int linearSearch(int[] list, int target) {
                    for(int i = 0; i < list.length; index++) {
                            if (list[i] == target) return i;
                    }
                    return -1;
            }
    }
    ```
 
=== "Python"

    ``` python
    """
    return - Index of target position in list, else returns -1
    """
    def linear_search(list, target):
            # Iterate over all elements of the list
            for i in range(0, len(list)): # Can simplify with enumerate
                    if list[i] == target:
                            return i
            # Return None if target wasn't found
            return -1
    ```

**Time Complexity**

| Best Case | Average Case | Worst Case |
| ------------------------------------- | ------------ | ------------------------------------ |
| `O(1)` | `O(n/2)` | `O(n)` |
| When target<br> is the first element | | When target<br> is the last element |

---

**Space Complexity**

| Worst Case |
| ----------------------------------------------------------- |
| `O(1)` |
| It only consumes space for 3 integers ( length , value, i ) |

**<span style="color:green">Pros:</span>**

-   Works on random and unsorted lists
-   Easy to implement

**<span style="color:red">Cons:</span>**

-   Only makes sense to use on short lists

### 1.1.2. Binary Search - `O(log n)`

Given an array A of n elements with values $A_0$ , $A_1$ , $A_2$ , … , $A _{n − 1}$ sorted such that $A_0$ ≤ $A_1$ ≤ $A_2$ ≤ ⋯ ≤ $A_{n − 1}$, and target value T, find the index of T in A.

1. Set L to 0 and R to n − 1 .
2. If L > R , the search terminates as unsuccessful.
3. Set m (middle index) to the floor of $\frac{L + R}{2}$.
4. If $A_m$ < T , set L to m + 1 and go to step 2.
5. If $A_m$ > T , set R to m − 1 and go to step 2.
6. Now $A_m$ = T , return m .

---

#### 1.1.2.1. Iterative

=== "Java"

    ``` java
    public class Search {
        public static Integer binarySearch(int[] list, int target) {
                int first = 0;
                int last = list.length -1;

                while(first <= last) {
                        int mid = (first + last) / 2;

                        if (list[mid] == target) {
                                return mid;
                        } else if (input[mid] < target) {
                                first = mid + 1;
                        } else {
                                last = mid - 1;
                        }
                }

                return -1;
        }
    }
    ```
 
=== "Python"

    ``` python
    def binary_search(list, target):
        first = 0
        last = len(list) - 1
        while first <= last:
                midpoint = (first + last) // 2
                # // floor division - rounds down
                if list[midpoint] == target:
                        return midpoint
                elif list[midpoint] < target:
                        first = midpoint + 1
                else:
                        last = midpoint - 1

        return -1
    ```
---

#### 1.1.2.2. Recursive

=== "Java"

    ``` java
    public class RecursiveBinarySearch {
        public static ini binarySearch(int[] list, int target) {
                return binarySearchHelper(list, target, 0, list.length -1)
        }

        public static int binarySearchHelper(int[] input, int target, int start, int end) {
                if (start >= end) {
                        return -1;
                } else {
                        int mid = start + (end - start) / 2;

                        if (target < input[mid]) {
                                return binarySearchHelper(input, target, start, mid-1);
                        } else if (target > input[mid]) {
                                return binarySearchHelper(input, target, mid+1, end);
                        } else {
                                return mid;
                        }
                }
        }
    }
    ```
 
=== "Python"

    ``` python
    def recursive_binary_search(list, target, start=0, end=None):
        if end is None:
                end = len(list) - 1
        if start > end:
                return -1

        mid = (start + end) // 2

        if target == list[mid]:
                return mid
        else:
                if target < list[mid]:
                        return recursive_binary_search(list, target, start, mid-1)
                else:
                        return recursive_binary_search(list, target, mid+1, end)
    ```

**Time Complexity**

| Best Case | Average Case | Worst Case |
| -------------------------------------------- | ------------ | ---------- |
| `O(1)` | `O(log n)` | `O(log n)` |
| When target<br> is the first middle element | | |

Iterative
**Space Complexity**

| Worst Case |
| ---------- |
| `O(1)` |
| |

Recursive
**Space Complexity**

| Worst Case |
| ---------------------------------------------------------- |
| `O(log n)` |
| If using a list splice function to half list on every call |

**<span style="color:green">Pros:</span>**

-   Efficient on large datasets

**<span style="color:red">Cons:</span>**

-   Only works on sorted lists

## 1.2. Sort Algorithms


# 2. Sources

-   [freeCodeCamp](https://www.youtube.com/watch?v=8hly31xKli0) Stopped at 2:56
