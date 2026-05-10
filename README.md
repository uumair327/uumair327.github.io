# uumair327.github.io & umairansari.in 🚀

[![Next.js](https://img.shields.io/badge/Next.js-13.5.11-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Welcome to the open-source repository for my personal portfolio and blog site, available at [uumair327.github.io](https://uumair327.github.io) and [umairansari.in](https://umairansari.in). 

This project is built using modern web technologies focusing on performance, SEO, and aesthetics.

## ✨ Features
- **Next.js 13** with static export (`output: 'export'`)
- **Contentlayer** for type-safe Markdown/MDX processing
- **Emotion** & **TailwindCSS** for styling
- **Fully Responsive & Dark Mode** support
- **Automated CI/CD** using GitHub Actions

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or v20 recommended)
- `npm` (or `yarn`/`pnpm`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uumair327/uumair327.github.io.git
   cd uumair327.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
To generate a production build:
```bash
npm run build
```
This will generate the static files in the `docs/` directory (as configured in `next.config.js`).

## 🌐 Domains & Hosting
This project is configured to be hosted across multiple providers:
- **GitHub Pages**: Automatically deployed via GitHub Actions (`.github/workflows/deploy.yml`).
- **Custom Domain**: Integrated with Vercel/Netlify for `umairansari.in`.

*(If you are setting this up for your own custom domain on GitHub Pages, make sure to add a `CNAME` file in the `public/` directory containing your domain name.)*

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 
Please check the [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
