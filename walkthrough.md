# 🧵 Heritage Digital — Full Project Walkthrough

This is a step-by-step guide for running the **entire project** from scratch. It assumes you are starting from zero (a fresh machine or a fresh clone). Read every step carefully.

---

## 🗺️ What Is This Project?

**Heritage Digital** is a full-stack tailoring web application for traditional Sudanese clothing (Jalabiya). It has three separate services running simultaneously:

| Service | Language / Tech | What It Does | Port |
|---|---|---|---|
| **Frontend** | React + Vite + Tailwind | The website the user sees | `5173` |
| **Backend** | Node.js + Express | The API gateway / business logic | `3001` |
| **AI Service** | Python + FastAPI | Analyzes body photos → measurements | `5001` |

All three must be running at the same time for the app to work. You will need **3 separate terminal windows**.

---

## ✅ Prerequisites — Install These First

Before you do anything, make sure you have the following installed on your machine:

### 1. Node.js (v18 or newer)
Download from: https://nodejs.org  
After installing, verify in a terminal:
```powershell
node -v
npm -v
```

### 2. Python (v3.10 – 3.12 recommended)
Download from: https://www.python.org/downloads/  
**⚠️ IMPORTANT:** During installation, check **"Add Python to PATH"**.  
After installing, verify:
```powershell
python --version
```

### 3. MySQL (for the database)
Download from: https://dev.mysql.com/downloads/mysql/  
You will also need a MySQL client tool (like [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) or [DBeaver](https://dbeaver.io/)).

### 4. Git
Download from: https://git-scm.com/  
(You likely already have this if you cloned the project.)

---

## 📂 Project Folder Layout (for reference)

```
stitch_sudanes_web_for_jalabiay/       ← Root folder
├── frontend/                          ← React website
├── backend/                           ← Node.js API
├── ai-service/                        ← Python AI pipeline
│   ├── main.py                        ← FastAPI entry point
│   ├── venv/                          ← Python virtual environment (already created!)
│   └── tailoring-grade_anthropometric_Python_tool/
│       ├── models/smplx/smplx/        ← SMPL-X model files (.npz) ← ALREADY DOWNLOADED
│       ├── models/mediapipe/          ← MediaPipe pose model     ← ALREADY DOWNLOADED
│       └── third_party/SMPL-Anthropometry/                       ← ALREADY CLONED
├── schema.sql                         ← Database structure
└── Context.md                         ← Technical reference for developers/AI agents
```

> **Good news!** The heavy AI model files (`.npz`, `.task`) and the Python virtual environment (`venv`) are **already set up**. You do NOT need to download or install anything for the AI service.

---

## 🚀 Step-by-Step: First Time Setup

Do this **once** when you first get the project.

---

### STEP 1 — Set Up the Database

1. Open your MySQL client (e.g. MySQL Workbench).
2. Create a new database. You can name it anything, e.g. `heritage_digital`.
3. Run the SQL file to create all the tables:
   - Open `schema.sql` (in the root folder) in your MySQL client.
   - Execute / run all the statements in it.
4. Create a `.env` file inside the `backend/` folder:

```
# backend/.env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=heritage_digital
PORT=3001
```

> Replace `your_mysql_password_here` with your actual MySQL password.

---

### STEP 2 — Install Frontend Dependencies

Open a terminal, navigate to the `frontend` folder, and run:

```powershell
cd frontend
npm install
```

This downloads all the React/Vite/Tailwind libraries. Wait for it to finish (it may take a minute).

---

### STEP 3 — Install Backend Dependencies

Open another terminal (or reuse), navigate to the `backend` folder, and run:

```powershell
cd backend
npm install
```

This downloads Express, CORS, MySQL, and other server libraries.

---

### STEP 4 — Verify the AI Service Virtual Environment

The Python virtual environment is **already created** at `ai-service/venv/` with all libraries installed. Just verify it exists:

```powershell
# From the root folder:
ls ai-service\venv\Scripts\
```

You should see files like `python.exe`, `uvicorn.exe`, `activate`, etc. If the `venv` folder is missing for some reason, see the **Troubleshooting** section at the bottom.

---

## ▶️ Running the Project (Every Time)

You need **3 separate terminal windows** open. Do the following in each one.

---

### 🖥️ Terminal 1 — Start the Frontend

```powershell
cd frontend
npm run dev
```

**Expected output:**
```
  VITE v5.x.x  ready in xxx ms
  ➜  Local:   http://localhost:5173/
```

✅ The website is now running. Visit **http://localhost:5173** in your browser.

---

### ⚙️ Terminal 2 — Start the Backend

```powershell
cd backend
npm start
```

**Expected output:**
```
Backend server running on http://localhost:3001
```

✅ The API server is now running on port **3001**.

---

### 🤖 Terminal 3 — Start the AI Service

This one has an extra step because it uses a Python virtual environment.

**Step 1:** Navigate to the `ai-service` folder:
```powershell
cd ai-service
```

**Step 2:** Activate the virtual environment:
```powershell
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1

# Windows (Command Prompt):
.\venv\Scripts\activate.bat

# Mac / Linux:
source venv/bin/activate
```

After activation, your terminal prompt will change to start with `(venv)` — this means it worked.

**Step 3:** Start the AI server:
```powershell
uvicorn main:app --reload --port 5001
```

**Expected output:**
```
INFO:     Uvicorn running on http://0.0.0.0:5001 (Press CTRL+C to quit)
INFO:     Started reloader process...
```

✅ The AI measurement service is now running on port **5001**.

---

### ✅ Verify Everything Is Running

Once all 3 terminals are running, you can confirm everything is healthy:

| Service | Health Check URL | Expected Response |
|---|---|---|
| Backend | http://localhost:3001/api/health | `{"status":"healthy"}` |
| AI Service | http://localhost:5001/health | `{"status":"healthy"}` |
| Frontend | http://localhost:5173 | Should load the website |

---

## 🛑 Stopping the Project

In each terminal window, press **`Ctrl + C`** to stop the service.

To deactivate the Python virtual environment in Terminal 3:
```powershell
deactivate
```

---

## 🔄 Shutting Down and Restarting Later

When you come back to work on the project again, you don't need to repeat the setup steps. Just:

1. Open 3 terminals.
2. Run the 3 start commands above.
3. That's it!

---

## 🔧 Troubleshooting

### ❌ PowerShell says "execution of scripts is disabled"

When activating the Python venv, if you see an error about execution policy, run this **once** in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then try activating the venv again.

---

### ❌ `npm install` fails

- Make sure you have Node.js v18+ installed.
- Try deleting the `node_modules` folder and running `npm install` again.

---

### ❌ Backend crashes with a database error

- Make sure MySQL is running.
- Double-check your `backend/.env` file has the correct `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`.
- Make sure you ran `schema.sql` to create the tables.

---

### ❌ AI Service venv is missing

If the `ai-service/venv/` folder doesn't exist, create it and install everything:

```powershell
cd ai-service
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
pip install -r tailoring-grade_anthropometric_Python_tool/requirements.txt
```

---

### ❌ AI Service fails with a model file error

The tool requires large model files. Confirm these files exist:
- `ai-service/tailoring-grade_anthropometric_Python_tool/models/smplx/smplx/SMPLX_MALE.npz`
- `ai-service/tailoring-grade_anthropometric_Python_tool/models/smplx/smplx/SMPLX_FEMALE.npz`
- `ai-service/tailoring-grade_anthropometric_Python_tool/models/smplx/smplx/SMPLX_NEUTRAL.npz`
- `ai-service/tailoring-grade_anthropometric_Python_tool/models/mediapipe/pose_landmarker_heavy.task`

If any are missing, contact the project owner — these files cannot be committed to Git due to their size and license restrictions.

---

## 📋 Quick Reference Card

```
┌─────────────────────────────────────────────────────────┐
│              HERITAGE DIGITAL — QUICK START              │
├─────────────┬───────────────────────────────────────────┤
│ Terminal 1  │ cd frontend && npm run dev                 │
│ Terminal 2  │ cd backend && npm start                    │
│ Terminal 3  │ cd ai-service                              │
│             │ .\venv\Scripts\Activate.ps1                │
│             │ uvicorn main:app --reload --port 5001      │
├─────────────┼───────────────────────────────────────────┤
│ Frontend    │ http://localhost:5173                      │
│ Backend     │ http://localhost:3001                      │
│ AI Service  │ http://localhost:5001                      │
└─────────────┴───────────────────────────────────────────┘
```
