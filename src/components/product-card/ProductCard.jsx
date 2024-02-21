import Image from "next/image";

import styles from "./ProductCard.module.css"
import 'primeicons/primeicons.css';

function ProductCard(props) {

    function formatNumber(num) {
        if (num < 1000) {
            return num;
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'm';
        } else {
            return (num / 1000).toFixed(1) + 'k';
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image className={styles.thumbnail} src={props.src} alt="" fill priority={true}></Image>
                <div className={styles.likeButton}>
                    <button className={styles.likeIcon}><i className="pi pi-heart" style={{ fontSize: '16px', color: 'white' }}></i></button>
                </div>
            </div>
            <h4 className={styles.productTitle}>{props.title}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', alignItems: 'center' }}>
                <p className={styles.uploadDate}>{props.uploadDate}</p>
                <div className={styles.viewNumber}>{`${formatNumber(props.views)} views`}</div>
            </div>
        </div>
    );
}

export default ProductCard