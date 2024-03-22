import NavLink from "./nav-link/NavLink";
import styles from "./PageLinks.module.css"
import prisma from "@/lib/prisma"

import { AiFillFolder } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

async function getRootCategories() {
    try {
        const rootCategories = await prisma.category.findMany({
            where: { parentCategoryId: null }
        });
        return rootCategories;
    } catch (error) {
        console.error('Error fetching categories with no parent:', error);
        return [];
    }
}

export default async function PageLinks() {

    const rootCategories = await getRootCategories();
    console.log(rootCategories);

    let links = [
        { title: "Home", path: "/home" },
        { title: "Default Category", path: "/category" },
    ];

    return (
        <div className={styles.linkContainer}>
            <NavLink item={{ title: "Home", path: "/home", icon: <AiFillHome size={20} /> }}></NavLink>
            <NavLink item={{ title: "Default Category Long Name", path: "/category", icon: <AiFillFolder size={20} /> }}></NavLink>
            <NavLink item={{ title: "Settings", path: "/account", icon: <AiFillSetting size={20} /> }}></NavLink>
        </div>
        // <div className={styles.linkContainer}>
        //     {links.map(link =>
        //         <NavLink item={link} key={link.title}></NavLink>
        //     )}
        // </div>
    );
}
