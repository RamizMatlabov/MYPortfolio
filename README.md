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
- **Firebase** - Backend for contact form submissions
- **Firestore** - Database for storing contact messages
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

3. **Set up Firebase (for Contact Form):**
   
   a. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   
   b. Enable Firestore Database:
      - Go to Firestore Database in Firebase Console
      - Click "Create database"
      - Start in test mode (for development)
      - Choose your preferred location
   
   c. Get your Firebase configuration:
      - Go to Project Settings > Your apps
      - Click on the Web app icon (`</>`) to add a web app
      - Copy your Firebase configuration
   
   d. Create a `.env.local` file in the root directory:
      ```env
      NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
      ```
   
   e. Replace the values with your actual Firebase configuration
   
   f. **Настройка правил безопасности Firestore (обязательно для продакшена):**
      - Откройте [Firebase Console](https://console.firebase.google.com/)
      - Перейдите в **Firestore Database → Rules**
      - Скопируйте содержимое файла `firestore.rules` из корня проекта
      - Вставьте правила в редактор и нажмите **"Publish"**
      - ⚠️ Без этого контактная форма не будет работать в продакшене!

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
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
- **Contact Form**: 
  - Name, Email, and Message fields
  - Form submissions saved to Firebase Firestore
  - Success/error notifications
  - Form validation
- **Social media links**:
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

## 🔥 Firebase Contact Form

The contact form uses Firebase Firestore to store form submissions. To view submitted messages:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to Firestore Database
4. You'll see a collection named `contacts` with all form submissions
5. Each document contains:
   - `name` - Sender's name
   - `email` - Sender's email
   - `message` - Message content
   - `timestamp` - Submission time

**Security Note**: Make sure to set up proper Firestore security rules before deploying to production!

### ⚠️ Важно: Настройка правил безопасности Firestore

**Для работы контактной формы на Vercel необходимо:**

1. **Настроить правила безопасности Firestore:**
   - Откройте [Firebase Console](https://console.firebase.google.com/)
   - Перейдите в **Firestore Database → Rules**
   - Скопируйте правила из файла `firestore.rules` в корне проекта
   - Вставьте и опубликуйте правила (кнопка **"Publish"**)

2. **Добавить переменные окружения в Vercel:**
   - Перейдите в настройки проекта Vercel: **Settings → Environment Variables**
   - Добавьте все переменные Firebase с префиксом `NEXT_PUBLIC_`
   - Выполните новый деплой после добавления переменных

📖 **Подробная инструкция:** См. [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. **ВАЖНО:** Добавьте переменные окружения Firebase в настройках проекта (см. [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md))
4. Настройте правила безопасности Firestore (см. файл `firestore.rules` и [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md))
5. Deploy with one click

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
