import { useEffect, useRef, useState } from 'react'
import styles from './PanDetailsSection.module.scss'
import { T_PanType } from '../../types/sheet'
import Input from '../Input'


const panDetailsType: T_PanType[] = [
    {
        title:'Manual',
        type: 'manual'
    },
    {
        title: 'Automatic',
        type: 'automatic'
    }
]
export default function PanDetailsSection() {
    const [selectedType, setSelectedType] = useState < T_PanType>(panDetailsType[0])
    const panInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        panInputRef.current?.focus()
    }, [selectedType])

    return (
        <div className={styles.pan_details}>
            <div className={styles.choice_pan_type}>
                <h4 className={styles.title}>Verification method</h4>
                <div className={styles.type_wrapper}>
                    {panDetailsType.map((item: T_PanType) => (
                        <div key={item.title} className={`${styles.pan_details_type} ${selectedType.type === item.type ? styles.selected : ''}`} onClick={() => setSelectedType(item)}>
                            <p className={styles.label}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.pan_number}>
                <p className={styles.field_name}>Pan Card Number</p>
                <Input className={styles.field} ref={panInputRef}/>
            </div>
        </div>
    )
}
