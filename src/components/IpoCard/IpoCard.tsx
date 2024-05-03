import styles from './IpoCard.module.scss'
import ipoIcon from '../../icons/add_business.svg'

export default function IpoCard() {
    return (
        <div className={styles.ipo_card}>
            <img src={ipoIcon} alt="ipo_icon" />
            <h4>IPOs</h4>
        </div>
    )
}
