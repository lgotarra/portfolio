import Link from "next/link";

export interface MenuItem {
  href: string;
  label: string;
}
export interface MenuListProps {
  menuItems: MenuItem[];
  itemStyle?: string;
}
export default function MenuList(props: MenuListProps) {
  return (
    <>
      {props.menuItems.map((item, index) => (
        <Link key={index} href={item.href} className={props.itemStyle}>
          {item.label}
        </Link>
      ))}
    </>
  );
}
