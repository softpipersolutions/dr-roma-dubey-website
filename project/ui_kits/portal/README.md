# UI Kit — Patient Portal / Dashboard

A calm, warm patient dashboard where women manage appointments, reports and messages with the practice.

**Entry:** `index.html` — a full desktop app with a persistent sidebar and four switchable views.

## Files
- `sidebar.jsx` — brand, primary nav (Dashboard / Appointments / Reports / Messages), patient mini-profile + logout.
- `dashboard.jsx` — next-appointment hero, health-snapshot stat cards, recent reports list, health-tip card.
- `appointments.jsx` — `Tabs` (upcoming / past) with dated appointment rows, status badges and actions.
- `reports.jsx` — a results table with type, date, status badge and download.
- `messages.jsx` — two-pane secure chat with the care team (thread list + conversation).
- `app.jsx` — shell (sidebar + sticky topbar with greeting, search, notifications, Book), view routing, and the **Book appointment** `Dialog`.

## Interaction
- Sidebar switches views; **Book** / **Book a consult** open the booking dialog.
- Appointments tabs; report downloads; message thread selection.

## Notes
- Composes DS primitives (`Card`, `Badge`, `Button`, `Tabs`, `Avatar`, `Dialog`, `Input`, `Select`, `Textarea`, `Icon`) from `window.DrRomaDubeyDesignSystem_317be8`.
- All data is illustrative sample content for a fictional patient (Priya Sharma).
