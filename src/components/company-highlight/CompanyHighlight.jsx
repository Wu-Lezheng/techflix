"use client";
import React, { useState } from 'react';
import styles from "./CompanyHighlight.module.css"

function CompanyHighlight() {
    const [glowStates, setGlowStates] = useState([
        { x: "0px", y: "0px" },
        { x: "0px", y: "0px" },
        { x: "0px", y: "0px" }
    ]);

    const handleMouseMove = (index, event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setGlowStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = { x: `${x}px`, y: `${y}px` };
            return newStates;
        });
    };

    return (
        <div className={styles.featureSection}>
            {glowStates.map((state, index) => (
                <div key={index} className={styles.glowContainer}
                    style={{ '--light-x': state.x, '--light-y': state.y }}
                    onMouseMove={(event) => handleMouseMove(index, event)}
                >
                    <div className={styles.containerBorder}></div>
                    <div className={styles.featureContent}>
                        {index === 0 && <p>Innovation</p>}
                        {index === 1 && <p>Accuracy</p>}
                        {index === 2 && <p>Responsibility</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CompanyHighlight