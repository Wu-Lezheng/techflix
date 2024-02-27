"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductFeature.module.css';

function ProductFeature({ styleName, featureImage }) {

    const [containerClass, setContainerClass] = useState(styleName);

    useEffect(() => {
        const handleResize = () => {
            // Check window size and update containerClass accordingly
            if (window.innerWidth < 900) {
                setContainerClass(styleName.replace('Split', 'Stack'));
            } else {
                setContainerClass(styleName);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [styleName]);

    let containerContent;

    if (containerClass === 'containerImageSplit') {
        containerContent = (
            <>
                <div style={{ flex: "1", position: "relative" }}>
                    <Image src={featureImage} alt='' width="3840" height="2160" sizes='100vw' quality={100} className={styles.featureImage} priority={true}></Image>
                </div>
                <div style={{ flex: "1" }}>
                    <h2 className={styles.featureTitle}>Feature title</h2>
                    <p className={styles.featureDescription}>Feature description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni iure ratione nesciunt provident alias eaque fuga nemo est. Consectetur quasi incidunt obcaecati quibusdam perferendis iste voluptas eligendi vel recusandae.</p>
                </div>
            </>
        );
    } else if (containerClass === 'containerImageStack') {
        containerContent = (
            <>
                <div>
                    <h2 className={styles.featureTitle}>Feature title</h2>
                    <p className={styles.featureDescription}>Feature description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni iure ratione nesciunt provident alias eaque fuga nemo est. Consectetur quasi incidunt obcaecati quibusdam perferendis iste voluptas eligendi vel recusandae.</p>
                </div>
                <div style={{ textAlign: 'center', position: "relative" }}>
                    <Image src={featureImage} alt='' width="3840" height="2160" sizes='100vw' quality={100} className={styles.featureImage} priority={true}></Image>
                </div>
            </>
        );
    } else {
        containerContent = (
            <>
                <h2 className={styles.featureTitle}>Feature title</h2>
                <p className={styles.featureDescription}>Feature description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni iure ratione nesciunt provident alias eaque fuga nemo est. Consectetur quasi incidunt obcaecati quibusdam perferendis iste voluptas eligendi vel recusandae.</p>
            </>
        );
    }

    return (
        <div className={styles[containerClass]}>
            {containerContent}
        </div>
    );
}

export default ProductFeature;
