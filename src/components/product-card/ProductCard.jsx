import Image from "next/image";

import styles from "./ProductCard.module.css"
import 'primeicons/primeicons.css';

function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image className={styles.thumbnail} src="/images/software-product-2.jpg" alt="" fill priority={true}></Image>
                <div className={styles.likeButton}>
                    <button className={styles.likeIcon}><i className="pi pi-heart" style={{ fontSize: '16px', color: 'white' }}></i></button>
                </div>
            </div>
            <h4>Product title</h4>
            <p>November 23, 2023</p>
        </div>
    );
}

export default ProductCard