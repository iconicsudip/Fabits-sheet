import styles from './PlanGoalCard.module.scss'
import circle1 from '../../icons/circle_group.svg'

export default function PlanGoalCard() {
  return (
    <div className={styles.plan_goal}>
      <img src={circle1} alt="circle-group-1" />
      <div className={styles.text}>
        <h4 className={styles.title}>Plan a goal</h4>
        <p className={styles.sub_text}>From education to wedding</p>
      </div>
    </div>
  )
}
