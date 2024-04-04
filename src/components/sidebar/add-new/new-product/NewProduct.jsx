import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function NewProduct({ formState, handleInputChange, handleSubmit }) {

    const { productName,
        productSummary,
        coverImage,
        categoryId,
        gallery,
        tags,
        keywords,
        specifications } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <form id="productForm" onSubmit={onSubmit}>
            <label>
                <p>Product Name</p>
                <InputText id="productName" value={productName} onChange={e => handleInputChange("productName", e.target.value)} />
            </label>
            <label>
                <p>Product Summary</p>
                <InputTextarea autoResize rows={6} cols={40} id="productSummary" value={productSummary} onChange={(e) => handleInputChange('productSummary', e.target.value)} />
            </label>
        </form>
    );
}