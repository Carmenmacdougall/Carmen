# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:**
**Startup name:**
**Live site link:** https://carmenmacdougall.github.io/Carmen/

---

## Work sessions

### Session 3 - 2026-11-26 - driver: Copilot

- **Goal for this session:** Tailor home recommendations to customer street preferences.
- **Key prompts we gave Copilot** (paste the important ones):
  1. "also make the website be aligned with customer preferences so if more customers want houses a certain street the website will be tailored to that"
  2. "add this into the project log"
- **What worked:** Saved homes now help prioritize listings on the street the visitor has saved most. The prototype clearly notes that preferences are stored only in the current browser.
- **What broke, and how we fixed it:** Cross-customer popularity cannot be calculated by this static prototype; that would require a shared backend and database.
- **Committed?** no — pending review and commit.

### Session 2 - 2026-11-25 - driver: Copilot

- **Goal for this session:** Add more fictional housing listings to the Explore page.
- **Key prompts we gave Copilot** (paste the important ones):
  1. "in my website could you please add a few more houses on the website"
- **What worked:** Added six new listings (IDs 41-46), bringing the total to 46 homes across the existing Antigonish street areas.
- **What broke, and how we fixed it:** No issues found.
- **Committed?** no — pending review and commit.

### Session 1 — 2026-11-19 — driver: not recorded

- **Goal for this session:** Create and improve the X-House student-housing website for Antigonish.
- **Key prompts we gave Copilot** (paste the important ones):
  1. "Incorporate Google Maps to make the streets actual street addresses and houses in Antigonish."
  2. "Add 30-50 houses on actual streets in Antigonish, Nova Scotia."
  3. "Make a few with 5 and 6 bedrooms; just change a few."
- **What worked:** The X-House site uses a scenic Antigonish image and has 40 fictional housing listings on real street names, including College, West, St. Ninian, Church, and Main Streets. The Explore page links to Google Maps for Antigonish and to each listing's approximate street area. Three listings have 5 bedrooms and two have 6. The listings remain fictional and do not expose exact home addresses.
- **What broke, and how we fixed it:** No major issues. Google Maps opens through links rather than an embedded map; listing locations are approximate because the homes are fictional.
- **Committed?** yes — "add the few changes to some houses being 5 and 6 room"

---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| | | | |

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

| Feature we faked or skipped | Why a real company would need it | How hard / expensive? |
|---|---|---|
| Real authentication and database | To synchronize saves, listings, reviews, and users across devices | Moderate cost; use managed PaaS and database services |
| Verified landlord and listing workflow | To prevent fake homes and keep availability current | Moderate to hard; needs staff, documents, and moderation |
| Messaging and notifications | To connect students with landlords securely | Moderate; use a SaaS messaging provider or moderated platform |
| Community reviews | To build network effects and housing quality signals | Hard over time; requires trust, moderation, and enough users |
| Cloud monitoring and backups | To keep listings available and protect data | Moderate; use managed hosting, monitoring, and recovery plans |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
2. Which parts were easy, and which were hard? Why do you think that is?
3. If a competitor had the same AI tool, how long would it take them to copy your site?
