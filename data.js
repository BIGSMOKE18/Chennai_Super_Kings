const currentSquad = [
    {
        name: "Ruturaj Gaikwad (C)",
        role: "Batsman",
        country: "India",
        category: "Retained",
        jersey: 31,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team4playerImgNoBg_1773207316332.png"
    },
    {
        name: "MS Dhoni",
        role: "Wicket-Keeper Batsman",
        country: "India",
        category: "Retained",
        jersey: 7,
        image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png"
    },  
    {
        name: "Sanju Samson",
        role: "Wicket-Keeper Batsman",
        country: "India",
        category: "Traded",
        jersey: 11,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team50playerImgNoBg_1773207257969.png"
    },
    {
        name: "Dewald Brevis",
        role: "Batsman",
        country: "South Africa",
        category: "Retained",
        jersey: 17,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team46playerImgNoBg_1773208945125.png"
    },
    {
        name: "Urvil Patel",
        role: "Wicket-Keeper Batsman",
        country: "India",
        category: "Retained",
        jersey: 21,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team49playerImgNoBg_1773208996000.png"
    },
    {
        name: "Shivam Dube",
        role: "All-Rounder",
        country: "India",
        category: "Retained",
        jersey: 27,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team9playerImgNoBg_1773208333913.png"
    },
    {
        name: "Ramakrishna Ghosh",
        role: "All-Rounder",
        country: "India",
        category: "Retained",
        jersey: 32,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team41playerImgNoBg_1773209044035.png"
    },
    {
        name: "Ayush Mhatre",
        role: "Batsman",
        country: "India",
        category: "Retained",
        jersey: 45,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team45playerImgNoBg_1773208902161.png"
    },
    {
        name: "Sarfaraz Khan",
        role: "Batsman",
        country: "India",
        category: "Bought",
        jersey: 97,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team58playerImgNoBg_1773379183176.png"
    },
    {
        name: "Matthew Short",
        role: "All-Rounder",
        country: "Australia",
        category: "Bought",
        jersey: 5,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team54playerImgNoBg_1773206785917.png"
    },
    {
        name: "Aman Khan",
        role: "All-Rounder",
        country: "India",
        category: "Bought",
        jersey: 16,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team52playerImgNoBg_1773206632903.png"
    },
    {
        name: "Jamie Overton",
        role: "All-Rounder",
        country: "England",
        category: "Retained",
        jersey: 24,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team25playerImgNoBg_1773208844367.png"
    },
    {
        name: "Akeal Hosein",
        role: "All-Rounder",
        country: "West Indies",
        category: "Bought",
        jersey: 12,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team51playerImgNoBg_1773206570529.png"
    },
    {
        name: "Shreyas Gopal",
        role: "All-Rounder",
        country: "India",
        category: "Retained",
        jersey: 19,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team16playerImgNoBg_1773208515368.png"
    },
    {
        name: "Khaleel Ahmed",
        role: "Bowler",
        country: "India",
        category: "Retained",
        jersey: 25,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team13playerImgNoBg_1773379207442.png"
    },
    {
        name: "Nathan Ellis",
        role: "Bowler",
        country: "Australia",
        category: "Retained",
        jersey: 33,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team23playerImgNoBg_1773208458976.png"
    },
    {
        name: "Mukesh Choudhary",
        role: "Bowler",
        country: "India",
        category: "Retained",
        jersey: 17,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team24playerImgNoBg_1773208579668.png"
    },
    {
        name: "Noor Ahmad",
        role: "Bowler",
        country: "Afghanistan",
        category: "Retained",
        jersey: 19,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team12playerImgNoBg_1773208221215.png"
    },
    {
        name: "Matt Henry",
        role: "Bowler",
        country: "New Zealand",
        category: "Bought",
        jersey: 21,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team55playerImgNoBg_1773206880148.png"
    },
    {
        name: "Rahul Chahar",
        role: "Bowler",
        country: "India",
        category: "Bought",
        jersey: 28,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team56playerImgNoBg_1773206941099.png"
    },
    {
        name: "Zakary Foulkes",
        role: "Bowler",
        country: "New Zealand",
        category: "Bought",
        jersey: 14,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team57playerImgNoBg_1773206999966.png"
    },
    {
        name: "Anshul Kamboj",
        role: "Bowler",
        country: "India",
        category: "Retained",
        jersey: 41,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team43playerImgNoBg_1773209148564.png"
    },
    {
        name: "Kartik Sharma",
        role: "Bowler",
        country: "India",
        category: "Bought",
        jersey: 55,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team53playerImgNoBg_1773206702889.png"
    },
    {
        name: "Prashant Veer",
        role: "Bowler",
        country: "India",
        category: "Bought",
        jersey: 63,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team59playerImgNoBg_1773207152530.png"
    },
    {
        name: "Gurjapneet Singh",
        role: "Bowler",
        country: "India",
        category: "Retained",
        jersey: 77,
        image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team15playerImgNoBg_1773208406237.png"
    },
    {
        name: "Spencer Jhonson",
        role: "Bowler",
        country: "Australia",
        category: "Inplace",
        jersey: 45,
        image: "spencer.png"
    }
];



const playerStats = {
    "MS Dhoni": {
        matches: 278,
        runs: 5439,
        average: 38.3,
        strikeRate: 137.46,
        sixes: 264,
        fours: 375,
        highest: 84,
        role: "Wicket-Keeper Batter"
    },

    "Ruturaj Gaikwad": {
        matches: 71,
        runs: 2502,
        average: 40.35,
        strikeRate: 137.48,
        sixes: 95,
        fours: 231,
        highest: 108,
        role: "Batter"
    },

    "Shivam Dube": {
        matches: 79,
        runs: 1859,
        average: 30.48,
        strikeRate: 143.67,
        sixes: 122,
        fours: 108,
        highest: 95,
        role: "All-Rounder"
    },

    "Sanju Samson": {
        matches: 176,
        runs: 4704,
        average: 30.75,
        strikeRate: 139.05,
        sixes: 219,
        fours: 379,
        highest: 119,
        role: "Wicket-Keeper Batter"
    },

    "Dewald Brevis": {
        matches: 10,
        runs: 250,
        average: 25.00,
        strikeRate: 150.00,
        sixes: 10,
        fours: 15,
        highest: 50,
        role: "All-Rounder"
    },
    "Rahul Chahar": {
        matches: 79,
        wickets: 75,
        economy: 7.72 
    },
    "Urvil Patel": {
    matches: 1,
    runs: 31,
    average: 31.00,
    strikeRate: 281.81,
    sixes: 3,
    fours: 2,
    highest: 31,
    role: "Wicket-Keeper Batter"
},

"Ramakrishna Ghosh": {
    matches: 0,
    runs: 0,
    average: 0,
    strikeRate: 0,
    sixes: 0,
    fours: 0,
    highest: 0,
    role: "All-Rounder"
},

"Ayush Mhatre": {
    matches: 5,
    runs: 210,
    average: 42.00,
    strikeRate: 170.00,
    sixes: 12,
    fours: 20,
    highest: 94,
    role: "Batting All-Rounder"
},

"Shreyas Gopal": {
    matches: 49,
    runs: 180,
    average: 12.00,
    strikeRate: 120.00,
    sixes: 5,
    fours: 15,
    highest: 24,
    role: "All-Rounder"
},

"Jamie Overton": {
    matches: 5,
    runs: 85,
    average: 17.00,
    strikeRate: 145.00,
    sixes: 6,
    fours: 7,
    highest: 32,
    role: "All-Rounder"
},

"Khaleel Ahmed": {
    matches: 71,
    runs: 2,
    average: 1.00,
    strikeRate: 50.00,
    sixes: 0,
    fours: 0,
    highest: 1,
    role: "Bowler"
},

"Anshul Kamboj": {
    matches: 0,
    runs: 0,
    average: 0,
    strikeRate: 0,
    sixes: 0,
    fours: 0,
    highest: 0,
    role: "Bowler"
},

"Gurjapneet Singh": {
    matches: 0,
    runs: 0,
    average: 0,
    strikeRate: 0,
    sixes: 0,
    fours: 0,
    highest: 0,
    role: "Bowler"
},

"Mukesh Choudhary": {
    matches: 13,
    runs: 5,
    average: 2.50,
    strikeRate: 83.33,
    sixes: 0,
    fours: 0,
    highest: 4,
    role: "Bowler"
},

"Noor Ahmad": {
    matches: 23,
    runs: 20,
    average: 10.00,
    strikeRate: 100.00,
    sixes: 1,
    fours: 1,
    highest: 10,
    role: "Bowler"
},

"Akeal Hosein": {
    matches: 0,
    runs: 0,
    average: 0,
    strikeRate: 0,
    sixes: 0,
    fours: 0,
    highest: 0,
    role: "Bowler"
},

"Prashant Veer": {
    matches: 0,
    runs: 0,
    average: 0,
    strikeRate: 0,
    sixes: 0,
    fours: 0,
    highest: 0,
    role: "All-Rounder"
},

"Matthew Short": {
    matches: 6,
    runs: 117,
    average: 19.50,
    strikeRate: 127.00,
    sixes: 6,
    fours: 10,
    highest: 36,
    role: "All-Rounder"
},

"Aman Khan": {
    matches: 17,
    runs: 120,
    average: 15.00,
    strikeRate: 130.00,
    sixes: 5,
    fours: 8,
    highest: 51,
    role: "All-Rounder"
},

"Sarfaraz Khan": {
    matches: 50,
    runs: 585,
    average: 22.50,
    strikeRate: 137.00,
    sixes: 25,
    fours: 55,
    highest: 67,
    role: "Batter"
},

"Matt Henry": {
    matches: 2,
    runs: 5,
    average: 5.00,
    strikeRate: 100.00,
    sixes: 0,
    fours: 0,
    highest: 3,
    role: "Bowler"
}
};


// Squad History (2008-2024)
const squadHistory = {
    2008: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Matthew Hayden", role: "Batsman" },
        { name: "Michael Hussey", role: "Batsman" },
        { name: "Jacob Oram", role: "All-Rounder" },
        { name: "Albie Morkel", role: "All-Rounder" },
        { name: "Muttiah Muralitharan", role: "Bowler" },
        { name: "Joginder Sharma", role: "Bowler" },
        { name: "Lakshmipathy Balaji", role: "Bowler" },
        { name: "Manpreet Gony", role: "Bowler" },
        { name: "Parthiv Patel", role: "WK-Batsman" },
        { name: "Vidyut Sivaramakrishnan", role: "Batsman" },
        { name: "Stephen Fleming", role: "Batsman" },
        { name: "Shadab Jakati", role: "Bowler" },
        { name: "Anirudh Singh", role: "Batsman" }
    ],
    2009: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Matthew Hayden", role: "Batsman" },
        { name: "Michael Hussey", role: "Batsman" },
        { name: "Albie Morkel", role: "All-Rounder" },
        { name: "Muttiah Muralitharan", role: "Bowler" },
        { name: "Joginder Sharma", role: "Bowler" },
        { name: "Lakshmipathy Balaji", role: "Bowler" },
        { name: "Parthiv Patel", role: "WK-Batsman" },
        { name: "Stephen Fleming", role: "Batsman" },
        { name: "Shadab Jakati", role: "Bowler" },
        { name: "Subramaniam Badrinath", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" }
    ],
    2010: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Matthew Hayden", role: "Batsman" },
        { name: "Michael Hussey", role: "Batsman" },
        { name: "Albie Morkel", role: "All-Rounder" },
        { name: "Muttiah Muralitharan", role: "Bowler" },
        { name: "Doug Bollinger", role: "Bowler" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Murali Vijay", role: "Batsman" },
        { name: "Subramaniam Badrinath", role: "Batsman" },
        { name: "Anirudh Singh", role: "Batsman" },
        { name: "Shadab Jakati", role: "Bowler" },
        { name: "Wriddhiman Saha", role: "WK-Batsman" }
    ],
    2011: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Michael Hussey", role: "Batsman" },
        { name: "Murali Vijay", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Doug Bollinger", role: "Bowler" },
        { name: "Albie Morkel", role: "All-Rounder" },
        { name: "Subramaniam Badrinath", role: "Batsman" },
        { name: "Wriddhiman Saha", role: "WK-Batsman" },
        { name: "R Ashwin", role: "Bowler" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Shadab Jakati", role: "Bowler" }
    ],
    2012: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Michael Hussey", role: "Batsman" },
        { name: "Murali Vijay", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "R Ashwin", role: "Bowler" },
        { name: "Ben Hilfenhaus", role: "Bowler" },
        { name: "Albie Morkel", role: "All-Rounder" },
        { name: "Wriddhiman Saha", role: "WK-Batsman" },
        { name: "Shadab Jakati", role: "Bowler" }
    ],
    2013: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Michael Hussey", role: "Batsman" },
        { name: "Murali Vijay", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "R Ashwin", role: "Bowler" },
        { name: "Ben Hilfenhaus", role: "Bowler" },
        { name: "Albie Morkel", role: "All-Rounder" },
        { name: "Wriddhiman Saha", role: "WK-Batsman" },
        { name: "Ravichandran Ashwin", role: "Bowler" },
        { name: "Mohit Sharma", role: "Bowler" },
        { name: "Dirk Nannes", role: "Bowler" }
    ],
    2014: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Brendon McCullum", role: "Batsman" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Ravichandran Ashwin", role: "Bowler" },
        { name: "Mohit Sharma", role: "Bowler" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Dwayne Smith", role: "All-Rounder" },
        { name: "Ishwar Pandey", role: "Bowler" },
        { name: "Pawan Negi", role: "All-Rounder" }
    ],
    2015: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Brendon McCullum", role: "Batsman" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Ravichandran Ashwin", role: "Bowler" },
        { name: "Mohit Sharma", role: "Bowler" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Dwayne Smith", role: "All-Rounder" },
        { name: "Ishwar Pandey", role: "Bowler" },
        { name: "Pawan Negi", role: "All-Rounder" },
        { name: "Michael Hussey", role: "Batsman" }
    ],
    2018: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Shane Watson", role: "All-Rounder" },
        { name: "Ambati Rayudu", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Harbhajan Singh", role: "Bowler" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Lungi Ngidi", role: "Bowler" },
        { name: "Imran Tahir", role: "Bowler" },
        { name: "Shardul Thakur", role: "All-Rounder" },
        { name: "KM Asif", role: "Bowler" }
    ],
    2019: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Suresh Raina", role: "Batsman" },
        { name: "Shane Watson", role: "All-Rounder" },
        { name: "Ambati Rayudu", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Harbhajan Singh", role: "Bowler" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Imran Tahir", role: "Bowler" },
        { name: "Shardul Thakur", role: "All-Rounder" },
        { name: "Mitchell Santner", role: "All-Rounder" },
        { name: "Ruturaj Gaikwad", role: "Batsman" }
    ],
    2020: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Ambati Rayudu", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Shane Watson", role: "All-Rounder" },
        { name: "Sam Curran", role: "All-Rounder" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Shardul Thakur", role: "All-Rounder" },
        { name: "Imran Tahir", role: "Bowler" },
        { name: "Ruturaj Gaikwad", role: "Batsman" },
        { name: "Narayan Jagadeesan", role: "WK-Batsman" }
    ],
    2021: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Faf du Plessis", role: "Batsman" },
        { name: "Ruturaj Gaikwad", role: "Batsman" },
        { name: "Moeen Ali", role: "All-Rounder" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Sam Curran", role: "All-Rounder" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Shardul Thakur", role: "All-Rounder" },
        { name: "Josh Hazlewood", role: "Bowler" },
        { name: "Ambati Rayudu", role: "Batsman" },
        { name: "Robin Uthappa", role: "Batsman" }
    ],
    2022: [
        { name: "MS Dhoni", role: "WK-Batsman" },
        { name: "Ravindra Jadeja (C)", role: "All-Rounder" },
        { name: "Ruturaj Gaikwad", role: "Batsman" },
        { name: "Devon Conway", role: "Batsman" },
        { name: "Moeen Ali", role: "All-Rounder" },
        { name: "Dwayne Bravo", role: "All-Rounder" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Mukesh Choudhary", role: "Bowler" },
        { name: "Maheesh Theekshana", role: "Bowler" },
        { name: "Ambati Rayudu", role: "Batsman" },
        { name: "Shivam Dube", role: "All-Rounder" },
        { name: "Dwaine Pretorius", role: "All-Rounder" }
    ],
    2023: [
        { name: "MS Dhoni (C)", role: "WK-Batsman" },
        { name: "Ruturaj Gaikwad", role: "Batsman" },
        { name: "Devon Conway", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Moeen Ali", role: "All-Rounder" },
        { name: "Ben Stokes", role: "All-Rounder" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Tushar Deshpande", role: "Bowler" },
        { name: "Maheesh Theekshana", role: "Bowler" },
        { name: "Matheesha Pathirana", role: "Bowler" },
        { name: "Ajinkya Rahane", role: "Batsman" },
        { name: "Shivam Dube", role: "All-Rounder" },
        { name: "Ambati Rayudu", role: "Batsman" }
    ],
    2024: [
        { name: "MS Dhoni", role: "WK-Batsman" },
        { name: "Ruturaj Gaikwad (C)", role: "Batsman" },
        { name: "Ravindra Jadeja", role: "All-Rounder" },
        { name: "Shivam Dube", role: "All-Rounder" },
        { name: "Matheesha Pathirana", role: "Bowler" },
        { name: "Rachin Ravindra", role: "All-Rounder" },
        { name: "Daryl Mitchell", role: "All-Rounder" },
        { name: "Deepak Chahar", role: "Bowler" },
        { name: "Tushar Deshpande", role: "Bowler" },
        { name: "Maheesh Theekshana", role: "Bowler" },
        { name: "Mustafizur Rahman", role: "Bowler" },
        { name: "Ajinkya Rahane", role: "Batsman" },
        { name: "Devon Conway", role: "Batsman" }
    ]
};

// All-Time Records
const records = {
    runs: [
        { rank: 1, player: "Suresh Raina", stat: "5528" },
        { rank: 2, player: "MS Dhoni", stat: "5243" },
        { rank: 3, player: "Faf du Plessis", stat: "2935" },
        { rank: 4, player: "Murali Vijay", stat: "2635" },
        { rank: 5, player: "Ravindra Jadeja", stat: "2586" },
        { rank: 6, player: "Ambati Rayudu", stat: "2416" },
        { rank: 7, player: "Michael Hussey", stat: "1977" },
        { rank: 8, player: "Ruturaj Gaikwad", stat: "1798" },
        { rank: 9, player: "Shane Watson", stat: "1401" },
        { rank: 10, player: "Subramaniam Badrinath", stat: "1464" }
    ],
    wickets: [
        { rank: 1, player: "Ravindra Jadeja", stat: "156" },
        { rank: 2, player: "Dwayne Bravo", stat: "147" },
        { rank: 3, player: "Ravichandran Ashwin", stat: "125" },
        { rank: 4, player: "Deepak Chahar", stat: "80" },
        { rank: 5, player: "Harbhajan Singh", stat: "74" },
        { rank: 6, player: "Mohit Sharma", stat: "73" },
        { rank: 7, player: "Shardul Thakur", stat: "65" },
        { rank: 8, player: "Albie Morkel", stat: "64" },
        { rank: 9, player: "Imran Tahir", stat: "60" },
        { rank: 10, player: "Doug Bollinger", stat: "52" }
    ],
    catches: [
        { rank: 1, player: "Suresh Raina", stat: "109" },
        { rank: 2, player: "Ravindra Jadeja", stat: "100" },
        { rank: 3, player: "MS Dhoni", stat: "97" },
        { rank: 4, player: "Dwayne Bravo", stat: "62" },
        { rank: 5, player: "Faf du Plessis", stat: "52" },
        { rank: 6, player: "Ambati Rayudu", stat: "45" },
        { rank: 7, player: "Murali Vijay", stat: "40" },
        { rank: 8, player: "Michael Hussey", stat: "35" },
        { rank: 9, player: "Ravichandran Ashwin", stat: "33" },
        { rank: 10, player: "Shane Watson", stat: "28" }
    ],
    sixes: [
        { rank: 1, player: "MS Dhoni", stat: "251" },
        { rank: 2, player: "Suresh Raina", stat: "222" },
        { rank: 3, player: "Ravindra Jadeja", stat: "115" },
        { rank: 4, player: "Faf du Plessis", stat: "108" },
        { rank: 5, player: "Ambati Rayudu", stat: "105" },
        { rank: 6, player: "Dwayne Bravo", stat: "90" },
        { rank: 7, player: "Shane Watson", stat: "84" },
        { rank: 8, player: "Michael Hussey", stat: "61" },
        { rank: 9, player: "Murali Vijay", stat: "52" },
        { rank: 10, player: "Ruturaj Gaikwad", stat: "48" }
    ]
};

// Trophy Wins
const trophies = [
    {
        year: 2010,
        title: "IPL Champions 2010",
        details: "Defeated Mumbai Indians by 22 runs in the final. MS Dhoni's brilliant captaincy led CSK to their first IPL title.",
        venue: "DY Patil Stadium, Mumbai"
    },
    {
        year: 2011,
        title: "IPL Champions 2011",
        details: "Beat Royal Challengers Bangalore by 58 runs. Murali Vijay scored 95 in the final to help CSK defend their title.",
        venue: "MA Chidambaram Stadium, Chennai"
    },
    {
        year: 2018,
        title: "IPL Champions 2018",
        details: "Defeated Sunrisers Hyderabad by 8 wickets. Shane Watson's unbeaten 117 powered CSK to victory in their comeback season.",
        venue: "Wankhede Stadium, Mumbai"
    },
    {
        year: 2021,
        title: "IPL Champions 2021",
        details: "Beat Kolkata Knight Riders by 27 runs. Faf du Plessis (86) and Ruturaj Gaikwad (32) set up the win in UAE.",
        venue: "Dubai International Stadium, UAE"
    },
    {
        year: 2023,
        title: "IPL Champions 2023",
        details: "Defeated Gujarat Titans by 5 wickets. Ravindra Jadeja's all-round performance sealed CSK's 5th title.",
        venue: "Narendra Modi Stadium, Ahmedabad"
    }
];

// Season-by-Season Records
const seasonRecords = {
    2008: {
        year: "IPL 2008",
        position: "Semi-Finals",
        topScorer: { name: "Suresh Raina", runs: 421, image: "https://www.iplt20.com/assets/images/team-players-images/16/43.png" },
        topWicketTaker: { name: "Muttiah Muralitharan", wickets: 11, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        matches: 16,
        won: 9,
        lost: 7
    },
    2009: {
        year: "IPL 2009",
        position: "Semi-Finals",
        topScorer: { name: "Matthew Hayden", runs: 572, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        topWicketTaker: { name: "Lakshmipathy Balaji", wickets: 16, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        matches: 14,
        won: 8,
        lost: 6
    },
    2010: {
        year: "IPL 2010",
        position: "Champions 🏆",
        topScorer: { name: "Suresh Raina", runs: 520, image: "https://www.iplt20.com/assets/images/team-players-images/16/43.png" },
        topWicketTaker: { name: "Doug Bollinger", wickets: 19, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        matches: 16,
        won: 9,
        lost: 7
    },
    2011: {
        year: "IPL 2011",
        position: "Champions 🏆",
        topScorer: { name: "Suresh Raina", runs: 374, image: "https://www.iplt20.com/assets/images/team-players-images/16/43.png" },
        topWicketTaker: { name: "Ravichandran Ashwin", wickets: 20, image: "https://www.iplt20.com/assets/images/team-players-images/16/42.png" },
        matches: 16,
        won: 11,
        lost: 5
    },
    2012: {
        year: "IPL 2012",
        position: "Runners-up",
        topScorer: { name: "Suresh Raina", runs: 441, image: "https://www.iplt20.com/assets/images/team-players-images/16/43.png" },
        topWicketTaker: { name: "Ravichandran Ashwin", wickets: 12, image: "https://www.iplt20.com/assets/images/team-players-images/16/42.png" },
        matches: 17,
        won: 10,
        lost: 7
    },
    2013: {
        year: "IPL 2013",
        position: "Runners-up",
        topScorer: { name: "Michael Hussey", runs: 733, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        topWicketTaker: { name: "Ravichandran Ashwin", wickets: 18, image: "https://www.iplt20.com/assets/images/team-players-images/16/42.png" },
        matches: 18,
        won: 12,
        lost: 6
    },
    2014: {
        year: "IPL 2014",
        position: "Playoffs",
        topScorer: { name: "Brendon McCullum", runs: 389, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        topWicketTaker: { name: "Mohit Sharma", wickets: 23, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        matches: 14,
        won: 7,
        lost: 7
    },
    2015: {
        year: "IPL 2015",
        position: "Runners-up",
        topScorer: { name: "Brendon McCullum", runs: 502, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        topWicketTaker: { name: "Ravichandran Ashwin", wickets: 13, image: "https://www.iplt20.com/assets/images/team-players-images/16/42.png" },
        matches: 16,
        won: 10,
        lost: 6
    },
    2018: {
        year: "IPL 2018",
        position: "Champions 🏆",
        topScorer: { name: "Ambati Rayudu", runs: 602, image: "https://www.iplt20.com/assets/images/team-players-images/16/29.png" },
        topWicketTaker: { name: "Shardul Thakur", wickets: 16, image: "https://www.iplt20.com/assets/images/team-players-images/16/695.png" },
        matches: 16,
        won: 10,
        lost: 6
    },
    2019: {
        year: "IPL 2019",
        position: "Runners-up",
        topScorer: { name: "Faf du Plessis", runs: 396, image: "https://www.iplt20.com/assets/images/team-players-images/16/88.png" },
        topWicketTaker: { name: "Imran Tahir", wickets: 26, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        matches: 17,
        won: 9,
        lost: 8
    },
    2020: {
        year: "IPL 2020",
        position: "Runners-up",
        topScorer: { name: "Faf du Plessis", runs: 449, image: "https://www.iplt20.com/assets/images/team-players-images/16/88.png" },
        topWicketTaker: { name: "Sam Curran", wickets: 13, image: "https://www.iplt20.com/assets/images/team-players-images/16/1048.png" },
        matches: 16,
        won: 10,
        lost: 6
    },
    2021: {
        year: "IPL 2021",
        position: "Champions 🏆",
        topScorer: { name: "Faf du Plessis", runs: 633, image: "https://www.iplt20.com/assets/images/team-players-images/16/88.png" },
        topWicketTaker: { name: "Deepak Chahar", wickets: 14, image: "https://www.iplt20.com/assets/images/team-players-images/16/804.png" },
        matches: 17,
        won: 11,
        lost: 6
    },
    2022: {
        year: "IPL 2022",
        position: "Playoffs",
        topScorer: { name: "Ruturaj Gaikwad", runs: 368, image: "https://www.iplt20.com/assets/images/team-players-images/16/1123.png" },
        topWicketTaker: { name: "Maheesh Theekshana", wickets: 13, image: "https://www.iplt20.com/assets/images/team-players-images/default-player-image.png" },
        matches: 14,
        won: 8,
        lost: 6
    },
    2023: {
        year: "IPL 2023",
        position: "Champions 🏆",
        topScorer: { name: "Devon Conway", runs: 672, image: "https://www.iplt20.com/assets/images/team-players-images/16/1444.png" },
        topWicketTaker: { name: "Matheesha Pathirana", wickets: 27, image: "https://www.iplt20.com/assets/images/team-players-images/16/1566.png" },
        matches: 17,
        won: 12,
        lost: 5
    },
    2024: {
        year: "IPL 2024",
        position: "Playoffs",
        topScorer: { name: "Ruturaj Gaikwad", runs: 583, image: "https://www.iplt20.com/assets/images/team-players-images/16/1123.png" },
        topWicketTaker: { name: "Matheesha Pathirana", wickets: 17, image: "https://www.iplt20.com/assets/images/team-players-images/16/1566.png" },
        matches: 14,
        won: 8,
        lost: 6
    }
};

