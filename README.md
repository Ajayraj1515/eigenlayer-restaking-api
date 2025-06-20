# EigenLayer Restaking API (Node.js + SQLite)

This project is a backend service built with **Node.js**, **Express.js**, and **SQLite** that simulates EigenLayer restaking data aggregation. It provides RESTful API endpoints to retrieve:

- **User restaking info**
- **Validator metadata**
- **Reward insights for a given wallet**

> ✅ Designed for assignment evaluation — structured to plug in real GraphQL or on-chain data later.

---

## 🔧 Tech Stack

- **Node.js + Express.js** – Backend and REST API layer
- **SQLite** – Lightweight relational DB for storing structured data
- **Mock Data** – Used to simulate live data from EigenLayer due to subgraph access restrictions
- **Modular Folder Structure** – Clean separation of controllers, routes, database, and scripts

---

## 📂 Folder Structure
eigenlayer-restaking-api/
├── controllers/ # Business logic for routes
├── db/ # SQLite connection
├── routes/ # REST API endpoints
├── scripts/ # Mock data population scripts
├── server.js # Entry point for Express server
├── .env # Environment variables
├── package.json # Project configuration
└── README.md # You're here!


---

## 📊 Database Tables

- `restakers` — user address, amount restaked, validator
- `validators` — operator address, total delegated stake, status
- `slash_history` — validator slashing events
- `rewards` — total rewards for each user
- `reward_breakdown` — per-validator reward history

---

## 🚀 API Endpoints

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/restakers`              | List all restakers and stETH amount  |
| GET    | `/validators`             | List all validators with status      |
| GET    | `/rewards/:address`       | Rewards for specific wallet address  |

---

## 🧪 Setup Instructions

###1. Install dependencies

```bash
npm install


### 2. Run mock data population scripts

Copy code
npm run fetch:restakers
npm run fetch:validators
npm run fetch:rewards


### 3. Start the server

npm start
