// NavbarLink.js
import Link from "next/link";

const NavbarLink = ({ href = "/", text = "Field", def = "n" }) => {
  const defaultTextColor = text === "Home" ? "text-blue-700" : "text-gray-900";

  return (
    <Link
      href={href}
      passHref
      className={`block py-2 px-3 ${defaultTextColor} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>
      {text}
    </Link>
  );
};

export default NavbarLink;
