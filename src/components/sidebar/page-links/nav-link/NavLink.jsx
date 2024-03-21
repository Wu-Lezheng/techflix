"use client";

import Link from "next/link";
import styles from "./NavLink.module.css"
import { usePathname } from "next/navigation";

import { AiOutlineRight } from "react-icons/ai";

function NavLink({ item }) {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${styles.link} ${pathName === item.path && styles.active}`}>
            <div className={styles.linkContent}>
                <div style={{ display: "flex", alignItems: "center" }}>{item.icon}</div>
                <div className={styles.title}>
                    <span>{item.title}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}><AiOutlineRight /></div>
            </div>
        </Link>
    );
}

export default NavLink