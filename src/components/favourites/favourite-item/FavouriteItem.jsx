import Image from "next/image";
import 'primeicons/primeicons.css';

import styles from "./FavouriteItem.module.css"

function FavouriteItem(props) {

    return (
        <div className={styles.favroutieItemContainer}>
            <Image src={props.src} height={120} width={200}></Image>
            <div className={styles.textContainer}>
                <h3>{props.title}</h3>
                <div className={styles.productInfo}>
                    <div className={styles.labelInfo}>
                        <i className="pi pi-bookmark-fill"></i>
                        <p>{props.label}</p>
                    </div>
                    <div className={styles.metadata}>
                        <p>{`${props.views} views`}</p>
                        <p>{`Uploaded on ${props.uploadDate}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteItem