import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed flex h-full w-[6%] flex-col items-center justify-start pt-[10%] md:pt-[5%]">
      <Link
        href="/"
        style={{
          flex: "0 auto",
        }}
        className="link mb-10 -rotate-90 !border-transparent pl-5 pr-4 text-center text-[10px] font-medium uppercase tracking-[5px]"
      >
        HOME
      </Link>

      <div className="mb-20 mt-3 h-24 w-[1px] bg-[#1a1818]"></div>
      <div className="mb-10 mt-auto hidden -rotate-90 pl-5 pr-4 text-center text-[10px] font-medium uppercase tracking-[5px] md:block">
        ©2024
      </div>
    </nav>
  );
}
