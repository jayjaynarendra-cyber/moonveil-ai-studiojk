# MOONVEIL AI STUDIO — starter project

This is a responsive, installable PWA front-end starter. It is **not yet a production AI video service**.

## Included
- Responsive dark cinematic interface for desktop and mobile
- Text-to-video / image-to-video UI
- PWA manifest and service worker
- Credit, account, history and admin UI placeholders

## Before public launch
1. Create a Supabase project and configure email authentication, database tables, row-level security and storage.
2. Add a Cloudflare Pages Function that verifies the signed-in user, checks and reserves credits server-side, calls your chosen video-generation provider, records task status, and refunds credits on failed jobs.
3. Configure a payment provider (for India, evaluate Razorpay). Verify payment webhooks server-side before adding credits.
4. Add admin role protection, abuse prevention, rate limits, content moderation, privacy policy, terms, refund policy and support contact.
5. Set environment variables in Cloudflare Pages project settings. Never put secret API keys in browser JavaScript or commit them to GitHub.

## Deploy on Cloudflare Pages
1. Create a GitHub repository named `moonveil-ai-studio`.
2. Upload all files and folders from this ZIP to the repository root.
3. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Authorize GitHub and select `moonveil-ai-studio`.
5. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (project root).
6. Click **Save and Deploy**. Cloudflare will assign a `*.pages.dev` URL after a successful deployment.

## PWA installation
- Android Chrome: open the deployed URL → browser menu → Install app / Add to Home screen.
- iPhone Safari: open URL → Share → Add to Home Screen.
- Windows: open in Edge or Chrome → install icon / Apps → Install this site as an app.

## Important
Do not accept payments or promise video generation until the backend, payment verification, credits ledger and provider integration are implemented and tested. Free hosting does not include free video-generation compute.
