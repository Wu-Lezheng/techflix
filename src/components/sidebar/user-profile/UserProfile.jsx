import Styles from "./UserProfile.module.css"

function UserProfile() {
    return (
        <div className={Styles.profileContainer}>
            <img className={Styles.profileImage} src="/images/default-profile-image.jpg" alt="" />
            <div className={Styles.textContainer}>
                <h2 className={Styles.username}>Username</h2>
                <p className={Styles.userType}>User Type</p>
            </div>
        </div>
    );
}

export default UserProfile