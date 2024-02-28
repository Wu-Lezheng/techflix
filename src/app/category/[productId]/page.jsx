"use client";

import { useState } from 'react';
import ProductGallery from '@/components/product-gallery/ProductGallery';
import ProductFeature from "@/components/product-feature/ProductFeature";

import styles from "./page.module.css"


function ProductPage() {
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const handleButtonClick = (styleName, featureImage) => {
        setSelectedFeatures(prevSelectedFeatures => [...prevSelectedFeatures, { styleName, featureImage }]);
    };

    return (
        <div className={styles.container}>

            <ProductGallery></ProductGallery>

            <div>
                <button onClick={() => handleButtonClick("containerSplit")}>Show Container Split</button>
                <button onClick={() => handleButtonClick("containerStack")}>Show Container Stack</button>
                <button onClick={() => handleButtonClick("containerImageSplit", "/products/features/project-management-mockup-phone.png")}>Show Container Image Split</button>
                <button onClick={() => handleButtonClick("containerImageStack", "/products/features/project-management-mockup-computer.png")}>Show Container Image Stack</button>
            </div>

            {selectedFeatures.map((feature, index) => (
                <ProductFeature key={index} styleName={feature.styleName} featureImage={feature.featureImage} />
            ))}

        </div>
    );
}

export default ProductPage;