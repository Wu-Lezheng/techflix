import Link from "next/link";
import Styles from "./page-links.module.css"

function PageLinks() {

    let links = [
        { title: "Home", path: "/" },
        { title: "Default Category", path: "/products" },
    ];

    return (
        <div>
            {links.map(link =>
                <Link className={Styles.link} href={link.path} key={link.title}>
                    {link.title}
                </Link>
            )}
        </div>
    );
}

export default PageLinks