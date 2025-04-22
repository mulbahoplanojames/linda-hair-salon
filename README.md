# Linda Hair Salon ✂️💇‍♀️

> The digital front desk for a modern beauty experience. Book appointments, explore services and products, and connect with top stylists—all in one place.

![Build](https://img.shields.io/github/actions/workflow/status/username/project/build.yml)
![License](https://img.shields.io/github/license/username/project)
![Version](https://img.shields.io/github/package-json/v/username/project)
![Tech Stack](https://img.shields.io/badge/Next.js-v15-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## About

Linda Hair Salon is a full-featured web application designed for salons and beauty businesses seeking to modernize their client experience.

It allows customers to:

- Browse a rich catalog of hair and beauty services, complete with images, descriptions, and pricing.
- Book appointments online, choosing preferred services, stylists, and times.
- Shop for professional hair products directly from the salon.
- Explore stylists, try new looks virtually, and get personalized recommendations.
- Contact the salon, ask questions, and get quick support.

**Who is it for?**

- Salon owners and managers who want a digital presence and smoother operations.
- Clients who want the convenience of online booking and service discovery.
- Developers looking for a modern Next.js/Tailwind/TypeScript reference app.

**Why does it exist?**  
To bridge the gap between traditional salons and today’s digital-first customers, improving both business efficiency and customer satisfaction.

---

## Features

- 🗓️ **Online Appointment Booking:**  
  Schedule appointments with real-time availability and service selection.
- 💇 **Service Catalog:**  
  Detailed pages for each service, including duration, pricing, and stylist specialties.
- 🛒 **Product Catalog & Checkout:**  
  Browse, search, and purchase salon-quality products online.
- 🧑‍🎨 **Stylist Finder & Virtual Try-On:**  
  Match with stylists based on your preferences or experiment with virtual hairstyles before booking.
- 📞 **Contact & FAQ:**  
  Integrated contact forms, location map, and a dynamic FAQ section.
- ⭐ **Testimonials & Reviews:**  
  Showcase real customer feedback to build trust and credibility.
- 📱 **Mobile-First & Responsive:**  
  Seamless experience on any device, from desktop to smartphone.
- ⚡ **Modern Animations:**  
  Subtle, professional motion effects for engaging UI.
- 🔒 **Accessible & Inclusive:**  
  Built with accessibility in mind, using semantic HTML and best practices.

---

## Screenshots

![Home](./public/bg_1.jpg)
![Service Gallery](./public/bg_2.jpg)
![Bridal Services](./public/bridal.jpg)
![Booking](./public/balayage.jpg)

### Live Demo

_A live demo will be available soon. Stay tuned for deployment updates!_

---

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/) (v15) — App directory, file-based routing, SSR/SSG
  - [React](https://reactjs.org/) (v19)
  - [TypeScript](https://www.typescriptlang.org/) (v5)
  - [Tailwind CSS](https://tailwindcss.com/) (v4)
  - [Radix UI](https://www.radix-ui.com/) — Accessible UI primitives
- **State & Forms:**
  - React Hook Form, Zod (schema validation)
- **UI & Animation:**
  - Lucide React (icons), Framer Motion, tw-animate-css
- **Other:**
  - PostCSS, ESLint, pnpm
- **Backend:**
  - _No backend API included yet; forms simulate API calls (easy to connect to the backend)._
- **Cloud/Media:**
  - Cloudinary-ready for images (see `next.config.ts`)

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- pnpm (recommended), or npm/yarn

### Installation

```bash
git clone [https://github.com/username/project.git](https://github.com/username/project.git)
cd project
pnpm install
pnpm dev
```

## Usage

- **Booking an Appointment:**
  - Go to the Booking page.
  - Select your service, stylist, date, and time.
  - Submit the form to reserve your slot.
- **Exploring Services & Products:**
  - Browse the Services and Products sections.
  - Click on any item for more details.
  - Add products to your cart and proceed to checkout.
- **Stylist Finder & Virtual Try-On:**
  - Use the Stylist Finder quiz to get matched with the right professional.
  - Try new looks virtually before booking.
- **Contacting the Salon:**
  - Fill out the contact form for inquiries.
  - Check the FAQ for quick answers.

---

## API Reference

This project does not include a backend API yet. All forms are currently mocked for demo purposes.
In future updates, to connect to a real backend, i will include the simulated API calls in the booking, checkout, and contact forms with your endpoints.

---

## Contributing

We welcome contributions of all kinds—bug fixes, new features, UI improvements, and documentation!

### How to contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request and describe your changes.

### Guidelines:

- Follow the code style and linting rules (pnpm lint).
- Write clear commit messages.
- Add tests or screenshots where relevant.
- For major changes, open an issue first to discuss your proposal

---

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework used for building the application.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs.
- [TypeScript](https://www.typescriptlang.org/) - A programming language that adds static types to JavaScript.
- [React Hook Form](https://react-hook-form.com/) - A form management library for React.
- [Zod](https://github.com/colinhacks/zod) - A TypeScript-first schema description language and data validator.
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
- [Lucide React](https://lucide.dev/react) - A collection of free and open-source icons for React.
- [ShadCN UI](https://ui.shadcn.com/) - A collection of accessible and customizable components for React.
- [Cloudinary](https://cloudinary.com/) - A cloud-based image and video management platform.
