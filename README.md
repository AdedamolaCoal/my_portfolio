# Adedamola's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, professional design, and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Performance Optimized**: Fast loading times and smooth scrolling

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/AdedamolaCoal/my_portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🎨 Customization

### Personal Information

Update your personal information in the following components:

#### 1. Header (`src/components/Header.tsx`)

- Change the name "Adedamola" to your name
- Update navigation links if needed

#### 2. Hero Section (`src/components/Hero.tsx`)

- Update the name and title
- Modify the description text
- Add your actual social media links
- Replace the placeholder profile image with your photo

#### 3. About Section (`src/components/About.tsx`)

- Update the experience years and stats
- Modify the about text to reflect your background
- Update the skills list with your technologies

#### 4. Projects Section (`src/components/Projects.tsx`)

- Replace the sample projects with your actual projects
- Update project descriptions, technologies, and links
- Add real GitHub and live demo links

#### 5. Contact Section (`src/components/Contact.tsx`)

- Update email, phone, and location information
- Add your actual social media links
- Configure the contact form to work with your backend

#### 6. Footer (`src/components/Footer.tsx`)

- Update contact information
- Add your actual social media links

### Profile Image

To add your profile image:

1. Place your image in the `src/assets/` directory
2. Import it in the Hero component:

```tsx
import profileImage from "../assets/your-image.jpg";
```

3. Replace the placeholder div with:

```tsx
<img
  src={profileImage}
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

### Color Scheme

The portfolio uses a blue-purple gradient theme. To change colors:

1. Update the gradient classes in components (e.g., `from-blue-600 to-purple-600`)
2. Modify the primary color classes (`bg-blue-600`, `text-blue-600`, etc.)
3. Update the background gradients in the Hero section

### Animations

The portfolio uses Framer Motion for animations. You can:

1. Adjust animation durations and delays in the `transition` props
2. Modify animation types (fade, slide, scale, etc.)
3. Add new animations by importing from Framer Motion

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive grid layouts
- Touch-friendly interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

If you have any questions or need help customizing the portfolio, feel free to reach out!

**Note**: Remember to replace all placeholder content (email, phone, social links, projects) with your actual information before deploying.
