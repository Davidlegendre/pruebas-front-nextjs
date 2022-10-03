import ActionLink from "./ActionLink.jsx";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <ActionLink href="/">Home</ActionLink>
        </li>
        <li>
          <ActionLink href="/about">about</ActionLink>
        </li>
        <li>
          <ActionLink href="/posts">post</ActionLink>
        </li>
      </ul>
    </nav>
  );
}
