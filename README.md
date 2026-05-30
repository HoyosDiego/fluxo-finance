 # Fluxo-Finance

Fluxo-Finance is a financial management platform developed with a modular, decoupled architectural approach. This project prioritizes maintainability and scalability by implementing a layered architecture that strictly separates business logic from the presentation layer.

## Project Architecture

The system is structured to ensure component independence and testability:

* **Domain**: Pure business logic, independent of frameworks.
* **Infrastructure**: Repositories, services, and external API communication.
* **Presentation**: UI layer built with NativeWind, following atomic design and composition principles.


## Tech Stack

* **Core**: Expo (React Native) with Expo Router.
* **UI**: NativeWind (Tailwind CSS).
* **Package Manager**: Yarn.
* **Quality**: ESLint & Prettier.
* **Testing**: Jest (Unit testing).
* **Git Workflow**: Husky (Pre-commit hooks).

## Getting Started

### Installation
```bash
yarn install
```

### Init the project
```bash
yarn start