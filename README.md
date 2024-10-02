Project Summary: Sports Store Management System
Description:
The Sports Store Management System is a comprehensive CRUD-based application developed using the Spring Boot framework for the backend and React.js for the frontend. It provides a complete solution for managing various entities related to a sports store, including categories, products, customers, orders, and reviews. The system uses a layered architecture, with DTOs, mappers, services, repositories, and controllers to ensure clean separation of concerns and maintainable code. The frontend offers a simple and intuitive interface for interacting with the backend services, supporting all CRUD operations for the key entities.

Backend: Spring Boot Application
Technologies Used:

Spring Boot
Spring Data JPA
H2 Database (for testing and in-memory operations)
PostgreSQL (for production)
Lombok
MapStruct (for mappers)
RESTful API Development
JUnit and Mockito (for testing)
Architecture and Design:

Entities:

Category: Represents product categories (e.g., Apparel, Footwear).
Relationships: One-to-Many with Products.
Product: Represents products in the store.
Relationships: Many-to-One with Category, One-to-Many with Reviews.
Customer: Represents customers.
Relationships: One-to-Many with Orders, One-to-Many with Reviews.
Order: Represents customer orders.
Relationships: Many-to-One with Customer.
Review: Represents customer reviews for products.
Relationships: Many-to-One with Product, Many-to-One with Customer.
Data Transfer Objects (DTOs):

Each entity has a corresponding DTO to handle request and response objects.
Used to avoid exposing internal database models and ensure proper data encapsulation.
Mappers:

Implemented using custom mappers and MapStruct to convert between entities and DTOs.
Simplifies the mapping logic and ensures a clean and maintainable codebase.
Service Layer:

Business logic and validation are encapsulated in the service layer.
Communicates with the repository layer to handle CRUD operations and any business rules.
Controller Layer:

RESTful controllers are implemented for each entity.
Each controller handles standard CRUD operations (POST, GET, PUT, DELETE).
Includes additional endpoints for advanced querying and filtering.
Exception Handling:

Custom exceptions like ResourceNotFoundException are used to provide meaningful error messages.
Global exception handler with @ControllerAdvice ensures consistent and user-friendly error responses.
Database Integration:

H2 in-memory database used during initial development and testing.
Switched to PostgreSQL for production to ensure persistence and scalability.
Testing:

Unit and integration tests are created using JUnit and Mockito.
Over 70% test coverage ensures reliability and stability of the code.
Frontend: React.js Application
Technologies Used:

React.js
React Router DOM (for routing)
Axios (for API calls)
CSS (for styling)
Features:

CRUD Operations for All Entities:

Users can Create, Read, Update, and Delete Categories, Products, Customers, Orders, and Reviews.
A clear and intuitive UI ensures smooth navigation between different operations.
Entity Management:

Category Management: Add, update, delete, and list categories.
Product Management: Full CRUD operations for products, with additional filtering by category.
Customer Management: Manage customer details.
Order Management: Create and view orders for customers.
Review Management: Add reviews for products, filter reviews by product or customer.
Search and Filtering:

Allows filtering of products by category.
Allows filtering of reviews by product or customer.
User Interface Design:

A clean UI design using minimal CSS to keep the focus on functionality.
Buttons and forms are styled for usability and responsiveness.
Routing and Navigation:

Navigation is managed using React Router DOM.
Provides a simple menu for navigating between different sections.
State Management and API Integration:

State management handled using React’s useState and useEffect hooks.
Axios is used to handle HTTP requests to the Spring Boot backend.
Error handling and response validation for better UX.
Key Contributions:
Designed and developed a full-stack application using Spring Boot and React.js, adhering to best practices and design patterns.
Implemented a layered architecture for the backend with controllers, services, repositories, DTOs, and mappers.
Developed comprehensive RESTful APIs that handle CRUD operations and advanced queries.
Created a responsive and user-friendly frontend that interacts seamlessly with the backend.
Integrated PostgreSQL as the production database for persistent data storage.
Ensured over 70% code coverage with unit and integration tests for reliability.
Skills Demonstrated:
Java, Spring Boot, Spring Data JPA, RESTful API development.
React.js, JavaScript, CSS.
PostgreSQL and H2 Database Management.
JUnit, Mockito, Testing Best Practices.
Full-Stack Development, Clean Code, SOLID Principles.
This project showcases my ability to build a fully functional, scalable, and maintainable full-stack application. It demonstrates proficiency in backend development, frontend design, and testing strategies, making it an excellent addition to my portfolio.
