# DevStage

Welcome to the **DevStage** project! This is the web application for the DevStage platform, built during the NLW#19 event by Rocketseat.

## 🚀 Technologies

This project was developed with the following technologies:

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast development build tool.
- **TailwindCSS** - A CSS framework for rapid UI development.
- **TypeScript** - A strongly typed programming language that builds on JavaScript.
- **Next.js** - A React framework for server-rendered applications.
- **Biome** - A code editor that combines the best of ESLint, Prettier, and TypeScript.
- **Orval** - A tool for generating TypeScript types and API clients from OpenAPI specifications.
## 📂 Project Structure

The project is organized as follows:

```
web/
├── src/
│   ├── components/   # Reusable UI components
│   ├── assets/       # Static assets (images, icons, etc.)
    ├── http          # api methods
│   └── app/          # Application pages
├── public/           # Public files
├── package.json      # Project dependencies and scripts
    ... config files
└── README.md         # Project documentation
```

## 🛠️ Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/LeviLJR/devstage.git
    cd devstage/web
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser at `http://localhost:3000`.

And for the api, follow these steps:
 
1. Change to the branch api:
    ```bash
    git checkout api
    ```
2. Install dependencies:
    ```bash
    npm i
    ```
3. Start the docker application:
    ```bash
    docker-compose up -d
    ```
4. Generate and run SQL migration files:
    ```bash
    npm run db:migrate
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```

Now it should be running the application on `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---
Made with 💜 by Rocketseat and the DevStage community.