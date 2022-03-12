import React from 'react';
import { Routes,Route } from 'react-router-dom';
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import CourseDetail from './CourseDetail'
import Courses from './Courses'

function Pages(props) {
    return (
        <Routes>
            <Route path='/' element={<Courses />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/course/:id' element={<CourseDetail />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Pages;