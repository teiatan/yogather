import { useEffect, useState } from "react"
import { User, createUser } from "./api/users"
import { Route, Routes, useLocation } from "react-router-dom"
import { StartPage } from "./pages/StartPage"
import { OnboardingPage } from "./pages/OnboardingPage"
import { TrainingPage } from "./pages/TrainingPage"
import { SubscriptionPage } from "./pages/SubscriptionPage"
import { GetEmailPage } from "./pages/GetEmailPage"

const App = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const direction = searchParams.get('direction') ?? "direct";
  const [id, setId] = useState(()=>localStorage.getItem('id') ?? "")

  useEffect(()=>{
    if(!id) {
      createUser({direction})
        .then((res:{data:User}) => {
          const userId = res?.data?.id
          if(userId) {
            setId(userId);
            localStorage.setItem('id', userId)
          }
        })
    }
  }, [id])

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quiz" element={<OnboardingPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/pay" element={<SubscriptionPage />} />
      <Route path="/email" element={<GetEmailPage />} />
      <Route path='*' element={<StartPage />} />
    </Routes>
  )
}

export default App
