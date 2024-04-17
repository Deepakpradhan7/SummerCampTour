import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
  <div className=" xl:px-36">
  <Hero />
  <Camp/>
  <Guide />
    <Features/>
    <GetApp/>
  </div>
  );
}
