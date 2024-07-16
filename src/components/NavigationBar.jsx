import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Project", "About", "Blog", "Contact"];

  return (
    <Navbar
      maxWidth="2xl"
      position="sticky"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black text-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <span className="text-xl">@/</span>
            <span className=" text-2xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-600">
              rofikul-resan
            </span>{" "}
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 w-full  ">
        <NavbarBrand className="mr-10">
          <p className="font-bold text-inherit">
            <span className="text-xl">@/</span>
            <span className=" text-2xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-600">
              rofikul-resan
            </span>{" "}
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem
          className="hover:-translate-y-1 duration-150 hover:animate-bounce"
          isActive={true}
        >
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className="hover:-translate-y-1 duration-150 hover:animate-bounce"
          isActive={false}
        >
          <Link color="foreground" href="#">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem
          className="hover:-translate-y-1 duration-150 hover:animate-bounce"
          isActive={false}
        >
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem
          className="hover:-translate-y-1 duration-150 hover:animate-bounce"
          isActive={false}
        >
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem
          className="hover:-translate-y-1 duration-150 hover:animate-bounce"
          isActive={false}
        >
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button variant="ghost" color="success">
            Get resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
