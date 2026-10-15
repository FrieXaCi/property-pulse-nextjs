import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";

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
      </body>
    </html>
  );
};

export default MainLayout;
