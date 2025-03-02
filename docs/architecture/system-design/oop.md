# Object Oriented Programming

## S.O.L.I.D Principles

- `S` - Single-responsibility Principle
- `O` - Open-closed Principle
- `L` - Liskov Substitution Principle
- `I` - Interface Segregation Principle
- `D` - Dependency Inversion Principle




### Single - Responsibility Principle

> A class should have one and only one reason to change, meaning that a class should have only one job.

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

### Open-closed Principle

> Objects or entities should be open for extension but closed for modification.

Prevents breaking code, when adding new features

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

### Liskov Substitution Principle

> Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T

Objects of the superclass should be replacable with objects of a subclass without altering the correctness of the program. As in, subclass shouldn't break the program if it does stuff differently

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

### Interface Segregation Principle

> A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

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

### Dependency Inversion Principle

> Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

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


# Resources

[SOLID: The First 5 Principles of Object Oriented Design \| DigitalOcean](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

[ SOLID Principles Explained](https://www.youtube.com/watch?v=V3TUEeB0kW0)