import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                3000,
                "Backend Developer",
                3000,
                "IT Enthusiast",
                3000,
                () => {
                  console.log("Done Typing");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[750px] text-center mx-auto mt-5">
        
      </div>
    </div>
  );
};

export default Banner;
