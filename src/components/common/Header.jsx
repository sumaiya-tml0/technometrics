import { Link, useLocation } from "react-router";
import { ChevronDown, TextAlignJustify } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import logo from "@/assets/images/rsz_3company_logo.png";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ROUTES } from "@/constants/routes";

const Header = () => {
  const { pathname } = useLocation();

  const solutionPaths = [
    ROUTES.SERVER_STORAGE,
    ROUTES.DATACENTER,
    ROUTES.BMS_FIRE,
    ROUTES.DIGITAL_TRANSFORMATION,
    ROUTES.SOFTWARE_DEVELOPMENT,
    ROUTES.CYBERSECURITY,
  ];

  const isActive = (path) => pathname === path;
  const isSolutionsActive = solutionPaths.includes(pathname);

  const baseClasses =
    "font-semibold text-sm tracking-wide px-4 py-2 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#02b0f0] after:transition-all after:duration-300 after:ease-out transition-colors duration-300 !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent";
  const activeClasses =
    "!text-[#02b0f0] after:w-full data-[state=open]:!text-[#02b0f0] hover:!text-[#02b0f0] focus:!text-[#02b0f0]";
  const inactiveClasses =
    "!text-white after:w-0 hover:after:w-full hover:!text-[#02b0f0] data-[state=open]:!text-white focus:!text-white";

  const dropdownItemClasses =
    "block px-4 py-2.5 rounded-md cursor-pointer text-sm text-gray-700 relative transition-all duration-200 hover:bg-[#02b0f0]/10 hover:text-[#02b0f0] hover:pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-0 before:w-[3px] before:bg-[#02b0f0] before:rounded-full before:transition-all before:duration-200 hover:before:h-1/2";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Technometrics"
              className="h-6 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {/* ABOUT US */}
              <NavigationMenuItem>
                <Link to="/about-us">
                  <NavigationMenuTrigger
                    className={`${baseClasses} inline-flex items-center gap-1 ${
                      isActive("/about-us") ? activeClasses : inactiveClasses
                    }`}
                  >
                    ABOUT US
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="w-55 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          state={{ scrollTo: "our-company" }}
                          className={dropdownItemClasses}
                        >
                          Our Company
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          state={{ scrollTo: "journey" }}
                          className={dropdownItemClasses}
                        >
                          Our Journey
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          state={{ scrollTo: "affiliations" }}
                          className={dropdownItemClasses}
                        >
                          Our OEM Affiliations
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          state={{ scrollTo: "clients" }}
                          className={dropdownItemClasses}
                        >
                          Our Clients
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about-us"
                          state={{ scrollTo: "sustainability" }}
                          className={dropdownItemClasses}
                        >
                          Sustainability
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SOLUTIONS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${baseClasses} inline-flex items-center gap-1 ${
                    isSolutionsActive ? activeClasses : inactiveClasses
                  }`}
                >
                  SOLUTIONS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[320px] p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={ROUTES.SERVER_STORAGE}
                          className={dropdownItemClasses}
                        >
                          Server, Storage, Backup & Virtualization
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={ROUTES.DATACENTER}
                          className={dropdownItemClasses}
                        >
                          Datacenter, Power & Passive Infrastructure
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={ROUTES.BMS_FIRE}
                          className={dropdownItemClasses}
                        >
                          BMS, Fire, Surveillance & Automation
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={ROUTES.DIGITAL_TRANSFORMATION}
                          className={dropdownItemClasses}
                        >
                          Digital Transformation
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={ROUTES.SOFTWARE_DEVELOPMENT}
                          className={dropdownItemClasses}
                        >
                          Bespoke Software Development
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to={ROUTES.CYBERSECURITY}
                          className={dropdownItemClasses}
                        >
                          Cybersecurity
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* CONTACT US */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to={ROUTES.CONTACT}
                    className={`${baseClasses} ${
                      isActive(ROUTES.CONTACT) ? activeClasses : inactiveClasses
                    }`}
                  >
                    CONTACT US
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* CAREER */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to={ROUTES.CAREERS}
                    className={`${baseClasses} ${
                      isActive(ROUTES.CAREERS) ? activeClasses : inactiveClasses
                    }`}
                  >
                    CAREER
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Sheet className="lg:hidden md:flex">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden bg-transparent md:flex border-[#02b0f0] text-[#02b0f0] hover:bg-white/10 hover:text-white"
              >
                <TextAlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-none bg-linear-to-b from-slate-900 to-slate-800 p-0 overflow-y-auto w-full sm:w-[350px] sm:max-w-[350px]">
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-white/10">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Technometrics"
                    className="h-5 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Mobile Navigation */}
              <nav className="p-2">
                <Menubar className="flex-col items-stretch border-none bg-transparent shadow-none h-auto gap-2 w-full">
                  {/* ABOUT US */}
                  <MenubarMenu>
                    <MenubarTrigger
                      className={`w-full font-semibold text-sm tracking-wide px-4 py-3 cursor-pointer inline-flex items-center justify-between rounded-lg transition-all duration-200 focus:bg-white/5 data-[state=open]:bg-white/5 ${
                        isActive("/about-us")
                          ? "text-[#02b0f0] bg-[#02b0f0]/10"
                          : "text-white hover:bg-white/5 hover:text-[#02b0f0]"
                      }`}
                    >
                      <Link to="/about-us" className="flex-1 text-left">
                        ABOUT US
                      </Link>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </MenubarTrigger>
                    <MenubarContent className="bg-slate-800 border-white/10 shadow-xl rounded-lg p-2 min-w-[200px]">
                      <Link to="/about-us" state={{ scrollTo: "our-company" }}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Our Company
                        </MenubarItem>
                      </Link>
                      <Link to="/about-us" state={{ scrollTo: "journey" }}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Our Journey
                        </MenubarItem>
                      </Link>
                      <Link to="/about-us" state={{ scrollTo: "affiliations" }}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Our OEM Affiliations
                        </MenubarItem>
                      </Link>
                      <Link to="/about-us" state={{ scrollTo: "clients" }}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Our Clients
                        </MenubarItem>
                      </Link>
                      <Link to="/about-us" state={{ scrollTo: "sustainability" }}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Sustainability
                        </MenubarItem>
                      </Link>
                    </MenubarContent>
                  </MenubarMenu>

                  {/* SOLUTIONS */}
                  <MenubarMenu>
                    <MenubarTrigger
                      className={`w-full font-semibold text-sm tracking-wide px-4 py-3 cursor-pointer inline-flex items-center justify-between rounded-lg transition-all duration-200 focus:bg-white/5 data-[state=open]:bg-white/5 ${
                        isSolutionsActive
                          ? "text-[#02b0f0] bg-[#02b0f0]/10"
                          : "text-white hover:bg-white/5 hover:text-[#02b0f0]"
                      }`}
                    >
                      SOLUTIONS
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </MenubarTrigger>
                    <MenubarContent className="bg-slate-800 border-white/10 shadow-xl rounded-lg p-2 min-w-[280px]">
                      <Link to={ROUTES.SERVER_STORAGE}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Server, Storage, Backup & Virtualization
                        </MenubarItem>
                      </Link>
                      <Link to={ROUTES.DATACENTER}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Datacenter, Power & Passive Infrastructure
                        </MenubarItem>
                      </Link>
                      <Link to={ROUTES.BMS_FIRE}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          BMS, Fire, Surveillance & Automation
                        </MenubarItem>
                      </Link>
                      <Link to={ROUTES.DIGITAL_TRANSFORMATION}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Digital Transformation
                        </MenubarItem>
                      </Link>
                      <Link to={ROUTES.SOFTWARE_DEVELOPMENT}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Bespoke Software Development
                        </MenubarItem>
                      </Link>
                      <Link to={ROUTES.CYBERSECURITY}>
                        <MenubarItem className="px-4 py-3 text-white/80 hover:text-[#02b0f0] hover:bg-[#02b0f0]/10 rounded-md cursor-pointer transition-all duration-200 focus:bg-[#02b0f0]/10 focus:text-[#02b0f0]">
                          Cybersecurity
                        </MenubarItem>
                      </Link>
                    </MenubarContent>
                  </MenubarMenu>

                  {/* CONTACT US */}
                  <MenubarMenu>
                    <Link to={ROUTES.CONTACT} className="w-full">
                      <MenubarTrigger
                        className={`w-full font-semibold text-sm tracking-wide px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 focus:bg-white/5 ${
                          isActive(ROUTES.CONTACT)
                            ? "text-[#02b0f0] bg-[#02b0f0]/10"
                            : "text-white hover:bg-white/5 hover:text-[#02b0f0]"
                        }`}
                      >
                        CONTACT US
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>

                  {/* CAREER */}
                  <MenubarMenu>
                    <Link to={ROUTES.CAREERS} className="w-full">
                      <MenubarTrigger
                        className={`w-full font-semibold text-sm tracking-wide px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 focus:bg-white/5 ${
                          isActive(ROUTES.CAREERS)
                            ? "text-[#02b0f0] bg-[#02b0f0]/10"
                            : "text-white hover:bg-white/5 hover:text-[#02b0f0]"
                        }`}
                      >
                        CAREER
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>
                </Menubar>

               
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
