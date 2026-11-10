/* ===================================================================
   LPU RoadWatch AI - Lovely Professional University Campus Portal
   Campus Road Damage Reporting & Civil Maintenance Controller
   =================================================================== */

// --- 1. DEFAULT SEED DATA (LPU CAMPUS ROAD INCIDENTS) ---
const INITIAL_REPORTS = [
    {
        id: "LPU-8421",
        title: "Severe Asphalt Crater & Subbase Cave-in",
        category: "pothole",
        categoryName: "Pothole / Asphalt Cavity",
        severity: "critical",
        status: "In Progress",
        address: "Internal Road between Block 34 and Uni-Mall Circle",
        landmark: "Opposite School of Computer Science (Block 34)",
        ward: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2548,
        lng: 75.7032,
        photoUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
        afterPhotoUrl: "",
        description: "Deep asphalt crater approximately 12cm deep right at the e-rickshaw turning point. Severe hazard for students, cycles, and campus e-rickshaws during evening class rush.",
        aiAnalysis: {
            detectedType: "Pothole / Cavity (~12.4cm depth)",
            confidence: 97,
            suggestedSeverity: "Priority 1 (Critical Hazard)",
            suggestedCrew: "LPU Central Zone Road Paving Unit"
        },
        reporter: {
            name: "Sabarish K.",
            phone: "Reg. 12108942",
            email: "sabarish.student@lpu.in",
            isAnonymous: false
        },
        assignedCrew: "LPU Central Zone Road Paving Unit",
        upvotes: 68,
        userUpvoted: false,
        createdAt: "2026-10-28T08:30:00Z",
        updatedAt: "2026-10-29T14:15:00Z",
        history: [
            { step: 1, title: "Report Logged", time: "Oct 28, 08:30 AM", done: true },
            { step: 2, title: "Estate Verified", time: "Oct 28, 10:15 AM", done: true },
            { step: 3, title: "Squad Dispatched", time: "Oct 28, 02:40 PM", done: true },
            { step: 4, title: "Work in Progress", time: "Oct 29, 09:00 AM", done: true },
            { step: 5, title: "Repaved & Inspected", time: "Estimated: Today 5 PM", done: false }
        ]
    },
    {
        id: "LPU-7193",
        title: "Damaged Speed Breaker & Loose Interlocking Paver Blocks",
        category: "collapse",
        categoryName: "Speed Breaker / Pavers",
        severity: "high",
        status: "Resolved",
        address: "Main Quad Road, Front of Boys Hostel 4 (BH-4)",
        landmark: "Near BH-4 Dining Hall & Laundry Corridor",
        ward: "Sector 3 - Boys Hostel Complex (BH-1 to BH-7)",
        lat: 31.2570,
        lng: 75.7055,
        photoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        afterPhotoUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        description: "Rubber speed breaker bolts detached; sharp metal plates exposed. Completely leveled and rebuilt with heavy-duty interlocking pavers by Estate civil team.",
        aiAnalysis: {
            detectedType: "Dislodged Speed Breaker & Paver Shift",
            confidence: 93,
            suggestedSeverity: "Priority 2 (High Risk)",
            suggestedCrew: "Hostel Complex Civil Maintenance Squad (BH/GH)"
        },
        reporter: {
            name: "Rohit Sharma",
            phone: "Reg. 12019482",
            email: "rohit.12019482@lpu.in",
            isAnonymous: false
        },
        assignedCrew: "Hostel Complex Civil Maintenance Squad (BH/GH)",
        upvotes: 54,
        userUpvoted: true,
        createdAt: "2026-10-25T11:20:00Z",
        updatedAt: "2026-10-27T16:45:00Z",
        history: [
            { step: 1, title: "Report Logged", time: "Oct 25, 11:20 AM", done: true },
            { step: 2, title: "Estate Verified", time: "Oct 25, 01:10 PM", done: true },
            { step: 3, title: "Squad Dispatched", time: "Oct 26, 08:30 AM", done: true },
            { step: 4, title: "Work in Progress", time: "Oct 26, 02:00 PM", done: true },
            { step: 5, title: "Repaved & Inspected", time: "Oct 27, 04:45 PM", done: true }
        ]
    },
    {
        id: "LPU-9504",
        title: "Sunken Heavy Cast-Iron Storm Drainage Grate",
        category: "manhole",
        categoryName: "Drainage Grate Defect",
        severity: "critical",
        status: "In Progress",
        address: "Central Boulevard, Baldev Raj Mittal Unipolis Plaza",
        landmark: "Adjacent to Central Lawns & Open Stage",
        ward: "Sector 2 - Central Hub (Uni-Mall, Unipolis & Lawns)",
        lat: 31.2530,
        lng: 75.7028,
        photoUrl: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80",
        afterPhotoUrl: "",
        description: "Cast-iron stormwater cover cracked under service truck weight. Opening poses extreme accident threat during high footfall festival events.",
        aiAnalysis: {
            detectedType: "Structural Grate Failure / Open Cavity",
            confidence: 96,
            suggestedSeverity: "Priority 1 (Critical Hazard)",
            suggestedCrew: "Uni-Mall & Unipolis Infrastructure Team"
        },
        reporter: {
            name: "Ananya Deshmukh",
            phone: "Reg. 12204193",
            email: "ananya.d@lpu.in",
            isAnonymous: false
        },
        assignedCrew: "Uni-Mall & Unipolis Infrastructure Team",
        upvotes: 82,
        userUpvoted: false,
        createdAt: "2026-10-29T06:15:00Z",
        updatedAt: "2026-10-29T12:00:00Z",
        history: [
            { step: 1, title: "Report Logged", time: "Oct 29, 06:15 AM", done: true },
            { step: 2, title: "Estate Verified", time: "Oct 29, 07:30 AM", done: true },
            { step: 3, title: "Squad Dispatched", time: "Oct 29, 09:00 AM", done: true },
            { step: 4, title: "Work in Progress", time: "Oct 29, 11:30 AM", done: true },
            { step: 5, title: "Repaved & Inspected", time: "Estimated: Tomorrow 2 PM", done: false }
        ]
    },
    {
        id: "LPU-6210",
        title: "Surface Fissures & Depressed Walkway Pavers",
        category: "crack",
        categoryName: "Paver Cracks & Fissures",
        severity: "moderate",
        status: "Reported",
        address: "Shanti Devi Mittal Auditorium Access Road",
        landmark: "Near Uni-Hotel & Faculty Executive Suites",
        ward: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2515,
        lng: 75.7015,
        photoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        afterPhotoUrl: "",
        description: "Extensive paver block subsidence over 30 meters. Walkway unlevel for walking students and wheel-accessible transport.",
        aiAnalysis: {
            detectedType: "Walkway Subsidence & Fatigue Cracking",
            confidence: 89,
            suggestedSeverity: "Priority 3 (Moderate)",
            suggestedCrew: "LPU Central Zone Road Paving Unit"
        },
        reporter: {
            name: "LPU Campus Student",
            phone: "",
            email: "",
            isAnonymous: true
        },
        assignedCrew: "Unassigned (Queued for Inspection)",
        upvotes: 21,
        userUpvoted: false,
        createdAt: "2026-10-29T16:40:00Z",
        updatedAt: "2026-10-29T16:40:00Z",
        history: [
            { step: 1, title: "Report Logged", time: "Oct 29, 04:40 PM", done: true },
            { step: 2, title: "Estate Verified", time: "Pending", done: false },
            { step: 3, title: "Squad Dispatched", time: "Pending", done: false },
            { step: 4, title: "Work in Progress", time: "Pending", done: false },
            { step: 5, title: "Repaved & Inspected", time: "Pending", done: false }
        ]
    },
    {
        id: "LPU-5829",
        title: "Rain Waterlogging & Silted Drain Culvert",
        category: "waterlog",
        categoryName: "Monsoon Waterlogging",
        severity: "high",
        status: "Verified",
        address: "Crossway behind Girls Hostel 2 (GH-2)",
        landmark: "Near GH-2 Gymnasium & Nescafe Kiosk",
        ward: "Sector 4 - Girls Hostel Complex (GH-1 to GH-6)",
        lat: 31.2505,
        lng: 75.7060,
        photoUrl: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80",
        afterPhotoUrl: "",
        description: "Water ponding up to 6 inches after heavy downpour, completely submerging pedestrian walkway and cycle lane.",
        aiAnalysis: {
            detectedType: "Drain Inundation & Standing Ponding",
            confidence: 94,
            suggestedSeverity: "Priority 2 (High Risk)",
            suggestedCrew: "LPU Drainage & Stormwater Response Unit"
        },
        reporter: {
            name: "Pooja Verma",
            phone: "Reg. 12104921",
            email: "pooja.v@lpu.in",
            isAnonymous: false
        },
        assignedCrew: "LPU Drainage & Stormwater Response Unit",
        upvotes: 39,
        userUpvoted: false,
        createdAt: "2026-10-29T10:10:00Z",
        updatedAt: "2026-10-29T13:20:00Z",
        history: [
            { step: 1, title: "Report Logged", time: "Oct 29, 10:10 AM", done: true },
            { step: 2, title: "Estate Verified", time: "Oct 29, 01:20 PM", done: true },
            { step: 3, title: "Squad Dispatched", time: "Queued", done: false },
            { step: 4, title: "Work in Progress", time: "Pending", done: false },
            { step: 5, title: "Repaved & Inspected", time: "Pending", done: false }
        ]
    },
    {
        id: "LPU-4402",
        title: "Damaged Safety Bollard & Guardrail at Main Entry",
        category: "signage",
        categoryName: "Bollard & Traffic Sign",
        severity: "critical",
        status: "Resolved",
        address: "Main Gate 1 (NH-44 Entry Loop)",
        landmark: "Near LPU Security Checkpost & Welcome Fountain",
        ward: "Sector 6 - Main Gate 1, Gate 2 & Campus Ring Road",
        lat: 31.2562,
        lng: 75.7005,
        photoUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
        afterPhotoUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        description: "Delivery truck clipped steel traffic separator bollard; bent metal posed tire-cut hazard for incoming vehicles. Replaced and repainted by Estate works.",
        aiAnalysis: {
            detectedType: "Barrier Impact Failure",
            confidence: 98,
            suggestedSeverity: "Priority 1 (Critical Hazard)",
            suggestedCrew: "Campus Traffic Safety & Road Barrier Division"
        },
        reporter: {
            name: "Inspector H. Singh",
            phone: "Staff ID: LPU-SEC-412",
            email: "security.gate1@lpu.co.in",
            isAnonymous: false
        },
        assignedCrew: "Campus Traffic Safety & Road Barrier Division",
        upvotes: 75,
        userUpvoted: false,
        createdAt: "2026-10-24T03:00:00Z",
        updatedAt: "2026-10-25T11:00:00Z",
        history: [
            { step: 1, title: "Report Logged", time: "Oct 24, 03:00 AM", done: true },
            { step: 2, title: "Estate Verified", time: "Oct 24, 03:45 AM", done: true },
            { step: 3, title: "Squad Dispatched", time: "Oct 24, 05:00 AM", done: true },
            { step: 4, title: "Work in Progress", time: "Oct 24, 07:30 AM", done: true },
            { step: 5, title: "Repaved & Inspected", time: "Oct 25, 11:00 AM", done: true }
        ]
    }
];

// LPU Campus Notifications Feed
const NOTIFICATIONS = [
    { id: 1, title: "Paver Repair Completed", msg: "Ticket LPU-7193 in front of BH-4 Mess has been leveled and repaved.", time: "15 mins ago", urgent: false },
    { id: 2, title: "Priority P1 Crew Active", msg: "Estate team dispatched to LPU-9504 Unipolis stormwater drain cover.", time: "50 mins ago", urgent: true },
    { id: 3, title: "Monsoon Road Inspection Drive", msg: "Civil teams deployed across all 6 LPU campus sectors.", time: "2 hours ago", urgent: true }
];

// --- 2. GLOBAL STATE STORE (LPU CAMPUS) ---
class RoadWatchStore {
    constructor() {
        this.storageKey = "lpu_roadwatch_campus_data";
        this.themeKey = "lpu_roadwatch_theme";
        this.reports = this.loadReports();
    }

    loadReports() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing reports from localStorage:", e);
            }
        }
        localStorage.setItem(this.storageKey, JSON.stringify(INITIAL_REPORTS));
        return INITIAL_REPORTS;
    }

    saveReports() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.reports));
    }

    getReportById(id) {
        return this.reports.find(r => r.id.toLowerCase() === id.trim().toLowerCase());
    }

    addReport(report) {
        this.reports.unshift(report);
        this.saveReports();
    }

    updateStatus(id, newStatus) {
        const report = this.getReportById(id);
        if (report) {
            report.status = newStatus;
            report.updatedAt = new Date().toISOString();
            
            // Update history steps
            if (newStatus === "Verified") {
                report.history[1].done = true;
                report.history[1].time = "Just now";
            } else if (newStatus === "In Progress") {
                report.history[1].done = true;
                report.history[2].done = true;
                report.history[3].done = true;
                report.history[3].time = "Just now";
            } else if (newStatus === "Resolved") {
                report.history.forEach(h => h.done = true);
                report.history[4].time = "Just now";
                if (!report.afterPhotoUrl) {
                    report.afterPhotoUrl = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80";
                }
            }
            this.saveReports();
        }
    }

    assignCrew(id, crewName, priority) {
        const report = this.getReportById(id);
        if (report) {
            report.assignedCrew = crewName;
            report.status = "In Progress";
            report.history[2].done = true;
            report.history[2].time = "Just now";
            report.history[3].done = true;
            report.history[3].time = "Work started";
            this.saveReports();
        }
    }

    toggleUpvote(id) {
        const report = this.getReportById(id);
        if (report) {
            if (report.userUpvoted) {
                report.upvotes = Math.max(0, report.upvotes - 1);
                report.userUpvoted = false;
            } else {
                report.upvotes += 1;
                report.userUpvoted = true;
            }
            this.saveReports();
            return { upvotes: report.upvotes, userUpvoted: report.userUpvoted };
        }
        return null;
    }
}

// Global Store Instance
const store = new RoadWatchStore();

// --- 3. APPLICATION CONTROLLER ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNotifications();
    initHeroCounters();
    initMainMap();
    initReportWizard();
    initStatusTracker();
    initPublicFeed();
    initAdminConsole();
    initSafetyFaq();
    initMobileNav();
    initQuickTrackHero();
});

// --- 4. THEME & HEADER CONTROLLER ---
function initTheme() {
    const themeBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");
    const savedTheme = localStorage.getItem(store.themeKey) || "light";

    if (savedTheme === "dark") {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        themeIcon.className = "fa-solid fa-sun";
    }

    themeBtn.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        if (isDark) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            themeIcon.className = "fa-regular fa-moon";
            localStorage.setItem(store.themeKey, "light");
            showToast("Switched to Light Mode", "info");
        } else {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            themeIcon.className = "fa-solid fa-sun";
            localStorage.setItem(store.themeKey, "dark");
            showToast("Switched to Dark Mode", "info");
        }
        updateChartsTheme();
    });

    // Close emergency banner
    const closeBannerBtn = document.getElementById("closeBannerBtn");
    const emergencyBanner = document.getElementById("emergencyBanner");
    if (closeBannerBtn && emergencyBanner) {
        closeBannerBtn.addEventListener("click", () => {
            emergencyBanner.style.display = "none";
        });
    }
}

function initNotifications() {
    const notifBtn = document.getElementById("notifBtn");
    const notifDropdown = document.getElementById("notifDropdown");
    const notifList = document.getElementById("notifList");
    const notifBadge = document.getElementById("notifBadge");
    const clearNotifsBtn = document.getElementById("clearNotifsBtn");

    notifList.innerHTML = NOTIFICATIONS.map(n => `
        <li class="notif-item ${n.urgent ? 'urgent' : ''}">
            <strong>${n.title}</strong>
            <span>${n.msg}</span>
            <div class="notif-meta">
                <span>${n.urgent ? '🚨 Priority P1' : 'ℹ️ Estate Update'}</span>
                <span>${n.time}</span>
            </div>
        </li>
    `).join("");

    notifBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
            notifDropdown.classList.remove("show");
        }
    });

    clearNotifsBtn.addEventListener("click", () => {
        notifBadge.style.display = "none";
        showToast("LPU notifications marked as read", "success");
    });
}

function initMobileNav() {
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    mobileBtn.addEventListener("click", () => {
        mobileDrawer.classList.toggle("open");
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileDrawer.classList.remove("open");
        });
    });
}

function initHeroCounters() {
    const resolvedEl = document.getElementById("statResolvedCount");
    const activeEl = document.getElementById("statActiveCount");
    const resolvedCount = store.reports.filter(r => r.status === "Resolved").length + 426;
    const activeCount = store.reports.filter(r => r.status === "In Progress").length + 6;

    if (resolvedEl) resolvedEl.textContent = resolvedCount.toLocaleString();
    if (activeEl) activeEl.textContent = activeCount.toLocaleString();
}

function initQuickTrackHero() {
    const trackInput = document.getElementById("quickTrackInput");
    const trackBtn = document.getElementById("quickTrackBtn");

    function doQuickTrack() {
        const val = trackInput.value.trim();
        if (val) {
            const trackSection = document.getElementById("trackSection");
            const targetInput = document.getElementById("trackIdInput");
            if (trackSection && targetInput) {
                targetInput.value = val;
                trackSection.scrollIntoView({ behavior: "smooth" });
                renderTicketLookup(val);
            }
        } else {
            showToast("Please enter an LPU Ticket ID", "warning");
        }
    }

    if (trackBtn) trackBtn.addEventListener("click", doQuickTrack);
    if (trackInput) {
        trackInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                doQuickTrack();
            }
        });
    }
}

// --- 5. INTERACTIVE LEAFLET MAP MODULE (LPU CAMPUS) ---
let cityMap = null;
let mapMarkersGroup = null;
let landmarkSpotlightMarker = null;

// Exact Center of Lovely Professional University (LPU), Phagwara, Punjab
const LPU_CAMPUS_CENTER = [31.2536, 75.7037];
const LPU_CAMPUS_ZOOM = 16;

// Key LPU Campus Locations Dictionary
const LPU_CAMPUS_LOCATIONS = {
    block34: {
        name: "Block 34 (School of CSE / IT)",
        address: "Internal Road between Block 34 and Uni-Mall Circle",
        landmark: "Opposite School of Computer Science (Block 34)",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2548,
        lng: 75.7032
    },
    block36: {
        name: "Block 36 & 38 (Engineering Wings)",
        address: "Engineering Quad Road, Opposite Block 36",
        landmark: "Near Robotics & Civil Engg Workshop",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2555,
        lng: 75.7038
    },
    block13: {
        name: "Block 13 & 14 (Mittal School of Business)",
        address: "West Academic Ring Road, Block 13 Front",
        landmark: "Adjacent to Central Fountain & Library Walkway",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2520,
        lng: 75.7018
    },
    block26: {
        name: "Block 25 to 29 (Pharmacy / Bio-Tech / Sciences)",
        address: "South Academic Boulevard, Block 26 Junction",
        landmark: "Near Pharmacy & Bio-Tech Research Labs",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2510,
        lng: 75.7025
    },
    block56: {
        name: "Block 55 to 58 (Agriculture & Design)",
        address: "Polyhouse & Agro-Farms Access Road",
        landmark: "Near Experimental Agro Fields & Design Studios",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2495,
        lng: 75.7040
    },
    unimall: {
        name: "Uni-Mall & Uni-Hotel Circle",
        address: "Main Commercial Plaza & Parking Ring",
        landmark: "Near Food Court, Dominos & Uni-Hotel Entrance",
        sector: "Sector 2 - Central Hub (Uni-Mall, Unipolis & Lawns)",
        lat: 31.2538,
        lng: 75.7042
    },
    unipolis: {
        name: "Baldev Raj Mittal Unipolis & Central Lawns",
        address: "Central Boulevard, Baldev Raj Mittal Unipolis Plaza",
        landmark: "Opposite Grand Covered Amphitheater & Lawns",
        sector: "Sector 2 - Central Hub (Uni-Mall, Unipolis & Lawns)",
        lat: 31.2530,
        lng: 75.7028
    },
    auditorium: {
        name: "Shanti Devi Mittal Auditorium (SDM)",
        address: "Shanti Devi Mittal Auditorium Access Road",
        landmark: "Near Executive Guest House & VIP Car Park",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2515,
        lng: 75.7015
    },
    bh4: {
        name: "Boys Hostel 4 (BH-4) Front Quad Road",
        address: "Main Quad Road, Front of Boys Hostel 4 (BH-4)",
        landmark: "Near BH-4 Dining Hall & Laundry Corridor",
        sector: "Sector 3 - Boys Hostel Complex (BH-1 to BH-7)",
        lat: 31.2570,
        lng: 75.7055
    },
    bh1: {
        name: "Boys Hostel 1, 2 & 3 North Entry Road",
        address: "BH-1 to BH-3 Main Transit Avenue",
        landmark: "Near Student Tuck Shops & Badminton Courts",
        sector: "Sector 3 - Boys Hostel Complex (BH-1 to BH-7)",
        lat: 31.2580,
        lng: 75.7045
    },
    gh2: {
        name: "Girls Hostel 2 & 4 (GH-2/GH-4) Walkway",
        address: "Crossway behind Girls Hostel 2 (GH-2)",
        landmark: "Near GH Gymnasium, Nescafe Kiosk & Lawn",
        sector: "Sector 4 - Girls Hostel Complex (GH-1 to GH-6)",
        lat: 31.2505,
        lng: 75.7060
    },
    hospital: {
        name: "LPU Hospital & University Health Centre",
        address: "Emergency Hospital Access Way",
        landmark: "Near 24/7 Pharmacy & Ambulance Bay",
        sector: "Sector 1 - Academic Corridor (Blocks 32-38, 13, 25-29)",
        lat: 31.2542,
        lng: 75.7012
    },
    sports: {
        name: "LPU Sports Stadium & Olympic Pool",
        address: "Stadium Perimeter Road",
        landmark: "Near Synthetic Athletics Track & Indoor Sports Complex",
        sector: "Sector 5 - Sports Arena & Olympic Complex",
        lat: 31.2485,
        lng: 75.7050
    },
    gate1: {
        name: "Main Gate 1 (NH-44 / GT Road Entry Loop)",
        address: "Main Gate 1 Arrival Flyway",
        landmark: "Near Security Checkpost & Welcome Fountain",
        sector: "Sector 6 - Main Gate 1, Gate 2 & Campus Ring Road",
        lat: 31.2562,
        lng: 75.7005
    },
    gate4: {
        name: "Gate 4 & Back Perimeter Road",
        address: "East Perimeter Ring Road, Near Gate 4",
        landmark: "Near Service Gate & Parking 4",
        sector: "Sector 6 - Main Gate 1, Gate 2 & Campus Ring Road",
        lat: 31.2588,
        lng: 75.7068
    },
    erickshaw: {
        name: "Central E-Rickshaw Stand & Transit Hub",
        address: "Central E-Rickshaw Turnabout & Shelter",
        landmark: "Between Block 34 and Central Lawns",
        sector: "Sector 2 - Central Hub (Uni-Mall, Unipolis & Lawns)",
        lat: 31.2545,
        lng: 75.7022
    }
};

function initMainMap() {
    const mapElement = document.getElementById("cityMap");
    if (!mapElement) return;

    cityMap = L.map("cityMap", {
        scrollWheelZoom: true
    }).setView(LPU_CAMPUS_CENTER, LPU_CAMPUS_ZOOM);

    // OpenStreetMap Tile Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Lovely Professional University (LPU)',
        maxZoom: 19
    }).addTo(cityMap);

    // Draw Official LPU Campus Boundary Polygon
    const LPU_CAMPUS_BOUNDARY = [
        [31.2595, 75.6995],
        [31.2612, 75.7072],
        [31.2580, 75.7088],
        [31.2465, 75.7095],
        [31.2455, 75.7015],
        [31.2520, 75.6985],
        [31.2565, 75.6990]
    ];

    L.polygon(LPU_CAMPUS_BOUNDARY, {
        color: '#f37021',
        weight: 2,
        dashArray: '6, 6',
        fillColor: '#f37021',
        fillOpacity: 0.05
    }).addTo(cityMap).bindTooltip("Lovely Professional University (LPU) Campus Perimeter", { sticky: true });

    mapMarkersGroup = L.layerGroup().addTo(cityMap);

    // Render Markers
    renderMapMarkers();

    // Filter Listeners
    const catFilter = document.getElementById("mapCategoryFilter");
    const sevFilter = document.getElementById("mapSeverityFilter");
    const statFilter = document.getElementById("mapStatusFilter");

    [catFilter, sevFilter, statFilter].forEach(filter => {
        filter.addEventListener("change", renderMapMarkers);
    });

    // Landmark Jump Listener
    const landmarkJumpSelect = document.getElementById("mapLandmarkJump");
    if (landmarkJumpSelect) {
        landmarkJumpSelect.addEventListener("change", () => {
            const val = landmarkJumpSelect.value;
            if (val) {
                const [lat, lng] = val.split(",").map(Number);
                const selectedText = landmarkJumpSelect.options[landmarkJumpSelect.selectedIndex].text;
                
                cityMap.flyTo([lat, lng], 17, { duration: 1.2 });

                if (landmarkSpotlightMarker) {
                    cityMap.removeLayer(landmarkSpotlightMarker);
                }

                const pinIcon = L.divIcon({
                    className: "custom-div-icon",
                    html: `<div class="custom-map-marker marker-progress" style="background:#0a2540; border: 2px solid #f37021; box-shadow: 0 0 15px rgba(243,112,33,0.8);"><i class="fa-solid fa-map-pin" style="color:#f37021;"></i></div>`,
                    iconSize: [38, 38],
                    iconAnchor: [19, 19],
                    popupAnchor: [0, -19]
                });

                landmarkSpotlightMarker = L.marker([lat, lng], { icon: pinIcon }).addTo(cityMap);
                landmarkSpotlightMarker.bindPopup(`<b>${selectedText}</b><br><span style="font-size:0.8rem; color:#64748b;">LPU Campus Landmark</span>`).openPopup();

                showToast(`Jumped to ${selectedText}`, "info");
            }
        });
    }

    // Reset View Button
    const resetZoomBtn = document.getElementById("resetMapZoomBtn");
    if (resetZoomBtn) {
        resetZoomBtn.addEventListener("click", () => {
            cityMap.setView(LPU_CAMPUS_CENTER, LPU_CAMPUS_ZOOM);
            if (landmarkSpotlightMarker) {
                cityMap.removeLayer(landmarkSpotlightMarker);
            }
            if (landmarkJumpSelect) landmarkJumpSelect.value = "";
            showToast("Centered on Lovely Professional University campus", "info");
        });
    }

    // Near Me Geolocation Button
    const locateBtn = document.getElementById("locateUserMapBtn");
    if (locateBtn) {
        locateBtn.addEventListener("click", () => {
            if (navigator.geolocation) {
                showToast("Acquiring campus GPS location...", "info");
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const userLat = pos.coords.latitude;
                        const userLng = pos.coords.longitude;
                        cityMap.setView([userLat, userLng], 17);

                        const userMarker = L.circleMarker([userLat, userLng], {
                            radius: 9,
                            fillColor: "#f37021",
                            color: "#ffffff",
                            weight: 3,
                            opacity: 1,
                            fillOpacity: 0.95
                        }).addTo(cityMap);

                        userMarker.bindPopup("<b>You are here (LPU Campus)</b><br>Scanning nearby road hazards...").openPopup();
                        showToast("Located your campus position!", "success");
                    },
                    (err) => {
                        console.warn("GPS error:", err);
                        showToast("Showing LPU Campus Center (Location access not granted)", "warning");
                        cityMap.setView(LPU_CAMPUS_CENTER, LPU_CAMPUS_ZOOM);
                    }
                );
            } else {
                showToast("Geolocation is not supported by your browser", "danger");
            }
        });
    }
}

function renderMapMarkers() {
    if (!cityMap || !mapMarkersGroup) return;

    mapMarkersGroup.clearLayers();

    const catVal = document.getElementById("mapCategoryFilter").value;
    const sevVal = document.getElementById("mapSeverityFilter").value;
    const statVal = document.getElementById("mapStatusFilter").value;

    const filteredReports = store.reports.filter(r => {
        const matchCat = (catVal === "all") || (r.category === catVal);
        const matchSev = (sevVal === "all") || (r.severity === sevVal);
        const matchStat = (statVal === "all") || (r.status === statVal);
        return matchCat && matchSev && matchStat;
    });

    filteredReports.forEach(report => {
        let iconClass = "marker-moderate";
        let faIcon = "fa-triangle-exclamation";

        if (report.status === "Resolved") {
            iconClass = "marker-resolved";
            faIcon = "fa-check";
        } else if (report.status === "In Progress") {
            iconClass = "marker-progress";
            faIcon = "fa-person-digging";
        } else if (report.severity === "critical") {
            iconClass = "marker-critical";
            faIcon = "fa-radiation";
        } else if (report.severity === "high") {
            iconClass = "marker-high";
            faIcon = "fa-fire";
        }

        const customIcon = L.divIcon({
            className: "custom-div-icon",
            html: `<div class="custom-map-marker ${iconClass}"><i class="fa-solid ${faIcon}"></i></div>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
            popupAnchor: [0, -18]
        });

        const marker = L.marker([report.lat, report.lng], { icon: customIcon });

        const popupContent = `
            <div class="map-popup-card">
                <img src="${report.photoUrl}" alt="${report.title}">
                <div class="map-popup-title">${report.title}</div>
                <div class="map-popup-loc"><i class="fa-solid fa-location-dot"></i> ${report.address}</div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span class="badge ${getSeverityBadgeClass(report.severity)}">${report.severity}</span>
                    <span class="badge badge-progress">${report.status}</span>
                </div>
                <button class="map-popup-btn" onclick="openReportDetails('${report.id}')">View Details & Status</button>
            </div>
        `;

        marker.bindPopup(popupContent);
        mapMarkersGroup.addLayer(marker);
    });
}

function getSeverityBadgeClass(severity) {
    switch (severity.toLowerCase()) {
        case "critical": return "badge-critical";
        case "high": return "badge-high";
        case "moderate": return "badge-moderate";
        default: return "badge-low";
    }
}

// --- 6. CITIZEN / STUDENT DAMAGE REPORTING WIZARD MODULE ---
let pickerMap = null;
let pickerMarker = null;
let uploadedPhotoData = null;

function initReportWizard() {
    const stepIndicators = document.querySelectorAll(".step-indicator");
    const stepContents = document.querySelectorAll(".form-step-content");

    function goToStep(stepNumber) {
        stepContents.forEach(content => content.classList.remove("active"));
        const targetStep = document.getElementById(`step${stepNumber}`);
        if (targetStep) targetStep.classList.add("active");

        stepIndicators.forEach(ind => {
            const step = parseInt(ind.dataset.step);
            if (step === stepNumber) {
                ind.classList.add("active");
                ind.classList.remove("completed");
            } else if (step < stepNumber) {
                ind.classList.add("completed");
                ind.classList.remove("active");
            } else {
                ind.classList.remove("active", "completed");
            }
        });

        if (stepNumber === 1 && pickerMap) {
            setTimeout(() => pickerMap.invalidateSize(), 200);
        }

        if (stepNumber === 4) {
            updateReviewCard();
        }
    }

    document.getElementById("toStep2Btn").addEventListener("click", () => {
        const address = document.getElementById("reportStreetAddress").value.trim();
        const ward = document.getElementById("reportWard").value;
        if (!address) {
            showToast("Please enter the campus road name or nearest block", "warning");
            document.getElementById("reportStreetAddress").focus();
            return;
        }
        if (!ward) {
            showToast("Please select an LPU Campus Sector", "warning");
            document.getElementById("reportWard").focus();
            return;
        }
        goToStep(2);
    });

    document.getElementById("backToStep1Btn").addEventListener("click", () => goToStep(1));
    document.getElementById("toStep3Btn").addEventListener("click", () => goToStep(3));
    document.getElementById("backToStep2Btn").addEventListener("click", () => goToStep(2));
    document.getElementById("toStep4Btn").addEventListener("click", () => goToStep(4));
    document.getElementById("backToStep3Btn").addEventListener("click", () => goToStep(3));

    stepIndicators.forEach(ind => {
        ind.addEventListener("click", () => {
            const step = parseInt(ind.dataset.step);
            goToStep(step);
        });
    });

    const catCards = document.querySelectorAll(".category-card");
    catCards.forEach(card => {
        card.addEventListener("click", () => {
            catCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            const radio = card.querySelector("input[type='radio']");
            if (radio) radio.checked = true;
        });
    });

    const sevCards = document.querySelectorAll(".severity-card");
    sevCards.forEach(card => {
        card.addEventListener("click", () => {
            sevCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            const radio = card.querySelector("input[type='radio']");
            if (radio) radio.checked = true;
        });
    });

    const quickTagBtns = document.querySelectorAll(".quick-tag-btn");
    const descInput = document.getElementById("reportDescription");
    quickTagBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tag = btn.dataset.tag;
            if (descInput.value.length > 0) {
                descInput.value += `, ${tag}`;
            } else {
                descInput.value = tag;
            }
            showToast(`Added tag: ${tag}`, "info");
        });
    });

    initPickerMap();

    // Quick Predefined LPU Spot Auto-Fill
    const quickSpotSelect = document.getElementById("quickLpuSpotSelect");
    if (quickSpotSelect) {
        quickSpotSelect.addEventListener("change", () => {
            const spotKey = quickSpotSelect.value;
            if (spotKey && LPU_CAMPUS_LOCATIONS[spotKey]) {
                const spot = LPU_CAMPUS_LOCATIONS[spotKey];
                document.getElementById("reportStreetAddress").value = spot.address;
                document.getElementById("reportLandmark").value = spot.landmark;
                document.getElementById("reportWard").value = spot.sector;
                document.getElementById("reportLat").value = spot.lat.toFixed(6);
                document.getElementById("reportLng").value = spot.lng.toFixed(6);

                if (pickerMap && pickerMarker) {
                    pickerMarker.setLatLng([spot.lat, spot.lng]);
                    pickerMap.setView([spot.lat, spot.lng], 17);
                }

                const gpsText = document.getElementById("gpsStatusText");
                if (gpsText) {
                    gpsText.innerHTML = `<span class="text-success"><i class="fa-solid fa-circle-check"></i> Auto-selected: <strong>${spot.name}</strong></span>`;
                }

                showToast(`Auto-filled details for ${spot.name}`, "success");
            }
        });
    }

    const autoGpsBtn = document.getElementById("autoDetectGpsBtn");
    const gpsStatusText = document.getElementById("gpsStatusText");
    if (autoGpsBtn) {
        autoGpsBtn.addEventListener("click", () => {
            if (navigator.geolocation) {
                gpsStatusText.textContent = "Acquiring campus satellite lock...";
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const lat = pos.coords.latitude;
                        const lng = pos.coords.longitude;
                        document.getElementById("reportLat").value = lat.toFixed(6);
                        document.getElementById("reportLng").value = lng.toFixed(6);
                        gpsStatusText.innerHTML = `<span class="text-success"><i class="fa-solid fa-circle-check"></i> Campus GPS Locked (±${Math.round(pos.coords.accuracy)}m)</span>`;
                        
                        if (pickerMap && pickerMarker) {
                            pickerMarker.setLatLng([lat, lng]);
                            pickerMap.setView([lat, lng], 17);
                        }
                        showToast("Coordinates auto-filled from device GPS", "success");
                    },
                    (err) => {
                        gpsStatusText.innerHTML = `<span class="text-danger"><i class="fa-solid fa-circle-exclamation"></i> Could not get GPS. Drag pin manually on LPU map.</span>`;
                    }
                );
            }
        });
    }

    initPhotoUploader();

    const anonCheckbox = document.getElementById("anonymousCheckbox");
    const reporterInputs = document.getElementById("reporterInputsGroup");
    if (anonCheckbox && reporterInputs) {
        anonCheckbox.addEventListener("change", () => {
            if (anonCheckbox.checked) {
                reporterInputs.style.opacity = "0.4";
                reporterInputs.style.pointerEvents = "none";
                showToast("Reporting set to Anonymous", "info");
            } else {
                reporterInputs.style.opacity = "1";
                reporterInputs.style.pointerEvents = "auto";
            }
        });
    }

    const reportForm = document.getElementById("damageReportForm");
    if (reportForm) {
        reportForm.addEventListener("submit", handleReportSubmission);
    }
}

function initPickerMap() {
    const pickerEl = document.getElementById("pickerMap");
    if (!pickerEl) return;

    pickerMap = L.map("pickerMap", {
        zoomControl: false
    }).setView(LPU_CAMPUS_CENTER, 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap | Lovely Professional University'
    }).addTo(pickerMap);

    const pinIcon = L.divIcon({
        className: "picker-custom-pin",
        html: `<div class="custom-map-marker marker-critical"><i class="fa-solid fa-location-pin"></i></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36]
    });

    pickerMarker = L.marker(LPU_CAMPUS_CENTER, {
        draggable: true,
        icon: pinIcon
    }).addTo(pickerMap);

    pickerMarker.on("dragend", function(e) {
        const position = pickerMarker.getLatLng();
        document.getElementById("reportLat").value = position.lat.toFixed(6);
        document.getElementById("reportLng").value = position.lng.toFixed(6);
        document.getElementById("gpsStatusText").textContent = `Pin relocated: ${position.lat.toFixed(4)}, ${position.lng.toFixed(4)}`;
    });

    pickerMap.on("click", function(e) {
        pickerMarker.setLatLng(e.latlng);
        document.getElementById("reportLat").value = e.latlng.lat.toFixed(6);
        document.getElementById("reportLng").value = e.latlng.lng.toFixed(6);
        document.getElementById("gpsStatusText").textContent = `Pin relocated: ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`;
    });
}

function initPhotoUploader() {
    const dropzone = document.getElementById("uploadDropzone");
    const fileInput = document.getElementById("reportPhotoInput");
    const emptyState = document.getElementById("dropzoneEmpty");
    const previewState = document.getElementById("dropzonePreview");
    const previewImg = document.getElementById("previewImgElement");
    const removePhotoBtn = document.getElementById("removePhotoBtn");

    const sampleBtns = document.querySelectorAll(".btn-sample-photo");
    sampleBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgUrl = btn.dataset.img;
            const cat = btn.dataset.type;
            const sev = btn.dataset.sev;
            loadPhotoAndTriggerAi(imgUrl, cat, sev);
        });
    });

    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                loadPhotoAndTriggerAi(event.target.result, "pothole", "critical");
            };
            reader.readAsDataURL(file);
        }
    });

    removePhotoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        previewState.classList.add("hidden");
        emptyState.classList.remove("hidden");
        fileInput.value = "";
        uploadedPhotoData = null;
        resetAiResults();
    });

    ["dragenter", "dragover"].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropzone.classList.add("dragover");
        });
    });

    ["dragleave", "drop"].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropzone.classList.remove("dragover");
        });
    });

    dropzone.addEventListener("drop", (e) => {
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                loadPhotoAndTriggerAi(event.target.result, "pothole", "critical");
            };
            reader.readAsDataURL(file);
        }
    });
}

function loadPhotoAndTriggerAi(imgUrl, categoryHint, severityHint) {
    const emptyState = document.getElementById("dropzoneEmpty");
    const previewState = document.getElementById("dropzonePreview");
    const previewImg = document.getElementById("previewImgElement");
    const aiScanner = document.getElementById("aiLiveScanner");
    const scanBadge = document.getElementById("scanConfidenceBadge");

    emptyState.classList.add("hidden");
    previewState.classList.remove("hidden");
    previewImg.src = imgUrl;
    uploadedPhotoData = imgUrl;

    aiScanner.classList.remove("hidden");
    scanBadge.textContent = "LPU AI Scanning...";

    const aiStatus = document.getElementById("aiEngineStatus");
    aiStatus.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Neural heuristic analysis...`;

    setTimeout(() => {
        scanBadge.textContent = "Pothole Defect: 96% Certainty";
        aiStatus.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> Model inference complete`;

        document.getElementById("aiDetectedType").textContent = "Pothole / Asphalt Cavity (~11.8cm)";
        document.getElementById("aiConfidenceVal").textContent = "96.4%";
        document.getElementById("aiSuggestedSeverity").innerHTML = `<span class="badge badge-critical">Priority 1 (Urgent Repair)</span>`;
        document.getElementById("aiSuggestedUnit").textContent = "LPU Central Zone Road Paving Unit";

        document.getElementById("aiInsightText").innerHTML = `<strong>High Hazard Confidence:</strong> Road surface exhibits asphalt fracture near e-rickshaw turning zone. Fast-track Estate dispatch recommended.`;

        showToast("LPU AI Vision: Pothole & depth perimeter detected (96.4% confidence)", "success");
    }, 1400);
}

function resetAiResults() {
    document.getElementById("aiEngineStatus").innerHTML = `<i class="fa-solid fa-circle-check"></i> Ready to scan`;
    document.getElementById("aiDetectedType").textContent = "—";
    document.getElementById("aiConfidenceVal").textContent = "—";
    document.getElementById("aiSuggestedSeverity").textContent = "—";
    document.getElementById("aiSuggestedUnit").textContent = "—";
    document.getElementById("aiInsightText").textContent = "Upload or choose a photo to trigger instant AI damage boundary extraction and priority classification.";
}

function updateReviewCard() {
    const address = document.getElementById("reportStreetAddress").value || "Not provided";
    const ward = document.getElementById("reportWard").value || "Not selected";
    
    const checkedCat = document.querySelector("input[name='damageCategory']:checked");
    const catVal = checkedCat ? checkedCat.value.toUpperCase() : "POTHOLE";

    const checkedSev = document.querySelector("input[name='damageSeverity']:checked");
    const sevVal = checkedSev ? checkedSev.value : "moderate";

    document.getElementById("revLocation").textContent = address;
    document.getElementById("revWard").textContent = ward;
    document.getElementById("revCategory").textContent = catVal;
    document.getElementById("revSeverity").innerHTML = `<span class="badge ${getSeverityBadgeClass(sevVal)}">${sevVal}</span>`;
}

function handleReportSubmission(e) {
    e.preventDefault();

    const address = document.getElementById("reportStreetAddress").value.trim();
    const landmark = document.getElementById("reportLandmark").value.trim();
    const ward = document.getElementById("reportWard").value;
    const lat = parseFloat(document.getElementById("reportLat").value) || LPU_CAMPUS_CENTER[0];
    const lng = parseFloat(document.getElementById("reportLng").value) || LPU_CAMPUS_CENTER[1];

    const catInput = document.querySelector("input[name='damageCategory']:checked");
    const category = catInput ? catInput.value : "pothole";

    const sevInput = document.querySelector("input[name='damageSeverity']:checked");
    const severity = sevInput ? sevInput.value : "moderate";

    const description = document.getElementById("reportDescription").value.trim();

    const isAnonymous = document.getElementById("anonymousCheckbox").checked;
    const reporterName = isAnonymous ? "Anonymous Student" : (document.getElementById("reporterName").value.trim() || "LPU Student");
    const reporterPhone = isAnonymous ? "" : document.getElementById("reporterPhone").value.trim();
    const reporterEmail = isAnonymous ? "" : document.getElementById("reporterEmail").value.trim();

    const photoUrl = uploadedPhotoData || "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80";

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `LPU-${randomNum}`;

    const newReport = {
        id: newId,
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Hazard at ${address.split(',')[0]}`,
        category: category,
        categoryName: getCategoryDisplayName(category),
        severity: severity,
        status: "Reported",
        address: address,
        landmark: landmark || "LPU Campus Facility",
        ward: ward,
        lat: lat,
        lng: lng,
        photoUrl: photoUrl,
        afterPhotoUrl: "",
        description: description || "Reported road defect on LPU internal campus road requiring Estate maintenance repair.",
        aiAnalysis: {
            detectedType: `${category.toUpperCase()} defect`,
            confidence: 94,
            suggestedSeverity: severity,
            suggestedCrew: "LPU Central Zone Road Paving Unit"
        },
        reporter: {
            name: reporterName,
            phone: reporterPhone,
            email: reporterEmail,
            isAnonymous: isAnonymous
        },
        assignedCrew: "Unassigned (Queued for Inspection)",
        upvotes: 1,
        userUpvoted: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        history: [
            { step: 1, title: "Report Logged", time: "Just now", done: true },
            { step: 2, title: "Estate Verification", time: "Pending", done: false },
            { step: 3, title: "Squad Dispatched", time: "Pending", done: false },
            { step: 4, title: "Work in Progress", time: "Pending", done: false },
            { step: 5, title: "Repaved & Inspected", time: "Pending", done: false }
        ]
    };

    store.addReport(newReport);

    renderMapMarkers();
    renderPublicFeed();
    renderAdminTable();
    updateAdminKpis();
    initHeroCounters();

    showSuccessModal(newId);
}

function getCategoryDisplayName(cat) {
    switch (cat) {
        case "pothole": return "Pothole / Asphalt Cavity";
        case "crack": return "Broken Paver Blocks";
        case "manhole": return "Drainage Grate Defect";
        case "waterlog": return "Rain Waterlogging";
        case "collapse": return "Speed Breaker / Pavers";
        case "signage": return "Bollard & Traffic Sign";
        default: return "Campus Road Defect";
    }
}

function showSuccessModal(ticketId) {
    const modal = document.getElementById("successModal");
    const ticketIdDisplay = document.getElementById("createdTicketId");
    const copyBtn = document.getElementById("copyTicketBtn");
    const closeBtn = document.getElementById("closeSuccessModalBtn");
    const trackCreatedBtn = document.getElementById("trackCreatedTicketBtn");

    ticketIdDisplay.textContent = ticketId;
    modal.classList.remove("hidden");

    copyBtn.onclick = () => {
        navigator.clipboard.writeText(ticketId);
        showToast(`Copied ${ticketId} to clipboard!`, "success");
    };

    closeBtn.onclick = () => {
        modal.classList.add("hidden");
    };

    trackCreatedBtn.onclick = () => {
        modal.classList.add("hidden");
        const trackSection = document.getElementById("trackSection");
        const targetInput = document.getElementById("trackIdInput");
        if (trackSection && targetInput) {
            targetInput.value = ticketId;
            trackSection.scrollIntoView({ behavior: "smooth" });
            renderTicketLookup(ticketId);
        }
    };
}

// --- 7. TRANSPARENCY STATUS TRACKER MODULE ---
function initStatusTracker() {
    const trackForm = document.getElementById("trackStatusForm");
    const trackInput = document.getElementById("trackIdInput");
    const sampleChips = document.querySelectorAll(".chip-sample-ticket");

    trackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = trackInput.value.trim();
        if (id) renderTicketLookup(id);
    });

    sampleChips.forEach(chip => {
        chip.addEventListener("click", () => {
            const id = chip.dataset.id;
            trackInput.value = id;
            renderTicketLookup(id);
        });
    });

    renderTicketLookup("LPU-8421");
}

function renderTicketLookup(ticketId) {
    const container = document.getElementById("trackerResultCard");
    const report = store.getReportById(ticketId);

    if (!report) {
        container.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <div style="font-size:3rem; color:var(--danger); margin-bottom:12px;"><i class="fa-solid fa-circle-xmark"></i></div>
                <h3>LPU Ticket "${ticketId}" Not Found</h3>
                <p style="color:var(--text-muted); margin-top:8px;">Please check your ticket ID (e.g., LPU-8421, LPU-7193) or verify in the campus feed below.</p>
            </div>
        `;
        return;
    }

    let currentStepIndex = 1;
    if (report.status === "Verified") currentStepIndex = 2;
    if (report.status === "In Progress") currentStepIndex = 4;
    if (report.status === "Resolved") currentStepIndex = 5;

    const timelineBarWidth = ((currentStepIndex - 1) / 4) * 100;

    container.innerHTML = `
        <div class="ticket-header-strip">
            <div>
                <span class="ticket-pill">${report.id}</span>
                <h3 class="ticket-main-title" style="margin-top:8px;">${report.title}</h3>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
                    <i class="fa-solid fa-location-dot"></i> ${report.address} • ${report.ward}
                </div>
            </div>
            <div class="ticket-badges-group">
                <span class="badge ${getSeverityBadgeClass(report.severity)}">${report.severity} Severity</span>
                <span class="badge badge-progress">${report.status}</span>
            </div>
        </div>

        <!-- 5-Step Stepper -->
        <div class="timeline-stepper">
            <div class="timeline-bar">
                <div class="timeline-bar-fill" style="width: ${timelineBarWidth}%;"></div>
            </div>

            ${report.history.map((step, idx) => {
                const stepNum = idx + 1;
                let stepClass = "";
                if (stepNum < currentStepIndex || report.status === "Resolved") stepClass = "completed";
                else if (stepNum === currentStepIndex) stepClass = "current";

                let icon = "fa-check";
                if (stepNum === 1) icon = "fa-clipboard-check";
                if (stepNum === 2) icon = "fa-magnifying-glass";
                if (stepNum === 3) icon = "fa-truck-fast";
                if (stepNum === 4) icon = "fa-road";
                if (stepNum === 5) icon = "fa-circle-check";

                return `
                    <div class="timeline-step ${stepClass}">
                        <div class="timeline-node"><i class="fa-solid ${icon}"></i></div>
                        <div class="timeline-step-title">${step.title}</div>
                        <div class="timeline-step-time">${step.time}</div>
                    </div>
                `;
            }).join("")}
        </div>

        <!-- Deep Info Breakdown -->
        <div class="ticket-deep-info">
            <div class="ticket-info-list">
                <div class="ticket-info-row">
                    <span>Assigned Estate Squad:</span>
                    <strong>${report.assignedCrew}</strong>
                </div>
                <div class="ticket-info-row">
                    <span>LPU AI Model Confidence:</span>
                    <strong class="text-accent">${report.aiAnalysis.confidence}% (${report.aiAnalysis.detectedType})</strong>
                </div>
                <div class="ticket-info-row">
                    <span>Student "Me Too" Confirmations:</span>
                    <strong><i class="fa-solid fa-thumbs-up text-primary"></i> ${report.upvotes} campus commuters confirmed</strong>
                </div>
                <div class="ticket-info-row">
                    <span>LPU Estate Resolution SLA:</span>
                    <strong>${report.status === "Resolved" ? "Completed Ahead of SLA" : "Within 18 Hours"}</strong>
                </div>
                <div style="margin-top:10px; font-size:0.88rem; color:var(--text-muted);">
                    <strong>Description:</strong> ${report.description}
                </div>
            </div>

            <div>
                <div class="ticket-photo-box">
                    <img src="${report.status === 'Resolved' && report.afterPhotoUrl ? report.afterPhotoUrl : report.photoUrl}" alt="${report.title}">
                </div>
                <div style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin-top:6px;">
                    ${report.status === 'Resolved' ? '✅ Post-Repair Inspection Photo' : '📷 Student / Staff Evidence Photo'}
                </div>
            </div>
        </div>
    `;
}

// --- 8. PUBLIC COMMUNITY FEED MODULE ---
function initPublicFeed() {
    const searchInput = document.getElementById("feedSearchInput");
    const sortSelect = document.getElementById("feedSortSelect");
    const pills = document.querySelectorAll(".feed-pill");

    if (searchInput) {
        searchInput.addEventListener("input", renderPublicFeed);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", renderPublicFeed);
    }

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            renderPublicFeed();
        });
    });

    renderPublicFeed();
}

function renderPublicFeed() {
    const grid = document.getElementById("feedCardsGrid");
    if (!grid) return;

    const searchTerm = (document.getElementById("feedSearchInput")?.value || "").toLowerCase();
    const activePill = document.querySelector(".feed-pill.active");
    const statusFilter = activePill ? activePill.dataset.status : "all";
    const sortVal = document.getElementById("feedSortSelect")?.value || "newest";

    const countAll = store.reports.length;
    const countPending = store.reports.filter(r => r.status === "Reported" || r.status === "Verified").length;
    const countProgress = store.reports.filter(r => r.status === "In Progress").length;
    const countResolved = store.reports.filter(r => r.status === "Resolved").length;

    document.getElementById("countAllFeed").textContent = countAll;
    document.getElementById("countPendingFeed").textContent = countPending;
    document.getElementById("countProgressFeed").textContent = countProgress;
    document.getElementById("countResolvedFeed").textContent = countResolved;

    let filtered = store.reports.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchTerm) ||
                              r.address.toLowerCase().includes(searchTerm) ||
                              r.ward.toLowerCase().includes(searchTerm) ||
                              r.description.toLowerCase().includes(searchTerm);

        let matchesStatus = true;
        if (statusFilter !== "all") {
            matchesStatus = (r.status === statusFilter);
        }

        return matchesSearch && matchesStatus;
    });

    if (sortVal === "upvotes") {
        filtered.sort((a, b) => b.upvotes - a.upvotes);
    } else if (sortVal === "severity") {
        const order = { critical: 4, high: 3, moderate: 2, low: 1 };
        filtered.sort((a, b) => (order[b.severity] || 0) - (order[a.severity] || 0));
    } else {
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 60px 20px;">
                <i class="fa-solid fa-folder-open" style="font-size:3rem; color:var(--text-light); margin-bottom:14px;"></i>
                <h3>No Campus Road Hazards Found</h3>
                <p style="color:var(--text-muted);">Try adjusting your search query or filter pills.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(report => `
        <div class="feed-card">
            <div class="feed-card-media">
                <img src="${report.photoUrl}" alt="${report.title}" loading="lazy">
                <div class="feed-card-badges">
                    <span class="badge ${getSeverityBadgeClass(report.severity)}">${report.severity}</span>
                    <span class="badge badge-progress">${report.status}</span>
                </div>
            </div>
            <div class="feed-card-body">
                <h4 class="feed-card-title">${report.title}</h4>
                <div class="feed-card-location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${report.address} (${report.ward.split('-')[0].trim()})</span>
                </div>
                <p class="feed-card-desc">${report.description.length > 110 ? report.description.substring(0, 110) + '...' : report.description}</p>
                <div class="feed-card-footer">
                    <button class="feed-upvote-btn ${report.userUpvoted ? 'upvoted' : ''}" onclick="handleFeedUpvote('${report.id}', this)">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>Me Too (${report.upvotes})</span>
                    </button>
                    <span class="feed-view-btn" onclick="openReportDetails('${report.id}')">
                        Inspect <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join("");
}

function handleFeedUpvote(reportId, btnElement) {
    const result = store.toggleUpvote(reportId);
    if (result) {
        btnElement.classList.toggle("upvoted", result.userUpvoted);
        btnElement.querySelector("span").textContent = `Me Too (${result.upvotes})`;
        showToast(result.userUpvoted ? "Upvoted hazard! LPU Estate priority elevated." : "Removed upvote.", "info");
    }
}

// --- 9. LPU ESTATE OFFICE ADMIN DASHBOARD MODULE ---
let categoryChartInstance = null;
let statusChartInstance = null;

function initAdminConsole() {
    updateAdminKpis();
    initAdminCharts();
    renderAdminTable();

    const tableSearch = document.getElementById("adminTableSearch");
    if (tableSearch) {
        tableSearch.addEventListener("input", () => renderAdminTable(tableSearch.value));
    }

    const exportBtn = document.getElementById("exportCsvBtn");
    if (exportBtn) {
        exportBtn.addEventListener("click", exportWorkOrdersCsv);
    }

    const dispatchBtn = document.getElementById("openDispatchModalBtn");
    if (dispatchBtn) {
        dispatchBtn.addEventListener("click", openDispatchModal);
    }

    const dispatchModal = document.getElementById("dispatchModal");
    const closeDispatchBtn = document.getElementById("closeDispatchModalBtn");
    const cancelDispatchBtn = document.getElementById("cancelDispatchBtn");
    const dispatchForm = document.getElementById("dispatchCrewForm");

    if (closeDispatchBtn) closeDispatchBtn.onclick = () => dispatchModal.classList.add("hidden");
    if (cancelDispatchBtn) cancelDispatchBtn.onclick = () => dispatchModal.classList.add("hidden");

    if (dispatchForm) {
        dispatchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const ticketId = document.getElementById("dispatchSelectTicket").value;
            const crewName = document.getElementById("dispatchSelectCrew").value;
            const priority = document.getElementById("dispatchPriority").value;

            store.assignCrew(ticketId, crewName, priority);
            dispatchModal.classList.add("hidden");
            
            showToast(`Dispatched ${crewName} to ticket ${ticketId}!`, "success");
            
            updateAdminKpis();
            renderAdminTable();
            renderMapMarkers();
            renderPublicFeed();
        });
    }
}

function updateAdminKpis() {
    const totalReports = store.reports.length;
    const criticalHazards = store.reports.filter(r => r.severity === "critical" && r.status !== "Resolved").length;
    const inProgress = store.reports.filter(r => r.status === "In Progress").length;
    const resolvedTotal = store.reports.filter(r => r.status === "Resolved").length;

    document.getElementById("kpiTotalReports").textContent = totalReports;
    document.getElementById("kpiCriticalHazards").textContent = criticalHazards;
    document.getElementById("kpiInProgress").textContent = inProgress;
    document.getElementById("kpiResolvedTotal").textContent = resolvedTotal;
}

function initAdminCharts() {
    const isDark = document.body.classList.contains("dark-mode");
    const textColor = isDark ? "#9ca3af" : "#64748b";

    // 1. Category Chart
    const ctxCategory = document.getElementById("categoryChart");
    if (ctxCategory && typeof Chart !== "undefined") {
        const catCounts = {
            pothole: 0,
            crack: 0,
            manhole: 0,
            waterlog: 0,
            collapse: 0,
            signage: 0
        };

        store.reports.forEach(r => {
            if (catCounts[r.category] !== undefined) catCounts[r.category]++;
            else catCounts.pothole++;
        });

        categoryChartInstance = new Chart(ctxCategory, {
            type: "doughnut",
            data: {
                labels: ["Potholes", "Broken Pavers", "Drainage Grates", "Waterlogging", "Speed Breakers", "Bollards/Signs"],
                datasets: [{
                    data: [
                        catCounts.pothole,
                        catCounts.crack,
                        catCounts.manhole,
                        catCounts.waterlog,
                        catCounts.collapse,
                        catCounts.signage
                    ],
                    backgroundColor: [
                        "#f37021",
                        "#0ea5e9",
                        "#f59e0b",
                        "#06b6d4",
                        "#dc2626",
                        "#8b5cf6"
                    ],
                    borderWidth: 2,
                    borderColor: isDark ? "#121824" : "#ffffff"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: { color: textColor, font: { family: "'Plus Jakarta Sans'" } }
                    }
                }
            }
        });
    }

    // 2. Status Chart
    const ctxStatus = document.getElementById("statusChart");
    if (ctxStatus && typeof Chart !== "undefined") {
        const sectorStats = {};
        store.reports.forEach(r => {
            const sectorKey = r.ward.split("-")[0].trim();
            if (!sectorStats[sectorKey]) {
                sectorStats[sectorKey] = { open: 0, resolved: 0 };
            }
            if (r.status === "Resolved") {
                sectorStats[sectorKey].resolved++;
            } else {
                sectorStats[sectorKey].open++;
            }
        });

        const labels = Object.keys(sectorStats);
        const openData = labels.map(l => sectorStats[l].open);
        const resolvedData = labels.map(l => sectorStats[l].resolved);

        statusChartInstance = new Chart(ctxStatus, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Open Defects",
                        data: openData,
                        backgroundColor: "#ef4444"
                    },
                    {
                        label: "Repaved / Resolved",
                        data: resolvedData,
                        backgroundColor: "#10b981"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: textColor } },
                    y: { ticks: { color: textColor, precision: 0 }, beginAtZero: true }
                },
                plugins: {
                    legend: {
                        position: "top",
                        labels: { color: textColor, font: { family: "'Plus Jakarta Sans'" } }
                    }
                }
            }
        });
    }
}

function updateChartsTheme() {
    if (categoryChartInstance) {
        categoryChartInstance.destroy();
    }
    if (statusChartInstance) {
        statusChartInstance.destroy();
    }
    initAdminCharts();
}

function renderAdminTable(filterText = "") {
    const tbody = document.getElementById("adminTableBody");
    if (!tbody) return;

    const term = filterText.toLowerCase();
    const reports = store.reports.filter(r => {
        return r.id.toLowerCase().includes(term) ||
               r.address.toLowerCase().includes(term) ||
               r.ward.toLowerCase().includes(term) ||
               r.assignedCrew.toLowerCase().includes(term) ||
               r.categoryName.toLowerCase().includes(term);
    });

    tbody.innerHTML = reports.map(r => `
        <tr>
            <td><strong class="font-mono text-primary">${r.id}</strong></td>
            <td><img src="${r.photoUrl}" alt="Photo" class="table-thumb"></td>
            <td>
                <strong>${r.categoryName}</strong><br>
                <span class="badge ${getSeverityBadgeClass(r.severity)}">${r.severity}</span>
            </td>
            <td>
                <div>${r.address}</div>
                <small style="color:var(--text-muted);">${r.ward.split('-')[0].trim()}</small>
            </td>
            <td style="white-space:nowrap; font-size:0.8rem; color:var(--text-muted);">
                ${new Date(r.createdAt).toLocaleDateString()}
            </td>
            <td>
                <span style="font-size:0.82rem; font-weight:600;">${r.assignedCrew}</span>
            </td>
            <td>
                <select class="table-status-select" onchange="handleAdminStatusChange('${r.id}', this.value)">
                    <option value="Reported" ${r.status === 'Reported' ? 'selected' : ''}>📌 Reported</option>
                    <option value="Verified" ${r.status === 'Verified' ? 'selected' : ''}>🔍 Verified</option>
                    <option value="In Progress" ${r.status === 'In Progress' ? 'selected' : ''}>🚜 In Progress</option>
                    <option value="Resolved" ${r.status === 'Resolved' ? 'selected' : ''}>✅ Resolved</option>
                </select>
            </td>
            <td>
                <button class="btn btn-outline btn-sm" onclick="openReportDetails('${r.id}')" title="Inspect">
                    <i class="fa-solid fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join("");
}

function handleAdminStatusChange(ticketId, newStatus) {
    store.updateStatus(ticketId, newStatus);
    showToast(`Ticket ${ticketId} updated to: ${newStatus}`, "success");
    
    updateAdminKpis();
    renderMapMarkers();
    renderPublicFeed();
    updateChartsTheme();
}

function openDispatchModal() {
    const modal = document.getElementById("dispatchModal");
    const selectTicket = document.getElementById("dispatchSelectTicket");

    const openTickets = store.reports.filter(r => r.status !== "Resolved");
    selectTicket.innerHTML = openTickets.map(t => `
        <option value="${t.id}">${t.id} - ${t.categoryName} (${t.address})</option>
    `).join("");

    modal.classList.remove("hidden");
}

function exportWorkOrdersCsv() {
    const headers = ["Ticket ID", "Category", "Urgency", "Status", "Campus Location", "Sector", "Latitude", "Longitude", "Assigned Squad", "Upvotes", "Created Date"];
    const rows = store.reports.map(r => [
        r.id,
        `"${r.categoryName}"`,
        r.severity,
        r.status,
        `"${r.address}"`,
        `"${r.ward}"`,
        r.lat,
        r.lng,
        `"${r.assignedCrew}"`,
        r.upvotes,
        `"${new Date(r.createdAt).toISOString()}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `LPU_Campus_Road_Work_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Downloaded LPU Campus Work Orders CSV file!", "success");
}

// --- 10. INCIDENT DETAILS MODAL MODULE ---
function openReportDetails(ticketId) {
    const report = store.getReportById(ticketId);
    if (!report) return;

    const modal = document.getElementById("detailsModal");
    const modalTitle = document.getElementById("detailTitle");
    const modalId = document.getElementById("detailTicketId");
    const modalBody = document.getElementById("detailModalBody");

    modalId.textContent = report.id;
    modalTitle.textContent = report.title;

    modalBody.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; margin-bottom:20px;">
            <div>
                <img src="${report.photoUrl}" alt="${report.title}" style="width:100%; height:230px; object-fit:cover; border-radius:var(--radius-lg); border:1px solid var(--border-color);">
                <div style="display:flex; justify-content:space-between; margin-top:8px;">
                    <span class="badge ${getSeverityBadgeClass(report.severity)}">${report.severity} Severity</span>
                    <span class="badge badge-progress">${report.status}</span>
                </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
                <div>
                    <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">CAMPUS LOCATION & SECTOR</span>
                    <p style="font-weight:600; font-size:0.95rem;">${report.address}</p>
                    <p style="font-size:0.82rem; color:var(--text-muted);">${report.ward} • Landmark: ${report.landmark}</p>
                </div>
                <div>
                    <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">LPU GPS COORDINATES</span>
                    <p class="font-mono" style="font-size:0.85rem;">Lat: ${report.lat}, Lng: ${report.lng}</p>
                </div>
                <div>
                    <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">ASSIGNED ESTATE SQUAD</span>
                    <p style="font-weight:700; color:var(--primary); font-size:0.95rem;">${report.assignedCrew}</p>
                </div>
                <div>
                    <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">REPORTER CREDENTIALS</span>
                    <p style="font-size:0.88rem;">${report.reporter.isAnonymous ? '🔒 Anonymous Student' : `${report.reporter.name} (${report.reporter.phone || 'LPU Student'})`}</p>
                </div>
            </div>
        </div>

        <div style="background-color:var(--bg-surface-alt); padding:16px; border-radius:var(--radius-md); margin-bottom:20px;">
            <strong style="display:block; font-size:0.88rem; margin-bottom:6px;"><i class="fa-solid fa-brain text-primary"></i> LPU AI Vision Diagnostics:</strong>
            <p style="font-size:0.84rem; color:var(--text-muted);">
                Defect classified as <strong>${report.aiAnalysis.detectedType}</strong> with <strong>${report.aiAnalysis.confidence}%</strong> model certainty. 
                Recommended response: ${report.aiAnalysis.suggestedSeverity}.
            </p>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:16px;">
            <button class="btn btn-outline btn-sm" onclick="trackFromDetails('${report.id}')">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Open in Status Tracker</span>
            </button>
            <button class="btn btn-primary btn-sm" onclick="closeDetailsModal()">
                <span>Close</span>
            </button>
        </div>
    `;

    modal.classList.remove("hidden");

    const closeBtn = document.getElementById("closeDetailsModalBtn");
    if (closeBtn) closeBtn.onclick = closeDetailsModal;
}

function closeDetailsModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) modal.classList.add("hidden");
}

function trackFromDetails(ticketId) {
    closeDetailsModal();
    const trackSection = document.getElementById("trackSection");
    const targetInput = document.getElementById("trackIdInput");
    if (trackSection && targetInput) {
        targetInput.value = ticketId;
        trackSection.scrollIntoView({ behavior: "smooth" });
        renderTicketLookup(ticketId);
    }
}

// --- 11. SAFETY FAQ ACCORDION ---
function initSafetyFaq() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        questionBtn.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            faqItems.forEach(i => i.classList.remove("open"));
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });
}

// --- 12. TOAST NOTIFICATION UTILITY ---
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "danger") icon = "fa-triangle-exclamation";
    if (type === "warning") icon = "fa-triangle-exclamation";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "toastSlideIn 0.3s ease reverse forwards";
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}