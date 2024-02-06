import Styles from './TopSection.module.css';

function TopSection() {
    return (
        <div className={Styles.topBar}>
            <div>logo</div>
            <div>search bar</div>
            <div>icons</div>
        </div>
    );
}

export default TopSection