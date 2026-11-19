# Business case

Your prototype shows *what* the product looks like. This document explains *why* it could become a business. Answer in your own words and refer to course concepts by name. See the term project brief on Moodle for length and grading.

## 1. The idea

- **Customer:** Who exactly is it for?
- **Problem:** What problem do they have today, and how do they solve it now?
- **Solution:** What does your product do differently or better?
- **Revenue:** How does the company make money?

**Customer:** StFX students looking for safe, manageable off-campus housing and landlords serving the student market.

**Problem:** Students compare fragmented listings, unclear rents, and unknown walk times. Landlords struggle to reach a concentrated but changing audience.

**Solution:** X-House organizes StFX-area listings with consistent rent, bedroom, distance, and lease details, plus saveable shortlists.

**Revenue:** A freemium model could let students use core search for free while landlords pay for verified listings, lead management, and featured placement.

## 2. Where IT creates value

Which parts of the value chain does your product change, and how? Which course concepts apply (e.g. scale, distribution channels, differentiation, data, switching costs)?

X-House changes housing discovery and selection in the student value chain. It also gives landlords a direct digital distribution channel instead of scattered posts. Its differentiation comes from StFX-specific data and a consistent listing format. Over time, cumulative reviews and saved shortlists create scale and switching costs because users do not want to rebuild their search elsewhere.

## 3. Network effects

Does your product get more valuable as more people use it?

- Is it a **one-sided** or **two-sided** market? Who are the sides?
- Where does the extra value come from as the network grows?
- How would you solve the "empty network" problem at launch?
- Point to the part of your prototype that shows this.

This is a two-sided market: students create demand and landlords supply inventory. It uses direct network effects through larger listing choice and indirect network effects through reviews: more students contribute search and feedback, while more landlords respond with accurate availability. The prototype shows this with the "X-House network" panel and the join action, plus the fake active-student, review, and listing counts.

At launch, X-House would seed the network by recruiting participating landlords, importing a moderate set of listings, offering a verified-launch promotion, and promoting the service through StFX student groups. A complete initial inventory is important because an empty directory would give early students no reason to join.

## 4. Can it be copied? (the moat question)

Anyone in this class could rebuild your website in a weekend with the same AI tool. So the code is **not** your competitive advantage.

- What about your business is **valuable, rare, hard to imitate and well-organized** (VRIN)?
- What would a competitor with a bigger budget need to copy you, and how long would it take?
- Which of your advantages get *stronger* over time (data, network, brand, switching costs)?

The code can be copied quickly, but the durable moat is the accumulated, validated StFX housing dataset and its trusted community network. Competitors could copy the interface in a weekend, but reproducing verified reviews, landlord relationships, historical availability, and an active annual user cycle would take much longer and require local operations. Brand trust and switching costs would strengthen as students save shortlists and landlords maintain a verified listing record. The strongest moat would combine network effects, proprietary data, and organized local partnerships; each becomes more valuable with continued use.

## 5. Cloud and operations

What would it take to run this for real? Which parts would you buy as cloud services (SaaS, PaaS, IaaS), and what are the risks of relying on them?

In production, authentication, listing records, reviews, saved homes, and notifications would require a managed database and application hosting. A PaaS could run the web application, managed object storage could hold listing images, a SaaS customer-support or messaging service could handle contact, and a CDN or IaaS network layer could serve a fast public site. Cloud autoscaling can handle housing-demand peaks, but creates risk from outages, vendor lock-in, unexpected usage costs, and data-provider failures. The team would use encrypted storage, role-based access, backups, monitoring, documented exports, and a continuity plan.

## 6. Risks and ethics

What could go wrong — for your customers, their data, or society? What would you do about it?

Risks include fake listings, discriminatory landlord behavior, inaccurate distances or availability, public exposure of student information, and review abuse. A real system would require listing verification, minimal personal data collection, moderation, abuse reporting, transparent data-retention rules, and safeguards against discriminatory filtering. It would clearly label unverified listings and never publish addresses or tenant details before a legitimate inquiry. Regular audits and a de-identification process would protect the community and improve trust.
