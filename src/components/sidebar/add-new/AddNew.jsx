"use client";

import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import NewCategory from "./new-category/NewCategory";

import styles from "./AddNew.module.css"
import { AiOutlinePlus } from "react-icons/ai";

function AddNew() {

    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.container}>
            <button className={styles.addButton} onClick={() => setVisible(true)}>
                <AiOutlinePlus style={{ color: "var(--text)", fontSize: "24px" }} />
            </button>
            <h4>Add New</h4>
            <Dialog
                style={{ width: '55vw' }}
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={
                    <div className={styles.overlay}>
                        <NewCategory visible={visible} setVisible={setVisible} />
                    </div>
                }
            ></Dialog>
        </div>
    );
}
export default AddNew