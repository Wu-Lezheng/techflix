import ProductCard from "@/components/product-card/ProductCard";

import styles from "./page.module.css"

function DefaultCategoryPage() {

    const sortButtons = [
        { criterion: "Name", clickFunction: sortByName() },
        { criterion: "Date Uploaded", clickFunction: sortByDate() },
        { criterion: "Views", clickFunction: sortByViews() },
    ];

    function sortByName() {
        console.log("name pressed");
    }

    function sortByDate() {

    }

    function sortByViews() {

    }

    return (
        <div className={styles.container}>
            <div className={styles.categorySummary}>
                <div className={styles.categoryDescription}>
                    <h1>Category Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quod, ducimus accusantium temporibus culpa sunt quia vitae deserunt provident blanditiis distinctio omnis eaque aperiam commodi ex! Adipisci esse tenetur quae.</p>
                </div>
                <div className={styles.databoxes}>
                    <div className={styles.databox}>
                        <h3>13</h3>
                        <p>Products</p>
                    </div>
                    <div className={styles.databox}>
                        <h3>4000</h3>
                        <p>Views</p>
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.sortSection}>
                <h3>Sort by</h3>
                <div>
                    {sortButtons.map((sortButton, index) => (
                        <button className={styles.sortButton} key={index} onClick={sortButton.clickFunction}>
                            {sortButton.criterion}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.productDisplay}>
                <div className={styles.product}>
                    <ProductCard></ProductCard>
                </div>
                <div className={styles.product}>
                    <ProductCard></ProductCard>
                </div>
                <div className={styles.product}>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
}

export default DefaultCategoryPage