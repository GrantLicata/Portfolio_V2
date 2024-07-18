//Top navigation that moved user to different sections within the page.

const Navbar = () => {
  return (
    <nav className="flex flex-row h-20 text-white gap-5 p-10 pt-3">
      <h3>About</h3>
      <h3>Experience</h3>
      <h3>Work</h3>
      <h3>Contact</h3>
    </nav>
  );
};

export default Navbar;
