import "../styles/globals.css";
import Navbar from "./view/components/navbar";

export const metadata = {
  title: "Vodafone Partner For Progress",
  description: "By Vodafone",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400..800&family=Hanken+Grotesk&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
            rel="stylesheet"/>
        <title>Vite + React</title>
      </head>
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
        {children}
        </main>
      </body>
      </html>
  );
}
