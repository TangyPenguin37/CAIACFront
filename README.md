This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



Joe-Joe's notes for Sam:

The only real issue is that there is currently a problem trying to build 'NPM Build/PNPM Build' (next build).

the problem is that it doesn't like me using localStorage in /UserPage.js to access current user's details, because this isn't available in the server phase.
/UserPage.js is marked at the top of the file code as "Use Client", which should tell the server to leave it for when the client-side, but for some reason 
it's not doing that. ATM, I can NPM/PNPM start/dev without first building, and get it to launch in my localhost. But I'm not sure whether that'll work for you.

All of the database calls are to the strapi backend (CAIACBackend), which i've hosted at port 1337. So, you either need to launch Strapi backend at that port
or update all the endpoint urls in CAIACFront to use whichever port you want.

some of the UI is quite basic, but can quickly be changed, just waiting to hear from Charlie what they want + I'll reach out to Krishna for what brand materials they have. 


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# CAIACFront
