# Optional Sections Configuration Guide

This guide explains how to enable and configure the optional sections in your portfolio that are currently disabled.

## 📋 Currently Disabled Sections

1. **Blogs** - Display your blog posts or Medium articles
2. **Podcast** - Showcase podcast appearances
3. **Resume** - Downloadable resume section
4. **Open Source** - GitHub pinned projects
5. **Projects** - Big projects and activities
6. **Twitter** - Twitter timeline integration

---

## 🔧 How to Enable Sections

All sections have a `"display": false` setting. To enable any section, simply change it to `"display": true` in the respective JSON file.

---

## 📝 Blog Section

**File:** `src/data/blogs.json`

### Option 1: Display Medium Blogs (Automatic)

If you write on Medium, set `displayMediumBlogs` to `"true"` and configure your Medium username:

1. Edit `.env` file:
```env
MEDIUM_USERNAME = "your-medium-username"
```

2. Enable the section:
```json
{
  "displayMediumBlogs": "true",
  "display": true
}
```

Your Medium posts will be automatically fetched and displayed!

### Option 2: Manual Blog List

Add your blog posts manually:

```json
{
  "title": "Blogs",
  "subtitle": "My thoughts on tech and development",
  "displayMediumBlogs": "false",
  "display": true,
  "blogs": [
    {
      "url": "https://yourblog.com/post-1",
      "title": "How I Built a Data Pipeline",
      "description": "A deep dive into building scalable data pipelines with Python and Kafka."
    },
    {
      "url": "https://yourblog.com/post-2",
      "title": "AI in Production: Lessons Learned",
      "description": "Key takeaways from deploying AI models in production environments."
    }
  ]
}
```

---

## 🎙️ Podcast Section

**File:** `src/data/podcast.json`

If you've appeared on podcasts, add the embed links:

```json
{
  "title": "Podcast 🎙️",
  "subtitle": "Sharing knowledge through conversations",
  "display": true,
  "podcast": [
    "https://anchor.fm/your-podcast/embed/episodes/your-episode-link",
    "https://open.spotify.com/embed/episode/your-episode-id"
  ]
}
```

**How to get embed links:**
- **Anchor.fm:** Click "Embed" on your episode
- **Spotify:** Right-click episode → Share → Embed episode
- **Apple Podcasts:** Use third-party embed generators

---

## 📄 Resume Section

**File:** `src/data/resume.json`

### Step 1: Enable the section
```json
{
  "title": "Resume",
  "subtitle": "Feel free to download my resume",
  "display": true
}
```

### Step 2: Add your resume file
Place your resume PDF at:
```
src/containers/greeting/resume.pdf
```

### Step 3: Enable the download button
In `src/data/profile.json`, add your resume link:
```json
{
  "greeting": {
    "resumeLink": "your-resume-link-or-leave-empty-for-local-file"
  }
}
```

If you leave `resumeLink` empty, it will use the local `resume.pdf` file.

---

## 🚀 Projects Section

**File:** `src/data/projects.json`

Showcase your big projects or activities:

```json
{
  "title": "Projects & Activities",
  "subtitle": "🛠️ Technical contributions and beyond 🚀",
  "display": true,
  "projects": [
    {
      "imageKey": "project_1",
      "projectName": "AI Chatbot Platform",
      "projectDesc": "Built a scalable chatbot platform serving 10k+ users",
      "footerLink": [
        {
          "name": "Visit Project",
          "url": "https://yourproject.com"
        },
        {
          "name": "GitHub",
          "url": "https://github.com/yourusername/project"
        }
      ]
    }
  ]
}
```

**Don't forget to add project images:**

1. Add image to `src/assets/images/`
2. Update `src/config/imageMappings.js`:
```javascript
export const projectImages = {
  project_1: require("../assets/images/your_project_image.png")
};
```

---

## 💻 Open Source / GitHub Section

**File:** `src/data/opensource.json`

Display your GitHub pinned repositories:

### Step 1: Get GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token (no scopes needed, just leave all unchecked)
3. Copy the token

### Step 2: Configure Environment

Edit `.env` file:
```env
REACT_APP_GITHUB_TOKEN = "your_github_token_here"
GITHUB_USERNAME = "your_github_username"
USE_GITHUB_DATA = "true"
```

### Step 3: Enable Section

```json
{
  "showGithubProfile": "true",
  "display": true
}
```

### Step 4: Pin Your Repositories

Go to your GitHub profile and pin the repositories you want to showcase (max 6).

**Important:** The section will only show your pinned repositories, so make sure you have some pinned!

---

## 🐦 Twitter Section

**File:** `src/data/social.json`

Display your Twitter timeline on your portfolio:

```json
{
  "twitter": {
    "userName": "your_twitter_handle",
    "display": true
  }
}
```

**Note:** Don't include the `@` symbol, just the username.

---

## ⚙️ Other Settings in social.json

### Splash Screen

The animated splash screen that shows when the site loads:

```json
{
  "splashScreen": {
    "enabled": true,
    "duration": 2000
  }
}
```

- `enabled`: Set to `false` to disable splash screen
- `duration`: Time in milliseconds (2000 = 2 seconds)

### Illustration Animation

The landing page illustration animation:

```json
{
  "illustration": {
    "animated": true
  }
}
```

Set to `false` to use a static illustration instead.

---

## 📊 Summary Table

| Section | JSON File | Additional Setup Required |
|---------|-----------|---------------------------|
| Blogs | `blogs.json` | Medium username in `.env` (optional) |
| Podcast | `podcast.json` | Get embed links from podcast platforms |
| Resume | `resume.json` | Add `resume.pdf` to `src/containers/greeting/` |
| Projects | `projects.json` | Add images to `imageMappings.js` |
| Open Source | `opensource.json` | GitHub token in `.env` + Pin repos |
| Twitter | `social.json` | Just your Twitter username |

---

## 🎯 Quick Enable Checklist

For each section you want to enable:

- [ ] Set `"display": true` in the JSON file
- [ ] Add your content/data
- [ ] Add any required assets (images, PDFs)
- [ ] Update mappings if needed (images, icons)
- [ ] Configure environment variables if needed (`.env`)
- [ ] Test with `npm start`
- [ ] Build with `npm run build`
- [ ] Deploy with `npm run deploy`

---

## 💡 Tips

1. **Start Simple:** Enable one section at a time and test
2. **Images:** Keep images optimized (< 500KB) for better performance
3. **Content:** Keep descriptions concise and engaging
4. **Links:** Always test your links before deploying
5. **GitHub Token:** Never commit your `.env` file (it's in `.gitignore`)
6. **Medium:** The fetch script runs on every build to get latest posts

---

## 🐛 Troubleshooting

### Section Doesn't Show Up
- Check that `"display": true` is set
- Check console for errors: `npm start`
- Verify all required fields are filled

### Images Don't Load
- Check image path in `imageMappings.js`
- Verify image file exists in `src/assets/images/`
- Check for typos in `imageKey` reference

### GitHub Section Empty
- Make sure you have pinned repositories on GitHub
- Verify token is correct in `.env`
- Check `USE_GITHUB_DATA = "true"` is set

### Medium Blogs Not Showing
- Verify `MEDIUM_USERNAME` in `.env`
- Check Medium username is correct (no @)
- Run `npm start` to trigger fetch

---

## 📚 Additional Resources

- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Medium RSS Feed](https://help.medium.com/hc/en-us/articles/214874118-RSS-feeds)
- [Podcast Embed Links Guide](https://help.anchor.fm/hc/en-us/articles/360027712351-Embed-Your-Podcast-Player)

---

Need help? Check the main [README.md](README.md) or [DATA_STRUCTURE.md](DATA_STRUCTURE.md) for more details!

