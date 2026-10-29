# Stonearm Landscaping — website

A one-page website for **Stonearm Landscaping**, a landscaping, hardscaping and
property care company in Langley, BC. It is built with [Astro](https://astro.build),
which turns the files in `src/` into a plain, fast HTML page.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads when you save a file.

To make the final version that goes online: `npm run build` (output goes to `dist/`).

## Where to change things

| What you want to change | File |
| --- | --- |
| Text, services, phone/email, gallery captions, which photo goes where | `src/data/site.js` |
| The photos themselves | `public/images/` |
| Colours, fonts, sizes, spacing | `src/styles/global.css` (colours are at the top) |
| Page layout / sections | `src/pages/index.astro` |

Most edits only need `src/data/site.js`.

**Swapping a photo:** put the new file in `public/images/`, then change its file name
(and its width/height) near the top of `src/data/site.js`. Keep photos under about
500 KB so the page stays fast (export as JPEG, around 1600–2000 px wide).

## Put it online (Vercel)

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and pick this repository.
3. Vercel detects **Astro** automatically. Keep the default settings and click **Deploy**.
4. Every time you push to the `main` branch, Vercel updates the live site.

## Hook up the quote form

The form currently only shows a thank-you message; it does not send anything yet.

1. Create a free form at https://formspree.io and copy its URL (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `src/data/site.js`.
3. Commit and push. Quote requests now arrive in your email.

## Open items before launch

- **Phone number and email are missing.** Get them from the client and fill in
  `phone` and `email` in `src/data/site.js`; they then show in the quote section.
- **Quote form** needs a Formspree URL (see above).
- **Domain:** change `site: 'https://example.com'` in `astro.config.mjs` to the real
  domain (used for search engines and link previews).
- Content only uses what Stonearm lists publicly. Don't add reviews, stats or
  years in business unless the client provides them.

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

- See the history: `git log --oneline`
- Undo one commit (makes a new commit that reverses it, safe to push):

```bash
git revert <commit-id>
```
