import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Youtube } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/AHMADRAZA7867", icon: <Facebook /> },
    { name: "Twitter", link: "https://x.com/AhmadRaza_Real", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/ahmad-raza-41a68a229/", icon: <Linkedin /> },
    { name: "Youtube", link: "https://www.youtube.com/@AhmadRaza-vl4ud", icon: <Youtube /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
