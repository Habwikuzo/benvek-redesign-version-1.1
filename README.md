# Benvek Website Redesign — Refined Version 1.1

A responsive static website built with HTML, CSS and JavaScript. No framework, build step or package installation is required.

## Pages
- `index.html` — redesigned homepage and seven official solution categories
- `solutions.html` — solution overview and product families listed in the client booklet
- `solution-detail.html` — complete Fresh Air Ventilation detail page with brochure-derived ERV and VT501 data
- `applications.html` — residential, commercial and industrial application overview
- `about.html` — company overview, mission and vision from the booklet
- `contact.html` — contact details and enquiry form
- `404.html` — not-found page

## Run locally (Linux)
Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in Chrome. Stop the server with `Ctrl+C`.

## Important content notes
- The seven official solution categories follow the Benvek booklet.
- Ducting & Accessories is shown as an additional product group, not an eighth solution category.
- Product figures are transcribed from the supplied booklet. Confirm model-specific ratings with Benvek before commercial use.
- The booklet does not provide full technical details for Central Vacuum, HVAC, Solar or Heat Pump solutions. The website does not invent them.
- The contact form opens a pre-filled email draft; it does not send information to a website server.
- Company founding date, team, certifications, project references and service coverage remain unconfirmed.

## Deploy
This remains a static site and retains the existing `vercel.json`. Deploy the project root using Vercel's **Other** framework preset with no build command and no output directory.
