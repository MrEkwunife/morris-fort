"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center relative">
      <nav className="flex justify-between items-center py-4 px-6 shadow-sm w-[95%] rounded-2xl mx-auto mt-4">
        <div className="text-xl font-bold">Morris Forte</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/about" className="hover:border-b-1">
            About
          </Link>
          <Link href="/services" className="hover:border-b-1">
            Services
          </Link>
          <Link href="/contact" className="hover:border-b-1">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Positioned outside the nav */}
      {isMenuOpen && (
        <div className="absolute top-16 w-[95%] bg-white shadow-lg rounded-xl py-3 z-50 md:hidden">
          <div className="flex flex-col w-full">
            <Link href="/about" className="py-3 px-6 hover:bg-gray-100 w-full">
              About
            </Link>
            <Link
              href="/services"
              className="py-3 px-6 hover:bg-gray-100 w-full"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="py-3 px-6 hover:bg-gray-100 w-full"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
