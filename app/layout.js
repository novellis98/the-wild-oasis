import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    " Luxurius cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful montains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className}  bg-primary-950 text-primary-100 min-h-screen antialiased flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl w-full  mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer className="text-yellow-50  text-center z-10">
          Questo progetto è stato realizzato seguendo il corso &apos;Master
          modern React from beginner to advanced! Next.js, Context API, React
          Query, Redux, Tailwind, advanced patterns&apos; su
          &apos;https://www.udemy.com/course/the-ultimate-react-course&apos;
        </footer>
      </body>
    </html>
  );
}
