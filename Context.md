# Project Context

This file serves as a comprehensive reference for the current state, architecture, and updates of the `stitch_sudanes_web_for_jalabiay` project. AI agents and developers should read this file to quickly understand the project and should update it whenever significant changes are made.

## 1. Project Overview
**Name**: Stitch Sudanes Web for Jalabiay (Heritage Digital)
**Purpose**: A full-stack tailoring web application designed to handle traditional clothing (specifically Jalabiya). The unique selling point of this application is its AI-powered body measurement extraction tool, which takes a front and side photograph of a customer and generates accurate tailoring measurements.

## 2. Architecture & Tech Stack
The project is divided into three main microservices:

### Frontend (`/frontend`)
- **Tech Stack**: React, Vite, Tailwind CSS, React Router.
- **Role**: Handles the user interface, routing, and interactions. Includes a design system tailored to Heritage Digital.
- **Port**: Usually runs on `http://localhost:5173`.

### Backend (`/backend`)
- **Tech Stack**: Node.js, Express, MySQL.
- **Role**: Serves as the main API gateway, handles business logic, and communicates with the database and the AI service.
- **Key Routes**: `/api/measurements` via `measurementController.js`.
- **Port**: Runs on `http://localhost:3001`.

### AI Service (`/ai-service`)
- **Tech Stack**: Python, FastAPI, Uvicorn, PyTorch, MediaPipe, SMPL-X.
- **Role**: Analyzes uploaded front and side images to extract precise bodily measurements (chest, waist, hips, etc.).
- **Port**: Runs on `http://localhost:5001`.
- **Integration**: Contains the `tailoring-grade_anthropometric_Python_tool` (cloned from GitHub: [AbdallahElamin/tailoring-grade_anthropometric_Python_tool](https://github.com/AbdallahElamin/tailoring-grade_anthropometric_Python_tool)). The tool is orchestrated via the `tailorvision.pipeline.TailorVisionPipeline`.

### Database
- **Schema**: Defined in `schema.sql` at the root directory.

## 3. Project Structure
```text
/ (Root)
├── ai-service/
│   ├── main.py (FastAPI entry point)
│   ├── requirements.txt
│   └── tailoring-grade_anthropometric_Python_tool/ (The ML pipeline tool)
├── backend/
│   ├── server.js (Express entry point)
│   ├── controllers/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/ (React application code)
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── ...
├── docs/ (Documentation)
├── schema.sql (Database definitions)
└── walkthrough.md (Startup instructions)
```

## 4. Deep Dive: TailorVision (AI Tool)
The AI pipeline (`tailoring-grade_anthropometric_Python_tool`, aka TailorVision) uses an 8-stage computer vision workflow built on SMPL-X and MediaPipe. 
- **Features**: Takes a front and side photo and extracts 16 standard body measurements (e.g. chest, waist, hips, neck, shoulder-to-crotch) in cm, with per-measurement confidence scores.
- **Workflow**:
  1. Validates inputs
  2. Preprocesses images
  3. Estimates 2D pose and segments silhouette
  4. Fuses front and side keypoints
  5. Fits SMPL-X 3D shape models
  6. Recovers metric scale
  7. Extracts measurements
  8. Generates tailoring mapping (ease-allowances based on garment type like traditional, suit, etc.)
- **Model Files**: This tool requires specific third-party `.npz` and `.pkl` models to function correctly, which are already downloaded inside its respective models folder.
- **Virtual Environment**: The `ai-service` requires a dedicated virtual environment (`venv`) to run due to heavy dependencies like `torch`, `smplx`, `mediapipe`, etc.

## 5. Recent Updates
- **Global gitignore**: Replaced the tool-specific `.gitignore` with a comprehensive global project `.gitignore` to prevent committing heavy models (`.npz`, `.pkl`), `venv`, and `node_modules`.
- **Virtual Environment Setup**: A virtual environment has been established within `/ai-service/venv`, and all dependencies for both the FastAPI application and the TailorVision tool have been installed. The AI component is now fully functional.
- **Integration of TailorVision**: The `ai-service/main.py` was updated to replace mock data with the actual `tailoring-grade_anthropometric_Python_tool`. It now accepts `front_image` and `side_image` uploads, passes them to the `TailorVisionPipeline`, and returns real calculated measurements and tailoring recommendations.
- **Initialization Completed**: Frontend, Backend, and AI Service environments are fully initialized with necessary dependencies. (See `walkthrough.md` for startup commands).

## 6. How to Run
To run the full project, you need three terminals in the root folder:
1. **Frontend**: `cd frontend && npm run dev`
2. **Backend**: `cd backend && npm start`
3. **AI Service**: 
   - `cd ai-service`
   - Activate venv: `.\venv\Scripts\Activate.ps1` (Windows) or `source venv/bin/activate` (Mac/Linux)
   - `uvicorn main:app --reload --port 5001`

> **Note for future updates:** Please ensure this file is updated whenever a new service is added, tech stack is changed, or major features are implemented.
