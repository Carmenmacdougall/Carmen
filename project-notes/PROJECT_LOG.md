# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:**
**Startup name:**
**Live site link:** https://carmenmacdougall.github.io/Carmen/

---

## Work sessions

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
