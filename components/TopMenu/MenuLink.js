import Link from "next/link";
import Nav from "react-bootstrap/Nav";

export default ({ href, children }) => {
  return (
    <Nav.Item>
      <Link href={href}>
        <Nav.Link as="a" href={href}>
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};
