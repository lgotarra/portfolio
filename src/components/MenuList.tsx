import Link from "next/link";

export interface MenuItem {
  href: string;
  label: string;
  onClick: () => void;
}
export interface MenuListProps {
  menuItems: MenuItem[];
  itemStyle?: string;
}
export default function MenuList({ menuItems, itemStyle }: MenuListProps) {
  return (
    <>
      {menuItems.map((item, index) => (
        <div key={`menu-item-div-${index}`}>
          <Link
            key={`menu-item-link-${index}`}
            href={item.href}
            onClick={() => item.onClick()}
            className={itemStyle}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </>
  );
}
