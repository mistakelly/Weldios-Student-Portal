import React from "react";

function MainLayout({ children }) {
  return (
    <section className="">
      <div className="w-full">{children}</div>
    </section>
  );
}

export default MainLayout;
