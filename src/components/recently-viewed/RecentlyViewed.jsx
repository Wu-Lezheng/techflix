import Styles from "./RecentlyViewed.module.css";

function RecentlyViewed() {

    const images = [
        { src: '/images/recently-viewed-1.jpg', title: 'Drone Surveillance' },
        { src: '/images/recently-viewed-2.jpg', title: 'Firefighter ERS' },
        { src: '/images/recently-viewed-1.jpg', title: 'Drone Surveillance' },
        { src: '/images/recently-viewed-2.jpg', title: 'Firefighter ERS' },
    ];

    return (
        <div>
            <h2>Recently Viewed</h2>
            <div className={Styles.grid}>
                {images.map((image, index) => (
                    <div key={index} className={Styles.card}>
                        <img className={Styles.cardImage} src={image.src} width={500} height={300} />
                        <h3>{image.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentlyViewed