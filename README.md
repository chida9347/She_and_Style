# She & Style

A frontend-only fashion storefront and owner product dashboard built with React, Vite, React Router and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

The production bundle can be created with `npm run build` and served with `npm run preview`.


This is demo frontend authentication only. Credentials and session state live in client code/browser storage, so this is not suitable for production security.

## Browser storage

Products, cart, wishlist and the remembered demo login are stored in localStorage in the current browser. They do not sync across devices or browsers. Product images can be entered by URL or uploaded as a small image (up to 1.5 MB); uploaded images are stored as data URLs in localStorage. The sample catalog uses remote Unsplash images.

Checkout is intentionally a placeholder. No payment, backend, database or order processing is implemented.
