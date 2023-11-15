import "./css/globals.css";
import logo from "./images/logoIcon.png";
import Navbar from "./components/navbar";

export const metadata = {
  title: "BuscaFilmes - O filme que você procura está aqui!",
  description: "O melhor site de busca de filmes que você vai encontrar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        ></link>

        <link rel="icon" href="/logoIcon.png" />
      </head>
      <body>
        <Navbar />
        {children}

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
