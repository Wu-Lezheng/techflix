import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

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
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}

export default ProductGallery