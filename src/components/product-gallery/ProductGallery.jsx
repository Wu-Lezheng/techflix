import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { ProductGalleryService } from '@/services/ProductGalleryService';

function ProductGallery() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        ProductGalleryService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', aspectRatio: "16/9", objectFit: "cover", display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <div className="productGallery">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ width: "100%", marginBottom: "120px" }}
                item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} />
        </div>
    )
}

export default ProductGallery