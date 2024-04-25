import footerBg from "../assets/images/more/footer-bg.jpg";
import copyrightBg from "../assets/images/more/copyright-bg.jpg";
import logo from "../assets/images/more/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat pt-28"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container">
        {/* Footer logo */}
        <div>
          <img className="h-[90px] w-[75px]" src={logo} alt="logo" />
        </div>

        {/* Footer container */}
        <div className="flex mb-12">
          {/* Footer left */}
          <div className="flex-1">
            <div className="relative text-[45px] font-rancho text-[#331A15] inline-block mb-8">
              <h2 className="blur-[6px] absolute select-none ">
                Espresso Emporium
              </h2>
              Espresso Emporium
            </div>

            <p className="text-[#1B1A1A] text-xl mb-8">
              Always ready to be your friend. Come & Contact with us to share
              your <br />
              memorable moments, to share with your best companion.
            </p>

            <div className="flex gap-5 text-[#331A15] mb-8">
              <a href="facebook">
                <FaFacebook className="h-10 w-10" />
              </a>
              <a href="twitter">
                <FaTwitter className="h-10 w-10" />
              </a>
              <a href="instagram">
                <FaInstagram className="h-10 w-10" />
              </a>
              <a href="linkedin">
                <FaLinkedin className="h-10 w-10" />
              </a>
            </div>

            <div className="relative text-[45px] font-rancho text-[#331A15] inline-block mb-8">
              <h2 className="blur-[6px] absolute select-none ">Get in Touch</h2>
              Get in Touch
            </div>

            <ul className="text-[#1B1A1A] text-xl flex flex-col gap-4">
              <li className="flex items-center gap-5">
                <MdCall className="text-[#331A15] h-6 w-6" /> +88 01890306983
              </li>
              <li className="flex items-center gap-5">
                <TbMailFilled className="text-[#331A15] h-6 w-6" />{" "}
                mdrifajulislamrifaj@gmail.com
              </li>
              <li className="flex items-center gap-5">
                <FaLocationDot className="text-[#331A15] h-6 w-6" /> Hazibari
                road, Mohammad Nagar, Khulna - 9208
              </li>
            </ul>
          </div>

          {/* Footer right */}
          <div className="w-[505px]">
            <div className="relative text-[45px] font-rancho text-[#331A15] inline-block mb-8">
              <h2 className="blur-[6px] absolute select-none ">
                Connect with Us
              </h2>
              Connect with Us
            </div>

            <form onSubmit={handleContact}>
              <input
                className="w-full h-12 text-[#1B1A1A99] text-base p-3 rounded-md mb-4"
                type="text"
                name="name"
                placeholder="Name"
              />
              <br />
              <input
                className="w-full h-12 text-[#1B1A1A99] text-base p-3 rounded-md mb-4"
                type="email"
                name="email"
                placeholder="Email"
              />
              <br />
              <textarea
                className="w-full h-32 text-[#1B1A1A99] text-base p-3 rounded-md mb-6"
                name="message"
                placeholder="Message"
                rows="10"
              ></textarea>

              <input
                className="text-2xl font-rancho text-[#331A15] border-2 border-[#331A15] rounded-[30px] py-2 px-5 cursor-pointer"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div
        className="h-[50px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${copyrightBg})` }}
      >
        <p className="text-xl font-rancho text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
