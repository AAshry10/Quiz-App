<div id="top"></div>

<div align="left">

# React Practice — Quiz App

Concepts : 
- Components
- Props
- State

- Refs
- useEffect Hook - handling Side Effects

A small React practice project (Udemy “React Course”) to take a timed quiz, select answers, skip questions automatically on timeout, and see a final summary with a per-question review.

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS">

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run the App](#run)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

This app lets you take a short React quiz:

- Questions are displayed one at a time
- You have a limited time to answer each question
- If time runs out, the question is marked as skipped
- At the end, you get a summary of your performance + a review of each question

Notes:

- Data is stored in memory (React state) — refreshing the page resets progress.
- Answer order is shuffled once per question using a React ref (useRef) so it doesn’t reshuffle on every render.
  This project does not use React Portals.


[![Live Demo](https://img.shields.io/badge/Click%20Here%20to%20Try-805AD5?style=for-the-badge&logo=google-chrome)](https://quiz-app-gamma-roan.vercel.app/)

---

## Features

- Timed questions with a progress bar
- Auto-skip on timeout (records null as skipped)
- Answer feedback states (selected → correct / wrong)
- Final results screen with:
  - % Skipped
  - % Answered Correctly
  - % Answered Incorrectly
- Per-question review list showing your answer (or “Skipped”)

--- 

## 🚀Getting Started

### Prerequisites

- **Node.js** 
- **npm** (comes with Node)

### Installation

1. **Clone the repository:**

    ```sh
     git clone https://github.com/AAshry10/Quiz-App.git
    ```

2. **Navigate to the project directory (If not already navigated):**

    ```sh
     cd Quiz App
    ```

3. **Install the dependencies:**

   ```sh
    npm install
   ```

### Run

Run the project with:

   ```sh
    npm run dev
   ```

**Navigate to your [localhost:5173](https://localhost:5173)**

--- 

## 🏗️Project Structure

```sh
└── Quiz App/
    ├── public/
    │   └── quiz-logo.png
    ├── src/
    │   ├── assets/
    │   │   ├── quiz-complete.png
    │   │   └── quiz-logo.png
    │   ├── componenets/
    │   │   ├── Answers.jsx
    │   │   ├── Header.jsx
    │   │   ├── Question.jsx
    │   │   ├── QuestionTimer.jsx
    │   │   ├── Quiz.jsx
    │   │   └── QuizComplete.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── questions.js
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## 🧾License

[MIT License](https://choosealicense.com/licenses). For more details, refer to the [LICENSE](./LICENSE) file.

---

💖 *Built with love by [Ahmed ELashry](https://github.com/AAshry10)*  

---

