import React from 'react'
import Nav from '../Components/Common/Nav'

import BreadCrumbs from '../Components/Common/BreadCrumbs'
import CourseDetail from '../Components/Course/CourseDetail'
import AdsCard from '../Components/Course/AdsCard'
import SimilarCourses from '../Components/Course/SimilarCourses'
import SubscriptionBox from "../Components/Common/SubscriptionBox"
import Footer from '../Components/Common/Footer'


const CourseDetailsContainer : React.FC = () => {
  return (
    <div className='bg-slate-100'>
      <Nav />
      {/* <BreadCrumbs /> */}
      <div className="h-screen"></div>
      <div className="flex justify-center align-middle mx-10 py-5 ">
        <div className="w-3/4">
          <CourseDetail />
        </div>
        <div className="w-[14rem]  h-64 flex align-middle justify-end bg-[#ffffff] rounded border-hidden ">
          <AdsCard image="path/to/" adName="Ads" />
        </div>
      </div>
      <SimilarCourses />
      <SubscriptionBox />
      <Footer />
      
    </div>
  )
}

export default CourseDetailsContainer
