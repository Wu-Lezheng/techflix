import PageLinks from "./page-links/PageLinks";
import AddNew from "./add-new/AddNew";
import Image from "next/image";
import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.logoSection}>
                <Image src="/logo.png" alt="Logo" width={48} height={48}></Image>
                <h1 style={{ fontSize: "1.7rem" }}>TECHFLIX</h1>
            </div>
            <PageLinks />
            <AddNew></AddNew>
        </div>
    );
}

export default Sidebar