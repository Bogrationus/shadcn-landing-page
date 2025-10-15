import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "О нас",
  },
  {
    href: "#services",
    label: "Услуги",
  },
  {
    href: "#gallery",
    label: "Галерея",
  },
  {
    href: "#testimonials",
    label: "Отзывы",
  },
  {
    href: "#contact",
    label: "Контакты",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-16 w-screen justify-between px-4">
          <NavigationMenuItem className="flex font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 flex text-xl font-semibold text-slate-700"
            >
              Malířské služby Praha
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-6 w-6 md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-semibold text-slate-800">
                    Malířské služby Praha
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col items-center justify-center gap-2">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className={`w-[200px] ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Заказать расчёт
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden items-center gap-2 md:flex">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] text-slate-600 transition-colors hover:text-slate-900 ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              rel="noreferrer noopener"
              href="#contact"
              className={buttonVariants({
                className: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
              })}
            >
              Заказать расчёт стоимости
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
