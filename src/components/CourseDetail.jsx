import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
    const course = useParams();
    return (
        <div>
            <h4>Course {course.id} Detail</h4>
        </div>
    );
}

export default CourseDetail;