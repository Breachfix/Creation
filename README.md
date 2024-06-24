
# 🌟 Creation Management API 🌟

Welcome to the Creation Management API! This project is built using **Node.js**, **Express**, and **MongoDB** with **Mongoose** as the ODM. It allows users to manage various entities from the biblical account of creation, including animals, plants, lights, celestial bodies, humans, and institutions.

## ✨ Features

- 📝 **Create** a new entity (PUT)
- 🔍 **Retrieve** all entities (GET)
- 🔎 **Retrieve** a specific entity by ID (GET)
- 📅 **Retrieve** entities by the day of creation (GET)
- ✏️ **Update** a specific entity by ID (PATCH)
- 🗑️ **Delete** a specific entity by ID (DELETE)

## 🛠️ Prerequisites

- **Node.js**
- **MongoDB**

## 🚀 Getting Started

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/creation-management-api.git
   cd creation-management-api
   ```
   
2. **Install dependencies**

   ```bash
   npm install
   Start MongoDB
   ```

   ```bash   
   mongod --port 27017
   Start the server
   ```

    ```bash
    npm start
    ```
    
### 📂 Directory Structure
```
project-directory/
├── models/
│   ├── animal.js
│   ├── celestialBody.js
│   ├── human.js
│   ├── institution.js
│   ├── light.js
│   └── plant.js
├── routes/
│   ├── animals.js
│   ├── celestialBodies.js
│   ├── humans.js
│   ├── institutions.js
│   ├── lights.js
│   └── plants.js
├── index.js
├── package.json
└── README.md
```

## 📋 API Endpoints

### 🐾 Animals
#### Create a New Animal
**URL**: `/animals`
**Method**: `PUT`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Lion",
  "type": "wild",
  "characteristics": ["Brave", "Strong"],
  "dayOfCreation": 6
}
```
**Response**:
```json
{
  "message": "Lion created successfully!",
  "sound": "Roar Roar, I am a Lion"
}
```

### 🌟 Lights
#### Create a New Light
**URL**: `/lights`
**Method**: `PUT`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Sun",
  "description": "The Sun was created to rule the day",
  "characteristics": ["Bright", "Hot"],
  "dayOfCreation": 4
}
```
**Response**:
```json
{
  "message": "Sun created successfully!"
}
```
### 🌱 Plants
#### Create a New Plant
**URL**: `/plants`
**Method**: `PUT`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Oak Tree",
  "type": "Tree",
  "characteristics": ["Strong", "Tall"],
  "dayOfCreation": 3
}
```
**Response**:
```json
{
  "message": "Oak Tree created successfully!"
}
```
### 🌌 Celestial Bodies
#### Create a New Celestial Body
**URL**: `/celestial-bodies`
**Method**: `PUT`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Moon",
  "type": "Satellite",
  "characteristics": ["Reflective", "Orbiting Earth"],
  "dayOfCreation": 4
}
```
**Response**:
```json
{
  "message": "Moon created successfully!"
}
```
### 👤 Humans
#### Create a New Human
**URL**: `/humans`
**Method**: `PUT`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Adam",
  "characteristics": ["First man"],
  "dayOfCreation": 6
}
```
**Response**:
```json
{
  "message": "Adam created successfully!"
}
```
### 🏛️ Institutions
#### Create a New Institution
**URL**: `/institutions`
**Method**: `PUT`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Sabbath",
  "description": "The day of rest",
  "dayOfCreation": 7
}
```
**Response**:
```json
{
  "message": "Sabbath created successfully!"
}
```

### 🌟 Additional Endpoints

#### Retrieve All Entities
**URL**: `/animals, /lights, /plants, /celestial-bodies, /humans, /institutions`
**Method**: `GET`

**Response**:
```json
[
  {
    "_id": "entity_id",
    "name": "Entity Name",
    "characteristics": ["Characteristic1", "Characteristic2"],
    "dayOfCreation": 4,
    "createdDate": "2024-06-23T17:10:44.444Z"
  }
]
```
#### Retrieve Entity by ID
**URL**: `/animals/:id, /lights/:id, /plants/:id, /celestial-bodies/:id, /humans/:id, /institutions/:id`
**Method**: `GET`

**Response**:
```json
{
  "_id": "entity_id",
  "name": "Entity Name",
  "characteristics": ["Characteristic1", "Characteristic2"],
  "dayOfCreation": 4,
  "createdDate": "2024-06-23T17:10:44.444Z"
}
```
#### Retrieve Entities by Day of Creation
**URL**: `/animals/day/:day, /lights/day/:day, /plants/day/:day, /celestial-bodies/day/:day, /humans/day/:day, /institutions/day/:day`
**Method**: `GET`

**Response**:
```json
[
  {
    "_id": "entity_id",
    "name": "Entity Name",
    "characteristics": ["Characteristic1", "Characteristic2"],
    "dayOfCreation": 4,
    "createdDate": "2024-06-23T17:10:44.444Z"
  }
]
```
If no entities found:
```json
{
  "message": "No entities were created on day X. Please read the Bible for more details."
}
```
#### Update Entity by ID
**URL**: `/animals/:id, /lights/:id, /plants/:id, /celestial-bodies/:id, /humans/:id, /institutions/:id`
**Method**: `PATCH`
**Headers**: `Content-Type: application/json`
**Body**:
```json
{
  "name": "Updated Entity Name",
  "characteristics": ["UpdatedCharacteristic1", "UpdatedCharacteristic2"],
  "dayOfCreation": 4
}
```
**Response**:
```json
{
  "_id": "entity_id",
  "name": "Updated Entity Name",
  "characteristics": ["UpdatedCharacteristic1", "UpdatedCharacteristic2"],
  "dayOfCreation": 4,
  "createdDate": "2024-06-23T17:10:44.444Z"
}
```
#### Delete Entity by ID
**URL**: `/animals/:id, /lights/:id, /plants/:id, /celestial-bodies/:id, /humans/:id, /institutions/:id`
**Method**: `DELETE`

**Response**:
```json
{
  "message": "Entity deleted successfully"
}
```
#### 📜 License
This project is licensed under the MIT License.

Happy coding! 🚀


