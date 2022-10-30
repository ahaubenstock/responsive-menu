import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="rounded-sm bg-white shadow-sm p-5">{children}</div>
    </div>
  );
}
