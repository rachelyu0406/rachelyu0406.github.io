# Rachel Yu — Portfolio

Personal portfolio site showcasing my work in software engineering, hardware, and art.

**Live site:** [rachelyu0406.github.io](https://rachelyu0406.github.io)

## About

I am a Duke University student studying Electrical & Computer Engineering and Computer Science. This site serves as my primary portfolio for software engineering recruiting, with sections for professional experience, technical projects, hardware builds, and creative work.

Built with React 19 and Vite, deployed to GitHub Pages via GitHub Actions.

## Tech stack

- React 19, Vite 8, React Router
- Material UI 9, React Bootstrap 5
- GitHub Pages, GitHub Actions

## Local development

```sh
npm install
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

To build and preview for production:

```sh
npm run build
npm run preview
```

## Site structure

| Route | Description |
| --- | --- |
| `/` | Homepage — intro, about, experience, art |
| `/art` | Art gallery |
| `/hardware/:projectId` | Hardware project logs (`pc`, `led-bracelet`, `grass-cyberdeck`) |

## Deployment

Pushes to `main` trigger an automated build and deploy to GitHub Pages through `.github/workflows/deploy.yml`.

## Contact

- **Email:** rachelyu0406@gmail.com
- **LinkedIn:** [linkedin.com/in/rachelyu0624](https://www.linkedin.com/in/rachelyu0624/)
- **GitHub:** [github.com/rachelyu0406](https://github.com/rachelyu0406)
