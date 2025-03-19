![image](https://github.com/user-attachments/assets/5680b68c-c38a-4839-a723-5ef736573d10)![image](https://github.com/user-attachments/assets/de08606d-9651-47a5-946e-0d21b18104a4)This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

 Features
1️⃣ Project Setup
    ✅ Built with Next.js 14 using the App Router.
    ✅ Uses TypeScript for type safety.
    ✅ Styled with Tailwind CSS for a modern UI.
2️⃣ Authentication
    🔑 Implements Login & Register using JWT-based authentication.
    🔐 Stores user authentication state in cookies.
    🚫 Restricts access to main features for logged-in users only.
3️⃣ Movie Listing Page
    🎬 Fetches movies from TMDB API (TMDB API).
    🖼️ Displays poster, title, and rating for each movie.
    🔄 Supports pagination .
4️⃣ Search Functionality
  🔍 Includes a search bar for movie lookup.

5️⃣ Movie Detail Page
    📌 Clicking a movie navigates to a detailed page (/movie/[id]).
    📖 Displays title, description, rating, release date, and more.
6️⃣ Favorite Movies Feature
    ❤️ Allows users to add/remove movies from favorites.
    💾 Stores favorite movies in localStorage.
📜 Includes a "My Favorites" page for saved movies.
    ⚡ Performance Enhancements
    🚀 Uses Next.js Image Optimization (next/image).
Implemented server-side rendering (SSR) where applicable.
Add dark mode support using Tailwind's dark mode.

 Iam using mongodb for storing login credentials

Light mode
![image](https://github.com/user-attachments/assets/fdbeeccb-7f2e-48bb-8640-af69d24e1f55)

Dark mode
![image](https://github.com/user-attachments/assets/40784f72-f0d9-4fd7-9afb-902221bd7c9a)

Register page
![image](https://github.com/user-attachments/assets/0e450973-d657-4be7-8651-91a2bdab7e93)

Login page
![image](https://github.com/user-attachments/assets/e70ed2cf-19ac-408b-8d73-a2c472195fc2)

Movie listing page
![image](https://github.com/user-attachments/assets/99c53398-849b-46fc-8da9-0a8b47710fe9)

Movie Detail Page
![image](https://github.com/user-attachments/assets/f422ab2d-8dd9-4fb5-8c1a-64a887eac678)

Favorites page
![image](https://github.com/user-attachments/assets/479fc03b-b2ba-4d3e-9684-29c687274eb4)

Pagination
![image](https://github.com/user-attachments/assets/bb4824e7-c4e2-4c3b-b002-68663d5de25b)



