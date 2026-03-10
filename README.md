# Student Management System – API Testing (Postman + Newman)

## Project Overview
This project contains automated API tests for the **Student Management System – Teacher APIs**.  
The tests were implemented using **Postman** and executed using **Newman** to validate authentication, CRUD operations, filtering functionality, and negative scenarios.

The purpose of this project is to ensure the Teacher API endpoints function correctly by validating:

- Authentication workflow
- Teacher CRUD operations
- Filtering functionality
- Proper error handling
- Response schema validation

The project also demonstrates **collection execution using Newman and HTML report generation**.

---

# Tools Used
- Postman
- Newman
- JavaScript (Postman test scripts)
- Node.js
- GitHub
- Google Drive

---

# API Base URL

```
http://54.255.195.111:5171
```

---

# Authentication

Endpoint

```
POST /login
```

Credentials

```json
{
  "username": "admin",
  "password": "password123"
}
```

The authentication token received from the login response is saved dynamically in the **Postman environment variable** and used for authorized API requests.

---

# How to Run the Project

## Run Using Postman

1. Open **Postman**
2. Import the **Postman Collection**
3. Import the **Environment file**
4. Select the environment
5. Click **Run Collection** using the Collection Runner

---

## Run Using Newman

Install Newman globally:

```bash
npm install -g newman
```

Run the collection:

```bash
npx newman run .\collection\teachercollection.json
```

---

## Generate HTML Report

Install the HTML reporter:

```bash
npm i newman-reporter-htmlextra
```

Run Newman with HTML report:

```bash
node .\report.js
```

This command will generate a detailed **HTML test execution report**.

---

# Test Cases Implemented

## 1. Authentication Tests

- Login with valid credentials
- Validate status code = 200
- Verify token exists in response
- Save token dynamically to environment variable

---

## 2. Teachers CRUD Tests

### Create Teacher
- Validate status code (200 or 201)
- Verify teacherId exists in response
- Verify response data matches request data
- Save teacherId dynamically

### Get All Teachers
- Validate status code = 200
- Validate response is an array
- Validate schema using **tv4**
- Verify created teacher exists in the list

### Filter Tests
- Filter teachers by department
- Filter teachers by email
- Validate returned data matches filter values

### Get Teacher by ID
- Validate status code = 200
- Verify returned teacherId equals saved teacherId

### Update Teacher
- Update at least two fields
- Validate response status code = 200
- Verify updated fields are returned correctly

### Delete Teacher
- Validate delete request status code

### Verify Delete
- After deleting the teacher
- Attempt to fetch teacher by ID
- Validate API returns **404 Not Found**

---

## 3. Negative Test Scenarios

The following negative scenarios were tested:

### 1. Login with Incorrect Credentials
Validates:
- Status code (401)
- Proper error message

### 2. Access Teachers API Without Token
Validates:
- Unauthorized request blocked
- Status code (401 or 403)
- Proper error message

### 3. Get Teacher With Invalid ID
Validates:
- Status code (404)
- Error message returned

### 4. Create Teacher With Missing Required Field
Validates:
- Status code (400)
- Proper validation error message

---

# Postman Collection

The exported Postman collection is included in this repository.

```
teachercollection.json
```

---

# Newman Report Screenshot

<img width="909" height="888" alt="image" src="https://github.com/user-attachments/assets/bd9fa147-b821-42df-ad82-724d99ae1121" />


---

# Project Demonstration Video

The Drive folder also contains a **full video demonstration** of the project including:

- Authentication and token storage
- Teacher creation and saving teacherId
- Teacher update verification
- Teacher deletion and 404 verification
- Negative test execution
- Newman collection execution
- HTML report generation

---

# Google Drive Folder

The following Drive folder contains:

- Project video recording
- Newman report screenshots
- Evidence of API test execution

Drive Link:

```
https://drive.google.com/drive/folders/1vq3ySHgJBs8yocHu_C376q-1OjIEwljd?usp=sharing
```

Make sure the folder permission is set to **Anyone with the link can view**.

---


# Author

API Testing Assignment implemented using **Postman and Newman** for automated API validation.
By (Mohammad Biplob Mollah)
