import bannerBg from "../assets/images/more/banner-bg.png";
import featuresIcon_1 from "../assets/images/icons/fea-icon-1.png";
import featuresIcon_2 from "../assets/images/icons/fea-icon-2.png";
import featuresIcon_3 from "../assets/images/icons/fea-icon-3.png";
import featuresIcon_4 from "../assets/images/icons/fea-icon-4.png";
import instaImg_1 from "../assets/images/cups/insta-1.png";
import instaImg_2 from "../assets/images/cups/insta-2.png";
import instaImg_3 from "../assets/images/cups/insta-3.png";
import instaImg_4 from "../assets/images/cups/insta-4.png";
import instaImg_5 from "../assets/images/cups/insta-5.png";
import instaImg_6 from "../assets/images/cups/insta-6.png";
import instaImg_7 from "../assets/images/cups/insta-7.png";
import instaImg_8 from "../assets/images/cups/insta-8.png";
import { Link, useLoaderData } from "react-router-dom";
import { TbMug } from "react-icons/tb";

const Home = () => {
  const loadedCoffee = useLoaderData();

  console.log(loadedCoffee);

  return (
    <div>
      {/* Banner section start */}
      <div
        className="h-[800px] bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container flex justify-end items-center h-full">
          <div>
            <h1 className="text-[55px] font-rancho mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-base mb-8">
              It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
              the nostalgia back!! Your companion of <br /> every moment!!!
              Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] border-2 border-[#E3B577] text-[#242222] text-2xl font-rancho py-2 px-5 hover:bg-transparent hover:text-white hover:border-2 hover:border-white duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* Banner section end */}

      {/* Features section start */}
      <div className="bg-[#ECEAE3]  py-14 mb-[120px]">
        <div className="container flex gap-10">
          {/* Features 1 */}
          <div>
            <div className="mb-4">
              <img src={featuresIcon_1} alt="" />
            </div>
            <div>
              <h3 className="text-[35px] font-rancho text-[#331A15] mb-2">
                Awesome Aroma
              </h3>
              <p className="text-base text-[#1B1A1A] mb-2">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>

          {/* Features 2 */}
          <div>
            <div className="mb-4">
              <img src={featuresIcon_2} alt="" />
            </div>
            <div>
              <h3 className="text-[35px] font-rancho text-[#331A15] mb-2">
                High Quality
              </h3>
              <p className="text-base text-[#1B1A1A] mb-2">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
          </div>

          {/* Features 3 */}
          <div>
            <div className="mb-4">
              <img src={featuresIcon_3} alt="" />
            </div>
            <div>
              <h3 className="text-[35px] font-rancho text-[#331A15] mb-2">
                Pure Grades
              </h3>
              <p className="text-base text-[#1B1A1A] mb-2">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
          </div>

          {/* Features 4 */}
          <div>
            <div className="mb-4">
              <img src={featuresIcon_4} alt="" />
            </div>
            <div>
              <h3 className="text-[35px] font-rancho text-[#331A15] mb-2">
                Proper Roasting
              </h3>
              <p className="text-base text-[#1B1A1A] mb-2">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Features section end */}

      {/* Popular products start */}
      <div>
        {/* section tittle */}
        <div className="text-center mb-4">
          <h6 className="text-xl text-[#1B1A1A]">--- Sip & Savor ---</h6>
          <div className="relative text-[55px] font-rancho text-[#331A15] inline-block">
            <h2 className="blur-[6px] absolute select-none ">
              Our Popular Products
            </h2>
            Our Popular Products
          </div>
        </div>
        {/* Add coffee button start */}
        <div className="flex justify-center">
          <Link to="/addCoffee">
            <div className="relative font-rancho text-2xl rounded-md bg-[#E3B577] border-2 border-[#331A15] py-2 px-4 inline-flex  items-center gap-2 text-white hover:bg-[#F5F4F1] duration-300">
              <h2 className="absolute text-[#1B1A1A] blur-[4px] select-none">
                Add Coffee
              </h2>
              Add Coffee
              <span className="absolute">Add Coffee</span>
              <TbMug className="text-[#331A15]" />
            </div>
          </Link>
        </div>
        {/* Add coffee button end */}
      </div>
      {/* Popular products start */}

      {/* Follow us section start */}
      <div className="py-[120px]">
        {/* section tittle */}
        <div className="text-center mb-12">
          <h6 className="text-xl text-[#1B1A1A]">Follow Us Now</h6>
          <div className="relative text-[55px] font-rancho text-[#331A15] inline-block">
            <h2 className="blur-[6px] absolute select-none ">
              Follow on Instagram
            </h2>
            Follow on Instagram
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <img src={instaImg_1} alt="" />
            </div>
            <div>
              <img src={instaImg_2} alt="" />
            </div>
            <div>
              <img src={instaImg_3} alt="" />
            </div>
            <div>
              <img src={instaImg_4} alt="" />
            </div>
            <div>
              <img src={instaImg_5} alt="" />
            </div>
            <div>
              <img src={instaImg_6} alt="" />
            </div>
            <div>
              <img src={instaImg_7} alt="" />
            </div>
            <div>
              <img src={instaImg_8} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Follow us section end */}
    </div>
  );
};

export default Home;
