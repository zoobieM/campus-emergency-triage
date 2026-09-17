# 🚨 Campus Emergency & Smart Patient Triage System

> **A mission-critical, enterprise command platform merging Campus Tactical SOS response with an automated heuristic clinical triage engine, 2D spatial heatmap, and offline-first cellular SMS fallback.**

---

## 🌟 Key Features

- **🎓 Dual-Role RBAC Authentication**: Role-gated workflows for Students (SOS Portal only) and Security/Medical Administrators (Full Command Center Telemetry).
- **⚡ 1-Tap Zero-Delay Emergency Trigger**: Rapid preset triggers for Cardiac/Collapse, Trauma/Bleeding, Active Fire, and Physical Threats.
- **🧠 Heuristic Smart Triage Engine**: Rule-based semantic classification (Emergency, Urgent, Normal) with automatic response unit dispatch assignments (CMU-1, FSU, SRT).
- **📍 Nearest Facilities & AED Locator**: Proximity engine calculating walking distance (in meters) and ETA (in minutes) to campus medical centers, AED defibrillators, and eyewash stations.
- **🗺️ Live 2D Campus Spatial Heatmap**: Interactive sector grid with animated pulsing emergency radar beacons and multi-incident cluster alerts.
- **📡 Offline-First Resilience & Cellular SMS Fallback**: Zero-network graceful degradation auto-generating compressed SMS telemetry payloads for basements & workshops.
- **📻 Acoustic Siren & Live Synthetic Radio Dispatch**: Web Audio siren coupled with native browser `speechSynthesis` radio dispatch voice announcements.
- **📈 Real-Time Triage Audit & Analytics Bar**: Live tracking of Mean Response Dispatch Time (< 1.8 mins), severity ratio bar, active field responders, and ISO-9001 compliance.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/campus-emergency-triage.git
cd campus-emergency-triage

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

App runs at `http://localhost:5173` (and on local network `http://<your-ip>:5173`).

---

## 🛠️ Deploy to Render (Step-by-Step)

### Option 1: One-Click Render Blueprint
1. Push this repository to your **GitHub** account.
2. Go to [Render Dashboard](https://dashboard.render.com).
3. Click **New +** &rarr; **Blueprint**.
4. Connect your GitHub repository (`render.yaml` will auto-configure everything).
5. Click **Apply**.

### Option 2: Standard Render Web Service
1. In Render Dashboard, click **New +** &rarr; **Web Service**.
2. Connect your GitHub repository.
3. Configure the settings:
   - **Name**: `campus-emergency-triage`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
4. Click **Create Web Service**.

---

## 📋 Demonstration Accounts

| Role | Name | Email | Password |
|---|---|---|---|
| 🎓 **Student** | Priya Menon | `priya.menon@campus.edu` | `Student@123` |
| 🎓 **Student** | Rahul Sharma | `rahul.sharma@campus.edu` | `Rahul@456` |
| 🛡️ **Admin (CMO)** | Dr. Vikram Singh | `admin@campus.edu` | `Admin@2024` |
| 🛡️ **Admin (Security)** | Inspector Meera | `security@campus.edu` | `Security@999` |

*(Autofill demo buttons are also provided directly on the login form)*

---

## 🏗️ Technology Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS 3
- **Backend API**: Node.js, Express 4, CORS
- **Acoustics & Voice**: Web Audio API + SpeechSynthesis API
- **Persistence**: Hybrid Persistent Storage Engine (REST API + LocalStorage Multi-Tab Sync)
