import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  return (
    <div className="bg-surface shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Logo
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-on-surface hover:text-primary">
              Home
            </Link>
            <Link
              to="/performance"
              className="text-on-surface hover:text-primary">
              Performance
            </Link>
            <Link
              to="/challenge"
              className="text-on-surface hover:text-primary">
              Challenge
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button will go here */}
            <p className="text-on-surface">Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = React.memo(HeaderComponent);
export default Header;
