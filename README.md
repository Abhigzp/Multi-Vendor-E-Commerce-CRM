# Multi-Vendor-E-Commerce-CRM
Scalable, production-ready multi-vendor e-commerce backend built with Node.js, GraphQL, MongoDB, and Redis. Features vendor product management, JWT authentication, role-based access, caching, order processing, and performance optimization. Designed with clean architecture, modular structure, middleware, and centralized error handling.

# Project Overview
A scalable, production-ready multi-vendor e-commerce backend built using Node.js, GraphQL, MongoDB, and Redis.
This project demonstrates clean architecture, caching strategies, authentication, middleware separation, centralized error handling, and scalability best practices.


# Tech Stack
   1. Node.js
   2. Express
   3. Apollo Server (GraphQL)
   4. MongoDB + Mongoose
   5. Redis
   6. JWT Authentication
   7. DataLoader
   8. Winston Logger
   9. Docker
  10. Jest (Testing ) 

# Installation Guide (Step by Step)
 1. git clone https://github.com/your-username/multi-vendor-ecommerce-crm.git
 2. cd multi-vendor-ecommerce-crm

 # Setup Environment Variables

  Create .env file in root:

   1. PORT=5000
   2. NODE_ENV=development
   3. MONGO_URI=mongodb://localhost:27017/ecommerce
   4. JWT_SECRET=your_jwt_secret
   5. JWT_REFRESH_SECRET=your_refresh_secret
   6. REDIS_HOST=127.0.0.1
   7. REDIS_PORT=6379