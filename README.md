### 1. Go to your project folder

```bash
cd "C:\Users\user\Documents\iamisaackn.github.io"
```

### 2. Install dependencies

You’ll see a `package.json` file — that means you just need to install everything listed there:

```bash
npm install
```

or if you prefer Yarn:

```bash
yarn install
```

This will create a `node_modules` folder with all your packages.

### 3. Run the local development server

Once installation is done, start it up with:

```bash
npm run dev
```

Vite will spin up a local server — you’ll see something like:

```
VITE v5.x.x ready in 500ms
Local: http://localhost:5173/
```

Then open that link in your browser (`Ctrl + Click` or copy–paste it).

### 5. To build for production later

When you’re ready to host:

```bash
npm run build
```

That creates a `dist` folder with your compiled static files — that’s what you upload to your hosting service. Rename it to `docs`.
