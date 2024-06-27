import { BiLogoGithub } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
const Header = () => {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold">ANRE</h1>
            <h4 className="font-normal leading-none">FRANCISCUS</h4>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="">
            <BiLogoGithub />
          </a>
          <a href="/">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
