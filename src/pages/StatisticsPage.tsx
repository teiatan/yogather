/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react"
import { SectionContainer } from "../components/pageLayoutComponents/SectionContainer"
// import { getData } from "../api/users"

export const StatisticsPage = () => {
    
    // const [data, setData] = useState<any>("")

    // useEffect(()=>{
    //     getData().then(res => {
    //         console.log(res); 
    //         setData(res)
    //     }
    //     )
    // },[])

    
    return (
        <SectionContainer>
            {/* total:{data?.data?.length}
            {data?.data?.map((el:any) => <div style={{border: "1px solid #000", }}>
                {JSON.stringify(el)}
            </div>)} */}
        </SectionContainer>
    )
}