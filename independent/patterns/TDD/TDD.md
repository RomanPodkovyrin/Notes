# 1. TDD and Refactoring

## 1.1. TOC
- [1. TDD and Refactoring](#1-tdd-and-refactoring)
  - [1.1. TOC](#11-toc)
  - [1.2. TDD](#12-tdd)
    - [1.2.1. Steps](#121-steps)
    - [1.2.2. Attributes of Good Code](#122-attributes-of-good-code)
    - [1.2.3. Two Important Classes of Test:](#123-two-important-classes-of-test)
    - [1.2.4. Properties of Good Tests:](#124-properties-of-good-tests)
    - [1.2.5. Common Testing anti pattern](#125-common-testing-anti-pattern)
    - [1.2.6. In TDD](#126-in-tdd)
  - [1.3. Refactoring Legacy Code](#13-refactoring-legacy-code)
    - [1.3.1. Approval Testing](#131-approval-testing)
    - [1.3.2. Steps](#132-steps)
- [2. Reference](#2-reference)
## 1.2. TDD
Is about driving development from test. Offers a more iterative approach 

### 1.2.1. Steps
![](.img/tdd_steps.png)
1. Express intent in the form a test
2. Test the test by Running it and Seeing it <span style="color:red">Fail</span>
3. Create the Minimum code to meet the needs of the test
4. Run it and see it <span style="color:green">Pass</span>
5. Now in a stable, passing state, <span style="color:blue">Refactor</span> test adn code for quality and generality
6. Repeat


### 1.2.2. Attributes of Good Code
- Modular
- Loosely Coupled
- Cohesive
- Separation of Concerns
- Information Hiding


### 1.2.3. Two Important Classes of Test:
- Technical Testing
- User-Centered Testing

### 1.2.4. Properties of Good Tests:
- Behavioral Focus
- Executable Specifications
- Control the Variables
-  Repeatable and Reliable

### 1.2.5. Common Testing anti pattern
Excessive Setup
Cause:
- Poor Separation of Concerns in System under Test(SUT)

Problems:
- Test and SUT are tightly-coupled and so Fragile
- Result is inflexible
- Hard to Understand and Debug

Corrections:
- Improve Separation of Concerns in SUT
- Improve Abstraction in SUT
- Write Tests First!

### 1.2.6. In TDD
Focus on Interace Design
Test Behavior Not Implementation
Use Collaborators as Points of Measurements
Inject Fake points of measurement with dependency injection 

## 1.3. Refactoring Legacy Code
### 1.3.1. Approval Testing
Like a snapshot testing, where the test compares function output with a previously saved snapshot of a function output every time the code is run 

### 1.3.2. Steps
1. Reduce Clutter
   1. Remove unnecessary comments and make variable names more informative
   2. Remove dead code
2. Reduce Cyclomatic complexity (reduce number of branches)
   1. Extract a method
   2. Separate concerns
3. Compose Methods
   1. Organize in the way using labels and names to make it easily to understand what the method does

> "Move stuff that's related closer together
> Move stuff that's unrelated further apart"

When writing tests, it can help to think of the name for the test by starting it with 'should'
# 2. Reference
- [Test Driven Development - What? Why? and How?](https://www.youtube.com/watch?v=llaUBH5oayw&list=PLwLLcwQlnXByqD3a13UPeT4SMhc3rdZ8q&index=2)
- [Does TDD Lead to better software design?](https://www.youtube.com/watch?v=fSvQNG7Rz-8&list=PLwLLcwQlnXByqD3a13UPeT4SMhc3rdZ8q&index=3)