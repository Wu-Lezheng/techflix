import NavLink from "./nav-link/NavLink";
import Styles from "./PageLinks.module.css"

function PageLinks() {

    let links = [
        { title: "Home", path: "/" },
        { title: "Default Category", path: "/products" },
    ];

    return (
        <div className={Styles.linkContainer}>
            {links.map(link =>
                <NavLink item={link} key={link.title}></NavLink>
            )}
        </div>
    );
}

export default PageLinks