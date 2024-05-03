import styles from './GlanceCard.module.scss'
import growIcon from '../../icons/arrow_circle_up.svg'

export default function GlanceCard() {
    return (
        <div className={styles.glance_card}>
            <p className={styles.header}>At a glance</p>
            <div className={styles.glance}>
                <h5 className={styles.number}>₹ 3,596.21</h5>
                <p className={styles.sub_text}>Current Value</p>
            </div>
            <div className={styles.more_glance}>
                <div className={styles.glance}>
                    <h5 className={styles.amount}>₹ 3,500.11</h5>
                    <p className={styles.sub_text}>Invested Amount</p>
                </div>
                <div className={styles.glance}>
                    <h5 className={styles.amount}>₹ +96.10</h5>
                    <div className={styles.sub_text}>
                        <p>Returns</p>
                        <div className={styles.sub_number}>
                            <img src={growIcon} alt="grow-up" />
                            <p>2.74%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
