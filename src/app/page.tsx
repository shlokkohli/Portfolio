import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/themeToggle";
import { BackgroundLines } from "@/components/ui/background-lines";


export default function Home() {
  return (
    <BackgroundLines className="min-h-screen bg-[#FAF9F6] dark:bg-black">
      <Navbar className="border-black border-1 rounded-full top-6" />
    </BackgroundLines>
  );
}