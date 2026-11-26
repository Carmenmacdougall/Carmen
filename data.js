// ============================================================
// data.js — ALL the fake data for your prototype lives here.
//
// There is no database. Everything below is made up, and that is
// on purpose: never put real people's names, emails, phone numbers,
// or home addresses in this file. Public street names may be used
// only as approximate areas for the fictional listings.
//
// To change what appears on the Explore page, edit LISTINGS.
// Each item is one card. Keep the same fields (id, name, category,
// description, street) or ask Copilot to add new ones everywhere they're needed.
// ============================================================

const STARTUP = {
  name: "X-House",
  tagline: "Find your place in Antigonish.",
  pitch: "Browse off-campus rooms and apartments made for StFX student life."
};

const LISTINGS = [
  { id: 1, name: "The Maple House", category: "3 bedroom", description: "Bright shared house near downtown with an open kitchen and private yard.", rent: 1450, walk: 12, street: "College Street", featured: true, accent: "maple" },
  { id: 2, name: "West End Loft", category: "1 bedroom", description: "Compact, modern apartment close to cafés and grocery stores.", rent: 850, walk: 18, street: "West Street", accent: "blue" },
  { id: 3, name: "University Commons", category: "2 bedroom", description: "Two-bedroom unit with in-suite laundry and a spacious living room.", rent: 1150, walk: 8, street: "St. Ninian Street", accent: "green" },
  { id: 4, name: "The Bluebird", category: "3 bedroom", description: "Student-friendly house with furnished bedrooms and a covered porch.", rent: 1320, walk: 15, street: "Church Street", accent: "blue" },
  { id: 5, name: "Main Street Suite", category: "1 bedroom", description: "Quiet upper-floor suite with parking and water included.", rent: 790, walk: 20, street: "Main Street", accent: "gold" },
  { id: 6, name: "Campus Garden Flats", category: "2 bedroom", description: "Ground-floor apartment beside a shared garden and bike rack.", rent: 1280, walk: 6, street: "College Street", accent: "green" },
  { id: 7, name: "The Red Door", category: "2 bedroom", description: "Sunny rooms in a quiet shared home with a generous kitchen.", rent: 1190, walk: 11, street: "College Street", accent: "maple" },
  { id: 8, name: "West River Nook", category: "1 bedroom", description: "A private suite with a small dining area and storage.", rent: 825, walk: 19, street: "West Street", accent: "blue" },
  { id: 9, name: "Ninian Place", category: "3 bedroom", description: "Furnished student rooms with a shared lounge and laundry.", rent: 1390, walk: 9, street: "St. Ninian Street", accent: "green" },
  { id: 10, name: "Church Street Cottage", category: "2 bedroom", description: "A cozy two-bedroom layout with a porch and backyard space.", rent: 1250, walk: 14, street: "Church Street", accent: "gold" },
  { id: 11, name: "The Brick Walkup", category: "1 bedroom", description: "Compact upper-floor apartment near local shops and services.", rent: 875, walk: 20, street: "Main Street", accent: "blue" },
  { id: 12, name: "College Corner", category: "5 bedroom", description: "Shared student house with five bedrooms and a large common room.", rent: 2100, walk: 7, street: "College Street", accent: "green" },
  { id: 13, name: "The Willow Flat", category: "2 bedroom", description: "Bright apartment with a breakfast nook and shared yard.", rent: 1175, walk: 16, street: "West Street", accent: "gold" },
  { id: 14, name: "Ninian House", category: "3 bedroom", description: "Three furnished rooms in a friendly shared home.", rent: 1425, walk: 10, street: "St. Ninian Street", accent: "maple" },
  { id: 15, name: "The Garden Gate", category: "2 bedroom", description: "A tidy home with garden space and a separate living room.", rent: 1225, walk: 13, street: "Church Street", accent: "green" },
  { id: 16, name: "Main Street Studio", category: "1 bedroom", description: "Efficient studio-style space with a full kitchen.", rent: 760, walk: 21, street: "Main Street", accent: "blue" },
  { id: 17, name: "The Birch House", category: "3 bedroom", description: "Shared house with a covered entry and room for bikes.", rent: 1360, walk: 8, street: "College Street", accent: "maple" },
  { id: 18, name: "Westside Rooms", category: "6 bedroom", description: "Six private bedrooms and a shared kitchen and living area.", rent: 2400, walk: 18, street: "West Street", accent: "gold" },
  { id: 19, name: "St. Ninian Suites", category: "2 bedroom", description: "Two-bedroom apartment with in-suite laundry.", rent: 1260, walk: 9, street: "St. Ninian Street", accent: "blue" },
  { id: 20, name: "Church Hill Home", category: "3 bedroom", description: "Comfortable shared home with a bright dining room.", rent: 1340, walk: 15, street: "Church Street", accent: "green" },
  { id: 21, name: "The Main Loft", category: "2 bedroom", description: "Upper-level apartment with open living space and storage.", rent: 1090, walk: 20, street: "Main Street", accent: "maple" },
  { id: 22, name: "College House North", category: "1 bedroom", description: "Private room in a shared home with a furnished common area.", rent: 720, walk: 10, street: "College Street", accent: "gold" },
  { id: 23, name: "West Street Garden Flat", category: "2 bedroom", description: "Ground-floor home with a small patio and shared garden.", rent: 1210, walk: 17, street: "West Street", accent: "green" },
  { id: 24, name: "The Ninian Duplex", category: "3 bedroom", description: "Three-bedroom unit with a separate entrance and laundry.", rent: 1475, walk: 8, street: "St. Ninian Street", accent: "blue" },
  { id: 25, name: "Church Street Rooms", category: "5 bedroom", description: "Five furnished bedrooms arranged around a shared kitchen.", rent: 2100, walk: 14, street: "Church Street", accent: "maple" },
  { id: 26, name: "Main Street Mews", category: "2 bedroom", description: "Quiet apartment with a dining area and dedicated storage.", rent: 1120, walk: 22, street: "Main Street", accent: "gold" },
  { id: 27, name: "The Campus Cedar", category: "3 bedroom", description: "Student-friendly house with a mudroom and shared backyard.", rent: 1380, walk: 6, street: "College Street", accent: "green" },
  { id: 28, name: "West End House", category: "2 bedroom", description: "Two-bedroom home with a bright kitchen and porch.", rent: 1285, walk: 19, street: "West Street", accent: "maple" },
  { id: 29, name: "Ninian Lane Flat", category: "1 bedroom", description: "A simple one-bedroom layout with a full-size kitchen.", rent: 810, walk: 10, street: "St. Ninian Street", accent: "gold" },
  { id: 30, name: "The Church Street House", category: "3 bedroom", description: "Three shared bedrooms with a sunny dining room.", rent: 1410, walk: 13, street: "Church Street", accent: "blue" },
  { id: 31, name: "Main Street Gardens", category: "2 bedroom", description: "Apartment with a shared outdoor space and bike storage.", rent: 1160, walk: 21, street: "Main Street", accent: "green" },
  { id: 32, name: "College Street Commons", category: "6 bedroom", description: "Six-bedroom shared home with a large living room.", rent: 2400, walk: 7, street: "College Street", accent: "blue" },
  { id: 33, name: "West Street Suite", category: "1 bedroom", description: "Private suite with a quiet study corner and storage.", rent: 845, walk: 18, street: "West Street", accent: "gold" },
  { id: 34, name: "Ninian Garden House", category: "2 bedroom", description: "Two-bedroom home with a small yard and shared laundry.", rent: 1235, walk: 9, street: "St. Ninian Street", accent: "maple" },
  { id: 35, name: "Church Street Flat", category: "1 bedroom", description: "Bright one-bedroom apartment with a separate sitting area.", rent: 830, walk: 14, street: "Church Street", accent: "green" },
  { id: 36, name: "The Main House", category: "3 bedroom", description: "Shared home with three furnished rooms and a full kitchen.", rent: 1350, walk: 20, street: "Main Street", accent: "blue" },
  { id: 37, name: "College View Apartment", category: "2 bedroom", description: "Two-bedroom unit with a sunny living room and laundry.", rent: 1240, walk: 8, street: "College Street", accent: "gold" },
  { id: 38, name: "West River Rooms", category: "3 bedroom", description: "Three private rooms in a shared home with a common lounge.", rent: 1325, walk: 18, street: "West Street", accent: "green" },
  { id: 39, name: "Ninian Place North", category: "5 bedroom", description: "Five-bedroom student home with a shared kitchen and porch.", rent: 2100, walk: 11, street: "St. Ninian Street", accent: "maple" },
  { id: 40, name: "Church Street Garden Flat", category: "2 bedroom", description: "Ground-floor apartment with garden access and bike storage.", rent: 1270, walk: 15, street: "Church Street", accent: "gold" },
  { id: 41, name: "The Highland Terrace", category: "4 bedroom", description: "Four-bedroom shared home with an open dining room and private parking.", rent: 1680, walk: 12, street: "College Street", accent: "green" },
  { id: 42, name: "Maple Lane Apartment", category: "1 bedroom", description: "Renovated apartment with a bright study area and in-suite storage.", rent: 865, walk: 16, street: "West Street", accent: "maple" },
  { id: 43, name: "Ninian Creek Home", category: "3 bedroom", description: "Three-bedroom house near the river with a furnished living room.", rent: 1460, walk: 11, street: "St. Ninian Street", accent: "blue" },
  { id: 44, name: "Town Hall Suite", category: "2 bedroom", description: "Central upper-floor suite close to shops, with water included.", rent: 1180, walk: 18, street: "Main Street", accent: "gold" },
  { id: 45, name: "The Orchard House", category: "4 bedroom", description: "Spacious student house with four furnished rooms and a backyard.", rent: 1725, walk: 14, street: "Church Street", accent: "green" },
  { id: 46, name: "College Crescent Loft", category: "2 bedroom", description: "Modern loft-style apartment with laundry and a quiet reading nook.", rent: 1310, walk: 7, street: "College Street", accent: "blue" }
];
