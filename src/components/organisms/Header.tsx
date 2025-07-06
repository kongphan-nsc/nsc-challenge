import React from "react";
import Button from "@/components/atoms/Button";

const Header: React.FC = () => {
  return (
    <div className="bg-surface shadow-md bg-skeleton">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">Logo</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-on-surface hover:text-primary">
              Home
            </a>
            <a href="#" className="text-on-surface hover:text-primary">
              About
            </a>
            <a href="#" className="text-on-surface hover:text-primary">
              Services
            </a>
            <a href="#" className="text-on-surface hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button will go here */}
            <p className="text-on-surface">Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
