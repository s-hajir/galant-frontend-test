# Story 001: Project Setup & Foundation
## Fleet & Construction Equipment Rental Dashboard

**Story ID**: STORY-001  
**Status**: Draft  
**Priority**: P0 (Blocker - All other stories depend on this)  
**Epic**: Project Foundation  
**Created**: November 6, 2025  

---

## 📋 Story Summary

Set up a complete React + TypeScript + Vite project with Tailwind CSS and shadcn/ui component library. Establish the foundational folder structure, development environment, build pipeline, and development tools needed to build the Fleet Management Dashboard.

**Acceptance Criteria**:
- ✅ Vite + React 18 + TypeScript project initialized
- ✅ Tailwind CSS configured with PostCSS
- ✅ shadcn/ui component library installed and functional
- ✅ React Router v6 configured with basic routing structure
- ✅ Project folder structure created as per architecture
- ✅ Development server runs without errors (`npm run dev`)
- ✅ Production build executes successfully (`npm run build`)
- ✅ Base layout components created (MainLayout, Sidebar, Navbar)
- ✅ Mock data structure created (JSON fixtures in place)
- ✅ TypeScript types defined for core entities
- ✅ Basic Context providers initialized (not fully implemented)
- ✅ ESLint and Prettier configured (optional but recommended)

---

## 🎯 Story Context

### Why This Story Matters
Without a properly configured foundation, subsequent stories will fail or require rework. This story establishes:
- Clean architecture that supports 10+ concurrent stories
- Type safety that prevents runtime errors
- Build pipeline that supports CI/CD
- Component structure that enables parallel development

### Success Means
- Developer can run `npm run dev` and see a working dashboard layout
- All 15+ subsequent stories can start immediately
- No technical debt or "we'll fix this later" hacks

---

## 📝 Tasks

### Task 1: Initialize Vite + React + TypeScript Project
**Effort**: 30 min | **Status**: NOT STARTED

**Requirements**:
- Use `npm create vite@latest rental-dashboard -- --template react-ts`
- Initialize npm project with proper package.json
- Install React 18 and React DOM
- Verify TypeScript configuration (tsconfig.json)
- All dependencies installed successfully

**Subtasks**:
- [ ] Create new Vite project
- [ ] Install core dependencies (React, React DOM, React Router)
- [ ] Verify TypeScript configuration
- [ ] Test dev server runs on `npm run dev`
- [ ] Test build command on `npm run build`

**Acceptance**:
```bash
npm run dev
# Output: ✓ VITE v5.x.x ready in XXX ms
# Server: http://localhost:5173/
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 2: Install & Configure Tailwind CSS + PostCSS
**Effort**: 20 min | **Status**: NOT STARTED

**Requirements**:
- Install tailwindcss and postcss as dev dependencies
- Create tailwind.config.ts and postcss.config.js
- Configure content paths to template files
- Import Tailwind directives in main CSS file
- Verify Tailwind classes apply in browser

**Subtasks**:
- [ ] Install tailwindcss, postcss, autoprefixer
- [ ] Create tailwind.config.ts with content paths
- [ ] Create postcss.config.js
- [ ] Add Tailwind imports to src/styles/globals.css
- [ ] Verify Tailwind works (create test div with `bg-blue-500`)

**Acceptance**:
- Tailwind utilities available in all components
- No style errors in browser console
- Building succeeds with `npm run build`

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 3: Install & Configure shadcn/ui
**Effort**: 30 min | **Status**: NOT STARTED

**Requirements**:
- Install shadcn/ui CLI and initialize project
- Install base shadcn/ui components (Button, Card, Input, Select, Dialog, etc.)
- Verify components render and are styled properly
- Test that components work in a simple demo page

**Subtasks**:
- [ ] Install shadcn/ui CLI: `npm install -D shadcn-ui`
- [ ] Initialize shadcn/ui: `npx shadcn-ui@latest init`
- [ ] Install common components: Button, Card, Input, Select, Dialog, Table, Badge, Alert
- [ ] Create demo component showing 3 shadcn components working
- [ ] Verify styling matches Tailwind theme

**Acceptance**:
- All installed components render without errors
- Components are styled correctly
- TypeScript types work for components

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 4: Create Project Folder Structure
**Effort**: 20 min | **Status**: NOT STARTED

**Requirements**:
- Create complete folder structure as defined in architecture.md
- Create empty placeholder files in each folder (index files, etc.)
- Update .gitignore to exclude node_modules, dist, .env.local
- Create .env.example template

**Subtasks**:
- [ ] Create all directories from architecture (`/components`, `/pages`, `/context`, `/hooks`, `/services`, `/data`, `/utils`, `/styles`)
- [ ] Create placeholder files and index.ts exports
- [ ] Create .gitignore
- [ ] Create .env.example
- [ ] Verify folder structure matches architecture diagram

**Acceptance**:
```
rental-dashboard/src/
├── components/
│   ├── layout/
│   ├── dashboard/
│   ├── equipment/
│   ├── rental/
│   ├── maintenance/
│   ├── billing/
│   └── common/
├── pages/
├── context/
├── hooks/
├── services/
├── data/
├── utils/
└── styles/
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 5: Configure React Router v6
**Effort**: 25 min | **Status**: NOT STARTED

**Requirements**:
- Install react-router-dom v6
- Create BrowserRouter in main App.tsx
- Create route structure for all pages: Dashboard, Equipment, Rentals, Maintenance, Billing, Customers, NotFound
- Verify routing works (navigate between pages)
- Create working navigation links

**Subtasks**:
- [ ] Install react-router-dom: `npm install react-router-dom`
- [ ] Create Router configuration in App.tsx
- [ ] Define all routes (Dashboard, Equipment, Rentals, Maintenance, Billing, Customers, NotFound)
- [ ] Create placeholder Page components for each route
- [ ] Create navigation component with working links
- [ ] Test navigation between all pages

**Acceptance**:
- URL changes when clicking navigation links
- Correct page component renders for each route
- 404 page shows for invalid routes

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 6: Create TypeScript Type Definitions
**Effort**: 45 min | **Status**: NOT STARTED

**Requirements**:
- Create TypeScript interfaces for all core entities (Equipment, Rental, Customer, Maintenance)
- Create enums for statuses (EquipmentStatus, RentalStatus, BillingStatus, etc.)
- Create common types (Condition, Priority, MaintenanceType)
- Export all types from src/data/types/index.ts
- Verify types are properly exported and importable

**Subtasks**:
- [ ] Create src/data/types/equipment.types.ts with Equipment, EquipmentStatus, EquipmentType
- [ ] Create src/data/types/rental.types.ts with Rental, RentalStatus, BillingStatus
- [ ] Create src/data/types/customer.types.ts with Customer, CustomerStatus
- [ ] Create src/data/types/maintenance.types.ts with MaintenanceLog, MaintenanceStatus, MaintenanceType
- [ ] Create src/data/types/common.types.ts with Condition, Priority, common interfaces
- [ ] Create src/data/types/index.ts that exports all types
- [ ] Verify all types compile without TypeScript errors

**Acceptance**:
```typescript
import { 
  Equipment, 
  Rental, 
  Customer, 
  MaintenanceLog 
} from '@/data/types';
// Should work without errors
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 7: Create Mock Data Structure
**Effort**: 40 min | **Status**: NOT STARTED

**Requirements**:
- Create mock data JSON files: equipment.json, rentals.json, customers.json, maintenance.json
- Generate realistic sample data (25 equipment, 50 customers, 100 rentals, 30 maintenance logs)
- Create src/data/mock/index.ts that exports all mock data
- Verify data structure matches TypeScript types
- Create utility functions to access mock data

**Subtasks**:
- [ ] Create src/data/mock/equipment.json with 25 sample items
- [ ] Create src/data/mock/customers.json with 50 sample customers
- [ ] Create src/data/mock/rentals.json with 100 sample rentals
- [ ] Create src/data/mock/maintenance.json with 30 sample maintenance logs
- [ ] Create src/data/mock/index.ts exporting all data
- [ ] Verify data types match TypeScript interfaces
- [ ] Create helper function getMockData() for loading data

**Acceptance**:
```typescript
import { mockEquipment, mockRentals, mockCustomers } from '@/data/mock';
// Should load successfully and match types
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 8: Initialize React Context Providers
**Effort**: 35 min | **Status**: NOT STARTED

**Requirements**:
- Create context files: EquipmentContext, RentalContext, CustomerContext, MaintenanceContext
- Create context providers with basic CRUD operations (not fully implemented)
- Create AppContext as root context combining all providers
- Wire up providers in App.tsx
- Verify contexts are accessible from components

**Subtasks**:
- [ ] Create src/context/EquipmentContext.tsx with interface and provider
- [ ] Create src/context/RentalContext.tsx with interface and provider
- [ ] Create src/context/CustomerContext.tsx with interface and provider
- [ ] Create src/context/MaintenanceContext.tsx with interface and provider
- [ ] Create src/context/AppContext.tsx combining all providers
- [ ] Wire up AppProvider in App.tsx
- [ ] Verify no TypeScript errors

**Acceptance**:
- All contexts export properly without errors
- Providers wrap application without errors
- No TypeScript issues

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 9: Create Base Layout Components
**Effort**: 50 min | **Status**: NOT STARTED

**Requirements**:
- Create MainLayout.tsx (main container with Sidebar + Navbar + content area)
- Create Sidebar.tsx (navigation menu with all page links)
- Create Navbar.tsx (top bar with title and user info)
- Style with Tailwind CSS using shadcn/ui components
- Apply layout to all pages
- Verify responsive design on mobile

**Subtasks**:
- [ ] Create src/components/layout/MainLayout.tsx with responsive grid layout
- [ ] Create src/components/layout/Sidebar.tsx with navigation menu and links
- [ ] Create src/components/layout/Navbar.tsx with title and info
- [ ] Import and use shadcn/ui Button and Card components
- [ ] Apply MainLayout to all route pages
- [ ] Test responsive layout (desktop and mobile)
- [ ] Verify navigation works from Sidebar

**Acceptance**:
- Layout renders without errors
- Sidebar shows all navigation links
- Navigation links work correctly
- Layout looks good on desktop (1920px+) and tablet (768px+)

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 10: Create Custom Hooks Infrastructure
**Effort**: 30 min | **Status**: NOT STARTED

**Requirements**:
- Create custom hooks: useEquipment(), useRental(), useCustomer(), useMaintenance()
- Create utility hooks: useLocalStorage(), useNotification()
- Each hook provides access to context and common operations
- Verify hooks work without errors
- Create hook documentation

**Subtasks**:
- [ ] Create src/hooks/useEquipment.ts with context access
- [ ] Create src/hooks/useRental.ts with context access
- [ ] Create src/hooks/useCustomer.ts with context access
- [ ] Create src/hooks/useMaintenance.ts with context access
- [ ] Create src/hooks/useLocalStorage.ts for persistence
- [ ] Create src/hooks/useNotification.ts for toast notifications
- [ ] Create src/hooks/index.ts exporting all hooks
- [ ] Verify hooks compile without TypeScript errors

**Acceptance**:
```typescript
const { equipment, loading } = useEquipment();
// Should work in any component
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 11: Create Service Layer Structure
**Effort**: 25 min | **Status**: NOT STARTED

**Requirements**:
- Create service files: equipmentService.ts, rentalService.ts, customerService.ts, maintenanceService.ts, billingService.ts
- Create placeholder functions for all CRUD operations
- Return mock data (not connected to context yet)
- Verify services export properly
- Create service documentation

**Subtasks**:
- [ ] Create src/services/equipmentService.ts with getEquipment(), createEquipment(), updateEquipment(), deleteEquipment()
- [ ] Create src/services/rentalService.ts with getRentals(), createRental(), updateRental(), completeRental()
- [ ] Create src/services/customerService.ts with getCustomers(), createCustomer(), getCustomerHistory()
- [ ] Create src/services/maintenanceService.ts with getMaintenance(), createMaintenance(), completeMaintenance()
- [ ] Create src/services/billingService.ts with calculateBilling(), generateInvoice(), getOutstandingPayments()
- [ ] Create src/services/index.ts exporting all services
- [ ] All services return mock data

**Acceptance**:
```typescript
const equipment = await equipmentService.getEquipment();
// Returns mock data array
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 12: Create Utility Functions
**Effort**: 35 min | **Status**: NOT STARTED

**Requirements**:
- Create dateUtils.ts for date formatting and calculations
- Create formatters.ts for currency and status formatting
- Create validators.ts for form validation
- Create calculations.ts for billing calculations
- Create constants.ts for app-wide constants
- All functions fully implemented and tested

**Subtasks**:
- [ ] Create src/utils/dateUtils.ts with formatDate(), calculateDays(), isDueForMaintenance()
- [ ] Create src/utils/formatters.ts with formatCurrency(), formatStatus(), formatCondition()
- [ ] Create src/utils/validators.ts with validateEmail(), validatePhone(), validateDates()
- [ ] Create src/utils/calculations.ts with calculateRentalCost(), calculateLateFees(), calculateTotalBilling()
- [ ] Create src/utils/constants.ts with EQUIPMENT_TYPES, RENTAL_STATUSES, etc.
- [ ] Create src/utils/index.ts exporting all utilities
- [ ] Verify all functions work correctly

**Acceptance**:
```typescript
const formatted = formatCurrency(50000); // Returns "$500.00"
const status = formatStatus('AVAILABLE'); // Returns "Available"
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 13: Set Up ESLint & Prettier (Optional but Recommended)
**Effort**: 20 min | **Status**: NOT STARTED

**Requirements**:
- Install ESLint and configure for React + TypeScript
- Install Prettier for code formatting
- Create .eslintrc.json and .prettierrc configuration
- Add npm scripts: `npm run lint`, `npm run format`
- Verify linting works without errors

**Subtasks**:
- [ ] Install eslint and @typescript-eslint packages
- [ ] Install prettier
- [ ] Create .eslintrc.json with React + TypeScript rules
- [ ] Create .prettierrc configuration
- [ ] Add scripts to package.json for lint and format
- [ ] Run `npm run lint` to verify no errors
- [ ] Run `npm run format` to verify formatting works

**Acceptance**:
```bash
npm run lint
# Output: ✓ No lint errors
npm run format
# Output: ✓ Code formatted
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 14: Create .gitignore and Environment Templates
**Effort**: 10 min | **Status**: NOT STARTED

**Requirements**:
- Create comprehensive .gitignore (node_modules, dist, .env.local, etc.)
- Create .env.example template
- Verify git can be initialized without issues

**Subtasks**:
- [ ] Create .gitignore with common Node.js/React ignores
- [ ] Create .env.example with API endpoints and config
- [ ] Verify git init works: `git init`
- [ ] Verify git status shows only intended files

**Acceptance**:
```bash
git status
# Should show only source files, not node_modules or .env.local
```

**Debug Log**: 
<!-- Dev updates this as they work -->

---

### Task 15: Create README.md & Documentation
**Effort**: 25 min | **Status**: NOT STARTED

**Requirements**:
- Create README.md with project overview, tech stack, setup instructions
- Create DEVELOPMENT.md with development workflow
- Create API documentation template (for Phase 2)
- Verify documentation is clear and helpful

**Subtasks**:
- [ ] Create README.md with project description, tech stack, setup instructions
- [ ] Create DEVELOPMENT.md with dev server setup, build commands, testing
- [ ] Create docs/API.md template for future API documentation
- [ ] Add quick start section to README
- [ ] Verify all commands in docs are accurate

**Acceptance**:
- New developer can follow README to get dev server running
- All npm commands documented and working

**Debug Log**: 
<!-- Dev updates this as they work -->

---

## 🧪 Validation & Testing

### Pre-Completion Checks
Before marking this story complete, verify:

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] All TypeScript files compile without errors (`npx tsc --noEmit`)
- [ ] All routes can be navigated (Dashboard, Equipment, Rentals, etc.)
- [ ] All context providers load without errors
- [ ] Mock data loads successfully
- [ ] All utility functions work correctly
- [ ] Git is initialized and .gitignore works
- [ ] `npm run lint` (if ESLint setup) shows no errors
- [ ] Project structure exactly matches architecture diagram

### Manual Testing Checklist
- [ ] Open http://localhost:5173 and see dashboard layout
- [ ] Click navigation links and verify page changes
- [ ] Open browser DevTools and verify no console errors
- [ ] Verify responsive layout on mobile (F12 → toggle device toolbar)
- [ ] Verify all shadcn/ui components render correctly

---

## 📊 Development Agent Record

### Task Completion Summary
<!-- Dev updates as tasks complete -->
- [ ] Task 1: Initialize Vite
- [ ] Task 2: Configure Tailwind CSS
- [ ] Task 3: Install shadcn/ui
- [ ] Task 4: Create Folder Structure
- [ ] Task 5: Configure React Router
- [ ] Task 6: Create TypeScript Types
- [ ] Task 7: Create Mock Data
- [ ] Task 8: Initialize Context
- [ ] Task 9: Create Layout Components
- [ ] Task 10: Create Custom Hooks
- [ ] Task 11: Create Service Layer
- [ ] Task 12: Create Utilities
- [ ] Task 13: Setup ESLint/Prettier
- [ ] Task 14: Create .gitignore & ENV
- [ ] Task 15: Create Documentation

### Agent Model Used
<!-- Record which AI model was used -->
- Model: (to be filled)
- Session: (to be filled)

### Debug Log References
<!-- Link to debug log entries -->
- None yet

### Completion Notes
<!-- Dev notes on what was completed -->
- None yet

### File List
<!-- New/Modified files from this story -->
```
NEW:
- rental-dashboard/
  - src/
    - components/
      - layout/
        - MainLayout.tsx
        - Sidebar.tsx
        - Navbar.tsx
      - common/
        - index.ts
    - pages/
      - Dashboard.tsx
      - Equipment.tsx
      - Rentals.tsx
      - Maintenance.tsx
      - Billing.tsx
      - Customers.tsx
      - NotFound.tsx
    - context/
      - EquipmentContext.tsx
      - RentalContext.tsx
      - CustomerContext.tsx
      - MaintenanceContext.tsx
      - AppContext.tsx
    - hooks/
      - useEquipment.ts
      - useRental.ts
      - useCustomer.ts
      - useMaintenance.ts
      - useLocalStorage.ts
      - useNotification.ts
      - index.ts
    - services/
      - equipmentService.ts
      - rentalService.ts
      - customerService.ts
      - maintenanceService.ts
      - billingService.ts
      - index.ts
    - data/
      - types/
        - equipment.types.ts
        - rental.types.ts
        - customer.types.ts
        - maintenance.types.ts
        - common.types.ts
        - index.ts
      - mock/
        - equipment.json
        - customers.json
        - rentals.json
        - maintenance.json
        - index.ts
    - utils/
      - dateUtils.ts
      - formatters.ts
      - validators.ts
      - calculations.ts
      - constants.ts
      - index.ts
    - styles/
      - globals.css
      - animations.css
    - App.tsx
    - main.tsx
  - public/
    - index.html
    - favicon.ico
  - .gitignore
  - .env.example
  - tsconfig.json
  - vite.config.ts
  - tailwind.config.ts
  - postcss.config.js
  - package.json
  - README.md
  - DEVELOPMENT.md
  - .eslintrc.json (if Task 13)
  - .prettierrc (if Task 13)
```

### Change Log
<!-- Record changes made -->
- None yet

---

## 📌 Story Notes

### Dev Notes
- This story is critical path—all other stories depend on it
- Estimated total time: 6-8 hours for experienced React developer
- Can be split into multiple tasks if needed
- Once complete, architecture foundation is solid for parallel story execution

### Tech Stack Confirmation
- React 18+ ✓
- TypeScript 5+ ✓
- Tailwind CSS 3+ ✓
- shadcn/ui (latest) ✓
- React Router v6 ✓
- Vite 5+ ✓

### Known Risks
- ESLint/Prettier setup can be finicky (Task 13 optional)
- Tailwind PurgeCSS might exclude classes if content paths wrong
- shadcn/ui components might conflict with custom Tailwind config

### Blocking Dependencies
- None—this is the foundation story

---

## ✅ Definition of Done

This story is complete when:
1. ✅ All 15 tasks marked with [x]
2. ✅ All validation checks pass
3. ✅ Manual testing checklist complete
4. ✅ File list accurately reflects all created files
5. ✅ `npm run dev` works without errors
6. ✅ `npm run build` produces dist/ folder
7. ✅ All TypeScript types defined and tested
8. ✅ Mock data loads successfully
9. ✅ All routes navigate correctly
10. ✅ Story status set to "Ready for Review"
11. ✅ No blocking issues or tech debt

---

**Story Owner**: James, Full Stack Developer  
**Story Created**: November 6, 2025  
**Last Updated**: November 6, 2025  
**Status**: Draft → Ready for Implementation
