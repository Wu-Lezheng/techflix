"use client";
import React, { useState } from 'react';
import styles from "./TabSelect.module.css"

function TabSelect({ children }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    // Convert children to array if it's not already an array
    const tabButtons = React.Children.map(children, (child, index) => {
        return (
            <button
                key={index}
                className={activeTab === index ? 'active' : ''}
                onClick={() => handleTabClick(index)}
            >
                {child.props.header}
            </button>
        );
    });

    // Wrap children in an array if it's not already an array
    const tabContent = Array.isArray(children) ? children[activeTab] : [children];

    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabs}>
                {tabButtons}
            </div>

            {tabContent}
        </div>
    );
}

const Tab = ({ children }) => {
    return <div>{children}</div>;
};

export { TabSelect, Tab };
