# Fullstack Developer Portfolio

A modern, responsive portfolio website built with Next.js and SCSS. Features a dark theme, smooth animations, and a professional design showcasing skills, projects, and contact information.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Built with Next.js for optimal performance
- **Clean Architecture**: Modular component structure for easy maintenance
- **Smooth Animations**: Fade-in and slide-in animations for better UX

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.scss
│   │   ├── Section/
│   │   │   ├── Section.jsx
│   │   │   └── Section.module.scss
│   │   ├── SkillCard/
│   │   │   ├── SkillCard.jsx
│   │   │   └── SkillCard.module.scss
│   │   └── ProjectCard/
│   │       ├── ProjectCard.jsx
│   │       └── ProjectCard.module.scss
│   ├── favicon.ico
│   ├── globals.scss          # Global styles and theme variables
│   ├── layout.jsx            # Root layout with metadata
│   ├── page.jsx              # Main page component
│   └── page.module.scss      # Main page styles
├── public/                   # Static assets
├── package.json
├── next.config.js
└── README.md
```

## 🛠️ Technologies Used

- **Next.js 16.1.1** - React framework
- **React 19.2.3** - UI library
- **SCSS** - Styling with modules
- **Inter & JetBrains Mono** - Modern fonts

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit `app/page.jsx` to customize:

- **About Me section**: Update the description text
- **Skills**: Modify the `skills` array
- **Projects**: Update the `projects` array with your actual projects
- **Contact Links**: Update the `contactLinks` array with your social media profiles

### Change Colors and Theme

Edit `app/globals.scss` to customize:

- Color variables (lines 5-20)
- Gradients (lines 22-24)
- Spacing (lines 26-32)
- Typography (lines 34-35)

### Update Metadata

Edit `app/layout.jsx` to customize:

- Page title
- Meta description
- Open Graph tags
- Keywords

## 📱 Sections

### 1. Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Animated code block

### 2. About Me
- Professional description
- Personal branding

### 3. Skills
- Grid layout with skill cards
- Icons and hover effects

### 4. Projects
- Project showcase with:
  - Title and description
  - Tech stack tags
  - GitHub and Live Demo links

### 5. Contact
- Social media links:
  - Email
  - GitHub
  - Telegram
  - Instagram
  - Upwork
  - Kwork

## 🎯 Component Details

### Header Component
- Fixed navigation bar
- Smooth scroll to sections
- Transparent background with blur effect
- Responsive menu

### Section Component
- Reusable section wrapper
- Consistent spacing and typography
- Gradient text effects

### SkillCard Component
- Individual skill display
- Hover animations
- Icon support

### ProjectCard Component
- Project information display
- Tech stack tags
- External links (GitHub, Live Demo)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

For questions or issues, please open an issue on GitHub or contact through the portfolio's contact section.

---

**Built with ❤️ using Next.js and SCSS**
