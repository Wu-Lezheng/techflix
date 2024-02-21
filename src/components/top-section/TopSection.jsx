"use client";

import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Image from 'next/image';

import styles from './TopSection.module.css';

function TopSection() {

    const [value, setValue] = useState('');

    function handleClick() {
        console.log("Notification button pressed")
    }

    return (
        <div className={styles.topBar}>
            <Image src="/techflix.svg" width={200} height={200}></Image>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>
            <Button icon="pi pi-bell" />
        </div>
    );
}

export default TopSection