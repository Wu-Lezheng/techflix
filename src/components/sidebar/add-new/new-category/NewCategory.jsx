// NewCategory component
import React from "react";
import { Button } from "primereact/button";
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function NewCategory({ formState, handleInputChange, handleSubmit, setVisible }) {
    const { categoryName, categoryDescription, labelColor } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <div>
            <form id="categoryForm" onSubmit={onSubmit}>
                <label>
                    <p>Category Name</p>
                    <InputText id="categoryName" value={categoryName} onChange={(e) => handleInputChange('categoryName', e.target.value)} />
                </label>
                <label>
                    <p>Category Description</p>
                    <InputTextarea autoResize rows={6} cols={40} id="categoryDescription" value={categoryDescription} onChange={(e) => handleInputChange('categoryDescription', e.target.value)} />
                </label>
                <label>
                    <p>Label Color</p>
                    <ColorPicker id="labelColor" name="labelColor" value={labelColor} onChange={(e) => handleInputChange('labelColor', e.target.value)} />
                </label>
                {/* Add more form fields as needed */}
                <div>
                    <Button label="Submit" type="submit"></Button>
                    <Button label="Cancel" type="button" onClick={() => setVisible(false)}></Button>
                </div>
            </form>
        </div>
    );
}

export default NewCategory;
