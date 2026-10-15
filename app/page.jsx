import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link href="/properties">View Properties</Link>
    </div>
  );
};

export default HomePage;
