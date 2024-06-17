import logo from "../assests/Coinfluence-Icon.png"

function Navbar() {
  return (
    <>
      <nav
        class="
          flex flex-wrap items-center fixed justify-between w-full py-4
          md:py-0
          px-4
          text-lg text-gray-700
        "
      >
        <div>
          <img src={logo} alt ="logo" style={{ width: '250px', height: '50px' }}/>
        </div>

        <a
          class="md:p-4 py-2 block hover:text-hoverColour font-bold text-frontColour"
          href="#"
        >
          Sign Up
        </a>
      </nav>
      
    </>
  );
}

export default Navbar;
