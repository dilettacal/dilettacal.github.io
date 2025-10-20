# Diletta Calussi - Portfolio 🚀

> **Note**: This is my personal portfolio built using the [DeveloperFolio](https://github.com/saadpasta/developerFolio) template by [Saad Pasta](https://github.com/saadpasta). Full credit goes to Saad and all the amazing contributors who built this fantastic portfolio template. See the [Credits](#credits) section below.

My personal portfolio website showcasing my professional experience as a Data Engineer and AI Engineer. Built with React and heavily customized to highlight my work in data engineering, NLP, and AI systems.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdilettacal.github.io)](https://dilettacal.github.io)
[![React](https://img.shields.io/badge/React-16.10.2-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)

## ✨ Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Interactive UI** - Smooth animations powered by Lottie and React Reveal
- **Customizable Sections**:
  - Landing page with animated greeting
  - Skills showcase with custom icons
  - Interactive tech stack timeline with expandable details
  - Work experience cards with company logos
  - Education timeline
  - Projects and achievements
  - Certifications and courses
  - Talks and public speaking
  - Contact section
- **Dark Mode Support** - Toggle between light and dark themes
- **Social Media Integration** - Link to GitHub, LinkedIn, Gmail, and more
- **Splash Screen** - Eye-catching animated splash screen on first load
- **PWA Ready** - Progressive Web App capabilities
- **GitHub Pages Deployment** - Easy deployment with built-in scripts

## 🛠️ Technology Stack

- **Frontend**: React 16.10.2
- **Styling**: SASS/SCSS
- **Animations**: Lottie, React Reveal
- **Icons**: Font Awesome, Custom SVG icons
- **Build Tool**: React Scripts 5.0.1
- **Testing**: Jest, Enzyme
- **Deployment**: GitHub Pages
- **Code Formatting**: Prettier

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)
- Git

## 🚀 Getting Started

> **Note**: This section is primarily for my own development workflow. If you're looking for a portfolio template to use, I recommend checking out the [original DeveloperFolio project](https://github.com/saadpasta/developerFolio) instead, which is actively maintained as a template.

### 1. Clone the Repository

```bash
git clone https://github.com/dilettacal/developerFolio.git
cd developerFolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

If you want to fetch GitHub profile data:

```bash
cp env.example .env
```

Edit the `.env` file and add your GitHub tokens if needed.

### 4. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000` in your browser.

## 🎨 Customization

### Update Personal Information

All personal information and content is centralized in the `src/portfolio.js` file. Edit this file to customize:

1. **Greeting Section**
```javascript
const greeting = {
  username: "yourUsername",
  title: "Hi all, I'm Your Name",
  subTitle: emoji("Your professional summary here"),
  resumeLink: "link-to-your-resume",
  displayGreeting: true
};
```

2. **Social Media Links**
```javascript
const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  gmail: "your.email@gmail.com",
  // ... other social links
};
```

3. **Skills Section**
```javascript
const skillsSection = {
  title: "What I Do",
  subTitle: "Your tagline",
  skills: [
    emoji("⚡ Your skill 1"),
    emoji("⚡ Your skill 2"),
    // ... more skills
  ],
  softwareSkills: [
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    // ... more skills
  ]
};
```

4. **Work Experience**
```javascript
const workExperiences = {
  experience: [
    {
      role: "Your Role",
      company: "Company Name",
      companylogo: require("./assets/images/company-logo.png"),
      date: "Start Date – End Date",
      desc: "Brief description",
      descBullets: [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
};
```

5. **Education**
```javascript
const educationInfo = {
  schools: [
    {
      schoolName: "University Name",
      logo: require("./assets/images/school-logo.jpg"),
      subHeader: "Degree Name",
      duration: "Start – End",
      desc: "Description"
    }
  ]
};
```

### Update Colors

Edit `src/_globalColor.scss` to change the color scheme:

```scss
$primaryColor: #your-color;
$secondaryColor: #your-color;
// ... other color variables
```

### Add Custom Images

Place your images in `src/assets/images/` and reference them in `portfolio.js`:

```javascript
companylogo: require("./assets/images/your-image.png")
```

### Customize Animations

Replace Lottie animation files in `src/assets/lottie/` with your own JSON animation files from [LottieFiles](https://lottiefiles.com/).

## 📦 Available Scripts

### `npm start`
Runs the app in development mode. Fetches external data (if configured) and starts the development server.

### `npm run build`
Builds the app for production to the `build` folder. Optimizes the build for best performance.

### `npm run deploy`
Deploys the production build to GitHub Pages.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run format`
Formats all `.js`, `.css`, `.json`, and `.scss` files using Prettier.

### `npm run check-format`
Checks if files are properly formatted without making changes.

## 🌐 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io"
```

2. Build and deploy:
```bash
npm run deploy
```

Your portfolio will be live at `https://yourusername.github.io`

### Other Platforms

You can also deploy to:
- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import your GitHub project for instant deployment
- **Custom Server**: Upload the contents of the `build` folder to your web server

## 📁 Project Structure

```
developerFolio/
├── public/              # Static files
│   ├── index.html       # HTML template
│   ├── manifest.json    # PWA manifest
│   └── ...              # Favicons and other assets
├── src/
│   ├── assets/          # Images, fonts, and animations
│   ├── components/      # Reusable React components
│   ├── containers/      # Page sections/containers
│   ├── contexts/        # React contexts (theme, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── portfolio.js     # ⭐ MAIN CONFIG FILE - Edit this!
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json         # Dependencies and scripts
├── fetch.js             # Script to fetch GitHub data
└── README.md            # This file
```

## 🎯 Key Files to Modify

1. **`src/portfolio.js`** - All personal information and content
2. **`src/_globalColor.scss`** - Color theme
3. **`public/index.html`** - Page title and meta tags
4. **`package.json`** - Homepage URL for deployment
5. **`src/assets/images/`** - Replace with your own images

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, React will prompt you to use a different port, or you can specify one:
```bash
PORT=3001 npm start
```

### Build Errors
Clear cache and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
Make sure the `homepage` in `package.json` matches your GitHub Pages URL exactly.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Diletta Calussi**
- Website: [dilettacal.github.io](https://dilettacal.github.io)
- GitHub: [@dilettacal](https://github.com/dilettacal)
- LinkedIn: [@dilettacal](https://www.linkedin.com/in/dilettacal/)

## 🙏 Acknowledgments

- Thanks to all the open-source contributors whose libraries made this project possible
- Lottie animations from [LottieFiles](https://lottiefiles.com/)
- Icons from [Font Awesome](https://fontawesome.com/) and [Simple Icons](https://simpleicons.org/)

## 📜 Credits

### Original DeveloperFolio Project

This portfolio is based on the excellent [DeveloperFolio](https://github.com/saadpasta/developerFolio) template created by **Saad Pasta** and maintained by an amazing community of contributors.

#### Project Maintainers

<table>
  <tr>
    <td align="center"><a href="http://saadpasta.github.io"><img src="https://avatars2.githubusercontent.com/u/23307811?v=4" width="100px;" alt="Saad Pasta"/><br /><sub><b>Saad Pasta</b></sub></a></td>
    <td align="center"><a href="https://github.com/kartikcho"><img src="https://avatars1.githubusercontent.com/u/48270786?v=4" width="100px;" alt="Kartik Choudhary"/><br /><sub><b>Kartik Choudhary</b></sub></a></td>
    <td align="center"><a href="https://github.com/naveen521kk"><img src="https://avatars1.githubusercontent.com/u/49693820?v=4" width="100px;" alt="Naveen M K"/><br /><sub><b>Naveen M K</b></sub></a></td>
    <td align="center"><a href="http://www.muhammadhasham.com"><img src="https://avatars0.githubusercontent.com/u/17927649?v=4" width="100px;" alt="Muhammad Hasham"/><br /><sub><b>Muhammad Hasham</b></sub></a></td>
  </tr>
</table>

#### All Contributors

A huge thank you to all the contributors who have made DeveloperFolio what it is today! 🎉

You can find the complete list of contributors in the [resources/.all-contributorsrc](resources/.all-contributorsrc) file or view the original project at [github.com/saadpasta/developerFolio](https://github.com/saadpasta/developerFolio).

**Special thanks to**:
- **60+ contributors** who have contributed code, documentation, design, and bug reports
- The maintainers for keeping the project alive and well-maintained
- Everyone who has used and shared this template

### My Customizations

This version includes:
- Customized content and personal information
- Enhanced tech stack timeline with expandable details and custom icons
- Modified styling and color schemes
- Additional features for data engineering and AI/ML portfolios
- Custom skill icons and visualizations

### License

This project maintains the original GNU General Public License v3.0 from DeveloperFolio. See the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

If you found this portfolio interesting or inspiring:
- Give a ⭐️ to the [original DeveloperFolio project](https://github.com/saadpasta/developerFolio) - they deserve it!
- Check out the [original template](https://github.com/saadpasta/developerFolio) if you're looking to create your own portfolio

---

**Note**: This is my personal portfolio. While the GPL v3 license allows you to fork this repository, I'm not actively maintaining this as a template for others. If you're looking for a portfolio template, I highly recommend using the [original DeveloperFolio project](https://github.com/saadpasta/developerFolio) instead, which is actively maintained and has better documentation for template users.

