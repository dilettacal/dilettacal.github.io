# JSON Files Quick Reference

A quick overview of all JSON configuration files in your portfolio.

## 📁 All JSON Data Files

### ✅ Currently Active (display: true)

| File | Purpose | Status | Items |
|------|---------|--------|-------|
| `profile.json` | Personal info, social links, contact | ✅ Active | 1 profile |
| `experience.json` | Work history | ✅ Active | 4 jobs |
| `education.json` | Educational background | ✅ Active | 3 schools |
| `skills.json` | Skills overview | ✅ Active | 8 tools |
| `techStack.json` | Detailed tech timeline | ✅ Active | 5 stacks |
| `achievements.json` | Certifications & courses | ✅ Active | 5 certs |
| `talks.json` | Public speaking | ✅ Active | 1 talk |

### 🔒 Currently Inactive (display: false)

| File | Purpose | Status | Notes |
|------|---------|--------|-------|
| `blogs.json` | Blog posts | 🔒 Inactive | Ready for Medium integration |
| `podcast.json` | Podcast episodes | 🔒 Inactive | Ready for embed links |
| `resume.json` | Resume download section | 🔒 Inactive | Add resume.pdf first |
| `opensource.json` | GitHub projects | 🔒 Inactive | Needs GitHub token |
| `projects.json` | Big projects | 🔒 Inactive | 2 projects configured |

### ⚙️ Configuration Files

| File | Purpose | Type |
|------|---------|------|
| `social.json` | Twitter, splash screen, animations | Config |

---

## 📊 Content Statistics

### Current Content Count
- **Work Experiences:** 4 positions
- **Education:** 3 degrees
- **Skills:** 4 key skills + 8 software tools
- **Tech Stacks:** 5 categories (30+ technologies)
- **Achievements:** 5 certifications
- **Talks:** 1 public speaking event

### Available But Inactive
- **Projects:** 2 configured
- **Blogs:** Template ready
- **Podcast:** Template ready

---

## 🗂️ File Breakdown

### profile.json
```
✅ greeting (username, title, subtitle, resume link)
✅ socialMediaLinks (GitHub, LinkedIn, Gmail)
✅ contactInfo (title, subtitle, email)
✅ isHireable (true/false)
```

### experience.json
```
✅ 4 experiences:
   - Independent Publisher (Freelance) - 2024-Present
   - Senior Data Engineer (CARIAD) - 2022-Present
   - NLU Software Engineer (CARIAD) - 2018-2022
   - Several Roles (Early Career) - 2012-2018
```

### education.json
```
✅ 3 schools:
   - HTW Berlin - BSc Computer Science
   - University of Pisa - MA Linguistics (x2)
```

### skills.json
```
✅ 4 skill descriptions
✅ 8 software skills:
   - Python, OpenAI, Databricks, Databases
   - HuggingFace, Azure, Kubernetes, GitHub Actions
```

### techStack.json
```
✅ 5 tech stacks with timelines:
   1. Data Engineering (6 years, 11 icons)
   2. LLM Engineering & NLP (7 years, 11 icons)
   3. Data Science (6 years, 6 icons)
   4. Cloud & DevOps (5 years, 6 icons)
   5. Frontend & Design (2 years, 7 icons)
```

### achievements.json
```
✅ 5 certifications:
   - AI in Production (Udemy) - In Progress
   - LLM Engineering (Udemy) - Complete
   - Building Agentic AI (LinkedIn) - Complete
   - Software Architecture (Coursera) - Complete
   - NLP Nanodegree (Udacity) - Complete
```

### talks.json
```
✅ 1 talk:
   - "How AI pushed me forward" at UITS 2025
```

### projects.json
```
🔒 2 projects (inactive):
   - Charging Feedback
   - Code as you are (LGBTIQ+ network)
```

### blogs.json
```
🔒 Template ready with 2 example posts
   Medium integration configured
```

### podcast.json
```
🔒 Template ready for embed links
```

### resume.json
```
🔒 Section configured, needs resume.pdf
```

### opensource.json
```
🔒 Ready for GitHub integration
```

### social.json
```
⚙️ Configuration:
   - Twitter: Inactive
   - Splash screen: Enabled (2000ms)
   - Illustrations: Animated
```

---

## 🎨 Icon & Image Mappings

### imageMappings.js
```
✅ Company logos: 3 (freelance, cariad_tech, early_career)
✅ School logos: 2 (htw_berlin, unipi)
✅ Certification logos: 4 (udemy, linkedin, coursera, udacity)
✅ Project images: 2 (car_ai, code_as_you_are)
```

### iconMappings.js
```
✅ 30+ custom SVG icons organized by category:
   - AI/ML: 5 icons
   - Data Engineering: 4 icons
   - Databases: 3 icons
   - Cloud & DevOps: 4 icons
   - NLP & AI Frameworks: 3 icons
   - Frontend & Design: 6 icons
   - Tools & Other: 6+ icons
```

---

## 🔧 Quick Actions

### To Enable a Section
1. Open the JSON file
2. Change `"display": false` to `"display": true`
3. Verify content is configured
4. Run `npm start` to test

### To Add Content
1. Open the appropriate JSON file
2. Add your entry following the existing structure
3. Add images/icons to mappings if needed
4. Test and deploy

### To Update Existing Content
1. Find the JSON file (see table above)
2. Edit the values directly
3. No code changes needed!

---

## 📈 File Sizes

All JSON files are lightweight and optimized:
- Average file size: < 5KB
- Total JSON data: ~30KB
- Loads instantly with the app

---

## 🎯 Next Steps Recommendations

### High Priority
1. ✅ All active sections configured ✨
2. Consider enabling **Projects** section (already has 2 projects)
3. Add resume.pdf and enable **Resume** section

### Optional
4. Set up **Medium** integration for automatic blog posts
5. Add **Podcast** episodes if applicable
6. Enable **GitHub** section to showcase open source work
7. Add **Twitter** timeline if desired

---

## 📝 Notes

- All JSON files use UTF-8 encoding
- Emojis are supported in all text fields
- All sections are optional - enable only what you need
- Content is validated on build time
- No runtime dependencies on disabled sections

---

## 🚀 Performance Impact

| Section | Load Impact | Build Impact |
|---------|-------------|--------------|
| Profile | Minimal | None |
| Experience | Low | None |
| Education | Low | None |
| Skills | Low | None |
| Tech Stack | Medium | None |
| Achievements | Low | None |
| Talks | Minimal | None |
| Blogs | Low | Fetches on build |
| Projects | Low | None |
| Podcast | Medium | None |
| GitHub | Medium | Fetches on build |
| Twitter | High | Loads externally |

**Recommendation:** Keep only sections you actively use for best performance.

---

For detailed configuration instructions, see [OPTIONAL_SECTIONS_GUIDE.md](OPTIONAL_SECTIONS_GUIDE.md)

