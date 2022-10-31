import { ReactNode } from "react";
import "../styles/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Responsive Menu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="bg-orange-50">{children}</div>
      </body>
    </html>
  );
}
