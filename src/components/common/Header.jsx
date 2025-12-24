import { Link } from "react-router";
import { ChevronDown, Menu, TextAlignJustify, X } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

import logo from "@/assets/images/rsz_3company_logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Technometrics"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <Menubar className="hidden lg:flex border-none bg-transparent shadow-none h-auto p-0 gap-1">
            <MenubarMenu>
              <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                HOME
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1">
                ABOUT US
                <ChevronDown className="h-4 w-4" />
              </MenubarTrigger>
              <MenubarContent className="shadow-lg rounded-lg p-2">
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Our Company
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5  hover:bg-gray-50 rounded-md cursor-pointer">
                  Our Journey
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Our OEM Affiliations
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Our Clients
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5  hover:bg-gray-50 rounded-md cursor-pointer">
                  Sustainability
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className=" font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1">
                SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </MenubarTrigger>
              <MenubarContent className="min-w-70  shadow-lg rounded-lg p-2">
                <MenubarItem className="px-4 py-2.5  hover:bg-gray-50 rounded-md cursor-pointer">
                  Server, Storage, Backup & Virtualization
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Datacenter, Power & Passive Infrastructure
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  BMS, Fire, Surveillance & Automation
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Digital Transformation
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Bespoke Software Development
                </MenubarItem>
                <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                  Cybersecurity
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                CONTACT US
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className=" font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                CAREER
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          {/* Mobile Menu Button */}
          <Sheet className="lg:hidden md:flex">
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden md:flex">
                <TextAlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-none">
              <Menubar className="flex-col items-start border-none bg-transparent shadow-none h-auto pt-10 gap-1">
                <MenubarMenu>
                  <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                    HOME
                  </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1">
                    ABOUT US
                    <ChevronDown className="h-4 w-4" />
                  </MenubarTrigger>
                  <MenubarContent className="shadow-lg rounded-lg p-2">
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Our Company
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5  hover:bg-gray-50 rounded-md cursor-pointer">
                      Our Journey
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Our OEM Affiliations
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Our Clients
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5  hover:bg-gray-50 rounded-md cursor-pointer">
                      Sustainability
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className=" font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1">
                    SOLUTIONS
                    <ChevronDown className="h-4 w-4" />
                  </MenubarTrigger>
                  <MenubarContent className="min-w-70  shadow-lg rounded-lg p-2">
                    <MenubarItem className="px-4 py-2.5  hover:bg-gray-50 rounded-md cursor-pointer">
                      Server, Storage, Backup & Virtualization
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Datacenter, Power & Passive Infrastructure
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      BMS, Fire, Surveillance & Automation
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Digital Transformation
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Bespoke Software Development
                    </MenubarItem>
                    <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                      Cybersecurity
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                    CONTACT US
                  </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className=" font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                    CAREER
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
