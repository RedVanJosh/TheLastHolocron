import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async () => {
    const data = await loadJsonFile("views/pages/about.json");
    const homeData = await loadJsonFile("views/pages/home.json");
    const { Main, Footer } = data;
    const { Header, NavLinks } = homeData;

    return `
        <meta name="theme-color" content="#7952b3"/>
        <link rel="stylesheet" href="home.css" />
        <body class="d-flex h-100 text-center text-white bg-dark">

        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <img id="logo" src="logo.jpg" class="rounded my-4 w-25 h-25 mx-auto" alt="logo image" />
          <header class="mb-auto">
            <div>
              <h2 class="${Header.classes}">${Header.text0}</h2>
              <nav class="my-3 nav nav-masthead justify-content-center float-md-end text-">
                <a class="nav-link ${NavLinks.Home.classes}" aria-current="page" href="${NavLinks.Home.href}">
                    ${NavLinks.Home.text0}
                </a>
                <a class="${NavLinks.Swapi.classes}" href="${NavLinks.Swapi.href}">
                    ${NavLinks.Swapi.text0}
                </a>
                <a class="active ${NavLinks.About.classes}" href="${NavLinks.About.href}">
                    ${NavLinks.About.text0}
                </a>
              </nav>
            </div>
          </header>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main class="px-3">
            <p class="lead">${Main.text0}</p>
            <p>${Main.text1}</p>
          </main>
        
          <footer class="mt-auto text-white-50">
            <p>${Footer.text0}</p>
            <p class="text-white-25">${Footer.text1}</p>
          </footer>
        </div>
    `
}