# Vue Startpage
**A list of *yours* favourite pages.**  
Organize your most frequently visited pages into neat, customizable categories — with zero clutter and full privacy.

[![Vue Startpage Screenshot](./screenshot.png)](https://antulek.github.io/vue-startpage/)

---

## ✨ Features

- **Customizable categories & sites list** – tailor your startpage to *your* workflow.
- **Effortless editing** – modify your layout quickly with a simple config file structure.
- **Local storage** – your data is stored in your browser only.
- **No CSS frameworks** – handcrafted styles with love and full control.

---

## 🚀 Try it now

👉 [**Open the live demo**](https://antulek.github.io/vue-startpage/)

---

## Technical informations
Main focus of this app was to practice CSS and Vue. No CSS frameworks were used.

### Technologies used:
- **Vite** – Frame of this application.
- **Vue 3** – Framework for building the UI.
- **Pinia** – Stores shared data and logic used by Vue components.

### Pre-planned features
This is third iteration of this idea, and it was build to fix problems of previous iterations. Current version is very basic but project was written with many, many features in mind, such as:
- project structure - neat and tidy structured files make extending project easier
- modularity - each module adds some functionality. Writing new modules will extend page functionalities. They can be enabled or disabled tailoring functionality of page to your own needs.
- customizable layout - modules are arranged into grid layout, that can be edited. Their order can be changed, some modules can span multiple rows/columns.
- responsiveness - page is usable on mobile devices, and each functionality can be used on desktop and mobile
- themes - there is support for switching css themes. At runtime user can choose from fixed set of pre-planned css files
- data storage - configuration of page and each module can be exported and imported in many formats. It is yet to decide in what scopes they will be exported/imported

### Forking, issues and pull requests
This is very early stage of project and not all planned base feature were implemented yet. I won't address any issues, nor pull requests, because project didn't reach minimal functional version yet. 