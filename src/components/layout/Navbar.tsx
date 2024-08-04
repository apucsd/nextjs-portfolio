import Image from "next/image";
import Link from "next/link";
import VsCodeIcon from "@/assests/images/vs-code-icon.png";
const Navbar = () => {
  const navbarMenu = [
    {
      id: 1,
      title: "About",
    },
    // {
    //   id: 2,
    //   title: "Experience",
    // },
    {
      id: 11,
      title: "Skills",
    },
    {
      id: 3,
      title: "Projects",
    },
    {
      id: 4,
      title: "Services",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];
  return (
    <div className="z-[99999] bg-[#3C3C3C] fixed top-0 left-0 right-0 w-full  font-sans text-[#C8C8C8] text-[13px] px-2 ">
      <div className="flex justify-between items-center">
        <ul className="flex  items-center gap-3">
          <li>
            <Image
              src={VsCodeIcon}
              alt="Visual Studio Icon"
              width={17}
              height={17}
            />
          </li>
          {navbarMenu.map((item) => (
            <li key={item.id}>
              <Link href={`${item.title.toLowerCase()}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block -ml-8">
          <p>
            Apu Sutra Dhar - Visual Studio Code ({new Date().getFullYear()})
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row items-center">
            <button
              // onClick={() => history.back()}
              className="flex flex-col justify-center items-center  m-1 rounded-full 
                text-gray-400 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2"
            >
              <svg
                className="fill-current  h-5 w-5"
                viewBox="0 0 20 20"
                width="20"
                height="20"
                style={{ fill: "white" }}
              >
                <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
              </svg>
            </button>
            <div
              className=" text-white rounded-full p-1 mr-2  "
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "rgba(248, 113, 113, 1)",
              }}
            ></div>
            <div
              className=" text-white rounded-full p-1 mr-2 "
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "rgba(251, 191, 36, 1)",
              }}
            ></div>
            <div
              className="text-white rounded-full p-1 mr-5"
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "rgba(52, 211, 153, 1)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
