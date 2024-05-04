import styles from './VerificationCard.module.scss'
import { T_VerifyCard } from '../../types/sheet'
import { Link } from 'react-router-dom'
import { MY_LINKEDIN } from '../../constants/personal.constant'

interface Props {
    icon: string
    details: T_VerifyCard[]
}

export default function VerificationCard({ icon, details }: Props) {
    return (
        <Link to={MY_LINKEDIN} target="_blank">
            <div className={styles.card_wrapper}>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <img src={icon} alt="icon-name" />
                    </div>
                    <div className={styles.detail}>
                        <h4 className={styles.label}>{details[0].label}</h4>
                        <p className={styles.value}>{details[0].value}</p>
                    </div>
                </div>
                <div className={styles.other_details}>
                    {details.slice(1).map((detail: T_VerifyCard, index:number) => {
                        return (
                            <div key={`detailcard-${index}`} className={styles.detail}>
                                <h4 className={styles.label}>{detail.label}</h4>
                                <p className={styles.value}>{detail.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Link>
    )
}
