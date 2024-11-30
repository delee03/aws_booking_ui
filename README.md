# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
    // Set the react version
    settings: { react: { version: "18.3" } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
    },
});
```

## License

MIT

````

# File: tsconfig.app.json
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "module": "ESNext",
    "target": "ESNext"
  }
}
````

### Check type and development dependencies

```bash
npm run dev & npm run type-check
```

### Run the project

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Có thể dùng concurrently để chạy cùng lúc cả 2 lệnh

```bash
npm install concurrently --save-dev
```

```json
{
    "scripts": {
        "dev": "concurrently \"vite\" \"npm run type-check\""
    }
}
```

### Cài đặt thêm tsc check type với npm install typescript --save-dev và npm install @vitejs/plugin-react-swc

```json
{
    "scripts": {
        "type-check": "tsc --noEmit"
        //giúp kiểm tra type khi chạy npm run dev và bỏ qua không cần biên dịch sang js
    }
}
```
### The library used in this boilerplate

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [SWC](https://swc.rs/)
- [Ant Design](https://ant.design/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Toolkit Redux](https://redux-toolkit.js.org/)
- [Yup Validation]('npm i yup')
- [Formik Form]('npm i formik')
- [Sass]('npm i sass')
- [React Router Dom]('npm i react-router-dom')

