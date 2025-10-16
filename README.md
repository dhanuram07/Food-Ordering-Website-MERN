# AdugeMane - Food Ordering WebApp

AdugeMane is a responsive food ordering web application built on the **MERN stack**. It allows users to order food seamlessly while providing admin functionalities for efficient food and order management.

---

## 🚀 Features

### User Features
- **Login/Signup**: Secure authentication with JWT.
- **Add to Cart**: Manage your selections easily.
- **Place Order**: Hassle-free food ordering.
- **Filter Food Products**: Find items with ease.
- **Order Management**: Track and manage your orders.
- **Logout**: End your session securely.

### Admin Features
- **Admin Panel**: Efficient order and product management.
- **Products Management**: Add, edit, and delete food items.
- **Role-Based Identification**: Separate user and admin access.

### Technical Features
- **JWT Authentication**: Secure user sessions.
- **Password Hashing**: Bcrypt ensures password safety.
- **Stripe Payment Integration**: Simplified payment processing.
- **Authenticated REST APIs**: Ensures data security.
- **Beautiful Alerts**: User-friendly notifications.

---

## ⚙️ Setup Guide

### Prerequisites
- **Node.js** and **npm** installed.
- **MongoDB** installed (local or cloud-based).

# Steps

1. **Install Dependencies**  
    Navigate to each folder (`admin`, `backend`, `frontend`) & run the following command in the terminal:  
    ```bash
    npm install
2. **Environment Variables**
    In the `backend` folder, create a `.env` file with the following variables:
    ```
    JWT_SECRET=your_secret_key
    MONGO_URL=your_mongodb_connection_string
    SALT=10
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```
3. **Run MongoDB (if using locally)**
    ```bash
    mongod
4. **Start the Frontend (React)**
    ```bash
    npm run dev
5. **Optionally, to host on a local network:**
    ```bash
    npm run dev -- --host
6. **Start the Backend (Node.js)**
    ```bash
    npm run server
7. **Update Frontend Backend URL**
    In the frontend context file, update the backend URL to match the port your backend server is running on.

## Project Structure
    root/
    ├── admin/       # Admin Panel (React)
    ├── backend/     # Backend (Node.js & Express)
    ├── frontend/    # User Panel (React)
