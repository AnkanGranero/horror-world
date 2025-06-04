# 🎬 Horror World

Welcome to **Horror World** – an interactive web app where you select a country and explore its top horror movies 🌍🔪

This project combines data from the [REST Countries API](https://restcountries.com) and the [TMDb API](https://www.themoviedb.org/) to merge geography with film culture.

---

## ✨ Features

- Select any country from a searchable list
- Display its flag, region, and other key facts
- Fetch horror movies produced in that country

---

## 🔧 Tech Stack

- [Next.js](https://nextjs.org/) – React framework with SSR & routing
- [React](https://reactjs.org/) – For building UI components
- [TypeScript](https://www.typescriptlang.org/) – Strong typing for better dev flow
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [REST Countries API](https://restcountries.com)
- [TMDb API](https://www.themoviedb.org/)

---

## 🚀 Getting Started

```bash
git clone https://github.com/ankangranero/horror-world.git
cd horror-world
npm install
npm run dev
```

🔑 API Key Required
To fetch movie data, you’ll need your own API key from TMDb.
Create a (free) account, generate an API key, and add it to your .env.local file like this:


```env
# .env.local
TMDB_API_KEY=your_api_key_here
```
