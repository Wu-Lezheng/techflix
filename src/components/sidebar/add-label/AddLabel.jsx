import styles from "./AddLabel.module.css"
import 'primeicons/primeicons.css';

function AddLabel() {
    return (
        <div className={styles.container}>
            <button className={styles.addButton}>
                <i className="pi pi-plus" style={{ fontSize: '20px', color: 'white' }}></i>
            </button>
            <h4>Upload demo</h4>
        </div>
    );
}
export default AddLabel