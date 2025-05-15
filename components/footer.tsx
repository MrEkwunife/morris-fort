import React from "react";
import Link from "next/link";
import { ContactSocials } from "./contactLinks";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="w-[92%] mx-auto pt-8 lg:w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description section */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold">Moris Forte</h2>
            <p className="text-gray-600 mb-4">
              Green Energy is a long established fact that a reader will be
              distracted by the readable content of a page when.
            </p>
            <ContactSocials />
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Consultancy
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Solar System
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Solar Panel
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Style Guide
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Term & Conditions
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Warranty
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Damage Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
