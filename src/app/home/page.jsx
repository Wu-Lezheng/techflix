import HomeGallery from "@/components/home-gallery/HomeGallery";
import RecentlyViewed from "@/components/recently-viewed/RecentlyViewed";
import Favourites from "@/components/favourites/Favourites";
import 'primeicons/primeicons.css';

import styles from "./page.module.css"

export default function Home() {
    return (
        <main>
            <div className={styles.homeContainer}>
                <HomeGallery></HomeGallery>
                <RecentlyViewed></RecentlyViewed>
                <Favourites></Favourites>
            </div>
        </main>
    );
}
