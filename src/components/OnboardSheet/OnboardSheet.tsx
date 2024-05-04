import styles from './OnboardSheet.module.scss'
import closeIcon from '../../icons/close.svg'
import arrowRightIcon from '../../icons/arrow_right_alt.svg'
import arrowLeftIcon from '../../icons/arrow_left.svg'
import { useEffect, useState } from 'react';
import { SheetType } from '../../enums/sheet';
import Button from '../Button';
import TradingExperienceSection from '../TradingExperienceSection';
import PanDetailsSection from '../PanDetailsSection';
import { useDispatch, useSelector } from 'react-redux';
import { setSheet } from '../../store/slices/sheetSlice';
import { RootState } from '../../store';

const steps = [
    {
        stepName: 'How much trading experience do you have?',
        type: SheetType.TradingExperience
    },
    {
        stepName: 'Please enter your PAN details to complete verification',
        type: SheetType.PanDetails
    }
]


export default function OnboardSheet() {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const {sheetOpen} = useSelector((state: RootState) => state.sheetDetails);
    const dispatch = useDispatch();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    const handleClose = () => {
        dispatch(setSheet(false));
    }
    useEffect(() => {
        const car = document.querySelector(`.${styles.car}`) as HTMLImageElement;

        const moveCar = () => {
            car.style.animation = 'car 2s linear infinite';
            setTimeout(() => {
                car.style.animation = '';
            }, 2000);
        };

        const interval = setInterval(moveCar, 8000); // Trigger animation every 8 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className={`${styles.background_mask} ${!sheetOpen ? styles.hide : ''}`}/>
            <div className={`${styles.sheet} ${!sheetOpen ? styles.close: ''}`}>
                <div className={`${styles.close} ${!sheetOpen ? styles.hide : ''}`} onClick={handleClose}>
                    <img src={closeIcon} alt="close_icon" />
                </div>
                <div className={styles.loading_wrapper}>
                    {steps[currentStep].type === SheetType.TradingExperience && <img className={styles.loading} src="/loading1.svg" alt="loading1" />}
                    {steps[currentStep].type === SheetType.PanDetails && <img className={styles.loading} style={{height:"294px"}} src="/loading2.svg" alt="loading2" />}
                    
                    <img className={styles.car} src="/car.png" alt="car" />
                </div>
                <div className={styles.sheet_details}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Get started with Fabits</h2>
                        <p className={styles.sub_title}>Answer a few questions to begin onboarding</p>
                    </div>
                    <div className={styles.step_wrapper}>
                        <div className={styles.current_step}>
                            <h2 className={styles.name}>{steps[currentStep].stepName}</h2>
                            <p className={styles.total_pages}>{currentStep+1}/{steps.length}</p>
                        </div>

                        <div className={styles.current_content}>
                            {steps[currentStep].type === SheetType.TradingExperience && <TradingExperienceSection/>}
                            {steps[currentStep].type === SheetType.PanDetails && <PanDetailsSection/>}
                        </div>

                        <div className={styles.button_wrapper}>
                            {currentStep !== 0 && <Button buttonType="secondary" onClick={handleBack}>
                                <div className={styles.button_item}>
                                    <img src={arrowLeftIcon} alt="arrow-icon" />
                                </div>
                            </Button>}
                            <Button block onClick={handleNext}>
                                <div className={styles.button_item}>
                                    {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                                    <img src={arrowRightIcon} alt="arrow-icon" />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
