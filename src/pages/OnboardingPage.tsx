import { useState } from "react";
import questions from "../quiz.json";
import { Header } from "../components/Header/Header";
import { SectionContainer } from "../components/pageLayoutComponents/SectionContainer";
import { AnswerSubtext, AnswerTexUI, AnswerVariantUI, AnswersContainerUI, BackBtnUI, ButtonsContainerUI, InputUI, OboardingPageUI, QuizBlockUI } from "./OnboardingPage.styled";
import { ButtonUI } from "../components/universal/Button.styled";
import { useNavigate } from "react-router-dom";

export const OnboardingPage = () => {
    const storedData = localStorage.getItem('onboardingAnswers');
    const initialState = storedData ? JSON.parse(storedData) : {};

    const answeredQuestions = Object.keys(initialState).map(el => Number(el));
    const lastOpenedQuestion = answeredQuestions.length > 0 ? Math.max(...answeredQuestions) : 1;
    const innitialCurrentAnswer = initialState && initialState[lastOpenedQuestion] && initialState[lastOpenedQuestion].length !== 0 ? lastOpenedQuestion+1 : lastOpenedQuestion
    console.log(lastOpenedQuestion);
    

    const [currentQuestion, setCurrentQuestion] = useState(innitialCurrentAnswer);
    const [onboardingAnswers, setOnboardingAnswersState] = useState<Record<number, string[]>>(initialState);
    const question = questions?.find(el => el.orderNumber === currentQuestion);

    const setOnboardingAnswers = (newItems: Record<number, string[]>) => {
        setOnboardingAnswersState(newItems)
        localStorage.setItem('onboardingAnswers', JSON.stringify(newItems))
    }
    if(!onboardingAnswers[currentQuestion]) {
        const newAnswers = {
            ...onboardingAnswers,
            [currentQuestion]: []
        }
        setOnboardingAnswers(newAnswers)
    }

    const navigate = useNavigate();
    if(currentQuestion === 16) {
        setTimeout(() => navigate("/pay"), 0)
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

                    {(question?.questionType === "range" || question?.questionType === "oneSelection") && question?.answers?.map(el =>
                        <AnswerVariantUI key={el.id} onClick={()=>{
                            const newAnswers = {
                                ...onboardingAnswers,
                                [currentQuestion]: onboardingAnswers && onboardingAnswers[currentQuestion] && onboardingAnswers[currentQuestion]?.includes(el.id) ? onboardingAnswers[currentQuestion].filter(item=> item !== el.id) : [el.id]
                            }
                            setOnboardingAnswers(newAnswers)
                        }}>
                            {onboardingAnswers && onboardingAnswers[currentQuestion] && onboardingAnswers[currentQuestion].includes(el.id) ? 
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM20 28C15.58 28 12 24.42 12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20C28 24.42 24.42 28 20 28Z" fill="#CF1A86"/>
                                    <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" fill="#CF1A86"/>
                                </svg>
                                
                                :
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM20 28C15.58 28 12 24.42 12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20C28 24.42 24.42 28 20 28Z" fill="#49454F"/>
                                </svg>

                            }
                            <div style={{padding: "20px 0"}}>
                                {el.text}
                                {question?.questionType === "range" && 'subText' in el && <AnswerSubtext>{el?.subText}</AnswerSubtext>}
                            </div>
                        </AnswerVariantUI>
                    )}

                    {question?.questionType === "input" && <InputUI 
                        value={(onboardingAnswers && onboardingAnswers[currentQuestion] && onboardingAnswers[currentQuestion]) ? onboardingAnswers[currentQuestion][0] : ""} 
                    type={question.inputType} 
                    placeholder="Type your answer"
                    onChange={(e)=>{
                        const newAnswers = {
                            ...onboardingAnswers,
                            [currentQuestion]: [e.currentTarget.value]
                        }
                        setOnboardingAnswers(newAnswers)
                    }}/>}

                </AnswersContainerUI>
                <ButtonsContainerUI>
                    {currentQuestion !==1 && currentQuestion !==16 && <BackBtnUI onClick={()=>setCurrentQuestion(prev => prev-1)}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                        <path id="Vector" d="M8.32843 10.997H20.5V12.997H8.32843L13.6924 18.3609L12.2782 19.7751L4.5 11.997L12.2782 4.21875L13.6924 5.63296L8.32843 10.997Z" fill="#1E2735"/>
                        </g>
                    </svg>Back</BackBtnUI>}
                    {currentQuestion !==16 && <ButtonUI onClick={()=>setCurrentQuestion(prev => prev+1)}>Next question</ButtonUI>}
                </ButtonsContainerUI>
            </QuizBlockUI>
        </SectionContainer>
    </OboardingPageUI>)
}