# Astro Content Site Build Tool

> 🚀 Fast template build content & static site tool from astro

![astro-docs](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 📚 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # let you put some components
│   ├── layouts/           # site layout
│   │   ├── footer.astro
│   │   ├── header.astro
│   │   └── layout.astro
│   ├── pages/             # page route
│       └── index.astro
│   └── styles             # put site scss file
│       └── global.css     # tailwindcss file import
├── package.json           # npm package
├── .eslintignore          # eslint ignore setting
├── .prettierrc.cjs        # prettier setting
├── .stylelintrc.cjs       # stylelint setting
└── README.md
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check astro doc [our documentation](https://docs.astro.build) or jump into astro [Discord server](https://astro.build/chat).

### 🎫 Licence

Copyright © 2023 ~ now Tim Chao All rights reserved.

🍛 _<u>Created By: Tim Chao</u>_
