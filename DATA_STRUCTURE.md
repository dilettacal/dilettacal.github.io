# Portfolio Data Structure Documentation

This portfolio uses a JSON-based data structure that separates content from code, making it easy to update your information without touching React components.

## 📁 Folder Structure

```
src/
├── data/                      # All text content (JSON files)
│   ├── profile.json          # Personal info, social links, contact
│   ├── experience.json       # Work experience
│   ├── education.json        # Education history
│   ├── skills.json           # Skills and software tools
│   ├── techStack.json        # Tech stack timeline with details
│   ├── achievements.json     # Certifications and courses
│   ├── projects.json         # Projects and activities
│   ├── talks.json            # Talks and public speaking
│   ├── blogs.json            # Blog posts
│   ├── podcast.json          # Podcast episodes
│   ├── resume.json           # Resume section settings
│   ├── opensource.json       # GitHub open source settings
│   └── social.json           # Social settings (Twitter, splash screen)
├── config/                    # Mappings (code-based)
│   ├── imageMappings.js      # Company logos, school logos, etc.
│   └── iconMappings.js       # Custom SVG icons
└── portfolio.js               # Combines JSON + mappings
```

## 🎯 How to Update Content

### 1. Update Text Content (Easy!)

Just edit the JSON files in `src/data/`. No coding required!

**Example: Update work experience**
```json
// src/data/experience.json
{
  "experiences": [
    {
      "role": "Your New Role",
      "company": "New Company",
      "companyLogoKey": "company_key",  // Must match key in imageMappings.js
      "date": "Start – End",
      "desc": "Brief description",
      "descBullets": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

**Example: Update skills**
```json
// src/data/skills.json
{
  "skills": [
    "⚡ Your new skill description"
  ]
}
```

### 2. Add New Images

**Step 1:** Add the image file to `src/assets/images/`

**Step 2:** Add a mapping in `src/config/imageMappings.js`
```javascript
export const companyLogos = {
  my_new_company: require("../assets/images/my_logo.png")
};
```

**Step 3:** Reference the key in your JSON
```json
{
  "companyLogoKey": "my_new_company"
}
```

### 3. Add New Custom Icons

**Step 1:** Add SVG file to `src/assets/images/simpleicons/`

**Step 2:** Import and add to registry in `src/config/iconMappings.js`
```javascript
import {ReactComponent as NewIcon} from "../assets/images/simpleicons/newicon.svg";

export const customIcons = {
  newicon: NewIcon,
  // ... other icons
};
```

**Step 3:** Reference in JSON
```json
{
  "customIcon": "newicon"
}
```

## 📄 JSON File Descriptions

### profile.json
Contains:
- Greeting/intro text
- Social media links
- Contact information
- Hireable status

### experience.json
Your work history with:
- Role, company, dates
- Job descriptions
- Key achievements (bullet points)
- Company logo references

### education.json
Your educational background:
- School names, degrees
- Durations
- Descriptions
- School logo references

### skills.json
Your skills overview:
- Skill descriptions
- Software/tool icons (Font Awesome or custom)

### techStack.json
Detailed tech stack with:
- Stack categories
- Timeline periods
- Detailed descriptions (expandable)
- Technology icons

### achievements.json
Certifications and courses:
- Course/cert titles
- Descriptions
- Providers (Udemy, Coursera, etc.)
- Links to certificates
- Logo references

### projects.json
Your projects and activities:
- Project names
- Descriptions
- Images
- Links

### talks.json
Public speaking engagements:
- Talk titles
- Event names
- Links

### blogs.json
Blog posts and articles:
- Blog titles and descriptions
- URLs to blog posts
- Medium integration settings
- Display toggle

### podcast.json
Podcast appearances:
- Episode embed links
- Titles and descriptions
- Display toggle

### resume.json
Resume download section:
- Section title and subtitle
- Display toggle
- Note: Resume file goes in `src/containers/greeting/resume.pdf`

### opensource.json
GitHub open source projects:
- Display settings
- GitHub profile integration toggle

### social.json
Social and UI settings:
- Twitter username and display
- Splash screen settings (enabled/duration)
- Illustration animation toggle

## 🔧 Icon Types

### Font Awesome Icons
Used directly in JSON (no mapping needed):
```json
{
  "fontAwesomeClassname": "fab fa-python"
}
```

### Custom SVG Icons
Require mapping in `iconMappings.js`:
```json
{
  "customIcon": "openai"  // Must exist in iconMappings.js
}
```

## ✅ Benefits of This Structure

1. **Easy Updates** - Change text content without touching code
2. **Version Control** - Content changes show clearly in git diffs
3. **Type-Safe** - Can add TypeScript interfaces later
4. **Organized** - Clear separation of concerns
5. **Maintainable** - Find and update content quickly

## 🚀 Workflow Example

**To add a new job:**

1. Open `src/data/experience.json`
2. Add your new job entry with all details
3. If new company logo needed:
   - Add image to `src/assets/images/`
   - Add to `imageMappings.js`
   - Reference the key in JSON
4. Save and rebuild: `npm start`

**To update skills description:**

1. Open `src/data/skills.json`
2. Edit the `skills` array
3. Save and rebuild: `npm start`

That's it! No need to navigate through complex React components.

## 📝 Notes

- JSON files are the **single source of truth** for content
- Mappings in `config/` are only for images and icons
- `portfolio.js` automatically combines JSON + mappings
- Emojis are supported in text fields (they get wrapped by `emoji()` function automatically)

## 🔍 Need to Find Something?

| What you want to change | File to edit |
|-------------------------|--------------|
| Job descriptions | `data/experience.json` |
| Education info | `data/education.json` |
| Skills list | `data/skills.json` |
| Tech stack details | `data/techStack.json` |
| Certifications | `data/achievements.json` |
| Projects | `data/projects.json` |
| Talks | `data/talks.json` |
| Blog posts | `data/blogs.json` |
| Podcast episodes | `data/podcast.json` |
| Resume section | `data/resume.json` |
| GitHub/Open Source | `data/opensource.json` |
| Twitter settings | `data/social.json` |
| Splash screen | `data/social.json` |
| Social links | `data/profile.json` |
| Contact info | `data/profile.json` |
| Company logos | `config/imageMappings.js` |
| Tech icons | `config/iconMappings.js` |

Happy updating! 🎨

