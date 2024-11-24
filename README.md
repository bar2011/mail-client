<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bar2011/mail-client">
    <img src="./images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mail Client</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/bar2011/mail-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bar2011/mail-client/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/bar2011/mail-client/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#building">Building</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](#)

There are already so many great mail clients out there, but I'm a proud perfectionist, so I couldn't settle for any of the mainstream (and non mainstream) options.

I wanted a mail client that was simple, customizable, modern, free, and most importantly not cluttered with features that I don't use.
And this is what I came up with!

This is of course a WIP, so if you have any feature requests, bugs, or really anything, please feel free to open an issue or a pull request, and I'll do my best to meet your request, whether if by a plugin or an actual feature.

> [!IMPORTANT]  
> If you're not a developer, please stop here!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![T3][T3-stack]][T3-url]
- [![Fastify][Fastify]][Fastify-url]
- [![Shadcn][Shadcn]][Shadcn-url]
- [![Electron][Electron]][Electron-url]
- [![Capcitor][Capcitor]][Capcitor-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- pnpm
- docker

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bar2011/mail-client.git
   ```
2. Install packages
   ```sh
   pnpm install
   ```
3. Start the database
   ```sh
   ./start-database.sh
   pnpm db:push
   ```
4. Add all platforms to Capacitor
   ```sh
   pnpm exec cap add ios
   pnpm exec cap add android
   ```
5. Install the Electron dependencies
   ```sh
   cd electron
   npm install
   ```
6. Populate the `.env` file as shown in `.env.example`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Development

You can start the project in development mode in two ways:

1. Concurrently running client and server
2. Separately running client and server

To concurrently run the client and server, run the following command:

```sh
pnpm dev
```

To seperately run the client and server, run the following commands in seperate terminals:

```sh
pnpm dev:next # client side
pnpm dev:fastify # server side
```

In all cases, the client will automatically reload when you make changes to the project, but the backend will need to be restarted (in the first case, restarting the server means restarting the whole project).
When you update the database schema, run `pnpm db:push` and restart the server (again this means restarting the whole project if you chose the first method).

You can always run `pnpm db:studio` to open a helpful page to visualize the database and/or make changes to it.

If you'd like to test your changes on your phone, run the following commands while the project is running:

```sh
pnpm sync:cap
pnpm exec cap open ios # to open iOS in XCode
pnpm exec cap open android # to open Android in Android Studio
```

For iOS, you'll need to sign the project with your Apple account, and then you'll be able to run the app on your phone.
For Android, it needs to be tested.

To also see the app on your desktop (with hot reloading), you can run the following command:

```sh
pnpm sync:electron
pnpm dev:electron
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Building

To build the project for web, run the following command:

```sh
pnpm static
```

To build the project for phone (iOS or Android), run the following commands while the project is running:

```sh
pnpm sync:cap
pnpm exec cap open ios # to open iOS in XCode
pnpm exec cap open android # to open Android in Android Studio
```

After the wanted app is opened, you'll be able to build it and test it on your phone.
Currently iOS is known to work, but Android is not tested.

In order to build for desktop, you'll need to run the following command:

```sh
pnpm sync:electron
cd electron
pnpm electron:make # you can specify platform by :mac or :win if you'd like
```

After those commands are run, you'll see the executable(s) in the `electron/dist` folder.

> Two important notes on desktop building:
>
> 1. If you're on MacOS or Windows ARM, you'll only be able to build for Windows ARM, not Windows x64 or x86.
> 2. If you're on any Windows machine, you won't be able to build for MacOS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Clean project
- [ ] Add additional tools to complete stack
  - [x] Add Fastify in backend
  - [x] Add Electron
  - [x] Add Capacitor (if possible add both Electron and Capacitor together)
  - [x] Add ShadcnUI
  - [ ] Connect project to Vercel 
    - [x] Connect NextJS to Vercel
    - [ ] Connect Fastify to Vercel
- [ ] Develop frontend to MVP standards
  - [ ] Create UI/UX with mock values based on Figma
  - [ ] Make everything as dynamic as possible to allow later integration with backend
- [ ] Develop backend to MVP standards

See the [open issues](https://github.com/bar2011/mail-client/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Build and test your changes on all platforms (web, iOS, Android, Windows, macOS)
6. Open a Pull Request, and if you couldn't test on a platform, mention it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Bar Einav - [@be1_bar](https://twitter.com/be1_bar) - bareinav10@gmail.com

Project Link: [https://github.com/bar2011/mail-client](https://github.com/bar2011/mail-client)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/bar2011/mail-client.svg?style=for-the-badge
[contributors-url]: https://github.com/bar2011/mail-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bar2011/mail-client.svg?style=for-the-badge
[forks-url]: https://github.com/bar2011/mail-client/network/members
[stars-shield]: https://img.shields.io/github/stars/bar2011/mail-client.svg?style=for-the-badge
[stars-url]: https://github.com/bar2011/mail-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/bar2011/mail-client.svg?style=for-the-badge
[issues-url]: https://github.com/bar2011/mail-client/issues
[license-shield]: https://img.shields.io/github/license/bar2011/mail-client.svg?style=for-the-badge
[license-url]: https://github.com/bar2011/mail-client/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/bar-einav-8523ba2a4
[product-screenshot]: images/screenshot.png
[T3-stack]: https://img.shields.io/badge/stack-290660?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjU4IiBoZWlnaHQ9IjE5OSIgdmlld0JveD0iMCAwIDI1OCAxOTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY1LjczNSAyNS4wNzAxTDE4OC45NDcgMC45NzI0MTJIMC40NjU5OTRWMjUuMDcwMUgxNjUuNzM1WiIgZmlsbD0iI2UyZThmMCIvPgo8cGF0aCBkPSJNMTYzLjk4MSA5Ni4zMjM5TDI1NC4wMjIgMy42ODMxNEwyMjEuMjA2IDMuNjgyOTVMMTQ1LjYxNyA4MC43NjA5TDE2My45ODEgOTYuMzIzOVoiIGZpbGw9IiNlMmU4ZjAiLz4KPHBhdGggZD0iTTIzMy42NTggMTMxLjQxOEMyMzMuNjU4IDE1NS4wNzUgMjE0LjQ4IDE3NC4yNTQgMTkwLjgyMyAxNzQuMjU0QzE3MS43MTUgMTc0LjI1NCAxNTUuNTEzIDE2MS43MzggMTUwIDE0NC40MzlMMTQ2LjYyNSAxMzMuODQ4TDEyNy4zMjkgMTUzLjE0M0wxMjkuMDkyIDE1Ny4zMzZDMTM5LjIxNSAxODEuNDIxIDE2My4wMzQgMTk4LjM1NCAxOTAuODIzIDE5OC4zNTRDMjI3Ljc5MSAxOTguMzU0IDI1Ny43NTkgMTY4LjM4NiAyNTcuNzU5IDEzMS40MThDMjU3Ljc1OSAxMDYuOTM3IDI0NC4zOTkgODUuNzM5NiAyMjQuOTU2IDc0LjA5MDVMMjIwLjM5NSA3MS4zNTgyTDIwMi43MjcgODkuMjUyOEwyMTAuNzg4IDkzLjUwODNDMjI0LjQwMyAxMDAuNjk2IDIzMy42NTggMTE0Ljk4MSAyMzMuNjU4IDEzMS40MThaIiBmaWxsPSIjZTJlOGYwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODguMjYyNSAxOTIuNjY5TDg4LjI2MjYgNDUuNjQ1OUg2NC4xNjQ4TDY0LjE2NDggMTkyLjY2OUg4OC4yNjI1WiIgZmlsbD0iI2UyZThmMCIvPgo8L3N2Zz4K
[T3-url]: https://create.t3.gg/
[Fastify]: https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white
[Fastify-url]: https://fastify.dev/
[Shadcn]: https://img.shields.io/badge/shadcn%2Fui-000?style=for-the-badge&logo=shadcnui&logoColor=fff
[Shadcn-url]: https://ui.shadcn.com/
[Electron]: https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=fff
[Electron-url]: https://electronjs.org/
[Capcitor]: https://img.shields.io/badge/Capacitor-fff?style=for-the-badge
[Capcitor-url]: https://capacitorjs.com/
