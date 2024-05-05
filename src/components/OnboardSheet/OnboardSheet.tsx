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
import VerificationScreen from '../VerificationScreen';

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
    const [loadingStep, setLoadingStep] = useState<boolean>(false);
    const {sheetOpen} = useSelector((state: RootState) => state.sheetDetails);
    const [verificationStep, setVerificationStep] = useState<boolean>(false);
    const [backImage, setBackImage] = useState<string>(styles.back_image);
    const dispatch = useDispatch();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }else{
            setLoadingStep(true);
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

    const carBounce = () => {
        const car = document.querySelector(`.${styles.car}`) as HTMLImageElement;
        car.style.animation = 'carBounce 1s linear infinite';

        setTimeout(() => {
            car.style.animation = '';
            car.style.left = '150%'
            setLoadingStep(false);
            setVerificationStep(true);
        }, 1000);
    }
    const moveCar = () => {
        const car = document.querySelector(`.${styles.car}`) as HTMLImageElement;
        const timer = loadingStep ? 3000 : 3000
        const animationType = loadingStep ? 'carStart 3s linear infinite' : 'car 3s linear infinite';
        
        car.style.animation = animationType;
        setTimeout(() => {
            if(!loadingStep){
                car.style.animation = '';
            }else{
                car.style.animation = '';
                car.style.left = '50%'
                setBackImage(styles.back_image2)
                car.style.animation = 'jump 1s linear infinite'
                setTimeout(() => {
                    carBounce();
                }, timer + 2000);
            }
        }, timer);
    };
    useEffect(() => {
        if(loadingStep) {
            moveCar();
            return;
        }
        const interval = setInterval(moveCar, 8000); // Trigger animation every 8 seconds

        return () => clearInterval(interval);
    }, [loadingStep]);
    return (
        <div>
            <div className={`${styles.background_mask} ${!sheetOpen ? styles.hide : ''}`}/>
            <div className={`${styles.sheet} ${!sheetOpen ? styles.close : ''} ${loadingStep ? backImage : ''} ${loadingStep && !verificationStep ? styles.less_height:''}`}>
                <div className={`${styles.close} ${!sheetOpen ? styles.hide : ''}`} onClick={handleClose}>
                    <img src={closeIcon} alt="close_icon" />
                </div>
                <div className={`${styles.loading_wrapper} ${loadingStep ? styles.state_loading : ''}`}>
                    {!loadingStep
                        && 
                        <>
                            {steps[currentStep].type === SheetType.TradingExperience && <img className={styles.loading} src="/loading1.svg" alt="loading1" />}
                            {steps[currentStep].type === SheetType.PanDetails && <img className={styles.loading} style={{height:"284px"}} src="/loading2.svg" alt="loading2" />}
                        </>
                    }
                    
                    {!verificationStep && <img className={`${styles.car} ${steps[currentStep].type === SheetType.PanDetails && !loadingStep ? styles.step_two: ''} ${loadingStep ? styles.loading_car : ''}`} src="/car.png" alt="car" />}
                </div>
                <div className={`${styles.sheet_details} ${verificationStep ? styles.verify_sheet:''}`}>
                    <div className={styles.header}>
                        {loadingStep ?
                            <>
                                <h2 className={styles.title}>Fetching your PAN Details</h2>
                                <p className={styles.sub_title}>Getting your PAN details by your chosen method</p>
                            </>
                            :
                            verificationStep ?
                            <>
                                    <h2 className={styles.title}>Verify your details</h2>
                                    <p className={styles.sub_title}>Aadhaar link found</p>
                            </>

                            :
                            <>
                                <h2 className={styles.title}>Get started with Fabits</h2>
                                <p className={styles.sub_title}>Answer a few questions to begin onboarding</p>
                            </>
                        }
                    </div>
                    {!loadingStep && !verificationStep &&
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
                    }
                    {verificationStep &&
                        <VerificationScreen />
                    }
                </div>
            </div>
        </div>
    )
}
