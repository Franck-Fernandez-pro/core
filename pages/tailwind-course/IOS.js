import Link from "next/link";
import Image from "next/image";

{
  /* IOS 15 notification summary with Tailwind CSS */
}
export default function IOS({}) {
  return (
    <>
      <Link href="https://youtu.be/eSzNNYk7nVU">
        <a className="bg-purple-50 block pointer-events-auto">
          By Tailwind Labs: https://youtu.be/eSzNNYk7nVU
        </a>
      </Link>
      <Phone>
        {/* CARD */}
        <div className="absolute -bottom-4 inset-x-0 h-full bg-white/10 backdrop-blur-md rounded-2xl scale-[0.85] origin-bottom" />
        <div className="-bottom-2 bg-white/30 backdrop-blur-md rounded-3xl absolute inset-x-0 h-full origin-bottom scale-95 shadow-sm" />
        <div className="bg-white/40 rounded-3xl backdrop-blur-md p-4">
          <CardHeader />

          {/* CARD CONTENT */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <CardNews
              imageSrc="/tailwind-course/surfing.jpeg"
              imageAlt="Surfer at sunset"
              title="Surfing: heals the soul, kill the ribs"
              text="It's all fun and thrills until you get sucked over the falls."
            />

            <CardNews
              imageSrc="/tailwind-course/nba.jpg"
              imageAlt="CP3 vs the Greek Freak"
              title="The NBA Finals are here!"
              text="Bucks vs Suns is shaping up to be a very intriguing series!"
            />
          </div>
          <hr className="border-black/20 mt-4" />
          <div className="grid items-end grid-cols-3 gap-1 mt-3">
            <div className="col-span-2">
              <h3 className="text-sm font-bold">More updates</h3>
              <p className="mt-0.5 text-xs">
                Polywork, Keystone 6, and Prisma.io
              </p>
            </div>
            <ul className="flex flex-row-reverse -space-x-4 space-x-reverse">
              <li>
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-xl object-cover"
                    src="/tailwind-course/keystone.png"
                    alt="Keystone's logo"
                    layout="fill"
                  />
                </div>
              </li>

              <li>
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-xl object-cover"
                    src="/tailwind-course/polywork.jpeg"
                    alt="Polywork's logo"
                    layout="fill"
                  />
                </div>
              </li>

              <li>
                <div className="relative w-8 h-8">
                  <Image
                    className="rounded-xl object-cover"
                    src="/tailwind-course/prisma.png"
                    alt="Prisma's logo"
                    layout="fill"
                  />
                </div>
              </li>
            </ul>
          </div>
          {/* CARD CONTENT END */}
        </div>
        {/* CARD END*/}
      </Phone>
    </>
  );
}
// ----------- PHONE
const Phone = ({ children }) => (
  <div className="bg-purple-50 flex items-center justify-center min-h-screen py-10">
    <div className="relative h-[712px] w-[350px] bg-black rounded-[60px] overflow-hidden border-[14px] border-black">
      <div className="absolute inset-0 w-full h-full">
        <Image
          className="object-cover"
          src="/tailwind-course/iphone-rainbow.jpg"
          alt="iphone wallpaper"
          layout="fill"
        />
      </div>

      <div className="absolute inset-x-0 top-0">
        <div className="rounded-b-2xl w-40 h-6 mx-auto bg-black" />
      </div>
      <div className="relative">
        {/* HEADER */}
        <div className="flex justify-end mt-2 mr-5 space-x-1">
          <Bar />
          <Wifi />
          <Truck />
        </div>
        <div className="mt-1 h-0.5 w-10 bg-white/50 mr-7 ml-auto rounded" />

        <div className="flex flex-col items-center mt-2">
          <Lock />
          <p className="font-extralight mt-3 text-6xl text-white">13:37</p>
          <p className="mt-1 text-lg font-light text-white">Monday, June 7</p>
        </div>
        {/* HEADER END */}
        <div className="relative mx-2 mt-4">{children}</div>
      </div>
      <div className="-bottom-0 absolute inset-x-0 h-20">
        <div className="flex justify-between px-10">
          <button className="bg-gray-800/40 backdrop-blur-md p-2 rounded-full">
            <Light />
          </button>
          <button className="bg-gray-800/40 backdrop-blur-md p-2 rounded-full">
            <Camera />
          </button>
        </div>
      </div>
      <div className="bottom-1 absolute inset-x-0">
        <div className="w-28 h-1 mx-auto bg-white rounded" />
      </div>
    </div>
  </div>
);
// ----------- CARD ELEMENTS
const CardHeader = ({}) => (
  <div className="flex justify-between">
    <div>
      <p className="text-xs font-bold">9:30 AM</p>
      <h2 className="text-lg font-bold"> Your morning summary</h2>
    </div>
    <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-full">
      11
    </span>
  </div>
);
const CardNews = ({ imageSrc, imageAlt, title, text }) => (
  <div>
    <div className="relative w-full h-24">
      <Image
        className="object-cover rounded-lg"
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
      />
    </div>

    <h3 className="mt-2 text-xs font-bold leading-tight">{title}</h3>
    <p className="mt-1 text-xs">{text}</p>
  </div>
);

// ----------- ICONS
const Bar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
);
const Wifi = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
const Truck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
  </svg>
);
const Lock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
      clipRule="evenodd"
    />
  </svg>
);
const Light = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
  </svg>
);
const Camera = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);
