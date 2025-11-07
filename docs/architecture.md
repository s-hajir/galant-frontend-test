# Fleet & Construction Equipment Rental Management Dashboard
## System Architecture Document

**Document Version:** 1.0  
**Created:** November 6, 2025  
**Architecture Type:** Frontend-First MVP  
**Status:** Ready for Development

---

## 📋 Executive Summary

### Architecture Overview
This is a **frontend-only React application** that demonstrates the complete Fleet Management Dashboard using client-side state management and mock data. The architecture prioritizes rapid MVP delivery, excellent UX, and clean code structure that will easily transition to a backend API when ready.

### Key Design Decisions
- ✅ **Frontend-First**: React + TypeScript for type safety and scalability
- ✅ **Component Library**: shadcn/ui for professional, accessible UI
- ✅ **Styling**: Tailwind CSS for rapid development and consistency
- ✅ **State Management**: React Context API + custom hooks (lightweight, no Redux needed for MVP)
- ✅ **Mock Data**: JSON fixtures that mirror future API responses
- ✅ **No Backend**: All logic runs in the browser during MVP phase
- ✅ **API-Ready**: Clean data layer designed for easy API integration later

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **UI Framework** | React 18+ | Component-based UI |
| **Language** | TypeScript | Type safety and developer experience |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Component Library** | shadcn/ui | Pre-built, accessible components |
| **State Management** | React Context + Hooks | Lightweight, built-in state |
| **Routing** | React Router v6 | Client-side navigation |
| **Build Tool** | Vite | Fast development and bundling |
| **Package Manager** | npm/pnpm | Dependency management |
| **Development** | Node.js 18+ | Runtime environment |

---

## 🏗️ System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           React Application (Port 5173)              │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │        UI Components (shadcn/ui)            │    │   │
│  │  │  - Dashboard  - Fleet Inventory             │    │   │
│  │  │  - Rentals    - Maintenance                 │    │   │
│  │  │  - Billing    - Customers                   │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                      ▲                               │   │
│  │                      │ (Props)                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │      React Context + Custom Hooks           │    │   │
│  │  │  - EquipmentContext  - RentalContext       │    │   │
│  │  │  - CustomerContext   - MaintenanceContext  │    │   │
│  │  │  - useFleetData()    - useRentalLogic()    │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                      ▲                               │   │
│  │                      │                               │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │      Data Service Layer (mockData)          │    │   │
│  │  │  - equipmentService.ts                      │    │   │
│  │  │  - rentalService.ts                         │    │   │
│  │  │  - customerService.ts                       │    │   │
│  │  │  - maintenanceService.ts                    │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                      ▲                               │   │
│  │                      │ (Import)                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │      Mock Data (JSON Fixtures)              │    │   │
│  │  │  /src/data/mock/                            │    │   │
│  │  │  - equipment.json                           │    │   │
│  │  │  - rentals.json                             │    │   │
│  │  │  - customers.json                           │    │   │
│  │  │  - maintenance.json                         │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘

[FUTURE] Backend API (Node.js/Python REST API)
[FUTURE] Database (PostgreSQL/MongoDB)
```

---

## 📁 Project Structure

```
rental-dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── dashboard/
│   │   │   ├── FleetStatusCard.tsx
│   │   │   ├── FleetGrid.tsx
│   │   │   ├── RecentRentalsWidget.tsx
│   │   │   └── KeyMetricsWidget.tsx
│   │   ├── equipment/
│   │   │   ├── EquipmentTable.tsx
│   │   │   ├── EquipmentForm.tsx
│   │   │   ├── EquipmentStatusBadge.tsx
│   │   │   └── EquipmentFilters.tsx
│   │   ├── rental/
│   │   │   ├── RentalList.tsx
│   │   │   ├── RentalForm.tsx
│   │   │   ├── RentalDetailModal.tsx
│   │   │   └── CreateRentalWizard.tsx
│   │   ├── maintenance/
│   │   │   ├── MaintenanceBoard.tsx
│   │   │   ├── MaintenanceCard.tsx
│   │   │   └── MaintenanceForm.tsx
│   │   ├── billing/
│   │   │   ├── BillingDashboard.tsx
│   │   │   ├── InvoiceCard.tsx
│   │   │   └── InvoicePreview.tsx
│   │   └── common/
│   │       ├── ConfirmDialog.tsx
│   │       ├── EmptyState.tsx
│   │       └── LoadingSpinner.tsx
│   │
│   ├── pages/                      # Page components (routes)
│   │   ├── Dashboard.tsx
│   │   ├── Equipment.tsx
│   │   ├── Rentals.tsx
│   │   ├── Maintenance.tsx
│   │   ├── Billing.tsx
│   │   ├── Customers.tsx
│   │   └── NotFound.tsx
│   │
│   ├── context/                    # React Context for state
│   │   ├── EquipmentContext.tsx
│   │   ├── RentalContext.tsx
│   │   ├── CustomerContext.tsx
│   │   ├── MaintenanceContext.tsx
│   │   └── AppContext.tsx          # Global app state
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useEquipment.ts
│   │   ├── useRental.ts
│   │   ├── useCustomer.ts
│   │   ├── useMaintenance.ts
│   │   ├── useLocalStorage.ts      # Persist state to localStorage
│   │   └── useNotification.ts      # Toast notifications
│   │
│   ├── services/                   # Business logic & data fetching
│   │   ├── equipmentService.ts
│   │   ├── rentalService.ts
│   │   ├── customerService.ts
│   │   ├── maintenanceService.ts
│   │   ├── billingService.ts
│   │   └── storageService.ts       # localStorage helper
│   │
│   ├── data/                       # Mock data (JSON fixtures)
│   │   ├── mock/
│   │   │   ├── equipment.json      # 25 equipment items
│   │   │   ├── rentals.json        # Active & completed rentals
│   │   │   ├── customers.json      # 50 customer records
│   │   │   ├── maintenance.json    # Maintenance logs
│   │   │   └── index.ts            # Re-exports mock data
│   │   └── types/                  # TypeScript type definitions
│   │       ├── equipment.types.ts
│   │       ├── rental.types.ts
│   │       ├── customer.types.ts
│   │       ├── maintenance.types.ts
│   │       └── common.types.ts
│   │
│   ├── utils/                      # Utility functions
│   │   ├── dateUtils.ts            # Date formatting, calculations
│   │   ├── formatters.ts           # Currency, status formatting
│   │   ├── validators.ts           # Form validation
│   │   ├── calculations.ts         # Billing math, etc.
│   │   └── constants.ts            # App-wide constants
│   │
│   ├── styles/                     # Global styles
│   │   ├── globals.css             # Tailwind imports
│   │   └── animations.css          # Custom animations
│   │
│   ├── App.tsx                     # Main app component + routing
│   ├── App.css
│   └── main.tsx                    # React entry point
│
├── .env.example                    # Environment variables template
├── .gitignore
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite config
├── tailwind.config.ts              # Tailwind CSS config
├── postcss.config.js               # PostCSS config (for Tailwind)
├── package.json                    # Dependencies & scripts
└── README.md                       # Project documentation
```

---

## 🔄 Data Flow Architecture

### 1. **Component → Context → Service → Mock Data**

```typescript
// Example: Fleet Manager opens Dashboard
// 1. Dashboard component mounts
// 2. useEquipment() hook called (custom hook)
// 3. Hook accesses EquipmentContext
// 4. Context calls equipmentService.getEquipment()
// 5. Service loads mockData/equipment.json
// 6. Data flows back through context to component
// 7. Component renders with real-time data
```

### 2. **State Updates (User Interaction)**

```typescript
// Example: User creates new rental
// 1. CreateRentalWizard component captures form data
// 2. User clicks "Confirm Rental"
// 3. Component calls rentalContext.createRental(data)
// 4. Context calls rentalService.createRental(data)
// 5. Service:
//    a. Validates data
//    b. Calculates billing
//    c. Updates equipment status
//    d. Stores in localStorage (persistence)
// 6. Context state updates
// 7. All subscribed components re-render
// 8. Toast notification confirms success
```

### 3. **Data Persistence (MVP Phase)**

- **Primary**: React state (in-memory, lost on page refresh)
- **Secondary**: localStorage (persists across sessions)
- **Service Layer**: `storageService.ts` handles serialization/deserialization

---

## 📊 Core Data Models

### Equipment Entity
```typescript
interface Equipment {
  id: string;                    // Unique identifier
  name: string;                  // "Excavator #1"
  type: EquipmentType;           // 'excavator' | 'bulldozer' | 'truck' | 'crane'
  description: string;
  status: EquipmentStatus;       // 'AVAILABLE' | 'RENTED' | 'MAINTENANCE' | 'STORED'
  rentalRatePerDay: number;      // Currency in cents (e.g., 50000 = $500.00)
  rentalRatePerHour?: number;
  currentCondition: Condition;   // 'excellent' | 'good' | 'fair' | 'needs_maintenance'
  location: string;              // "Main Warehouse" (single location MVP)
  lastMaintenanceDate?: Date;
  nextMaintenanceDue?: Date;
  rentalHistory: RentalHistory[];
  maintenanceHistory: MaintenanceLog[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Rental Entity
```typescript
interface Rental {
  id: string;                    // Unique identifier
  customerId: string;            // Foreign key to Customer
  equipmentId: string;           // Foreign key to Equipment
  startDate: Date;
  endDate: Date;
  actualReturnDate?: Date;
  status: RentalStatus;          // 'ACTIVE' | 'COMPLETED' | 'OVERDUE'
  dailyRate: number;             // Snapshot of rate at rental time
  totalDays: number;
  estimatedTotal: number;        // dailyRate * totalDays
  actualTotal?: number;          // Calculated on return
  damageNotes?: string;
  condition?: Condition;         // Equipment condition on return
  billingStatus: BillingStatus;  // 'PENDING' | 'INVOICED' | 'PAID'
  invoiceId?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Customer Entity
```typescript
interface Customer {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  address?: string;
  rentalHistory: string[];       // Array of rental IDs
  totalRentals: number;
  outstandingBalance: number;
  status: CustomerStatus;        // 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
  createdAt: Date;
  updatedAt: Date;
}
```

### Maintenance Entity
```typescript
interface MaintenanceLog {
  id: string;
  equipmentId: string;
  scheduledDate: Date;
  completedDate?: Date;
  status: MaintenanceStatus;     // 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED'
  notes: string;
  type: MaintenanceType;         // 'ROUTINE' | 'REPAIR' | 'INSPECTION'
  priority: Priority;            // 'LOW' | 'MEDIUM' | 'HIGH'
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🎨 UI Component Architecture

### Component Hierarchy
```
App
├── MainLayout
│   ├── Sidebar (Navigation)
│   ├── Navbar (Top bar)
│   └── MainContent
│       ├── Dashboard (Page)
│       ├── Equipment (Page)
│       ├── Rentals (Page)
│       ├── Maintenance (Page)
│       ├── Billing (Page)
│       └── Customers (Page)
```

### Key Component Patterns

#### 1. **Container Component (Smart)**
```typescript
// Components that connect to Context and manage state
const EquipmentPage: React.FC = () => {
  const { equipment, loading } = useEquipment();
  // Logic here
  return <EquipmentTable data={equipment} />;
};
```

#### 2. **Presentation Component (Dumb)**
```typescript
// Reusable UI components (shadcn/ui)
interface EquipmentTableProps {
  data: Equipment[];
  onEdit: (id: string) => void;
}
const EquipmentTable: React.FC<EquipmentTableProps> = ({ data, onEdit }) => {
  // Just render UI, no business logic
};
```

---

## 🔐 State Management Strategy

### Using React Context API + Custom Hooks

**Why not Redux?**
- MVP scale (small dataset, few concurrent users)
- Simpler to understand and maintain
- Easy to migrate to Redux later if needed

### Context Structure
```typescript
// EquipmentContext.tsx
type EquipmentContextType = {
  equipment: Equipment[];
  loading: boolean;
  error: string | null;
  getEquipment: () => Promise<void>;
  updateEquipment: (id: string, data: Partial<Equipment>) => Promise<void>;
  createEquipment: (data: NewEquipment) => Promise<void>;
  deleteEquipment: (id: string) => Promise<void>;
};

export const EquipmentContext = createContext<EquipmentContextType | null>(null);
```

### Custom Hook Pattern
```typescript
// hooks/useEquipment.ts
export const useEquipment = () => {
  const context = useContext(EquipmentContext);
  if (!context) throw new Error('useEquipment must be used within EquipmentProvider');
  return context;
};
```

---

## 📱 User Workflows & Data Flows

### Flow 1: Create New Rental
```
User Input (CreateRentalWizard)
    ↓
Form Validation (validators.ts)
    ↓
Calculate Total Cost (calculations.ts)
    ↓
Update Equipment Status (AVAILABLE → RENTED)
    ↓
Create Rental Record
    ↓
Persist to localStorage
    ↓
Update UI (re-render Dashboard)
    ↓
Show Confirmation Toast
```

### Flow 2: Return Equipment & Complete Rental
```
Equipment Return (RentalDetailModal)
    ↓
Record Return Date & Condition
    ↓
Calculate Actual Cost (if overdue, add charges)
    ↓
Update Equipment Status (RENTED → AVAILABLE)
    ↓
Mark Rental as COMPLETED
    ↓
Generate Invoice Data
    ↓
Set Billing Status to PENDING
    ↓
Persist Changes
    ↓
Notify User
```

### Flow 3: Mark Equipment for Maintenance
```
User Action (EquipmentStatusUpdate)
    ↓
Validate Equipment Status
    ↓
Update Equipment.status → MAINTENANCE
    ↓
Create MaintenanceLog entry
    ↓
Remove from AVAILABLE pool
    ↓
Persist to localStorage
    ↓
Alert Fleet Manager (future: email notification)
```

---

## 🔄 Future Backend Migration Path

### Phase 2: API Integration (When Ready)

**What Changes:**
1. Replace service mock calls with HTTP requests:
```typescript
// Before (MVP)
const equipment = mockData.equipment;

// After (Phase 2)
const response = await fetch('/api/equipment');
const equipment = await response.json();
```

2. Add API service layer:
```
src/services/api/
├── equipmentApi.ts
├── rentalApi.ts
├── customerApi.ts
└── maintenanceApi.ts
```

3. Remove localStorage, use API + server state

**What Stays the Same:**
- UI components (unchanged)
- Context API structure (mostly)
- TypeScript types (fully compatible)
- Business logic (migrate to backend)

### Example API Endpoints (Future)
```
GET    /api/equipment              # List all equipment
GET    /api/equipment/:id          # Equipment detail
POST   /api/equipment              # Create equipment
PATCH  /api/equipment/:id          # Update equipment
DELETE /api/equipment/:id          # Delete equipment

GET    /api/rentals                # List rentals
POST   /api/rentals                # Create rental
PATCH  /api/rentals/:id            # Update rental
POST   /api/rentals/:id/return     # Complete rental

GET    /api/customers              # List customers
POST   /api/customers              # Create customer
GET    /api/customers/:id/rentals  # Customer rental history

GET    /api/maintenance            # List maintenance logs
POST   /api/maintenance            # Create maintenance entry
PATCH  /api/maintenance/:id        # Update maintenance status
```

---

## 🛠️ Development & Build Setup

### Development Server
```bash
npm run dev
# Runs on http://localhost:5173 (Vite default)
```

### Build for Production
```bash
npm run build
# Outputs to dist/
```

### Code Quality Tools (Optional, Recommended)
- ESLint: Code linting
- Prettier: Code formatting
- TypeScript: Type checking
- Vitest: Unit testing (future)

---

## 📦 Dependencies

### Core
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x",
  "typescript": "^5.x"
}
```

### UI & Styling
```json
{
  "@radix-ui/react-*": "^1.x",      // Radix UI primitives (shadcn uses)
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwindcss": "^3.x",
  "postcss": "^8.x",
  "autoprefixer": "^10.x"
}
```

### Utilities
```json
{
  "date-fns": "^2.x",              // Date formatting
  "zustand": "^4.x"                // Optional lightweight state (future)
}
```

### Development
```json
{
  "vite": "^5.x",
  "@vitejs/plugin-react": "^4.x",
  "tailwindcss": "^3.x"
}
```

---

## 🔒 Security Considerations (MVP)

### Current Phase (No Backend)
- ✅ No sensitive data transmitted
- ✅ No authentication required (single user/team)
- ✅ All data local to browser

### Phase 2 (Backend Integration)
- 🔲 Implement user authentication (JWT or session)
- 🔲 Add authorization (role-based access control)
- 🔲 Validate all inputs on backend
- 🔲 Encrypt sensitive data in transit (HTTPS)
- 🔲 Implement rate limiting on API endpoints

---

## 📊 Performance Considerations

### Current Phase (MVP)
- ✅ Small dataset (~25 equipment, ~50 customers, ~100 rentals)
- ✅ All data in-memory (fast)
- ✅ No network latency
- ✅ Virtualization not needed yet

### Phase 2 Optimization Points
- 🔲 Implement pagination for large lists
- 🔲 Add lazy loading for data
- 🔲 Implement caching strategies
- 🔲 Optimize API response payloads
- 🔲 Add request debouncing for filters

---

## 🧪 Testing Strategy

### MVP Phase (Recommended)
1. **Manual Testing**: QA team tests all workflows
2. **Component Snapshot Tests**: Vitest (optional)
3. **User Acceptance Testing**: With fleet managers

### Phase 2 (After Backend)
- Integration tests (API integration)
- End-to-end tests (Cypress or Playwright)
- Performance tests (load testing)

---

## 📋 Development Checklist

- [ ] Project setup (Vite + React + TypeScript)
- [ ] Install dependencies (Tailwind, shadcn/ui, routing)
- [ ] Create project structure (folders, files)
- [ ] Set up TypeScript types
- [ ] Create mock data (JSON fixtures)
- [ ] Build service layer (equipmentService, etc.)
- [ ] Build context providers (EquipmentContext, etc.)
- [ ] Create custom hooks (useEquipment, etc.)
- [ ] Build UI components (Dashboard, Equipment, etc.)
- [ ] Wire components to context
- [ ] Implement core workflows
- [ ] Add routing (React Router)
- [ ] Test all features
- [ ] Deploy to hosting (Vercel, Netlify, GitHub Pages)

---

## 🚀 Deployment Options (MVP)

### Recommended for MVP
1. **Vercel** (easiest): Free tier, automatic deployments from Git
2. **Netlify**: Similar to Vercel, great DX
3. **GitHub Pages**: Free static hosting

### Steps
```bash
npm run build
# Push dist/ folder to hosting provider
```

---

## 📝 Next Steps

1. ✅ **Architecture Approved** → Ready for development
2. 🔲 **PO Sharding**: Break architecture into development stories
3. 🔲 **Scrum Master**: Create sprint with individual tasks
4. 🔲 **Dev Phase**: Implement components and features
5. 🔲 **QA Gate**: Test all workflows
6. 🔲 **Deployment**: Release MVP

---

**Architecture Owner**: System Architect  
**Review Status**: Ready for PO & Dev team  
**Last Updated**: November 6, 2025
