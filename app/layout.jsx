import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";
export const metadata = {
  title: "Property Pulse",
  description:
    "Discover your dream home with Property Pulse - the ultimate real estate platform for buying, selling, and renting properties.",
  keywords:
    "real estate, property listings, home buying, home selling, property rental, real estate platform, property search, property management",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
