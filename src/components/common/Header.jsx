import { Link } from "react-router";
import { ChevronDown, TextAlignJustify } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

import logo from "@/assets/images/rsz_3company_logo.png";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
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
              <Link to="/">
                <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer text-white">
                  HOME
                </MenubarTrigger>
              </Link>
            </MenubarMenu>

            <MenubarMenu>
              <Link to="/about-us">
                <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1 text-white">
                  ABOUT US
                  <ChevronDown className="h-4 w-4" />
                </MenubarTrigger>
              </Link>
              <MenubarContent className="shadow-lg rounded-lg p-2">
                <Link to="/about-us" state={{ scrollTo: "our-company" }}>
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Our Company
                  </MenubarItem>
                </Link>
                <Link to="/about-us" state={{ scrollTo: "journey" }}>
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Our Journey
                  </MenubarItem>
                </Link>
                <Link to="/about-us" state={{ scrollTo: "affiliations" }}>
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Our OEM Affiliations
                  </MenubarItem>
                </Link>
                <Link to="/about-us" state={{ scrollTo: "clients" }}>
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Our Clients
                  </MenubarItem>
                </Link>
                <Link to="/about-us" state={{ scrollTo: "sustainability" }}>
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Sustainability
                  </MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1 text-white">
                SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </MenubarTrigger>

              <MenubarContent className="min-w-70 shadow-lg rounded-lg p-2">
                <Link to="/server-storage-backup-virtualization">
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Server, Storage, Backup & Virtualization
                  </MenubarItem>
                </Link>
                <Link to="/datacenter-power-passive-infrastructure">
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Datacenter, Power & Passive Infrastructure
                  </MenubarItem>
                </Link>
                <Link to="/bms-fire-surveillance-automation">
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    BMS, Fire, Surveillance & Automation
                  </MenubarItem>
                </Link>
                <Link to="/digital-transformation">
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Digital Transformation
                  </MenubarItem>
                </Link>
                <Link to="/bespoke-software-development">
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Bespoke Software Development
                  </MenubarItem>
                </Link>
                <Link to="/cyber-security">
                  <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                    Cybersecurity
                  </MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <Link to="/contact">
                <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer text-white">
                  CONTACT US
                </MenubarTrigger>
              </Link>
            </MenubarMenu>

            <MenubarMenu>
              <Link to="/careers">
                <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer text-white">
                  CAREER
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>

          {/* Mobile Menu Button */}
          <Sheet className="lg:hidden md:flex">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden md:flex border-[#02b0f0] text-[#02b0f0] hover:bg-white/10 hover:text-white"
              >
                <TextAlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-none">
              <Menubar className="flex-col items-start border-none bg-transparent shadow-none h-auto pt-10 gap-1">
                <MenubarMenu>
                  <Link to="/">
                    <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                      HOME
                    </MenubarTrigger>
                  </Link>
                </MenubarMenu>

                <MenubarMenu>
                  <Link to="/about-us">
                    <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1">
                      ABOUT US
                      <ChevronDown className="h-4 w-4" />
                    </MenubarTrigger>
                  </Link>
                  <MenubarContent className="shadow-lg rounded-lg p-2">
                    <Link to="/about-us" state={{ scrollTo: "our-company" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Our Company
                      </MenubarItem>
                    </Link>
                    <Link to="/about-us" state={{ scrollTo: "journey" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Our Journey
                      </MenubarItem>
                    </Link>
                    <Link to="/about-us" state={{ scrollTo: "affiliations" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Our OEM Affiliations
                      </MenubarItem>
                    </Link>
                    <Link to="/about-us" state={{ scrollTo: "clients" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Our Clients
                      </MenubarItem>
                    </Link>
                    <Link to="/about-us" state={{ scrollTo: "sustainability" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Sustainability
                      </MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <Link to="/solutions">
                    <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer inline-flex items-center gap-1">
                      SOLUTIONS
                      <ChevronDown className="h-4 w-4" />
                    </MenubarTrigger>
                  </Link>
                  <MenubarContent className="min-w-70 shadow-lg rounded-lg p-2">
                    <Link
                      to="/solutions"
                      state={{ scrollTo: "server-storage" }}
                    >
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Server, Storage, Backup & Virtualization
                      </MenubarItem>
                    </Link>
                    <Link to="/solutions" state={{ scrollTo: "datacenter" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Datacenter, Power & Passive Infrastructure
                      </MenubarItem>
                    </Link>
                    <Link to="/solutions" state={{ scrollTo: "bms-fire" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        BMS, Fire, Surveillance & Automation
                      </MenubarItem>
                    </Link>
                    <Link
                      to="/solutions"
                      state={{ scrollTo: "digital-transformation" }}
                    >
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Digital Transformation
                      </MenubarItem>
                    </Link>
                    <Link
                      to="/solutions"
                      state={{ scrollTo: "software-development" }}
                    >
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Bespoke Software Development
                      </MenubarItem>
                    </Link>
                    <Link to="/solutions" state={{ scrollTo: "cybersecurity" }}>
                      <MenubarItem className="px-4 py-2.5 hover:bg-gray-50 rounded-md cursor-pointer">
                        Cybersecurity
                      </MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <Link to="/contact">
                    <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                      CONTACT US
                    </MenubarTrigger>
                  </Link>
                </MenubarMenu>

                <MenubarMenu>
                  <Link to="/careers">
                    <MenubarTrigger className="font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer">
                      CAREER
                    </MenubarTrigger>
                  </Link>
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
