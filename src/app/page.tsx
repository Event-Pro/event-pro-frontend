import DesktopLanding from "@/components/desktop/DesktopLanding";
import MobileLanding from "../components/mobile/MobileLanding";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 selection:bg-accent selection:text-neutral">
      {/* <MobileLanding /> */}
      <DesktopLanding />
    </main>
  );
}
