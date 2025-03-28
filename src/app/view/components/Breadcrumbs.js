import Link from "next/link";

const Navbar = ({ links }) => {
  return (
    <nav className="breadcrumbs">
      {links.map((link, index) => (
        <span key={index} className="breadcrumb">
            <Link href={link.url}>
                {link.name}
              </Link>
          {index !== links.length - 1 && (
              <span className="separator"> / </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;