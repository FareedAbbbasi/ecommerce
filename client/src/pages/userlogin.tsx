import React from "react"
import AnnouncementBar from "../components/layout/AnnouncementBar"
import Footer from "../layouts/footer"
import Login from "../components/logIn/login"
import { Header } from "../layouts/Header"
import Line from "../components/ui/line"

const UserLogin:React.FC = () => {
  return (
    <div>
        <AnnouncementBar />
        <Header />
        <Line width='w-[100%]' />
        <Login />
        <Footer />
    </div>
  )
}

export default UserLogin