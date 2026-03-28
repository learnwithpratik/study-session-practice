# 📚 Student Study Planner (React)

A simple and interactive **Study Planner Web App** built using **React**, **Context API**, and **React Hook Form**.
This app allows users to create, view, and manage study sessions efficiently with persistent storage using **localStorage**.

---

## 🚀 Features

* 📝 Add Study Sessions with:

  * Topic
  * Subject (Dropdown)
  * Duration (Max 10 minutes)
  * Priority (High / Medium / Low)
  * Date
* 📋 View all sessions in a structured list
* 🎨 Dynamic UI based on priority:

  * 🔴 High → Red
  * 🟡 Medium → Yellow
  * 🟢 Low → Green
* ❌ Delete sessions instantly
* 🔄 Form resets after submission
* 🔁 Toggle between Form and Session List

---

## 🧠 Tech Stack

* **React.js**
* **Context API** (Global State Management)
* **React Hook Form** (Form Handling & Validation)
* **Tailwind CSS** (Styling)

---

## 📁 Project Structure

```
src/
│
├── context/
│   └── StudyContext.jsx
│
├── components/
│   ├── SessionForm.jsx
│   ├── SessionList.jsx
│   └── SessionCard.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ How It Works

### 🔄 Data Flow

```
SessionForm → addSession() → Context
Context → sessions → SessionList → SessionCard
SessionCard → deleteSession()
```

---


## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/study-planner.git
cd study-planner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 📌 Validation Rules

* Topic → Required
* Subject → Required
* Duration → 1 to 10 minutes
* Priority → Required
* Date → Required

---

## 🎯 Future Improvements

* ✏️ Edit Session functionality
* 🔍 Filter by priority/date
* 📊 Dashboard analytics (total study time, stats)
* 📱 Fully responsive UI
* 🔔 Notifications/reminders

---

## 🙌 Acknowledgements

This project is built as part of a learning task to understand:

* React state management
* Form handling
* Component architecture
* Real-world UI patterns

---

## 📃 License

This project is open-source and free to use.
