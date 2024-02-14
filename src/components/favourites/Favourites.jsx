"use client";

import React, { useState } from "react";
import FavouriteItem from "./favourite-item/FavouriteItem";

import styles from "./Favourites.module.css"

function Favourites() {

    const [favourites, setFavourites] = useState([
        { src: "/images/my-favourites-1.jpg", title: "Police Dispatchment", label: "Emergency", views: 2000, uploadDate: "23/11/2023" },
        { src: "/images/my-favourites-2.jpg", title: "Network Maintenance", label: "Cybersecurity", views: 1000, uploadDate: "01/02/2024" },
        { src: "/images/my-favourites-3.jpg", title: "Airplane Monitoring", label: "Public Infrastructure", views: 1632, uploadDate: "05/09/2023" },
    ]);

    return (
        <div>
            <h2>My Favourites</h2>
            <div className={styles.favouriteItem}>
                {favourites.map(item => (
                    <FavouriteItem key={item.title} src={item.src} title={item.title} label={item.label} views={item.views} uploadDate={item.uploadDate} />
                ))}
            </div>
        </div>
    );
}

export default Favourites