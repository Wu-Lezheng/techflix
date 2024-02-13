"use client";

import Link from "next/link";
import Styles from "./NavLink.module.css"
import { usePathname } from "next/navigation";

function NavLink({ item }) {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${Styles.link} ${pathName === item.path && Styles.active}`}>
            {item.title}
        </Link>
    );
}

export default NavLink