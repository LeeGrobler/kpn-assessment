# KPN Assessment

This Vue.js application displays a list of products, with options for filtering
and sorting the products. It uses Vuetify for UI components, Pinia for state
management, and Vue Router for routing. The app is written in TypeScript and
uses Vue's script setup syntax.

## Features

- Product list: displays a grid of product cards with images and details
- Filters: allows users to filter products by manufacturer, operating system,
  color, and other features
- Sorting: allows users to sort products by most sold and newest
- Alerts: provides user notifications via an alert system
- Loading state: shows a loading spinner when fetching data
- Responsive: utilizes Vuetify's grid system to adjust layout for different
  screen sizes

## Live Demo

You can test the live application by visiting https://kpn-assessment.web.app/.

## Getting Started

Here are the instructions to set up the project on your local machine for
development.

## Prerequisites

- Node.js and npm: You need Node.js installed on your local machine to run this
  app. npm (Node Package Manager), which comes with Node.js, is used to manage
  the project's dependencies.
- Vue CLI: This is a tool for scaffolding Vue.js projects. Install it globally
  on your machine.

## Installing

1. Clone the repository

```
git clone https://github.com/LeeGrobler/kpn-assessment.git
```

2. Navigate to the project directory

```
cd kpn-assessment
```

3. Install dependencies

```
npm install
```

## Environment Variables

Create a .env file at the root of your project and insert your key-value pairs
in the following format of NAME=VALUE. Variables in .env files will be loaded
into import.meta.env.

```
VITE_API_URL=your_api_url
```

Replace your_api_url with the URL of the server that the app fetches product
data from.

## Running the App

```
npm run dev
```

This starts a local development server at http://localhost:3000 (default
configuration). It features hot-reloading, so the app will automatically reload
if you make changes to the source files.
