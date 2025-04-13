"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { allNavItems } from "@/data/nav-data";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavbar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline"></Button> */}
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <div>
          <div className="flex items-center justify-between">
            <SheetClose asChild>
              <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Elegance
                </span>
                <span>Salon</span>
              </Link>
            </SheetClose>
          </div>
          <div className="mt-6 flow-">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {allNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                    // onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {/* <ThemeCustomizer /> */}
                    {/* <ModeToggle /> */}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    onClick={() => {
                      //   setIsCartOpen(true);
                    }}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Open cart</span>
                    {/* {cartItemCount > 0 && ( */}
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full"
                    >
                      {/* {cartItemCount} */}
                    </Badge>
                    {/* )} */}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
