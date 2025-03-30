import Nav from "../components/Nav/Nav";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Home() {
  return (
    <div>
      <Nav items={menuItems} />
    </div>
  );
}
