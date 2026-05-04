# SkillSphere

Modern learning platform with curated courses, instructor highlights, and user profiles.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Better Auth + MongoDB

## Features

- Course catalog with search and detail pages
- Protected routes for course details and profile
- Instructor highlights with curated imagery
- Loading states for courses, profiles, and course details
- Email/password and Google authentication
- Profile update flow
- Responsive, polished UI

## Authentication

SkillSphere uses Better Auth with MongoDB. It supports email/password login and Google OAuth, with protected routes for course details and user profiles.

Required environment variables:

- BETTER_AUTH_SECRET
- BETTER_AUTH_URL
- AUTH_DB_URI
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET

## Quick Start

```bash
npm install
npm run dev
```

