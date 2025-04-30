import React from 'react'
import UserContact from '../components/contact/usercontact'
import { Header } from '../layouts/Header'
import AnnouncementBar from '../components/layout/AnnouncementBar'
import Footer from '../layouts/footer'

const Contact: React.FC = () => {
  return (
    <div>
       <AnnouncementBar />
       <Header />
      <UserContact />
      <Footer />
    </div>
  )
}

export default Contact