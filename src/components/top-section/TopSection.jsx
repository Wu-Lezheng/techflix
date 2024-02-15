"use client";

import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Image from 'next/image';
import Styles from './TopSection.module.css';

function TopSection() {

    const [value, setValue] = useState('');

    function handleClick() {
        console.log("Notification button pressed")
    }

    return (
        <div className={Styles.topBar}>
            <Image src="/techflix.svg" width={200} height={200}></Image>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>
            <div><button onClick={handleClick}>Notification</button></div>
        </div>
    );
}

export default TopSection