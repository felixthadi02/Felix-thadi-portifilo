# Felix Thadi - Digital Marketing Portfolio

Portfolio website for [Felix Thadi](https://felix-thadi-portifilo.vercel.app/) — a Digital Marketing Expert and Digital Marketing Specialist in Hyderabad, India.

Felix works across SEO, Google Ads, Meta Ads, social media marketing, lead generation, analytics, app monetization, AdMob, AppLovin, content strategy, and performance marketing.

Live website: https://felix-thadi-portifilo.vercel.app/

LinkedIn: https://www.linkedin.com/in/thadifelix/

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The generated `dist` folder can be deployed to Firebase Hosting, Netlify, Vercel, or any static host.

## Upload to GitHub

First extract the provided ZIP. Upload the **files inside the extracted folder**, not the ZIP file itself. GitHub must show `package.json`, `index.html`, `vercel.json`, `src`, and `public` directly at the repository root.

Do not upload `node_modules` or `dist`; they are generated automatically and are already excluded by `.gitignore`.

After cloning the repository on another computer:

```bash
npm install
npm run dev
```

The old reference project's Firebase connection files are intentionally excluded. Connect your own Firebase project before deploying with Firebase Hosting.

## Deploy to Vercel

Import the GitHub repository and keep the project root as `./`. Vercel will read `vercel.json` and use:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

If Vercel was previously connected while the repository contained only a ZIP file, upload the extracted project files, then open **Deployments** and choose **Redeploy**.
