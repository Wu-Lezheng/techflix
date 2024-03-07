"use client";
import React, { useState } from 'react';
import styles from "./CompanyHighlight.module.css"

function GlowingContainer() {

    const [lightX, setLightX] = useState("0px");
    const [lightY, setLightY] = useState("0px");

    const handleMouseMove = (event) => {
        const x = event.clientX - event.target.getBoundingClientRect().left;
        const y = event.clientY - event.target.getBoundingClientRect().top;
        setLightX(`${x}px`);
        setLightY(`${y}px`);
    };

    return (
        <div className={styles.featureSection}>
            <div className={styles.glowContainer}
                style={{ '--light-x': lightX, '--light-y': lightY }}
                onMouseMove={handleMouseMove}
            >
                <p>Innovation</p>
            </div>

            <div className={styles.glowContainer}
                style={{ '--light-x': lightX, '--light-y': lightY }}
                onMouseMove={handleMouseMove}
            >
                <p>Innovation</p>
            </div>

            <div className={styles.glowContainer}
                style={{ '--light-x': lightX, '--light-y': lightY }}
                onMouseMove={handleMouseMove}
            >
                <p>Innovation</p>
            </div>

            <div className={styles.glowContainer}
                style={{ '--light-x': lightX, '--light-y': lightY }}
                onMouseMove={handleMouseMove}
            >
                <p>Innovation</p>
            </div>
        </div>

    );
}

export default GlowingContainer