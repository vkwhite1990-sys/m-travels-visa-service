# M TRAVEL'S Visa Service

A mobile-first Next.js visa guidance website. It provides educational, step-by-step information and routes enquiries to the M TRAVEL'S team.

## Important security notes
- No passwords, API keys, SMTP credentials, or admin credentials belong in frontend code or Git.
- Copy `.env.example` to `.env.local` and configure secrets only in your local/hosting secret manager.
- The contact API validates input server-side and includes a honeypot field; add reCAPTCHA or a managed email provider before production.
- Replace placeholder domains and emails before deployment.

## Run locally
```bash
npm install
npm run dev
```

## Production checklist
1. Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain.
2. Configure server-side SMTP or a transactional email provider.
3. Add analytics only after cookie consent.
4. Test forms, links, mobile layouts, contrast, sitemap and robots output.
5. Run `npm run build` before deployment.
