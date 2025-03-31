import Link from "next/link";
import "/src/styles/Breadcrumbs.css";

const Navbar = ({ links = [] }) => {
  if (links.length === 0) {
    return;
  }

  return (
    <nav className="breadcrumbs">
      <span className="breadcrumb">
        <Link className="vodafone-logo-link" href="/">
          <img src="/vodafone-logo-red-64x64.png" className="logo" alt="home"></img>
        </Link>
      </span>

      {links.map((link, index) => (
        <span key={index}>
          <span className="separator"> &gt; </span>
          <span className="breadcrumb">
            <Link href={link.url}>
              {link.name}
            </Link>
          </span>
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
