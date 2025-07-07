import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <div className="bg-surface text-on-surface p-4 text-center mt-12">
      <p>&copy; 2024 Fictitious Company. All rights reserved.</p>
    </div>
  );
};

export const Footer = React.memo(FooterComponent);
export default Footer;
