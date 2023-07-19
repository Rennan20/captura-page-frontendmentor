import { Kumbh_Sans } from "@next/font/google";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbhSans",
});

type HamburguerMenuProps = {
  onClose: () => void;
};

const HamburguerMenu = ({ onClose }: HamburguerMenuProps) => {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 w-1/2 h-screen bg-white z-10 flex flex-col py-8 `}
      >
        <div className="ml-4 flex items-center mb-12  ">
          <button onClick={onClose}>
            <span className="group">
              {" "}
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black group-hover:fill-orange-primary"
                viewBox="0 0 14 15"
              >
                <path
                  d="M11.596.782L13.718 2.904 9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782z"
                  fillRule="evenodd"
                />
              </svg>{" "}
            </span>
          </button>{" "}
        </div>
        <div
          className={`flex flex-col flex-1 ${kumbhSans.variable} font-kumbhSans text-blue-very-dark text-[15px] font-bold space-y-6 ml-4`}
        >
          <div>
            <p>Collections</p>
          </div>
          <div>
            <p>Men</p>
          </div>
          <div>
            <p>Women</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Contact</p>
          </div>{" "}
        </div>
      </aside>
    </>
  );
};

export default HamburguerMenu;
