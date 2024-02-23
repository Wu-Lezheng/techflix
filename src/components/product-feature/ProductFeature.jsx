import Image from 'next/image';

import styles from './ProductFeature.module.css'

function ProductFeature() {

    return (
        <>
            <div className={styles.containerSplit}>
                <h2 className={styles.featureTitle}>Feature title </h2>
                <p className={styles.featureDescription}>Feature description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni iure ratione nesciunt provident alias eaque fuga nemo est. Consectetur quasi incidunt obcaecati quibusdam perferendis iste voluptas eligendi vel recusandae.</p>
            </div>

            <div className={styles.containerStack}>
                <h2 className={styles.featureTitle}>Feature title</h2>
                <p className={styles.featureDescription}>Feature description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni iure ratione nesciunt provident alias eaque fuga nemo est. Consectetur quasi incidunt obcaecati quibusdam perferendis iste voluptas eligendi vel recusandae.</p>
            </div>

            <div className={styles.containerStack}>
                <Image src="/products/features/project-management-mockup-computer.png" alt='' width={200} height={ }></Image>
                <h2 className={styles.featureTitle}>Feature title</h2>
                <p className={styles.featureDescription}>Feature description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni iure ratione nesciunt provident alias eaque fuga nemo est. Consectetur quasi incidunt obcaecati quibusdam perferendis iste voluptas eligendi vel recusandae.</p>
            </div>

        </>
    );
}

export default ProductFeature