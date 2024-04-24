import headerBg from "../assets/images/more/header-bg.jpg";
import logo from "../assets/images/more/logo.png";

const Header = () => {
  return (
    <div
      className="h-[120px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <h2 className="text-6xl font-rancho text-white flex items-center gap-4">
        <img className="h-[90px] w-[75px]" src={logo} alt="logo" /> Espresso
        Emporium
      </h2>
    </div>
  );
};

export default Header;
