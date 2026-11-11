# Chapel Cosmetics website

Static site for [chapelcosmetics.com](https://chapelcosmetics.com), built with [Astro](https://astro.build) and deployed on Vercel.

## Editing content

Almost everything you'd want to change lives in **`src/data/site.ts`**:

- phone, email, address, Instagram
- opening hours
- treatment names, concerns and prices
- booking link (`bookingUrl`), booking embed (`bookingEmbedUrl`) and gift card link (`giftCardUrl`)
- testimonials

Photos: drop images into `public/images/` and pass `src="/images/your-photo.jpg"` to the `<Photo>` component on the page. Without a `src`, a blush placeholder shows.

## Local development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

## Deploying

Vercel builds every push to `main` automatically (framework preset: Astro). Old Showit URLs are redirected in `vercel.json`.

## Compliance note

The TGA doesn't allow advertising of prescription (Schedule 4) cosmetic medicines. Only list laser and IPL prices; injectables stay as "contact us".
