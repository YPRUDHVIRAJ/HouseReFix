# HouseRefix Website

A responsive React and TypeScript website for HouseReFix cleaning services in Madanapalle. The booking form opens WhatsApp with the customer's booking details prefilled to the HouseReFix business number.

## Cleaning service pages

Select **Our services** in the site navigation to browse the service directory. Each service has its own page under `/services/`, with details and a booking link that preselects that service in the booking form. The `/services` directory and service routes are rewritten to the Vite app entry point by Vercel so direct visits and page refreshes work.

## Recent work videos

The homepage **Videos** section presents recent cleaning-work clips in a horizontally scrollable flex gallery. Videos are user-initiated and use `preload="none"` so they do not download until a visitor chooses to play them. Keep optimized MP4s in `public/ads video/`; preserve large camera originals outside `public` so they are not included in website deployments. The section also links to the HouseReFix Instagram page.

## Local development

For the frontend only:

```sh
npm install
npm run dev
```

The booking form collects a name, phone number, service, area/locality, preferred date and time, and optional service details. Submitting opens WhatsApp to HouseReFix at `+91 9492507909` with those details in a draft message; the visitor must tap **Send** in WhatsApp to deliver it. Visitors can also call or message the number directly. The homepage includes FAQs about service areas, scope, preparation, booking, pricing, and payment. No SMS API key or backend is required. The WhatsApp number is configured in `src/App.tsx`.

## Checks

```sh
npm run lint
npm run build
```

## Deploy to Vercel and connect houserefix.in

1. Push this project to a GitHub repository and import that repository in Vercel. The Vite defaults are `npm run build` and `dist` as the output directory.
2. Deploy once to get a working Vercel URL.
3. In Vercel, open the project settings, add `houserefix.in` and `www.houserefix.in` under Domains, and follow the DNS records Vercel displays.
4. At the domain registrar where `houserefix.in` was purchased, add those exact DNS records. Avoid replacing existing mail-related MX/TXT records unless you intend to change email service.
5. Wait for DNS verification and HTTPS certificate provisioning in Vercel. Choose one hostname as primary and redirect the other to it.

Domain registration and DNS changes must be completed by someone with access to the registrar account. Do not share registrar passwords or verification codes in chat.
