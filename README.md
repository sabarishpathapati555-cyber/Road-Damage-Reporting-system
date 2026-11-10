# 🛣️ LPU RoadWatch AI — Lovely Professional University Campus Road Hazard Portal

A specialized, campus-tailored civic-tech web application built specifically for **Lovely Professional University (LPU)**, Jalandhar - Delhi G.T. Road, Phagwara, Punjab. It allows students, faculty, campus staff, and e-rickshaw commuters to report internal road defects (potholes, loose interlocking pavers, displaced storm grates, monsoon waterlogging, damaged speed breakers) with simulated AI Computer Vision analysis, track repair milestones in real time, and route work orders directly to the **LPU Estate & Civil Engineering Department**.

---

## 🌟 Key Features Tailored for LPU Campus

### 1. 🎓 Official LPU Identity & Vector Logo Crest
- Integrated vector SVG of the **Lovely Professional University (LPU)** crest emblem (Shield with rising sunburst, flame of knowledge, and bold LPU typography).
- Official LPU campus color scheme: **Signature LPU Vibrant Orange (`#F37021`)**, **Deep Navy (`#0A2540`)**, and warm amber accents.

### 2. 🗺️ Live LPU Campus GIS Telemetry Map (Leaflet.js & OpenStreetMap)
- Centered directly on **LPU Campus coordinates: `31.2536° N, 75.7037° E`** (Phagwara, Punjab).
- Displays real campus locations:
  - *Internal Road between Block 34 & Uni-Mall Circle*
  - *Main Quad Road in front of Boys Hostel 4 (BH-4)*
  - *Baldev Raj Mittal Unipolis Plaza & Central Lawns*
  - *Shanti Devi Mittal Auditorium Road & Uni-Hotel*
  - *Girls Hostel Complex (GH-2) Crossway*
  - *Main Gate 1 (NH-44 Entry Loop)*
- **Interactive Custom Pins:** Color-coded by severity (🔴 Critical P1, 🟠 High Risk, 🟡 Moderate, 🔵 Active Crew, 🟢 Repaved).
- **LPU Campus Perimeter Boundary:** Marked with an orange dashed polygon indicating the official Lovely Professional University campus boundaries.
- **Quick-Jump to Landmark Dropdown:** Instantly fly to and spotlight key campus landmarks (Block 34, Block 36, Uni-Mall, Unipolis, BH-1 to BH-7, GH-1 to GH-6, LPU Hospital, Sports Arena, Gate 1, Gate 4, Central E-Rickshaw Hub).
- **"Near Me" GPS Button:** Detects student device location on campus and plots radar coordinates.

### 3. 📝 4-Step Student & Staff Intake Wizard
- **Step 1: Campus Sectors & Predefined Location Auto-Fill:**
  - **Quick-Select Known LPU Spot Dropdown:** Choose popular spots (e.g. *Block 34 CSE*, *Uni-Mall*, *BH-4 Quad*, *GH-2 Walkway*) to automatically populate the street address, nearest landmark, campus sector, and exact GPS coordinates!
  - `Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)`
  - `Sector 2 - Central Hub (Uni-Mall, Unipolis & Lawns)`
  - `Sector 3 - Boys Hostel Complex (BH-1 to BH-7)`
  - `Sector 4 - Girls Hostel Complex (GH-1 to GH-6)`
  - `Sector 5 - Sports Arena & Olympic Complex`
  - `Sector 6 - Main Gate 1, Gate 2 & Campus Ring Road`
  - Interactive draggable pinpoint helper map defaulted to LPU center.
- **Step 2: Campus Defect Classification:**
  - Potholes / Cavity, Broken Paver Blocks, Drainage Grate Defect, Rain Waterlogging, Speed Breakers, and Traffic Barriers.
  - Contextual tags: `+ Near Uni-Mall`, `+ Near BH-4 Mess`, `+ E-rickshaw route`, `+ Loose pavers`.
- **Step 3: Photo & LPU AI Vision Scanner:**
  - Animated laser scanner computing depth perimeter and model certainty (e.g., 96.4%).
- **Step 4: Student / Staff Credentials & Anonymous Option:**
  - Student Registration Number (e.g., `Reg. 12108942`) or Employee ID.
  - Official LPU email (`@lpu.in` or `@lpu.co.in`).
  - **100% Anonymous Filing** option.
  - Generates official LPU ticket format: `LPU-XXXX`.

### 4. 🔍 LPU Repair Transparency Tracker
- Track any campus ticket (e.g., `LPU-8421`, `LPU-7193`, `LPU-9504`, `LPU-6210`).
- 5-step milestone pipeline:
  1. *Report Logged*
  2. *Estate Verified*
  3. *Squad Dispatched*
  4. *Work in Progress*
  5. *Repaved & Inspected* (with post-repair inspection photo)

### 5. 📢 LPU Campus Community Feed
- Instant search by Block number, Hostel, or landmark.
- Filter by status and sort by *Most Upvoted ("Me Too")* to boost priority in the Estate maintenance queue.

### 6. 🏢 LPU Estate Office & Campus Engineering Console
- **Campus KPIs:** Total Reports, Critical P1 Emergencies, In-Field Squads, and SLA Adherence (98.6%).
- **Interactive Chart.js Visualizations:** Category distribution and workload by Campus Sector.
- **Dedicated LPU Maintenance Squads:**
  - *LPU Central Zone Road Paving Unit*
  - *Hostel Complex Civil Maintenance Squad (BH/GH)*
  - *Uni-Mall & Unipolis Infrastructure Team*
  - *LPU Drainage & Stormwater Response Unit*
  - *Campus Traffic Safety & Road Barrier Division*
- **Export CSV Work Orders:** Download official work order logs with ticket telemetry.

### 7. ☎️ Official 24/7 LPU Campus Helplines
- **LPU Security Central Control Room:** `01824-517000 / Ext. 1000`
- **LPU Hospital & 24x7 Ambulance:** `01824-517100 / Ext. 100`
- **LPU Estate Helpdesk (OMS / UMS):** `01824-517200`
- **Student Proctorial & Anti-Ragging Cell:** `1800-102-4431`

---

## 🚀 How to Launch the Portal

### Option 1: Direct File Launch
Double-click `index.html` in your file explorer to open in any web browser.

### Option 2: Run via Local Python Server
Run in PowerShell:
```powershell
python -m http.server 8000
```
Then open:
```
http://localhost:8000/
```
