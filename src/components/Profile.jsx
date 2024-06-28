import { useEffect, useState } from "react";

// import VueLogo from "/images/vuejs.png"
const Profile = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const items = [
      {
        title: "Vue JS",
        image: <img src="/images/vuejs.png" />,
      },
      {
        title: "React JS",
        image: <img src="/images/reactjs.png" />,
      },
      {
        title: "Vuetify",
        image: <img src="/images/vuetify.png" />,
      },
    ];
    setData(items);
  }, []);
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-secondary mb-3">Awesome Skill</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            eveniet, mollitia explicabo fugiat praesentium repellendus sed
            debitis autem provident iure quos beatae cumque, perferendis ad,
            minus dolores reiciendis consequatur ab!
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden">
              <img src="/images/profile.png" />
            </div>
            <h2 className="text-gradient text-[50px] mt-[20px]">
              Anre Franciscus
            </h2>
          </div>
          <div className="w-full lg:pt-[50px] lg:ml-[50px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {data &&
                data.map((item, index) => (
                  <div className="w-full" key={index}>
                    <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                      {item.image}
                      <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition ease-linear">
                        <div className="text-center w-full text-white">
                          <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                            <div className="text-gradient">{item.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
