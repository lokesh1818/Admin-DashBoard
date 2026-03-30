#  Admin Dashboard with Analytics (MEAN Stack)

A modern **Admin Dashboard** with Google Login (Firebase), User Management, and Real-time Analytics built using Angular and Node.js.

---

#  Features

*  Google Authentication (Firebase SSO)
*  Dashboard Analytics:

  * Total Users
  * Active Users
  * Inactive Users
*  Pie Chart Visualization (Chart.js)
*  User Management (Add / Delete Users)
*  Real-time updates
*  Clean & Modern UI

---

#  Tech Stack

## Frontend

* Angular **v21**
* TypeScript
* Chart.js

## Backend

* Node.js
* Express.js

## Database

* MongoDB (Local or Atlas)

## Authentication

* Firebase (Google Sign-In)

---

# Versions Need to install

Install these before running:

| Software    | Version |
| ----------- | ------- |
| Node.js     | v18+    |
| npm         | v9+     |
| Angular CLI | v21     |
| MongoDB     | Latest  |

---

#  Project Setup (Step-by-Step)

##  1. Download & Extract

* Download the project ZIP
* Extract it
* Open folder in **VS Code**

---

##  2. Install Angular CLI (if not installed)

```bash
npm install -g @angular/cli
```

---

#  Backend Setup

## 3. Install Dependencies

```bash
cd backend
npm install
```

---

##  4. Setup MongoDB

### Option 1: Local MongoDB

* Install MongoDB
* Start MongoDB service

Update connection in:

```
backend/server.js
```

Example:

```js
mongoose.connect("mongodb://127.0.0.1:27017/admin-dashboard");
```

---

### Option 2: MongoDB Atlas (Cloud)

* Create account: https://www.mongodb.com/
* Create cluster
* Get connection string

Replace in `server.js`

---

##  5. Start Backend Server

```bash
node server.js
```
or 
```bash
npm nodemon server.js
```

 Runs on:

```
http://localhost:5000
```

---

#  Frontend Setup

##  6. Install Dependencies

Open new terminal:

```bash
cd frontend
npm install --legacy-peer-deps
```

---

##  7. Install Chart.js

```bash
npm install chart.js --legacy-peer-deps
```

---

##  8. Firebase Setup (Google Login)

### Step 1: Go to Firebase Console

https://console.firebase.google.com/

### Step 2: Create Project

### Step 3: Enable Google Login

* Go to **Authentication**
* Click **Get Started**
* Go to **Sign-in Method**
* Enable **Google**

### Step 4: Add Authorized Domain

* Go to **Authentication → Settings**
* Add:

```
localhost
```

### Step 5: Add Firebase Config

Open file:

```
frontend/src/app/services/firebase.ts
```

Add your config:

```js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

##  9. Start Frontend

```bash
ng serve
```

OR (if error):

```bash
npx ng serve
```

 Runs on:

```
http://localhost:4200
```

---

#  How to Run the Project

1. Start Backend:

```bash
cd backend
node server.js
```

2. Start Frontend:

```bash
cd frontend
ng serve
```

3. Open Browser:

```
http://localhost:4200
```

---
 
 *Note: If Dashboard or Users doesn't update Please Double Click on users  and dashboard  or Refresh the page to update the changes and view them

#  API Endpoints

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| GET    | /users        | Get all users |
| POST   | /users        | Add user      |
| DELETE | /users/:id    | Delete user   |
| POST   | /google-login | Login user    |

---


#  Common Errors & Fixes

###  ng not recognized

```bash
npm install -g @angular/cli
```

---

###  Dependency errors

```bash
npm install --legacy-peer-deps
```

---

###  Port already in use

```bash
npx kill-port 4200
npx kill-port 5000
```

---





---
