import React from 'react'
import { T_Experience } from '../../types/sheet'
import styles from './ExperienceCard.module.scss'

interface Props {
    experience: T_Experience
    currentExperience: T_Experience | null
    setCurrentExperience: React.Dispatch<React.SetStateAction<T_Experience | null>>
}

export default function ExperienceCard({ experience, currentExperience, setCurrentExperience }: Props) {
    return (
        <div className={`${styles.experience_card} ${experience.value === currentExperience?.value ? styles.selected: ''}`} onClick={() => setCurrentExperience(experience)}>
            <h4 className={styles.label}>{experience.label}</h4>
            <p className={styles.yoe}>{experience.year}</p>
        </div>
    )
}
