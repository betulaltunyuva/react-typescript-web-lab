<div align="center">

# 🌐 React TypeScript Web Lab

### Responsive Portfolio Interface Built with React, TypeScript, Vite, and Tailwind CSS

This project demonstrates responsive design, reusable components, project filtering, form validation, and accessible interface development.

<br>

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Accessibility](https://img.shields.io/badge/Lighthouse_Accessibility-93-22C55E?style=for-the-badge)

</div>

---

## 📖 About

React TypeScript Web Lab is a responsive portfolio-style web application developed as part of a university web design and programming course.

The project demonstrates modern frontend development practices using React, TypeScript, Vite, and Tailwind CSS. It includes reusable components, responsive navigation, project filtering, sorting, form validation, semantic HTML, and accessibility-focused interface elements.

---

## ✨ Key Features

- Responsive mobile-first layout
- Reusable React components
- Type-safe development with TypeScript
- Project search and category filtering
- Project sorting by year and title
- Real GitHub project information
- External repository links
- Demonstration contact form
- Client-side form validation
- Loading, success, error, and empty states
- Keyboard-accessible navigation
- Semantic HTML structure
- Light and dark interface styles

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| React 19 | User-interface development |
| TypeScript 5.9 | Static type checking |
| Vite 7 | Development server and build tool |
| Tailwind CSS 4 | Utility-based styling |
| React Router | Routing support |
| ESLint | Code-quality checks |
| JSON | Local project data source |

---

## 📁 Project Structure

```text
react-typescript-web-lab/
├── public/
│   └── data/
│       └── projects.json
│
├── src/
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── CSS-DECISIONS.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/betulaltunyuva/react-typescript-web-lab.git
cd react-typescript-web-lab
```

### 2. Install the Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local address displayed in the terminal.

---

## 📜 Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run lint` | Runs ESLint checks |
| `npm run preview` | Previews the production build |

---

## 🔍 Project Filtering

Project information is loaded from:

```text
public/data/projects.json
```

Users can:

- Search by title, description, technology, or category
- Filter projects by category
- Sort projects by year or title
- Open the associated GitHub repository

---

## 📝 Contact Form

The contact form demonstrates:

- Required-field validation
- Email-format validation
- Minimum character validation
- Loading and success states
- Accessible labels and error messages

The form is a frontend demonstration and does not send messages to a backend service.

---

## ♿ Accessibility

The project includes:

- Semantic HTML elements
- Form labels
- ARIA attributes
- Keyboard-accessible navigation
- A skip-to-content link
- Visible focus states
- Responsive text and layouts

A Lighthouse accessibility score of **93** was recorded during project testing.

---

## 📐 CSS Decisions

Detailed information about breakpoints, layout choices, design tokens, and the responsive strategy is available in:

[CSS Decisions](CSS-DECISIONS.md)

---

## 🔮 Future Improvements

- Add a functional contact-form backend
- Add automated component tests
- Add individual project detail pages
- Add deployment configuration
- Improve dark-mode controls
- Add custom project images
- Improve Lighthouse performance metrics

---

## 👩‍💻 Author

**Betül Altunyuva**

Software Engineering Student

[GitHub Profile](https://github.com/betulaltunyuva)

---

<div align="center">

Developed for frontend learning and responsive web development practice.

⭐ If you find the project useful, consider giving it a star.

</div>
