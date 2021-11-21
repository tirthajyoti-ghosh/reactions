[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tirthajyoti-ghosh/reactions">
    <img src="https://user-images.githubusercontent.com/57726348/142759510-233011e7-8c08-4081-91f3-bd28bf102d2f.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Reactions</h3>

  <p align="center">
    Reactions component
    <br />
    <a href="https://github.com/tirthajyoti-ghosh/reactions"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://college-metrics-frontend.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/reactions/issues">Report Bug</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/reactions/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

A reactions component similar to Facebook/LinkedIn built using React.

![image](https://user-images.githubusercontent.com/57726348/142758596-6e8f184b-1531-48b8-91b7-da0d9443865a.png)

## Props

* `reactions`: Array of objects containing reaction. Each object must have `emoji` and `name` properties. You can add more properties to a reaction object but `emoji` and `name` are required. When a reaction is clicked, the function passed in the `onSelect` prop is called with the reaction object as the argument.

* `onSelect`: Function to be called when a reaction is clicked. The function is called with the reaction object (the object that is part of the reactions array) as the argument.

* `reactionCounts`: Array of objects containing reaction counts. Each object must have `emoji`, `count` and `active` properties. The `active` property determines whether to add "active" styles to the reaction. You can add more properties to each of the objects. When a reaction is clicked, the function passed in the `onSelect` prop is called with the reaction object as the argument.

### Built With

* React
* SCSS
* ESLint
* Stylelint
* [Netlify](https://college-metrics-frontend.netlify.app/)

## Live demo

Deployed to Netlify - [live demo](https://college-metrics-frontend.netlify.app/).

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/tirthajyoti-ghosh/reactions.git
    ```

2. Change directory

    ```sh
    cd college-metrics-frontend
    ```

3. Install NPM packages

    ```sh
    npm install
    ```

4. Start the local server

    ```sh
    npm start
    ```

<!-- ROADMAP -->
## Roadmap

Check the [issues](https://github.com/tirthajyoti-ghosh/reactions/issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

👤 **Tirthajyoti Ghosh**

- Website: [ghosh.tech](https://ghosh.tech)
- GitHub - [@tirthajyoti-ghosh](https://github.com/tirthajyoti-ghosh)
- Twitter - [@terrific_ghosh](https://twitter.com/terrific_ghosh)
- LinkedIn - [@tirthajyoti-ghosh](https://www.linkedin.com/in/tirthajyoti-ghosh/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* Design inspirations
  * RocketLane team
* [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tirthajyoti-ghosh/college-metrics-frontend.svg?style=flat-square
[contributors-url]: https://github.com/tirthajyoti-ghosh/reactions/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tirthajyoti-ghosh/college-metrics-frontend.svg?style=flat-square
[forks-url]: https://github.com/tirthajyoti-ghosh/reactions/network/members
[stars-shield]: https://img.shields.io/github/stars/tirthajyoti-ghosh/college-metrics-frontend.svg?style=flat-square
[stars-url]: https://github.com/tirthajyoti-ghosh/reactions/stargazers
[issues-shield]: https://img.shields.io/github/issues/tirthajyoti-ghosh/college-metrics-frontend.svg?style=flat-square
[issues-url]: https://github.com/tirthajyoti-ghosh/reactions/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://github.com/tirthajyoti-ghosh/reactions/blob/development/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tirthajyoti-ghosh/