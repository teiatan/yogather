/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { SectionContainer } from "../components/pageLayoutComponents/SectionContainer"
import { getData, getMockapi1Data, getMockapi2Data } from "../api/users"
import { HeadingUI } from "../components/startPage/Features/Features.styled";

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

    console.log(mockApi1Data);
    
    return (
        <>
            <SectionContainer bgColor="#F8F8F8">
                <HeadingUI>MongoDB data</HeadingUI>
                total users: {mongoDBdata?.length}
            </SectionContainer>

            <SectionContainer bgColor="white">
                <HeadingUI>mockapi (first 100) data</HeadingUI>
                total users: {mockApi1Data?.length}
            </SectionContainer>

            <SectionContainer bgColor="#F8F8F8">
                <HeadingUI>mockapi (second 100) data</HeadingUI>
                total users: {mockApi2Data?.length}
            </SectionContainer>
        </>
    )
}