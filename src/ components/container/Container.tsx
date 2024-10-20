import React from "react";

const Container = ({
  // className,
  children,
}: {
  // className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-2">
      {children}
    </div>
  );
};

export default Container;
