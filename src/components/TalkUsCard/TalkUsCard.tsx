import styles from './TalkUsCard.module.scss'
import talkUsIcon from '../../icons/support_agent.svg'

export default function TalkUsCard() {
    return (
        <div className={styles.talk_us}>
            <img src={talkUsIcon} alt="talk_us" />
            <h4>Talk to us</h4>
        </div>
    )
}
