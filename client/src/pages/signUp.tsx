import React from "react"
import SignUpUser from "../components/signUpUser/signUpUser"
import AnnouncementBar from "../components/layout/AnnouncementBar"
import { Header } from "../layouts/Header"
import Line from "../components/ui/line"
import Footer from "../layouts/footer"

const SignUp: React.FC = () => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <Line width='w-[100%]' />
      <SignUpUser />
      <Footer />
    </div>
  )
}

export default SignUp