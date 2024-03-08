import { Button } from "primereact/button";
import Image from "next/image";
import CompanyHighlight from "@/components/company-highlight/CompanyHighlight";

import 'primeicons/primeicons.css';
import stBuilding from '../../public/st-building.jpg';
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
                    <h1>Discover Tomorrow. Explore Tech Wonders with <span className={styles.highlightedName}>Techflix</span> </h1>
                    <p className={styles.description}> Dive into a realm where cutting-edge ST Engineering products, ranging from smart city & digital solutions to defence & public safety technologies,
                        converge to redefine the boundaries of possibility.
                    </p>
                    <Button label="Get Started" className={styles.gradientButton}></Button>
                </div>

                <div className={styles.introSection}>
                    <h2 style={{ minWidth: "20%" }}>Introduction To Techflix</h2>
                    <p className={styles.description}>Techflix is a website for ST Engineering to showcase products and demos under various categories,
                        offering enthusiasts and industry professionals alike the opportunity to explore, interact, and envision the future.
                        Join us as we embrace the forefront of innovation. Embark on a voyage of exploration, empowerment, and endless fascination.</p>
                </div>

                <div className={styles.aboutSection}>
                    <Image src={stBuilding} alt="" className={styles.aboutImage}></Image>
                    <div className={styles.aboutText}>
                        <h2>About ST Engineering</h2>
                        <p className={styles.aboutDescription}>
                            ST Engineering is a leading multinational engineering group headquartered in Singapore.
                            It provides integrated solutions in the aerospace, electronics, land systems, and marine sectors. It operates globally, serving customers in over 100 countries.
                            ST Engineering puts emphasis on innovation and technology. It invests significantly in research and development to develop cutting-edge solutions and maintain a competitive edge in its various industries.
                        </p>
                    </div>
                </div>

                <div className={styles.introSection}>
                    <h2 style={{ minWidth: "20%" }}>Why ST Engineering</h2>
                    <p className={styles.description}>ST Engineering operates globally with a presence in over 100 countries.
                        The company has a strong track record of delivering high-quality solutions and services to a diverse range of customers, including government agencies, commercial enterprises, and defense organisations.
                        Partnering with ST Engineering gives you access to a wealth of expertise across a wide range of domains, including aerospace, electronics, land systems, and marine sectors.
                    </p>
                </div>

                <CompanyHighlight></CompanyHighlight>
            </div>
        </>
    );
}