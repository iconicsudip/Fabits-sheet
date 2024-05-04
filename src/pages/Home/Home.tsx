import GlanceCard from '../../components/GlanceCard'
import InsuranceCard from '../../components/InsuranceCard'
import IpoCard from '../../components/IpoCard'
import OnboardSheet from '../../components/OnboardSheet'
import PlanGoalCard from '../../components/PlanGoalCard'
import StartHelpCard from '../../components/StartHelpCard'
import TalkUsCard from '../../components/TalkUsCard'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <div className={styles.home_wrapper}>
            <GlanceCard />
            <div className={styles.first_card}>
                <PlanGoalCard/>
                <StartHelpCard/>
            </div>
            <InsuranceCard/>
            <div className={styles.second_card}>
                <IpoCard/>
                <TalkUsCard />
            </div>
            <OnboardSheet />
        </div>
    )
}
