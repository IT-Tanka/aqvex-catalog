# Test Task: Product Catalog Page

Implementation of a product catalog page based on the provided Figma design, using real API data.

## Task Requirements

- Display list of products from API
- Search by product name
- Sorting (by rating, price, name)
- Pagination
- Visual style close to the [Figma layout](https://www.figma.com/design/CMy9bnx2VGTVsj7uSBFf9Y/aptitude-test)
- Technologies: **TypeScript + React + Vite**

API endpoint:  
`https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products`

## Technologies Used

- **React** 18 (hooks)
- **TypeScript**
- **Vite** — build tool & dev server
- **@tanstack/react-query** — data fetching, caching, loading/error states
- **SCSS Modules** — component-scoped styling
- **CSS Grid** + responsive layout (mobile / tablet / desktop)
- **ESLint** + **Prettier** (standard setup)

## Implemented Features

- Live search by product name
- Sorting options:
  - Rating (descending)
  - Price: low to high / high to low
  - Name (A–Z)
- Pagination (12 items per page)
- Loading, error, and "no results" states
- Product card includes:
  - Image (with fallback)
  - Truncated name (3 lines max)
  - Rating (stars + review count)
  - Current price + old price (with discount badge — custom SVG)
  - Stock status indicator
  - "Add to Cart" button (disabled when out of stock)
  - Volume selector (when multiple volumes available)
- Fully responsive design:
  - Mobile: 1 column
  - Tablet: 2–3 columns
  - Desktop: 3–4 columns

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/IT-Tanka/aqvex-catalog.git
cd aqvex-catalog

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Start development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Project will be available at: http://localhost:5173 (or the port shown by Vite)