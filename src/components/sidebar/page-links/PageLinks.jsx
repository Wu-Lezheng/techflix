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
                <div className={Styles.linkContainer}>

                    <Link className={Styles.link} href={link.path} key={link.title}>
                        {link.title}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PageLinks