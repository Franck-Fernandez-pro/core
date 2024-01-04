import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <main className="relative py-[12%]">{children}</main>;
}
