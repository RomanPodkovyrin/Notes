# 🧩 Object Oriented Programming

## 🔤 S.O.L.I.D Principles

!!! abstract "Core Principles"
    - `S` - Single-responsibility Principle
    - `O` - Open-closed Principle
    - `L` - Liskov Substitution Principle
    - `I` - Interface Segregation Principle
    - `D` - Dependency Inversion Principle

### 🎯 Single-Responsibility Principle

!!! info "Definition"
     A class should have one and only one reason to change, meaning that a class should have only one job.

!!! success "Pros"
    - **Easier maintenance**: When a class has only one responsibility, changes to that responsibility won't affect other parts of the code
    - **Reduced complexity**: Classes become smaller, simpler, and more focused
    - **Better testability**: Smaller classes with single responsibilities are easier to test
    - **Improved reusability**: Focused components can be reused in different contexts

!!! warning "Cons"
    - **Increased number of classes**: Can lead to "class explosion" if taken too far
    - **Overhead for small applications**: May add unnecessary complexity in smaller applications
    - **Determining "single responsibility"**: Sometimes difficult to define what constitutes a single responsibility

!!! example "Real-world Analogy"
    A knife that also works as a screwdriver and a bottle opener might seem convenient but performs each function poorly. Similarly, a multi-responsibility class often performs each responsibility less effectively.

```java
// Bad example: violates SRP
public class Employee {
    private String name;
    private double salary;
    
    public void saveToDatabase() {
        // Database logic here
    }
    
    public void generatePayslip() {
        // Payslip generation logic here
    }
    
    public void calculateTax() {
        // Tax calculation logic here
    }
}

// Good example: follows SRP
public class Employee {
    private String name;
    private double salary;
    
    // Only employee data and behavior
    public String getName() { return name; }
    public double getSalary() { return salary; }
    public void setSalary(double salary) { this.salary = salary; }
}

public class EmployeeRepository {
    public void save(Employee employee) {
        // Database logic here
    }
}

public class PayslipGenerator {
    public void generatePayslip(Employee employee) {
        // Payslip generation logic here
    }
}

public class TaxCalculator {
    public double calculateTax(Employee employee) {
        // Tax calculation logic here
        return employee.getSalary() * 0.2; // Example calculation
    }
}
```

### 🚪 Open-closed Principle

!!! info "Definition"
     Objects or entities should be open for extension but closed for modification.

!!! success "Pros"
    - **Reduced risk**: No need to modify existing, tested code when adding new features
    - **Backwards compatibility**: Old clients of the code continue to work
    - **Scalability**: System can grow organically through extensions
    - **Separation of concerns**: Core behaviors remain stable while variations are implemented separately

!!! warning "Cons"
    - **Requires foresight**: Difficult to design for extension without knowing future requirements
    - **Initial complexity**: May require more complex initial design with abstractions
    - **Performance overhead**: Abstraction layers can introduce slight performance penalties
    - **Learning curve**: Higher barrier to entry for new developers on the project

!!! example "Real-world Analogy"
    Think of a smartphone with pluggable modules. You can add new functionality (camera upgrades, extra battery) without modifying the core phone. The phone is closed for modification but open for extension through its interfaces.

```java
// Bad example: violates OCP
public class Rectangle {
    private double width;
    private double height;
    
    // Getters and setters
}

public class AreaCalculator {
    public double calculateArea(Object shape) {
        if (shape instanceof Rectangle) {
            Rectangle rectangle = (Rectangle) shape;
            return rectangle.getWidth() * rectangle.getHeight();
        } 
        else if (shape instanceof Circle) {
            Circle circle = (Circle) shape;
            return Math.PI * circle.getRadius() * circle.getRadius();
        }
        return 0;
    }
}

// Good example: follows OCP
public interface Shape {
    double calculateArea();
}

public class Rectangle implements Shape {
    private double width;
    private double height;
    
    // Getters and setters
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}

public class Circle implements Shape {
    private double radius;
    
    // Getter and setter
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Now we can add new shapes without modifying existing code
public class Triangle implements Shape {
    private double base;
    private double height;
    
    // Getters and setters
    
    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}
```

### 🔄 Liskov Substitution Principle

!!! info "Definition"
    Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T
    
    Superclass objects should be replaceable with subclass objects without breaking program correctness. Subclasses shouldn't alter expected behavior.

!!! success "Pros"
    - **Behavioral consistency**: Ensures predictable behavior when using polymorphism
    - **Design correctness**: Forces proper inheritance hierarchies that reflect true "is-a" relationships
    - **Code reusability**: Enables safe use of base class references with derived implementations
    - **Facilitates testing**: Makes it easier to test code using mock objects

!!! warning "Cons"
    - **Design constraints**: May limit design options when strict substitutability is required
    - **Increased complexity**: May require careful interface design and precondition/postcondition analysis
    - **Difficult to verify**: Can be hard to prove that a subclass fully satisfies the principle
    - **May require refactoring**: Often reveals existing design flaws that require significant changes

!!! example "Real-world Analogy"
    If you ask for a vehicle but receive a boat, and you're driving on a road, there's a problem. A boat is a vehicle, but can't fulfill all expected behaviors of the vehicle category in all contexts.

```java
// Bad example: violates LSP
public class Rectangle {
    protected double width;
    protected double height;
    
    public void setWidth(double width) {
        this.width = width;
    }
    
    public void setHeight(double height) {
        this.height = height;
    }
    
    public double getArea() {
        return width * height;
    }
}

public class Square extends Rectangle {
    @Override
    public void setWidth(double width) {
        this.width = width;
        this.height = width;
    }
    
    @Override
    public void setHeight(double height) {
        this.width = height;
        this.height = height;
    }
}

// This function will fail with Square
public void testRectangle(Rectangle rectangle) {
    rectangle.setWidth(5);
    rectangle.setHeight(4);
    assert rectangle.getArea() == 20; // Fails for Square!
}

// Good example: follows LSP
public interface Shape {
    double getArea();
}

public class Rectangle implements Shape {
    private double width;
    private double height;
    
    // Constructor and getters
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
}

public class Square implements Shape {
    private double side;
    
    public Square(double side) {
        this.side = side;
    }
    
    @Override
    public double getArea() {
        return side * side;
    }
}
```

### 🧩 Interface Segregation Principle

!!! info "Definition"
     A client should never be forced to implement an interface that it doesn't use, or clients shouldn't be forced to depend on methods they do not use.

!!! success "Pros"
    - **Focused interfaces**: Results in smaller, purpose-specific interfaces
    - **Reduced coupling**: Clients only depend on methods they actually use
    - **Better adaptability**: Easier to adapt to changing requirements
    - **Improved maintainability**: Changes to one interface affect fewer clients

!!! warning "Cons"
    - **Interface proliferation**: Can lead to many small interfaces to manage
    - **Navigation complexity**: More interfaces can make the codebase harder to navigate
    - **Higher initial design effort**: Requires more thought to properly segregate interfaces
    - **Potential duplication**: May result in duplicate method signatures across interfaces

!!! example "Real-world Analogy"
    A universal remote control with 50 buttons when your TV only needs 5 buttons creates unnecessary complexity. Better to have specialized remotes for each device with just the buttons needed.

```java
// Bad example: violates ISP
public interface Worker {
    void work();
    void eat();
    void sleep();
}

public class Robot implements Worker {
    @Override
    public void work() {
        // Working logic
    }
    
    @Override
    public void eat() {
        // Robots don't eat, but forced to implement
        throw new UnsupportedOperationException();
    }
    
    @Override
    public void sleep() {
        // Robots don't sleep, but forced to implement
        throw new UnsupportedOperationException();
    }
}

// Good example: follows ISP
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}

public interface Sleepable {
    void sleep();
}

public class Human implements Workable, Eatable, Sleepable {
    @Override
    public void work() {
        // Working logic
    }
    
    @Override
    public void eat() {
        // Eating logic
    }
    
    @Override
    public void sleep() {
        // Sleeping logic
    }
}

public class Robot implements Workable {
    @Override
    public void work() {
        // Working logic
    }
    // No need to implement unused methods
}
```

### 🔌 Dependency Inversion Principle

!!! info "Definition"
     Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

!!! success "Pros"
    - **Decoupling**: Reduces direct dependencies between components
    - **Testability**: Makes unit testing easier through the use of mock objects
    - **Flexibility**: Enables swapping implementations without changing client code
    - **Parallel development**: Teams can work on different implementations simultaneously

!!! warning "Cons"
    - **Abstraction overhead**: Introduces additional interfaces/abstract classes
    - **Indirection complexity**: Can make code harder to follow due to multiple layers
    - **Setup complexity**: Requires dependency injection mechanisms
    - **Learning curve**: Harder for new developers to understand the system architecture

!!! example "Real-world Analogy"
    Electric sockets provide a standard interface (abstraction) that any appliance (high-level module) can use without knowing how electricity (low-level module) is generated or distributed. The socket is the abstraction both depend on.

!!! tip "DIP vs Dependency Injection" 
    DIP is a principle about depending on abstractions, while Dependency Injection is a pattern to implement DIP by providing dependencies from outside a class rather than creating them internally.

```java
// Bad example: violates DIP
public class NotificationService {
    private EmailSender emailSender;
    
    public NotificationService() {
        this.emailSender = new EmailSender();
    }
    
    public void sendNotification(String message) {
        emailSender.sendEmail(message);
    }
}

public class EmailSender {
    public void sendEmail(String message) {
        // Email sending logic
    }
}

// Good example: follows DIP
public interface MessageSender {
    void sendMessage(String message);
}

public class EmailSender implements MessageSender {
    @Override
    public void sendMessage(String message) {
        // Email sending logic
    }
}

public class SMSSender implements MessageSender {
    @Override
    public void sendMessage(String message) {
        // SMS sending logic
    }
}

public class NotificationService {
    private MessageSender messageSender;
    
    // Dependency injection via constructor
    public NotificationService(MessageSender messageSender) {
        this.messageSender = messageSender;
    }
    
    public void sendNotification(String message) {
        messageSender.sendMessage(message);
    }
}

// Usage
MessageSender emailSender = new EmailSender();
NotificationService emailNotificationService = new NotificationService(emailSender);

MessageSender smsSender = new SMSSender();
NotificationService smsNotificationService = new NotificationService(smsSender);
```

## 📊 SOLID Principles in Practice

!!! info inline end "Application Order"
    When designing a system, consider implementing SOLID principles in this order:
    
    1. SRP - Structure classes by responsibility
    2. OCP - Design for extension
    3. LSP - Verify substitutability
    4. ISP - Refine interfaces
    5. DIP - Establish dependencies

!!! warning "Common Pitfalls"
    - **Over-engineering**: Applying principles where they're not needed
    - **Premature abstraction**: Creating interfaces before understanding variations
    - **Misinterpreting responsibility**: Creating too many or too few classes
    - **Ignoring trade-offs**: Every principle involves trade-offs; balance is key

!!! success "When to Apply SOLID"
    - **Large, long-lived applications**: Greatest benefit in systems that evolve over time
    - **Team environments**: Makes code more understandable across team members
    - **Frequently changing requirements**: Helps manage change with minimal impact
    - **Reusable components**: Essential for libraries and frameworks

## 📚 Resources

  - [SOLID: The First 5 Principles of Object Oriented Design | DigitalOcean](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
  - [SOLID Principles Explained](https://www.youtube.com/watch?v=V3TUEeB0kW0)