"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function NewCategory({ visible, setVisible }) {

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [labelColor, setLabelColor] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState(null);
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch("/api/add-category", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ categoryName, categoryDescription, labelColor, parentCategoryId })
            })

            router.refresh();
        } catch (error) {
            console.error(error)
        }

        setCategoryName('');
        setCategoryDescription('');
        setLabelColor('');
        setParentCategoryId('');
        setVisible(false);
    };

    return (
        <div>
            <form id="categoryForm" onSubmit={handleSubmit}>
                <label>
                    <p>Category Name</p>
                    <InputText id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                </label>
                <label>
                    <p>Category Description</p>
                    <InputTextarea autoResize rows={6} cols={40} id="categoryDescription" value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)} />
                </label>
                <label>
                    <p>Label Color</p>
                    <ColorPicker id="labelColor" name="labelColor" value={labelColor} onChange={(e) => setLabelColor(e.target.value)} />
                </label>
                <div>
                    <Button label="Submit" type="submit"></Button>
                    <Button label="Cancel" type="reset" onClick={e => setVisible(false)}></Button>
                </div>
            </form>
        </div>
    );
}

export default NewCategory