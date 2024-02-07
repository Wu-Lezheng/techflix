import PageLinks from "./page-links/PageLinks";
import UserProfile from "./user-profile/UserProfile";
import Styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={Styles.sideBar}>
            <UserProfile></UserProfile>
            <PageLinks />
        </div>
    );
}

export default Sidebar