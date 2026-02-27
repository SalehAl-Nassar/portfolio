# Saleh Al Nassar — Portfolio Website

A beautiful, responsive portfolio website built with **pure HTML, CSS, and JavaScript**. No frameworks, no build tools — just clean, semantic code.

## 📁 Files

- **index.html** — Main HTML file with all sections (Hero, Education, Experience, Projects, Skills, Contact)
- **styles.css** — Complete styling with Bauhaus Minimalism design, responsive layout, and animations
- **script.js** — Vanilla JavaScript for navigation, smooth scrolling, and form handling

## 🎨 Design Features

- **Bauhaus Minimalism** — Off-white background, deep navy text, terracotta accents
- **Typography** — Playfair Display (headings), DM Sans (body), DM Mono (labels)
- **Responsive** — Mobile-first design that works on all devices
- **Smooth Animations** — Fade-up scroll animations and hover effects
- **Accessibility** — Semantic HTML, keyboard navigation, proper contrast ratios

## 🚀 How to Use

### Option 1: Local Development
```bash
cd portfolio-static
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Option 2: Deploy to GitHub Pages
1. Create a new GitHub repository named `portfolio`
2. Push these files to the repository
3. Go to **Settings → Pages**
4. Select **Deploy from a branch** and choose `main` branch
5. Your portfolio will be live at `https://yourusername.github.io/portfolio`

### Option 3: Deploy to Any Web Host
Simply upload the three files (index.html, styles.css, script.js) to your web hosting provider's public directory.

## 📝 Customization

### Update Your Information
Edit `index.html` and replace:
- Your name, email, phone number
- Education details
- Work experience
- Projects and descriptions
- Skills
- Social media links

### Change Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
  --bg-light: #f7f4ef;        /* Background color */
  --text-dark: #1a1a2e;       /* Text color */
  --accent: #c85a3a;          /* Accent color (terracotta) */
  /* ... more variables ... */
}
```

### Modify Fonts
Google Fonts are already imported. To change fonts, update the `<link>` tag in `index.html` and modify the `font-family` properties in `styles.css`.

## ✨ Features

✅ Smooth navigation with scroll-to-section functionality  
✅ Mobile hamburger menu  
✅ Fade-up animations on scroll  
✅ Contact form that opens email client  
✅ Fully responsive (mobile, tablet, desktop)  
✅ No dependencies or build tools required  
✅ Fast loading times  
✅ SEO-friendly structure  

## 🔗 Links

- **GitHub** — https://github.com/SalehAl-Nassar
- **LinkedIn** — https://www.linkedin.com/in/saleh-al-nassar
- **Email** — salehalnassar456@gmail.com

## 📄 License

Free to use and modify for personal or commercial projects.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
