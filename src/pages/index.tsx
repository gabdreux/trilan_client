import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "latin-ext"] });



export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>Home</div>
      
    </main>
  );
}
