import PageLinks from "./page-links/PageLinks";
import UserProfile from "./user-profile/UserProfile";
import AddLabel from "./add-label/AddLabel";
import Styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={Styles.sideBar}>
            <UserProfile></UserProfile>
            <PageLinks />
            <AddLabel></AddLabel>
        </div>
    );
}

export default Sidebar