import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import AuthProvider from "@/services/AuthProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  // Adjust subsets as needed
  display: "swap", // Improve performance
  // Add other options like weight, variable if required
  weight: ["300", "400", "700", "800", "900"],
});

export const metadata = {
  title: "Doctors Portal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster/>
        <AuthProvider>
          <Nav />
          <div className="w-[90%] mt-5 mx-auto">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
