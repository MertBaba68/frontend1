import Link from "next/link";
import "/src/styles/Breadcrumbs.css";

const Navbar = ({ links = [] }) => {
  const allLinks = [{ name: "Home", url: "/" }, ...links];

  if (allLinks.length == 1) {
    return;
  }

  return (
    <nav className="breadcrumbs">
      {allLinks.map((link, index) => (
        <span key={index} className="breadcrumb">
          <Link href={link.url}>
            {link.name}
          </Link>
          {index !== allLinks.length - 1 && (
            <span className="separator"> / </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
