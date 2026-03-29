# Chennai Super Kings (CSK) Official Website

A dynamic, interactive website celebrating Chennai Super Kings - the 5-time IPL Champions!

## 🏏 Features

- **Current Squad 2026**: Complete roster with player photos, details, roles, and jersey numbers
- **Squad History (2008-2024)**: Browse through CSK squads from every IPL season
- **All-Time Records**: Top 10 players across various categories:
  - Highest Run Scorers
  - Top Wicket Takers
  - Most Catches
  - Most Sixes
- **Season-by-Season Records**: Detailed performance stats for each IPL season including:
  - Top run scorer of the season
  - Top wicket taker of the season
  - Team performance (matches played, won, lost, win rate)
  - Final position in the tournament
- **Trophy Cabinet**: Detailed information about all 5 IPL championship wins
- **Authentic CSK Branding**: Official CSK logo throughout the website
- **Dynamic Design**: CSK-themed yellow and blue color scheme with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices

## 🎨 Design Highlights

- **CSK Brand Colors**: Authentic yellow (#FDB913) and blue (#00B5E2) theme
- **Modern Typography**: Custom fonts (Rajdhani & Bebas Neue) for a premium look
- **Smooth Animations**: Scroll effects, hover interactions, and page transitions
- **Interactive Elements**: Year navigation, tabbed records, and smooth scrolling

## 📁 Project Structure

```
csk-website/
│
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with CSK theme
├── data.js            # All squad data, records, and trophy information
├── script.js          # Interactive functionality and animations
└── README.md          # This file
```

## 🚀 How to Run Locally

### Method 1: Direct Opening (Simple)

1. **Download all files** to a folder on your computer
2. **Open `index.html`** directly in your web browser:
   - Double-click the file, OR
   - Right-click → "Open with" → Choose your browser (Chrome, Firefox, Safari, Edge)

### Method 2: Using Live Server (Recommended for Development)

1. **Install a code editor** like Visual Studio Code (https://code.visualstudio.com/)
2. **Install the "Live Server" extension** in VS Code:
   - Click Extensions icon (or press Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install
3. **Open the project folder** in VS Code
4. **Right-click on `index.html`** and select "Open with Live Server"
5. The website will automatically open in your default browser

### Method 3: Using Python HTTP Server

If you have Python installed:

```bash
# Navigate to the project folder
cd path/to/csk-website

# For Python 3.x
python -m http.server 8000

# For Python 2.x
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

### Method 4: Using Node.js HTTP Server

If you have Node.js installed:

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to the project folder
cd path/to/csk-website

# Start the server
http-server

# Or specify a port
http-server -p 8000
```

Then open the URL shown in the terminal (usually `http://localhost:8080`).

## 🎯 Navigation Guide

### Main Sections:

1. **Hero Section**: Landing page with CSK stats and Whistle Podu branding with official CSK logo
2. **Squad 2026**: Current player roster with photos and detailed information
3. **Squad History**: Year-by-year squad from 2008-2024 (use arrows to navigate)
4. **All-Time Records**: CSK legends and their career achievements (click tabs to switch)
5. **Season Records**: Season-by-season performance stats (use arrows to browse different seasons)
6. **Trophies**: Championship wins with match details and venues

### Interactive Controls:

- **Year Navigation (Squad History)**: Use ← and → buttons to browse different seasons
- **Season Navigation (Season Records)**: Use ← and → buttons to view different IPL seasons
- **Records Tabs**: Click on different tabs to view various statistical categories
- **Smooth Scroll**: Click navigation links to smoothly scroll to sections

## 🎨 Customization

### Changing Colors:

Edit the CSS variables in `styles.css`:

```css
:root {
    --csk-yellow: #FDB913;      /* Main yellow */
    --csk-blue: #00B5E2;        /* Main blue */
    --csk-dark-blue: #004B87;   /* Dark blue */
    --dark-bg: #0A0E27;         /* Background */
    --card-bg: #141B3D;         /* Card background */
}
```

### Adding/Updating Player Images:

Player images are fetched from IPL's official website. To update or add new images:

1. Find the player's image URL from IPL T20 website
2. Update the `image` property in the player object in `data.js`:

```javascript
{ 
    name: "Player Name", 
    role: "Role", 
    country: "Country", 
    category: "Retained/Bought", 
    jersey: 7,
    image: "https://www.iplt20.com/assets/images/team-players-images/16/XXX.png"
}
```

The website includes automatic fallback to initials if an image fails to load.

### Updating Squad Data:

Edit the data in `data.js`:

- `currentSquad`: Update the 2026 squad (includes player images)
- `squadHistory`: Add new years or modify existing squads
- `records`: Update all-time statistics
- `seasonRecords`: Add new season stats or update existing ones
- `trophies`: Add new championship wins

## 🌟 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

All modern browsers are supported!

## 📱 Responsive Design

The website automatically adapts to:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🏆 About CSK

Chennai Super Kings is one of the most successful franchises in IPL history with:
- 5 IPL Championships (2010, 2011, 2018, 2021, 2023)
- 12 Final Appearances
- 80% Playoff Qualification Rate
- Led by the legendary MS Dhoni

## 💛💙 Whistle Podu!

Enjoy exploring the legacy of Chennai Super Kings!

---

**Note**: This is a fan-made website for educational purposes. All CSK trademarks and logos belong to Chennai Super Kings.
