import React from "react";

const Container = ({
  // className,
  children,
}: {
  // className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {children}
    </div>
  );
};

export default Container;
