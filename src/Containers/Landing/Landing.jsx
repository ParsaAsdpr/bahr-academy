import React, { Component, Fragment } from 'react';
import RecCourses from './RecommendedC';
import RecentArticles from './RecentArticles';
import Advantages from './Advantages';
import Tutors from './Tutors';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Advantages></Advantages>
                <RecCourses></RecCourses>
                <Tutors></Tutors>
                <RecentArticles></RecentArticles>
            </Fragment>
        );
    }
}
 
export default Landing;