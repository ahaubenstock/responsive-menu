import { ReactNode } from "react";
import "../styles/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="bg-orange-50 h-screen w-screen">{children}</div>;
}
