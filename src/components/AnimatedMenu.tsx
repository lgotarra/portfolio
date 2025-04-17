import React, { useRef, useEffect, useState } from "react";
import MenuList, { MenuItem } from "./MenuList";

export interface AnimatedMenuProps {
  isMenuOpen: boolean;
  menuItems: MenuItem[];
  itemStyle?: string;
}

const AnimatedMenu = ({
  isMenuOpen,
  menuItems,
  itemStyle,
}: AnimatedMenuProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      setHeight(contentRef.current?.scrollHeight ?? 0);
    } else {
      setHeight(0);
    }
  }, [isMenuOpen]);

  return (
    <div
      className="transition-all ease-in-out duration-500 absolute top-full left-0 w-full sm:hidden z-40 overflow-hidden"
      style={{
        height,
        visibility: isMenuOpen ? "visible" : "hidden",
        opacity: isMenuOpen ? 1 : 0,
      }}
    >
      <div ref={contentRef}>
        {MenuList({
          menuItems,
          itemStyle,
        })}
      </div>
    </div>
  );
};

export default AnimatedMenu;
