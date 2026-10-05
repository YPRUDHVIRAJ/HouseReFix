# HouseRefix Website

A responsive React and TypeScript website for HouseReFix cleaning services in Madanapalle. The booking form opens WhatsApp with the customer's booking details prefilled to the HouseReFix business number.

## Local development

For the frontend only:

```sh
npm install
npm run dev
```

When a visitor submits the form, WhatsApp opens to HouseReFix at `+91 9492507909` with the name, contact details, chosen service, date, and notes in a draft message. The visitor must tap **Send** in WhatsApp to deliver it. No SMS API key or backend is required. The number is configured in the `wa.me` link in `src/App.tsx`.

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
