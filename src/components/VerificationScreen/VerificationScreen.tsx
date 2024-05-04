import avatarIcon from '../../icons/person_.svg'
import fingerprintIcon from '../../icons/fingerprint_.svg'
import homeIcon from '../../icons/home_.svg'
import VerificationCard from '../VerificationCard'
import { T_VerifyCardDetails } from '../../types/sheet'
import styles from './VerificationScreen.module.scss'
const verificationCards: T_VerifyCardDetails[] = [
    {
        icon: avatarIcon,
        details: [
            {
                label: 'CMRPMXXXXF',
                value: 'ASHAR RAI MUJEEB'
            },
            {
                label: 'Fetched Via',
                value: 'NSDL'
            },
            {
                label: 'Last Updated',
                value: '24/04/2024'
            }
        ]
    },
    {
        icon: fingerprintIcon,
        details: [
            {
                label: 'Address',
                value: 'Aadhaar UID'
            },
            {
                label: 'Fetched Via',
                value: 'Digio'
            },
            {
                label: 'Date of Birth',
                value: '18/10/1994'
            }
        ]
    },
    {
        icon: homeIcon,
        details: [
            {
                label: 'Address',
                value: '16/2, 8 Jat Regiment, c/o 56 APO'
            },
            {
                label: 'Fetched Via',
                value: 'Digio'
            },
            {
                label: 'Address Type',
                value: 'Correspondence'
            }
        ]
    }
]

export default function VerificationScreen() {
    return (
        <div className={styles.verifications}>
            {verificationCards.map((card: T_VerifyCardDetails, index:number) => {
                return (
                    <VerificationCard key={index} icon={card.icon} details={card.details} />
                )
            })}
        </div>
    )
}
