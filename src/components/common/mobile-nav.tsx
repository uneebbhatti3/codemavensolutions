"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks, serviceGroups } from "@/data/services-menu-data";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" />}
        aria-label="Open navigation"
      >
        <Menu aria-hidden="true" className="p-0 m-0" />
      </SheetTrigger>
      <SheetContent
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a[href]")
          )
            setOpen(false);
        }}
        className="pb-8 px-4 flex flex-col h-full bg-background border-none shadow-xl rounded-l-2xl"
      >
        <SheetHeader className="shrink-0 pb-4 flex flex-row items-center gap-3 px-0">
          <SheetTitle className="sr-only">Site navigation</SheetTitle>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Codemaven Solutions"
              width={40}
              height={40}
            />
          </Link>
        </SheetHeader>

        <nav
          aria-label="Mobile navigation"
          className="min-h-0 flex-1 overflow-y-auto pr-1"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#a0a0a088 #e0e0e022",
          }}
        >
          <Accordion className="mt-0 mb-0">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="py-2 group text-base font-semibold rounded-lg hover:bg-accent transition">
                <span>Services</span>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                {serviceGroups.map((group, idx) => (
                  <section
                    key={group.title}
                    aria-labelledby={
                      "mobile-" + group.title.replaceAll(" ", "-").toLowerCase()
                    }
                    className="mb-3"
                  >
                    <h2
                      id={
                        "mobile-" +
                        group.title.replaceAll(" ", "-").toLowerCase()
                      }
                      className={`pb-2 pt-3 text-[11px] font-semibold uppercase tracking-widest
                        ${idx === 0 ? "text-blue-500" : "text-green-600"}
                        dark:text-muted-foreground`}
                    >
                      {group.title}
                    </h2>
                    <ul className="grid gap-2">
                      {group.services.map((service) => (
                        <li key={service.title}>
                          <Link
                            href={service.href}
                            className="
    flex items-center rounded-lg group
    no-underline hover:no-underline
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset
    hover:bg-muted transition
    active:bg-accent gap-2 px-2
  "
                          >
                            <span
                              className={`
                                flex size-10 shrink-0 items-center justify-center rounded-md
                                group-hover:scale-105 transition ${service.iconClassName}
                              `}
                            >
                              <service.icon
                                className={`size-5 ${service.iconClassName}`}
                                aria-hidden="true"
                              />
                            </span>

                            <span className="flex min-w-0 flex-col">
                              <span className="text-sm font-semibold text-foreground no-underline">
                                {service.title}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Move navLinks up, remove gap between navLinks and accordion */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="
                  block py-2 rounded-lg text-base font-medium transition 
                  text-foreground hover:bg-muted/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <Link href="https://cal.com/codemavensolutions/30min">
            <Button>Book a call</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
