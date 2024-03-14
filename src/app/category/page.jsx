"use client";

import ProductCard from "@/components/product-card/ProductCard";

import styles from "./page.module.css"
import React, { useState } from "react";

function DefaultCategoryPage() {

    const [products, setProducts] = useState([
        { src: "/images/software-product-1.png", title: "FlowThru", uploadDate: "November 23, 2023", views: 149 },
        { src: "/images/software-product-2.jpg", title: "Color Pallete on the Go", uploadDate: "January 08, 2024", views: 3284105 },
        { src: "/images/software-product-3.jpg", title: "AgileOps", uploadDate: "September 15, 2022", views: 2035 },
        { src: "/images/software-product-1.png", title: "FlowThru", uploadDate: "November 23, 2023", views: 149 },
    ]);

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
                    <p className={styles.categoryDetails}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quod, ducimus accusantium temporibus culpa sunt quia vitae deserunt provident blanditiis distinctio omnis eaque aperiam commodi ex! Adipisci esse tenetur quae.</p>
                </div>
                <div className={styles.databoxes}>
                    <div className={styles.databox}>
                        <h3 style={{ color: '#E12B29', fontSize: '24px' }}>13</h3>
                        <p style={{ fontSize: '16px' }}>Products</p>
                    </div>
                    <div className={styles.databox}>
                        <h3 style={{ color: '#E12B29', fontSize: '24px' }}>4000</h3>
                        <p style={{ fontSize: '16px' }}>Views</p>
                    </div>
                    <button className={styles.editButton}>Edit</button>
                </div>
            </div>

            <hr className="gradientDivider" />

            <div className={styles.sortSection}>
                <h3 style={{ whiteSpace: "nowrap" }}>Sort by</h3>
                <div className={styles.buttonContainer}>
                    {sortButtons.map((sortButton, index) => (
                        <button className={styles.sortButton} key={index} onClick={sortButton.clickFunction}>
                            {sortButton.criterion}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.productDisplay}>
                {products.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <ProductCard src={product.src} title={product.title} uploadDate={product.uploadDate} views={product.views}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DefaultCategoryPage