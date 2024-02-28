import { useState } from "react";
import questions from "../quiz.json";
import { Header } from "../components/Header/Header";
import { SectionContainer } from "../components/pageLayoutComponents/SectionContainer";
import { AnswerTexUI, AnswerVariantUI, AnswersContainerUI, BackBtnUI, ButtonsContainerUI, OboardingPageUI, QuizBlockUI } from "./OnboardingPage.styled";
import { ButtonUI } from "../components/universal/Button.styled";

export const OnboardingPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [onboardingAnswers, setOnboardingAnswers] = useState<Record<number, string[]>>({});
    const question = questions?.find(el => el.orderNumber === currentQuestion);
    if(!onboardingAnswers[currentQuestion]) {
        const newAnswers = {
            ...onboardingAnswers,
            [currentQuestion]: []
        }
        setOnboardingAnswers(newAnswers)
    }

    
    return (<OboardingPageUI>
        <Header bgColor="#F8F8F8"/>
        <SectionContainer bgColor="#F8F8F8">
            <QuizBlockUI>
                <AnswerTexUI>{question?.questionText}</AnswerTexUI>
                <AnswersContainerUI>
                    {question?.questionType === "multiselection" && question?.answers?.map(el =>
                        <AnswerVariantUI key={el.id} onClick={()=>{
                            const newAnswers = {
                                ...onboardingAnswers,
                                [currentQuestion]: onboardingAnswers && onboardingAnswers[currentQuestion] && onboardingAnswers[currentQuestion]?.includes(el.id) ? onboardingAnswers[currentQuestion].filter(item=> item !== el.id) : [...onboardingAnswers[currentQuestion], el.id]
                            }
                            setOnboardingAnswers(newAnswers)
                        }}>
                            {onboardingAnswers && onboardingAnswers[currentQuestion] && onboardingAnswers[currentQuestion].includes(el.id) ? 
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="15" y="15" width="18" height="18" rx="2" fill="#CF1A86"/>
                                    <path d="M22 28.4L18 24.4L19.4 23L22 25.6L28.6 19L30 20.4L22 28.4Z" fill="white"/>
                                </svg>
                                :
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="16" y="16" width="16" height="16" rx="1" stroke="#1E2735" strokeWidth="2"/>
                                </svg>
                            }
                            {el.text}
                        </AnswerVariantUI>
                    )}
                </AnswersContainerUI>
                <ButtonsContainerUI>
                    {currentQuestion !==1 && <BackBtnUI onClick={()=>setCurrentQuestion(prev => prev-1)}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                        <path id="Vector" d="M8.32843 10.997H20.5V12.997H8.32843L13.6924 18.3609L12.2782 19.7751L4.5 11.997L12.2782 4.21875L13.6924 5.63296L8.32843 10.997Z" fill="#1E2735"/>
                        </g>
                    </svg>Back</BackBtnUI>}
                    <ButtonUI onClick={()=>setCurrentQuestion(prev => prev+1)}>Next question</ButtonUI>
                </ButtonsContainerUI>
            </QuizBlockUI>
        </SectionContainer>
    </OboardingPageUI>)
}