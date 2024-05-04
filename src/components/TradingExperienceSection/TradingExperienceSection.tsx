import { useState } from 'react'
import { T_Experience } from '../../types/sheet'
import ExperienceCard from '../ExperienceCard'
import styles from './TradingExperienceSection.module.scss'

const experienceOptions: T_Experience[] = [
    {
        year: '<1Y',
        label: 'None',
        value: '0-1'
    },
    {
        year: '1Y-3Y',
        label: 'Beginner',
        value: '1-3'
    },
    {
        year: '3Y-5Y',
        label: 'Mid',
        value: '3-5'
    },
    {
        year: '>5Y',
        label: 'Pro',
        value: '5+'
    },

]

export default function TradingExperienceSection() {
    const [currentExperience, setCurrentExperience] = useState<T_Experience | null>(experienceOptions[0])

    return (
        <div className={styles.experience_card_wrapper}>
            {experienceOptions.map((experience) => {
                return (
                    <ExperienceCard key={experience.value} experience={experience} currentExperience={currentExperience} setCurrentExperience={setCurrentExperience} />
                )
            })}
        </div>
    )
}
