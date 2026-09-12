"use client";

import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceGroups } from "@/data/services-menu-data";

export function ServicesMenuItems() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[min(90vw,60rem)] gap-6 p-2 sm:grid-cols-3">
          {serviceGroups.map((group, idx) => (
            <section
              key={group.title}
              aria-labelledby={group.title.replaceAll(" ", "-").toLowerCase()}
            >
              <h2
                id={group.title.replaceAll(" ", "-").toLowerCase()}
                className={`px-2 pb-2 pt-3 text-xs font-semibold uppercase tracking-widest
                        ${idx === 0 ? "text-blue-500" : "text-green-600"}
                        dark:text-muted-foreground`}
              >
                {group.title}
              </h2>
              <ul className="grid gap-1">
                {group.services.map((service) => (
                  <li key={service.title}>
                    <NavigationMenuLink
                      render={
                        <Link
                          href={service.href}
                          className="flex items-start gap-3 p-2.5"
                        >
                          <span
                            className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md ${service.iconClassName}`}
                          >
                            <service.icon
                              className="size-5"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="flex min-w-0 flex-col gap-1">
                            <span className="text-sm font-semibold leading-5">
                              {service.title}
                            </span>
                            <span className="line-clamp-2 text-xs leading-4 text-muted-foreground">
                              {service.description}
                            </span>
                          </span>
                        </Link>
                      }
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
