import styles from './StartHelpCard.module.scss'
import circle2 from '../../icons/circle_group2.svg'

export default function StartHelpCard() {
  return (
    <div className={styles.help_start}>
      <img src={circle2} alt="circle-group-2" />
      <h4 className={styles.title}>Help me start</h4>
      <p className={styles.sub_text}>A quick quiz to begin investing</p>
    </div>
  )
}
