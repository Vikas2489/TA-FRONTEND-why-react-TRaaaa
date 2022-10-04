function Header() {
  return (
    <header className="flex justify-between items-center p-4 container m-auto">
      <h1 className="bg-black rounded-xl inline-block text-white px-6 py-2">
        Article App
      </h1>
      <nav>
        <ul className="flex space-x-2 align-center">
          <li className="hover:underline">
            <a href="#">Home</a>
          </li>
          <li className="hover:underline">
            <a href="#">About</a>
          </li>
          <li className="hover:underline">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
