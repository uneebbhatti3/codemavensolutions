import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { ServicesMenuItems } from "../services-menu-items";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";
import { navLinks } from "@/data/services-menu-data";
import { ArrowUpRightIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b fixed w-full top-0 bg-white/70 dark:bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-white/60 supports-backdrop-filter:dark:bg-background/80 z-50">
      <div className="py-5 px-5 md:px-16 flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="Codemaven Solutions"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-5">
          <NavigationMenu aria-label="Primary navigation">
            <NavigationMenuList>
              <ServicesMenuItems />
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    key={link.id}
                    className={navigationMenuTriggerStyle()}
                    render={<Link href={link.href}>{link.label}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center justify-between gap-2">
          <ModeToggle />
          <Link
            href={"https://cal.com/codemavensolutions/30min"}
            className={"hidden lg:inline-flex"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Book a call
              <ArrowUpRightIcon aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
          </Link>

          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
