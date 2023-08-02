This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Table of Contents
1. [Commands](#commands)
2. [Architecture](#Architecture)
3. [Project Structure](#project-structure)
4. [Design considerations](#design-considerations)
5. [Improvement opportunities](#improvement-opportunities)

# Commands

First, install the dependencies:

```bash
npm install
```
You can run the project in dev model with:

```bash
npm run dev
```
It will run in:  http://localhost:3000

To run the production mode of the project execute following commantds:

```bash
npm run build
npm start
```
It will run in:  http://localhost:3000

To execute the unit tests run either of the following commands:

```bash
npm t # shorthand command
npm run test  # complete command
```

To execute the e2e tests you can execute the following comands:

```bash
npm run e2e # for interactive version
npm run e2e:headless # for non interactive version
```

Additionally, for linting and formatting the commands `npm run lint` and `npm run format` are available

# Architecture

The application is built following the Hexagonal Architecture principles. The main idea is to have a clear separation of concerns between the different layers of the application. The application is divided in 3 main layers:

- **Domain:** contains the domain entities and the interfaces of the repositories that the application needs to work with.
- **Infrastructure:** contains the implementation of the repositories and the components that the application needs to work with.
- **App:** contains the application that are exposed to the user

# Project Structure 

The application is divided in 3 main folder:

- `app`: this folder contains the application views following the Next.JS app router structure.
- `domain`: contains the domain of the application. It is divided in 2 sub-folders:
  - `models`: contains the domain entities of the application.
  - `repositories`: contains the interfaces of the repositories that the application needs to work with.
- `infrastructure`: contains the implementation of the repositories and the components that the application needs to work with. It is divided in 2 sub-folders:
  - `components`: contains the different react components building blocks used to build the application UI.
  - `services`: contains the implementation of the repositories.

Additionally, the application has a `__test__` folder that groups the tests of the application following a similar structure to the infrastructure folder. Unit testing is carried out with Jest and Testing Library. E2E testing is carried out with Cypress.

# Design considerations

- When possible the application uses the integrated cache built into fetch by Next.JS. When this is not possible (client components), the application uses a custom cache implementation with local storage.

# Improvement opportunities

- The rendering performance of the initial view could be improved by virtualizing the list.
- Introduce react query or swr to make data fetching simpler and more resilient.
