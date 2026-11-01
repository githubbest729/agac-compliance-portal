<div align="center">

<!-- EMBEDDED AGAC SCADA SHIELD EMBLEM -->
<svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shieldBorder" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#A5B4FC" />
      <stop offset="50%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <linearGradient id="shieldBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <!-- Background Shield -->
  <path d="M 50 8 C 72 8 86 16 86 36 C 86 64 50 88 50 88 C 50 88 14 64 14 36 C 14 16 28 8 50 8 Z" 
        fill="url(#shieldBg)" stroke="url(#shieldBorder)" stroke-width="3" stroke-linejoin="round" />
  <!-- Telemetry SCADA Pulse Waveform -->
  <path d="M 22 49 L 34 49 L 41 33 L 49 61 L 57 39 L 64 49 L 78 49" 
        stroke="#00F0FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#neonGlow)" />
  <!-- Compliance Verification Checkmark -->
  <path d="M 40 68 L 48 76 L 62 62" 
        stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#neonGlow)" />
  <!-- Top Telemetry Status Dot -->
  <circle cx="50" cy="18" r="2.5" fill="#F59E0B" filter="url(#neonGlow)" />
</svg>

# CompliancePaper Portal
### Legal Document Generation, QA Checklist & Sign-Off Tracker
**Tailored for SCADA & Control Systems Engineers — Al Gurg Automation and Controls (AGAC · Dubai, UAE)**

[![PWA 2026 Ready](https://img.shields.io/badge/PWA-2026_Standard-00F0FF?style=for-the-badge&logo=pwa&logoColor=black)](https://web.dev/progressive-web-apps/)
[![Persistent Storage](https://img.shields.io/badge/Storage-IndexedDB_Persistent-10B981?style=for-the-badge&logo=databricks&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist)
[![Zero Auth](https://img.shields.io/badge/Auth-100%25_Offline_Local-F59E0B?style=for-the-badge&logo=authy&logoColor=white)](#)
[![Industrial Sectors](https://img.shields.io/badge/AGAC-6_Industrial_Sectors-3B82F6?style=for-the-badge&logo=expertsexchange&logoColor=white)](https://www.agac.ae/projects/)

<p align="center">
  <b>A zero-friction, mission-critical Progressive Web App built to generate, validate, and digitally sign industrial paperwork on-site in utility sub-stations, control rooms, and hazardous field environments across the UAE.</b>
</p>

[Key Features](#key-features) • [Industrial Coverage](#agac-industrial-portfolio-coverage) • [System Architecture](#system-architecture) • [Engineering Workflows](#scada-legal--qa-workflows) • [Installation & Deployment](#installation--quick-start)

---

</div>

## Overview

**CompliancePaper Portal** fulfills **Job Responsibility #24 & #25** for SCADA Engineers at **Al Gurg Automation and Controls (AGAC)**:
> *"Issue all appropriate legal paperwork. Create and maintain comprehensive project documentation, plans and reports. Ensure standards and requirements are met through conducting quality assurance tests and QHSE (Annexure-SCT-HR-001) compliance."*

Engineers operating inside classified zones (refineries, pump basements, smelter potlines, tunnel ventilation plenums) frequently face zero network connectivity. This application operates **100% client-side with zero cloud logins or authentication walls**, maintaining multi-year project histories through persistent local storage (`IndexedDB`) with automated cross-platform backup capabilities (`.agac` / `.json`).

---

## Key Features

- 📑 **Unabridged UAE Industrial Legal Templates:** Instant generation of Factory Acceptance Tests (FAT), Site Acceptance Tests (SAT), QHSE Permits to Work (Annexure-SCT-HR-001), Final SCADA Handover Certificates, NDAs, and Change Orders.
- ✍️ **4-Party Digital Signature Pad:** HTML5 Canvas capture for SCADA Lead, Project Manager, QHSE Officer, and Client Witness with cryptographic timestamps and print-ready PDF export.
- 🏭 **Isolated Multi-Project Engine:** Manage separate lifecycles, I/O tag freezes, QA punch lists, and blocker logs per project across all 6 AGAC engineering verticals.
- 🔒 **Zero-Eviction Storage:** Proactively invokes `navigator.storage.persist()` and displays a live storage quota bar (`navigator.storage.estimate()`) designed for 2–3+ years of continuous field operation.
- ⚡ **2026 PWA Core Capabilities:**
  - **Window Controls Overlay:** Desktop SCADA console integration reclaiming custom title-bar space.
  - **Screen Wake Lock:** Prevents field tablets from sleeping during extended FAT/SAT loop testing.
  - **Protocol & File Handlers:** Direct OS integration for `web+agac://` schemes and `.agac` / `.json` backup file associations.
  - **App Icon Badging:** Real-time badge counter (`navigator.setAppBadge()`) displaying unsigned or pending legal sheets.
  - **Ergonomic Safe Areas:** Full hardware support for iPhone Dynamic Islands, notches, and tablet glove touch targets (44×44px minimum).

---

## AGAC Industrial Portfolio Coverage

The application comes pre-loaded with sector-specific telemetry presets, tag architectures, and standards directly mapped to [agac.ae](https://www.agac.ae/projects/):

| Sector | AGAC Reference Architecture | Primary Systems & Protocols | Legal & QA Focus |
| :--- | :--- | :--- | :--- |
| **🛢️ Oil & Gas** | Terminal Automation & Custody Transfer Skids | Wonderware System Platform, Modbus TCP, RTUs | SIL-3 Shutdown Loops, Fiscal Metering Calibration, Hazardous Area Hot Work PTW |
| **🚇 Infrastructure** | Metro Tunnel Ventilation, MEP & BMS SCADA | Siemens S7-1500 Hot-Standby, InTouch, BACnet/IP | Dual Ring Comms Redundancy, Damper Response Times, Emergency Egress Sign-Off |
| **💧 Water & Wastewater**| RO Desalination & High-Pressure Pumping Stations | Allen-Bradley ControlLogix, Profinet, Historian | Membrane Pressure Interlocks, Chemical Dosing Safety, DEWA Handover Protocol |
| **❄️ District Cooling** | 45,000 TR Chiller Staging & ETS Telemetry | ArchestrA System Platform, Modbus RTU, SQL | COP Efficiency Verification, Chilled Water Delta-T Optimization, Energy Metering |
| **⚡ Metals & Minerals** | Smelter Potline Handling & 33kV Substation | IEC 61850 Gateways, Hardwired SIL-2, InBatch | Substation Breaker Telemetry, Conveyor E-Stop Pull Cords, Environmental Dust PTW |
| **🧀 Food & Beverages** | Dairy Processing & Automated CIP SCADA | ISA-88 Batch Control, 21 CFR Part 11 Audit Logs | Sanitary Loop Thermal Validation, Caustic Rinse Flush Verification, Recipe Lock |

---

## System Architecture

## System Architecture

### High-Level Component Flowchart

```mermaid

flowchart TD
    %% Hardware Layer
    subgraph HW ["1. CLIENT HARDWARE & OS"]
        DCR["Desktop Control Room<br/>(Chrome / Edge / Chromium)"]
        RFT["Rugged Field Tablets<br/>(iOS / iPadOS / Android)"]
    end

    %% PWA Shell Layer
    subgraph PWA ["2. 2026 PWA RUNTIME APP SHELL"]
        direction TB
        SW["<b>Service Worker (sw.js)</b><br/>• Cache-First Engine (v3)<br/>• BroadcastChannel Sync<br/>• Offline Fallback Intercept"]
        MAN["<b>Manifest & Desktop Integration</b><br/>• Window Controls Overlay<br/>• Custom Protocol (web+agac://)<br/>• File Association (.agac, .json)"]
        HARD["<b>Hardware & Ergonomics</b><br/>• Screen Wake Lock API<br/>• App Badging API<br/>• Dynamic Island / Notch Insets"]
    end

    %% UI Presentation Layer
    subgraph UI ["3. INDUSTRIAL UI PRESENTATION LAYER"]
        direction LR
        DASH["Dashboard & KPIs"]
        GEN["Doc Generator"]
        VAULT["Documents Vault"]
        PLAN["Plan & QA Checklist"]
        REP["Reports Hub"]
    end

    %% Application Logic
    subgraph LOGIC ["4. CLIENT-SIDE CONTROLLERS"]
        direction TB
        APP_JS["<b>app.js</b><br/>• Multi-Project Switcher<br/>• Storage Quota Monitor<br/>• Offline / Online State"]
        TEMP_JS["<b>templates.js</b><br/>• FAT / SAT Contract Clauses<br/>• UAE / Dubai Legal Wording<br/>• Annexure-SCT-HR-001 (PTW)"]
        SIG_JS["<b>signature.js</b><br/>• 4-Party Canvas Signature<br/>• Time-Stamp Watermarking<br/>• Audit Record Generator"]
    end

    %% Storage Layer
    subgraph DB ["5. ZERO-EVICTION PERSISTENT STORAGE (IndexedDB)"]
        direction TB
        IDB[("<b>CompliancePaperDB</b><br/>navigator.storage.persist() Enabled")]
        STORES["Stores: 'projects' • 'documents' • 'signatures' • 'milestones' • 'reports'"]
        EXPORT["Backup / Portability: Full JSON & .agac Single-Click Export / Restore"]
        IDB --- STORES --- EXPORT
    end

    HW --> PWA
    PWA --> UI
    UI --> LOGIC
    LOGIC --> DB

    %% Styling
    style HW fill:#0F172A,stroke:#38BDF8,stroke-width:2px,color:#F8FAFC
    style PWA fill:#1E293B,stroke:#00F0FF,stroke-width:2px,color:#F8FAFC
    style UI fill:#0F172A,stroke:#10B981,stroke-width:2px,color:#F8FAFC
    style LOGIC fill:#1E293B,stroke:#F59E0B,stroke-width:2px,color:#F8FAFC
    style DB fill:#020617,stroke:#38BDF8,stroke-width:2px,color:#F8FAFC
---

## SCADA Legal & QA Workflows

[Select / Seed Project]
│
├──► 1. Engineering Kickoff & NDA Sign-Off
│
├──► 2. System Architecture & I/O Freeze (Wonderware / PLC)
│
├──► 3. Factory Acceptance Testing (FAT)
│         └─► Comms Test (Modbus/OPC UA) ──► Multi-Party Sign-Off
│
├──► 4. On-Site Mobilization & QHSE Permit to Work (PTW)
│         └─► LOTO Verification ──► Hazard Assessment (Annexure-SCT-HR-001)
│
├──► 5. Site Acceptance Testing (SAT)
│         └─► Cold/Hot Loop Checks ──► Punchlist Formulation
│
└──► 6. Final Legal Handover Protocol
└─► SQL Backup Delivered ──► Custody Transferred ──► Archive


---

## Directory Structure

```text
compliance-paper-portal/
├── index.html                   # Semantic App Shell with Window Controls Overlay & safe areas
├── manifest.webmanifest         # 2026 PWA manifest (protocols, file handlers, shortcuts)
├── sw.js                        # Cache-first service worker + BroadcastChannel event sync
├── offline.html                 # Offline fallback page with fast reconnect trigger
├── favicon.ico                  # Browser tab icon
├── apple-touch-icon.png         # iOS Home Screen high-DPI icon (180x180)
├── icons/                       # Complete icon suite with 80% safe zone maskable variants
│   ├── icon.svg                 # Scalable source vector icon
│   ├── icon-72.png              # Android legacy
│   ├── icon-96.png              # App shortcut icon
│   ├── icon-128.png             # Web store icon
│   ├── icon-144.png             # Windows tile icon
│   ├── icon-152.png             # iPad touch icon
│   ├── icon-192.png             # Chrome / Android home screen standard
│   ├── icon-384.png             # High-DPI Android splash icon
│   ├── icon-512.png             # PWA splash screen & install modal icon
│   ├── icon-maskable-192.png    # Android adaptive circular/squircle icon
│   └── icon-maskable-512.png    # Android adaptive high-res icon
├── css/
│   └── styles.css               # Control room dark theme, glassmorphism, responsive dock
├── js/
│   ├── db.js                    # Multi-project IndexedDB wrapper with persistent storage
│   ├── templates.js             # Legal templates (FAT, SAT, PTW, Handover, NDA, Variations)
│   ├── signature.js             # HTML5 multi-party digital signature pad engine
│   └── app.js                   # Application lifecycle, wake lock, badging & file handling
└── screenshots/
    ├── screenshot-desktop.png   # Wide form factor PWA install preview (1280x720)
    └── screenshot-mobile.png    # Narrow form factor PWA install preview (540x960)


Installation & Quick Start
Local Development / Field Testing
Since Service Workers require a secure origin (HTTPS or localhost), run the portal using any local static web server:

Using Node.js:
# Navigate to the project root
cd compliance-paper-portal

# Serve using npx
npx serve .

Using Python 3:
# Start a simple local server
python -m http.server 8080
Open http://localhost:8080 in Chrome, Edge, or Safari.

Installing as a Native PWA
Desktop (Chrome / Edge): Click the Install button in the header or the install icon inside the browser address bar.

Android (Chrome): Tap the in-app Install button or select Add to Home screen from the browser menu.

iOS (Safari): Tap the Share button (⎋) and select Add to Home Screen (+). The application will launch in full standalone mode.

Legal & Compliance Notice
DISCLAIMER: The contract and compliance templates provided within this portal (FAT, SAT, PTW, Handover, NDA, and Variation Orders) are structured for industrial engineering documentation and testing record-keeping. All contractual commitments and liability terms must be formally reviewed and approved by AGAC Legal Counsel before being executed as legally binding corporate agreements.
