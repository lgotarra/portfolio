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
export default function MenuList(props: MenuListProps) {
  return (
    <>
      {props.menuItems.map((item, index) => (
        <div className={props.itemStyle} key={`menu-item-div-${index}`}>
          <Link
            className="w-full h-full flex items-center justify-center"
            key={`menu-item-link-${index}`}
            href={item.href}
            onClick={() => item.onClick()}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </>
  );
}
