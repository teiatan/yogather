/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { SectionContainer } from "../components/pageLayoutComponents/SectionContainer"
import { getData, getMockapi1Data, getMockapi2Data } from "../api/users"
import { HeadingUI } from "../components/startPage/Features/Features.styled";
import questions from "../quiz.json";

export const StatisticsPage = () => {
    
    const [mongoDBdata, setMongoDBdata] = useState<any>([]);
    const [mockApi1Data, setMockApi1Data] = useState<any>([]);
    const [mockApi2Data, setMockApi2Data] = useState<any>([])

    useEffect(()=>{
        getData().then(res => {
            setMongoDBdata(res?.data)
        }
        )
    },[])

    useEffect(()=>{
        getMockapi1Data().then(res => {
            setMockApi1Data(res?.data)
        }
        )
    },[])

    useEffect(()=>{
        getMockapi2Data().then(res => {
            setMockApi2Data(res?.data)
        }
        )
    },[])
    
    return (
        <>
            <SectionContainer bgColor="#F8F8F8">
                <HeadingUI>MongoDB data</HeadingUI>
                total users: {mongoDBdata?.length} <br/>
                total quiz started:  {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.onboardingAnswers ?  acc + 1 : acc, 0)} <br/>
                total quiz finished: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.onboardingAnswers && Object.keys(el?.answers?.onboardingAnswers)?.length === 16 ?  acc + 1 : acc, 0)} <br/>
                app store click: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.clicks?.appleStore ?  acc + el?.answers?.clicks.appleStore : acc, 0)} <br/>
                google play clicks: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.clicks?.googlePlay ?  acc + el?.answers?.clicks.googlePlay : acc, 0)}<br/>
                subscriptions watched: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.clicks?.["1monthSubscription"] || el?.answers?.clicks?.["1monthSubscription"] || el?.answers?.clicks?.["1monthSubscription"] ?  acc + 1 : acc, 0)}<br/>
                1 month subscription: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.clicks?.["1monthSubscription"] ?  acc + el?.answers?.clicks?.["1monthSubscription"] : acc, 0)}<br/>
                3 month subscription: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.clicks?.["3monthSubscription"] ?  acc + el?.answers?.clicks?.["3monthSubscription"] : acc, 0)}<br/>
                12 month subscription: {mongoDBdata?.reduce((acc:any, el:any) => el?.answers?.clicks?.["3monthSubscription"] ?  acc + el?.answers?.clicks?.["12monthSubscription"] : acc, 0)}<br/>
                
                <>
                    {mongoDBdata?.map((el:any, idx:any) => <div key={idx} style={{border: "1px solid black", width: "100%"}}>
                        {idx} <br/>
                        userKey: {el?.userKey} <br/>
                        created: {el?.createdAt} <br/>
                        direction: {el?.direction} <br/>
                        quizAnswers: {JSON.stringify(el?.answers?.onboardingAnswers)} <br/>
                        clicks: {JSON.stringify(el?.answers?.clicks)} <br/>
                    </div>)}
                </>
            </SectionContainer>

            <SectionContainer bgColor="white">
                <HeadingUI>mockapi (first 100) data</HeadingUI>
                total users: {mockApi1Data?.length} <br/>
                total quiz started:  {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.onboardingAnswers ?  acc + 1 : acc, 0)} <br/>
                total quiz finished: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.onboardingAnswers && Object.keys(el?.answers?.onboardingAnswers)?.length === 16 ?  acc + 1 : acc, 0)} <br/>
                app store click: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.appleStore ?  acc + el?.answers?.clicks.appleStore : acc, 0)} <br/>
                google play clicks: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.googlePlay ?  acc + el?.answers?.clicks.googlePlay : acc, 0)}<br/>
                subscriptions watched: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["1monthSubscription"] || el?.answers?.clicks?.["1monthSubscription"] || el?.answers?.clicks?.["1monthSubscription"] ?  acc + 1 : acc, 0)}<br/>
                1 month subscription: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["1monthSubscription"] ?  acc + el?.answers?.clicks?.["1monthSubscription"] : acc, 0)}<br/>
                3 month subscription: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["3monthSubscription"] ?  acc + el?.answers?.clicks?.["3monthSubscription"] : acc, 0)}<br/>
                12 month subscription: {mockApi1Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["3monthSubscription"] ?  acc + el?.answers?.clicks?.["12monthSubscription"] : acc, 0)}<br/>
                <>
                    {mockApi1Data?.map((el:any, idx:any) => <div key={idx} style={{border: "1px solid black", width: "100%"}}>
                        {idx} <br/>
                        userKey: {el?.userKey} <br/>
                        created: {el?.createdAt} <br/>
                        direction: {el?.direction} <br/>
                        quizAnswers: {JSON.stringify(el?.answers?.onboardingAnswers)} <br/>
                        clicks: {JSON.stringify(el?.answers?.clicks)} <br/>
                    </div>)}
                </>
            </SectionContainer>

            <SectionContainer bgColor="#F8F8F8">
                <HeadingUI>mockapi (second 100) data</HeadingUI>
                total users: {mockApi2Data?.length} <br/>
                total quiz started:  {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.onboardingAnswers ?  acc + 1 : acc, 0)} <br/>
                total quiz finished: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.onboardingAnswers && Object.keys(el?.answers?.onboardingAnswers)?.length === 16 ?  acc + 1 : acc, 0)} <br/>
                app store click: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.appleStore ?  acc + el?.answers?.clicks.appleStore : acc, 0)} <br/>
                google play clicks: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.googlePlay ?  acc + el?.answers?.clicks.googlePlay : acc, 0)}<br/>
                subscriptions watched: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["1monthSubscription"] || el?.answers?.clicks?.["1monthSubscription"] || el?.answers?.clicks?.["1monthSubscription"] ?  acc + 1 : acc, 0)}<br/>
                1 month subscription: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["1monthSubscription"] ?  acc + el?.answers?.clicks?.["1monthSubscription"] : acc, 0)}<br/>
                3 month subscription: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["3monthSubscription"] ?  acc + el?.answers?.clicks?.["3monthSubscription"] : acc, 0)}<br/>
                12 month subscription: {mockApi2Data?.reduce((acc:any, el:any) => el?.answers?.clicks?.["3monthSubscription"] ?  acc + el?.answers?.clicks?.["12monthSubscription"] : acc, 0)}<br/>
                
                <>
                    {mockApi2Data?.map((el:any, idx:any) => <div key={idx} style={{border: "1px solid black", width: "100%"}}>
                        {idx} <br/>
                        userKey: {el?.userKey} <br/>
                        created: {el?.createdAt} <br/>
                        direction: {el?.direction} <br/>
                        quizAnswers: {JSON.stringify(el?.answers?.onboardingAnswers)} <br/>
                        clicks: {JSON.stringify(el?.answers?.clicks)} <br/>
                    </div>)}
                </>
            </SectionContainer>

            <SectionContainer bgColor="white">
                <HeadingUI>Quiz questions</HeadingUI>
                {questions.map((el:any, idx:any)=><div key={idx} style={{border: "1px solid black", width: "100%"}}>
                    {el?.orderNumber}: {el?.questionText}
                    variants: <ul>
                        {el?.answers?.map((item:any) => <li> {item?.id}:{item?.text}</li>)}
                    </ul>
                </div>)}
            </SectionContainer>
        </>
    )
}