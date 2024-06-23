
# 🐾 Animal Management API

This project is an Animal Management API built using **Node.js**, **Express**, and **MongoDB** with **Mongoose** as the ODM.

## ✨ Features

- 📦 Create a new animal (PUT)
- 📂 Retrieve all animals (GET)
- 🔍 Retrieve a specific animal by ID (GET)
- ✏️ Update a specific animal by ID (PATCH)
- ❌ Delete a specific animal by ID (DELETE)

## ⚙️ Prerequisites

- **Node.js**
- **MongoDB**

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/animal-management-api.git
   cd animal-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   ```bash
   mongod --port 27017
   ```

4. **Start the server**
   ```bash
   npm start
   ```

### 🗂️ Directory Structure

```
project-directory/
├── index.js
├── model.js
├── routes.js
└── package.json
```

## 🔗 API Endpoints

### 🐶 Create a new animal

- **URL**: `/animals`
- **Method**: `PUT`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "Buddy",
    "colour": "Brown",
    "age": 5,
    "type": "Dog"
  }
  ```
- **Response**: 
  ```json
  {
    "greeting": "Woof Woof, I am a Buddy"
  }
  ```

### 🦁 Retrieve all animals

- **URL**: `/animals`
- **Method**: `GET`
- **Response**: 
  ```json
  [
    {
      "_id": "60d5f9f4d3e4f025d0a0d9f7",
      "name": "Buddy",
      "colour": "Brown",
      "age": 5,
      "type": "Dog",
      "createdDate": "2024-06-23T17:10:44.444Z"
    }
  ]
  ```

### 🐱 Retrieve a specific animal by ID

- **URL**: `/animals/:id`
- **Method**: `GET`
- **Response**:
  - If ID is valid and found:
    ```json
    {
      "_id": "60d5f9f4d3e4f025d0a0d9f7",
      "name": "Buddy",
      "colour": "Brown",
      "age": 5,
      "type": "Dog",
      "createdDate": "2024-06-23T17:10:44.444Z"
    }
    ```
  - If ID is invalid:
    ```json
    {
      "message": "Invalid ID format: {id}"
    }
    ```
  - If ID is valid but not found:
    ```json
    {
      "message": "Animal not found with id {id}"
    }
    ```

### 🐹 Update a specific animal by ID

- **URL**: `/animals/:id`
- **Method**: `PATCH`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "Buddy",
    "colour": "Black",
    "age": 6,
    "type": "Dog"
  }
  ```
- **Response**:
  - If ID is valid and updated:
    ```json
    {
      "_id": "60d5f9f4d3e4f025d0a0d9f7",
      "name": "Buddy",
      "colour": "Black",
      "age": 6,
      "type": "Dog",
      "createdDate": "2024-06-23T17:10:44.444Z"
    }
    ```
  - If ID is invalid:
    ```json
    {
      "message": "Invalid ID format: {id}"
    }
    ```
  - If ID is valid but not found:
    ```json
    {
      "message": "Animal not found with id {id}"
    }
    ```

### 🐰 Delete a specific animal by ID

- **URL**: `/animals/:id`
- **Method**: `DELETE`
- **Response**:
  - If ID is valid and deleted:
    ```json
    {
      "message": "Animal deleted successfully"
    }
    ```
  - If ID is invalid:
    ```json
    {
      "message": "Invalid ID format: {id}"
    }
    ```
  - If ID is valid but not found:
    ```json
    {
      "message": "Animal not found with id {id}"
    }
    ```

## 🛠️ Error Handling

- **Invalid ID format** will return a `400 Bad Request` status with a message indicating the invalid format.
- If an animal is **not found** with the given ID, a `404 Not Found` status is returned with an appropriate message.
- **Internal server errors** will return a `500 Internal Server Error` status.

## 📜 License

This project is licensed under the MIT License.
# animals
# Creation
