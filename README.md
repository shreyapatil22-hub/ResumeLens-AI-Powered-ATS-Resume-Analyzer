# ResumeLens — AI Resume Analyzer

A portfolio-ready full-stack app that scores PDF resumes for ATS compatibility and generates focused, actionable feedback. Users can securely create an account, upload a resume, review analytics, and download an AI report.

## Highlights

- JWT authentication with protected dashboard routes
- PDF-only upload validation and text extraction with `pdf-parse`
- Gemini-powered ATS score, role match, skills gap, keywords, grammar review, and suggestions
- Persisted analysis history in MongoDB
- Recharts dashboard and printable downloadable report
- Responsive Next.js + TypeScript + Tailwind interface

## Project structure

```
apps/web  → Next.js frontend (deploy to Vercel)
apps/api  → Express API (deploy to Render)
```

## Run locally

1. Install Node.js 20+ and create a free MongoDB Atlas cluster and Gemini API key.
2. Copy the environment templates:

```bash
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/web/.env.local.example apps/web/.env.local
npm install
npm run dev
```

3. Open `http://localhost:3000`. The API runs on port 5000.

### Environment variables

`apps/api/.env`

```env
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=use-a-long-random-secret-at-least-32-characters
GEMINI_API_KEY=your-google-ai-studio-key
CLIENT_URL=http://localhost:3000
```

`apps/web/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Deploy

**MongoDB Atlas:** create a database user and allow access from your hosting providers (or restrict IPs once known). Put its connection string in `MONGODB_URI`.

**Render (API):** create a Node Web Service from this repo. Set root directory to `apps/api`, build command `npm install && npm run build`, start command `npm start`, then add the API environment variables. Set `CLIENT_URL` to the deployed Vercel URL.

**Vercel (web):** import the repo, set root directory to `apps/web`, and add `NEXT_PUBLIC_API_URL=https://your-render-service.onrender.com/api`. Redeploy after changing it.

## Professional talking points

- Designed an end-to-end AI SaaS workflow with secure authentication, file validation, LLM structured-output parsing, and persistent user data.
- Built an ATS-oriented scoring engine that combines deterministic heuristics with Gemini feedback, making outputs explainable and reliable.
- Shipped a responsive analytics dashboard and exportable reports, with a deployment architecture spanning Vercel, Render, and MongoDB Atlas.

> The AI output is guidance, not a hiring decision. Avoid uploading personal identifiers or confidential information when demoing the project.
