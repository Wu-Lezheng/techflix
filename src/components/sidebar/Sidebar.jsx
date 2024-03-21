import PageLinks from "./page-links/PageLinks";
import AddLabel from "./add-label/AddLabel";
import Image from "next/image";
import Styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={Styles.sideBar}>
            <div className={Styles.logoSection}>
                <Image src="/logo.png" alt="Logo" width={48} height={48}></Image>
                <h1 style={{ fontSize: "1.7rem" }}>TECHFLIX</h1>
            </div>
            <PageLinks />
            <AddLabel></AddLabel>
        </div>
    );
}

export default Sidebar