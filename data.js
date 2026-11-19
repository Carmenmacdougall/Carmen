// ============================================================
// data.js — ALL the fake data for your prototype lives here.
//
// There is no database. Everything below is made up, and that is
// on purpose: never put real people's names, emails, phone numbers
// or addresses in this file.
//
// To change what appears on the Explore page, edit LISTINGS.
// Each item is one card. Keep the same fields (id, name, category,
// description) or ask Copilot to add new ones everywhere they're needed.
// ============================================================

const STARTUP = {
  name: "X-House",
  tagline: "Find your place in Antigonish.",
  pitch: "Browse off-campus rooms and apartments made for StFX student life."
};

const LISTINGS = [
  { id: 1, name: "The Maple House", category: "3 bedroom", description: "Bright shared house near downtown with an open kitchen and private yard.", rent: 1450, walk: 12, featured: true, accent: "maple" },
  { id: 2, name: "West End Loft", category: "1 bedroom", description: "Compact, modern apartment close to cafés and grocery stores.", rent: 850, walk: 18, accent: "blue" },
  { id: 3, name: "University Commons", category: "2 bedroom", description: "Two-bedroom unit with in-suite laundry and a spacious living room.", rent: 1150, walk: 8, accent: "green" },
  { id: 4, name: "The Bluebird", category: "3 bedroom", description: "Student-friendly house with furnished bedrooms and a covered porch.", rent: 1320, walk: 15, accent: "blue" },
  { id: 5, name: "Main Street Suite", category: "1 bedroom", description: "Quiet upper-floor suite with parking and water included.", rent: 790, walk: 20, accent: "gold" },
  { id: 6, name: "Campus Garden Flats", category: "2 bedroom", description: "Ground-floor apartment beside a shared garden and bike rack.", rent: 1280, walk: 6, accent: "green" }
];
