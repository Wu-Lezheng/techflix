import ProductFeature from "@/components/product-feature/ProductFeature";

import styles from "./page.module.css"

function ProductPage() {
    return (
        <div className={styles.container}>
            <ProductFeature></ProductFeature>
        </div>
    );
}

export default ProductPage