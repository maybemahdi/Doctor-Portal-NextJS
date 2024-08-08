import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  // Adjust subsets as needed
  display: "swap", // Improve performance
  // Add other options like weight, variable if required
  weight: ['400', '700'],
});

export const metadata = {
  title: "Doctors Portal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Nav />
        <div className="w-[90%] mt-5 mx-auto">{children}</div>
      </body>
    </html>
  );
}
