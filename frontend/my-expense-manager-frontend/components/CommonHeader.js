import * as React from "react";
import Image from "next/image";

const styles = {
  common_header_logo: {
    width: "20%",
    height: "60px",
    cursor: "pointer",
  },
};

export default function CommonHeader() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className="items-center">
          <a
            className="mt-2 mr-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mt-0"
            href="#"
          >
            <img
              className="items-center"
              src="logo.png"
              style={styles["common_header_logo"]}
              alt=""
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
