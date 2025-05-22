# Step-by-Step Guide to Set Up a Fresh React + Tailwind CSS App

This guide will help you create a clean React app with Tailwind CSS configured properly to avoid rendering and styling issues.

## Prerequisites
- Node.js and npm installed
- Basic familiarity with terminal/command line

## Steps

1. **Create a new React app**

```bash
npx create-react-app my-tailwind-app
cd my-tailwind-app
```

2. **Install Tailwind CSS and its dependencies**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Configure Tailwind to remove unused styles in production**

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **Add Tailwind directives to your CSS**

Replace the contents of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Start the development server**

```bash
npm start
```

6. **Verify Tailwind is working**

Edit `src/App.js` to include some Tailwind classes, for example:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind!</h1>
    </div>
  );
}

export default App;
```

Save and check the browser to see if the styles are applied.

7. **Add your components**

You can now add your ArticlesDataTable component and other components inside the `src` folder.

---

If you want, I can help you create the ArticlesDataTable component inside this fresh setup once you confirm the environment is working.

---

Let me know if you want me to proceed with creating the ArticlesDataTable component in this new setup or assist with any other steps.
