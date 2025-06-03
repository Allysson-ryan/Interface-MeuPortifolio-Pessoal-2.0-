import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-center font-secondary max-sm:text-[27px] sm:text-[50px] text-[60px] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
