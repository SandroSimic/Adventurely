import React from "react";
import { Container } from "../UI/Container";
import Image from "next/image";
import logo from "../../public/logo.png";
import Icon from "../UI/Icon";

export default function Navbar() {
  const links: { name: string; icon: "map" | "property" | "users" }[] = [
    {
      name: "Map",
      icon: "map",
    },
    {
      name: "Property",
      icon: "property",
    },
    {
      name: "Users",
      icon: "users",
    },
  ];

  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div>
            <Image src={logo} width={100} height={100} alt="Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-5">
            {links.map((link, index) => (
              <li
                key={index}
                className="group flex items-center border p-4 rounded-[20px] border-primary transition-all duration-100 hover:bg-secondary hover:cursor-pointer"
              >
                <Icon
                  name={link.icon}
                  size={25}
                  color="black"
                  className=" transition-colors duration-200"
                />
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button className="px-10 py-3 border border-primary text-base text-primary rounded-[20px] transition-colors duration-200 hover:bg-primary hover:text-white">
              Login
            </button>
            <button className="px-10 py-3 bg-primary text-base text-white rounded-[20px] transition-colors duration-200 hover:bg-secondary">
              Register
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
