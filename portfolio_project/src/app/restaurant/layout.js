import "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FoodLinx",
  description: "Online Food Delivery Software/Application",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
