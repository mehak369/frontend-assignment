Software Engineer Portfolio – React Implementation
📖 Project Overview

This project is a responsive personal portfolio website developed using React.js by converting a provided Figma design into a pixel-accurate UI.

The goal of this assignment was to demonstrate:

Strong understanding of React component architecture

Ability to translate Figma designs into real UI

Writing clean, maintainable external CSS

Following specific technical and semantic instructions

The application showcases sections such as:

Hero / Header

About Me

Recent Case Studies

Testimonials

Professional Experience

Education

Skills

Contact Form

🛠 Tech Stack

Frontend: React.js (Functional Components)

Styling: External CSS (No Tailwind, No inline styles)

Build Tool: Vite

Deployment: Vercel / Netlify

Version Control: Git & GitHub

📂 Project Structure

The project follows a modular and scalable folder structure, where each component has its own CSS file to ensure better maintainability.

src/
 ├── components/
 │   ├── Header/
 │   ├── About/
 │   ├── RecentCases/
 │   ├── Testimonials/
 │   ├── Experience/
 │   ├── Education/
 │   ├── Skills/
 │   └── Contact/
 │
 ├── pages/
 │   └── Home/
 │
 ├── assets/
 │   ├── images/
 │   └── icons/
 │
 ├── App.jsx
 └── main.jsx

🎨 Design Implementation Details

The UI is built by closely following the provided Figma design

Layout, spacing, colors, and visual hierarchy were carefully matched

Dark theme with blue accent colors is consistently applied

The website is fully responsive across desktop, tablet, and mobile screens

🧾 HTML & Accessibility Rules Followed

As per the assignment instructions:

The main heading is placed inside the <h1> tag in the Header component

All other section titles use <h2> or <h3>

All descriptive text content is placed inside <div> tags

Semantic consistency is maintained throughout the project

🎯 CSS Guidelines Followed

External CSS only (No Tailwind, No styled-components, No inline CSS)

Separate CSS file for each component

All CSS class names are prefixed to avoid style conflicts
Example:

growthzi_portfolio-header
growthzi_portfolio-about
growthzi_portfolio-skills

🖼 Images & Icons

Sample images are used where required (profile, projects, skills)

Social media icons (Instagram, LinkedIn, Email) are implemented using SVG icons

Icons visually match the design and are styled consistently via CSS

📱 Responsiveness

The layout adapts smoothly across different screen sizes

Flexbox and media queries are used for responsive behavior

Mobile view maintains readability and proper spacing

🚀 Deployment

The project is deployed on a public hosting platform for easy access and review.

🔗 Live Demo:
👉 (Add your deployed Vercel / Netlify link here)

▶️ How to Run Locally

Clone the repository

git clone https://github.com/your-username/your-repo-name.git


Navigate to the project directory

cd your-repo-name


Install dependencies

npm install


Start the development server

npm run dev

✅ Key Highlights

Pixel-accurate Figma to React conversion

Clean component-based architecture

External, maintainable CSS

Fully responsive layout

Clear and readable code structure
