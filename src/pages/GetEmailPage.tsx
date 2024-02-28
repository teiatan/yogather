import { useState } from "react";
import { Header } from "../components/Header/Header";
import { SectionContainer } from "../components/pageLayoutComponents/SectionContainer";
import { AnswerTexUI, AnswersContainerUI, BackBtnUI, ButtonsContainerUI, InputUI, OboardingPageUI, QuizBlockUI } from "./OnboardingPage.styled";
import { ButtonUI } from "../components/universal/Button.styled";
import { getUserAnswers, updateUserAnswers } from "../utils";
import { Link, useNavigate } from "react-router-dom";

const questions = [{
    "orderNumber": 16,
    "id": 16,
    "questionText": "Thank you for expressing interest in our product! We're thrilled that you're eager to be among the first to experience it. <span style={{color: '#CF1A86'}}>Leave your email</span>, and we'll ensure you receive the earliest notifications once it becomes available.",
    "questionType": "input",
    "inputType": "email"
}]

export const GetEmailPage = () => {
    const storedData = localStorage.getItem('email');
    const initialState = storedData ? JSON.parse(storedData) : {};

    const [currentQuestion, setCurrentQuestion] = useState(16);
    const [onboardingAnswers, setOnboardingAnswersState] = useState<Record<number, string[]>>(initialState);
    const question = questions?.find(el => el.orderNumber === currentQuestion);

    const setOnboardingAnswers = (newItems: Record<number, string[]>) => {
        setOnboardingAnswersState(newItems)
        localStorage.setItem('email', JSON.stringify(newItems))
        const answers = getUserAnswers();
        updateUserAnswers({...answers, email: [...answers.email, newItems]})
    }
    if(!onboardingAnswers[currentQuestion]) {
        const newAnswers = {
            ...onboardingAnswers,
            [currentQuestion]: []
        }
        setOnboardingAnswers(newAnswers)
    }

    const navigate = useNavigate();
    
    return (<OboardingPageUI>
        <Header bgColor="#F8F8F8"/>
        <SectionContainer bgColor="#F8F8F8">
            <QuizBlockUI>
                <AnswerTexUI>Thank you for expressing interest in our product! We're thrilled that you're eager to be among the first to experience it. <span style={{color: '#CF1A86'}}>Leave your email</span>, and we'll ensure you receive the earliest notifications once it becomes available.</AnswerTexUI>
                <AnswersContainerUI>

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
                    <Link to="/pay" style={{textDecoration: "none"}}><BackBtnUI onClick={()=>setCurrentQuestion(prev => prev-1)}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                        <path id="Vector" d="M8.32843 10.997H20.5V12.997H8.32843L13.6924 18.3609L12.2782 19.7751L4.5 11.997L12.2782 4.21875L13.6924 5.63296L8.32843 10.997Z" fill="#1E2735"/>
                        </g>
                    </svg>Back</BackBtnUI></Link>
                    <ButtonUI onClick={()=>{setCurrentQuestion(prev => prev+1); navigate("/")}}>Submit</ButtonUI>
                </ButtonsContainerUI>
            </QuizBlockUI>
        </SectionContainer>
    </OboardingPageUI>)
}