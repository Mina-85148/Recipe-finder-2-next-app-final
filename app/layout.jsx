// app/layout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import Motto from "../components/Motto";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        <Motto />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
