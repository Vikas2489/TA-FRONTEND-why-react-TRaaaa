function Footer() {
  return (
    <footer className="p-4 container m-auto flex justify-between items-center bg-black text-white">
      <p>2020 all rights reserved</p>
      <div>
        <ul className="flex space-x-6">
          <li className="text-3xl">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="text-3xl">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="text-3xl">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
