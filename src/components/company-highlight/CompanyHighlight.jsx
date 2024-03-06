"use client";
import React, { useState } from 'react';
import styles from "./CompanyHighlight.module.css"

function GlowingContainer() {

    const [lightX, setLightX] = useState(0);

    const handleMouseMove = (event) => {
        const x = event.clientX - event.target.getBoundingClientRect().left;
        setLightX(x + 'px');
    };

    return (
        <div className={styles.featureSection}>
            <div className={styles.glowContainer}>
                <p>Innovation</p>
            </div>
            <div className={styles.glowContainer}>
                <p>Innovation</p>
            </div>
            <div className={styles.glowContainer}>
                <p>Innovation</p>
            </div>
        </div>

    );
}

export default GlowingContainer