## 1. Two Sum 

!!! success "Easy"
    **Topics:** Arrays, Hash Maps, Two-Pointer
  
!!! info "🔍 **Problem Statement**"
    Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to the target.

    - Assume each input has exactly **one** solution.
    - You may **not** use the same element twice.
    - Return the answer in **any order**.

### 📌 Examples

!!! example "Example 1"
    **Input:**  `nums = [2,7,11,15]`, `target = 9`  
    **Output:** `[0,1]`  
    **Explanation:** `nums[0] + nums[1] == 9`, so return `[0, 1]`.

!!! example "Example 2"
    **Input:**  `nums = [3,2,4]`, `target = 6`  
    **Output:** `[1,2]`

!!! example "Example 3"
    **Input:**   `nums = [3,3]`, `target = 6`  
    **Output:** `[0,1]`

### ✅ Constraints
- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- **Only one valid answer exists.**

!!! question "Follow-up:"
    Can you devise an algorithm with a time complexity **better than** `O(n²)`?

---


### 💡 Solutions

### One-pass Hash Table

While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

Complexity Analysis:

- **Time complexity**: O(n).
We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.

- **Space complexity**: O(n).
The extra space required depends on the number of items stored in the hash table, which stores at most n elements.

=== "Java"
    ```java
      class Solution {
          public int[] twoSum(int[] nums, int target) {

              HashMap<Integer, Integer> targetCheck = new HashMap<>();
              
              for (int i = 0; i < nums.length; i++) {
                  int diff = target - nums[i];
                  if (targetCheck.containsKey(diff)) {
                      return new int[]{targetCheck.get(diff), i}; 
                  }

                  targetCheck.put(nums[i], i);
              }
              return new int[]{}; 
          }
      }
    ```

<!-- === "Python"
    ```python

    ``` -->

