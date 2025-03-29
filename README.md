

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

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.






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
![Screenshot 2025-03-19 221902](https://github.com/user-attachments/assets/5f3be689-32ac-42bd-9e56-d990b9f40896)



Dark mode
![Screenshot 2025-03-19 222144](https://github.com/user-attachments/assets/7dcbd1eb-9237-4843-8f3c-1c856634e774)


Register page
![Screenshot 2025-03-19 222333](https://github.com/user-attachments/assets/f146e865-d9a8-4426-8832-3d33894a7fb5)


Login page
![Screenshot 2025-03-19 222401](https://github.com/user-attachments/assets/8f044d69-03a9-4556-b207-d6c35f5783bc)


Movie listing page
![Screenshot 2025-03-19 222747](https://github.com/user-attachments/assets/6415a582-030f-47ca-a56a-c716102d7b74)


Movie Detail Page
![Screenshot 2025-03-19 222938](https://github.com/user-attachments/assets/f1160ab8-4c0d-461b-b82c-b7bfee943db9)


Favorites page
![Screenshot 2025-03-19 223035](https://github.com/user-attachments/assets/cc308d94-73c7-4f5d-b903-b6cd48386b39)


Pagination
![Screenshot 2025-03-19 225041](https://github.com/user-attachments/assets/8f0f1ecb-2f3f-4621-b46b-35d3ae921d0b)





