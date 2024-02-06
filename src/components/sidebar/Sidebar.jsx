import PageLinks from "./page-links/PageLinks";
import Styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={Styles.sideBar}>
            <div>Profile</div>
            <div>
                <PageLinks />
            </div>
        </div>
    );
}

export default Sidebar