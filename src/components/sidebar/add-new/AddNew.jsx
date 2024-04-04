"use client";

// AddNew component
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { AiOutlinePlus } from 'react-icons/ai';
import { TabSelect, Tab } from './tab-select/TabSelect';
import NewCategory from './new-category/NewCategory';
import NewProduct from './new-product/NewProduct';
import styles from './AddNew.module.css';

function AddNew() {
    const [visible, setVisible] = useState(false);

    const [categoryFormState, setCategoryFormState] = useState({
        categoryName: '',
        categoryDescription: '',
        labelColor: '',
        parentCategoryId: null
    });

    const handleCategoryInputChange = (fieldName, value) => {
        setCategoryFormState(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmitNewCategory = async () => {
        try {
            await fetch("/api/add-category", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryFormState)
            });

            // Reset form values and close dialog
            setCategoryFormState({
                categoryName: '',
                categoryDescription: '',
                labelColor: '',
                parentCategoryId: null
            });
            setVisible(false);

            // Refresh router or update state as required
        } catch (error) {
            console.error(error);
        }
    };

    const [productFormStates, setProductFormStates] = useState({
        productName: '',
        productSummary: '',
        coverImage: '',
        categoryId: '',
        gallery: [],
        tags: [],
        keywords: [],
        specifications: []
    });

    const handleProductInputChange = (fieldName, value) => {
        setProductFormStates(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmitNewProduct = async () => {

    }

    return (
        <div className={styles.container}>
            <button className={styles.addButton} onClick={() => setVisible(true)}>
                <AiOutlinePlus style={{ color: "var(--text)", fontSize: "24px" }} />
            </button>
            <h4>Add New</h4>
            <Dialog
                style={{ width: '55vw', height: '75vh' }}
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={
                    <div className={styles.overlay}>
                        <TabSelect>
                            <Tab header="New Category">
                                <NewCategory
                                    formState={categoryFormState}
                                    handleInputChange={handleCategoryInputChange}
                                    handleSubmit={handleSubmitNewCategory}
                                    setVisible={setVisible}
                                />
                            </Tab>
                            <Tab header="New Product">
                                <NewProduct
                                    formState={productFormStates}
                                    handleInputChange={handleProductInputChange}
                                    handleSubmit={handleSubmitNewProduct}
                                />
                            </Tab>
                            {/* Add more tabs if needed */}
                        </TabSelect>
                    </div>
                }
            ></Dialog>
        </div>
    );
}

export default AddNew;
