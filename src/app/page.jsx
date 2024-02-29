import { Button } from "primereact/button";

import 'primeicons/primeicons.css';
import styles from "./page.module.css"

export default function Landing() {
    return (
        <>
            <div className={styles.landingTop}>
                <p>Logo</p>
                <div className={styles.topButtonContainer}>
                    <Button label="Contact Us"></Button>
                    <Button label="Sign In"></Button>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.titleSection}>
                    <h1>Discover Tomorrow. Explore Tech Wonders with <span className={styles.webName}>Techflix</span> </h1>
                    <p className={styles.titleDescription}> Dive into a realm where cutting-edge ST Engineering products, ranging from smart city & digital solutions to defence & public safety technologies,
                        converge to redefine the boundaries of possibility.
                    </p>
                    <Button label="Get Started" className={styles.registerButton}></Button>
                </div>

                <div className={styles.introSection}>
                    <h2 style={{ minWidth: "20%" }}>Introduction To Techflix <i className="pi pi-arrow-right"></i> </h2>
                    <p>Techflix is a website for ST Engineering to showcase products and demos under various categories,
                        offering enthusiasts and industry professionals alike the opportunity to explore, interact, and envision the future.
                        Join us as we embrace the forefront of innovation. Embark on a voyage of exploration, empowerment, and endless fascination.</p>
                </div>
            </div >
        </>
    );
}