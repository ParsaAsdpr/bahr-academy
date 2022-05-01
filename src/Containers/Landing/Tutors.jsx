import React, { Component } from 'react';
import salar from "../../assets/images/salar.jpg"
import { Title } from '../../components/common/Title';
import TutorCard from '../../components/Tutors/TutorCard';

class Tutors extends Component {
    state = { 
        tutors: [{name: "سالار", avatar: salar, about: "سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر "},
        {name: "سالار", avatar: salar, about: "سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر "},
        {name: "سالار", avatar: salar, about: "سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر "},
        {name: "سالار", avatar: salar, about: "سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر سالار خر "},
    ]}
    render() { 
        const { tutors } = this.state;
        return (
            <section className='max-w-7xl mx-auto'>
                <Title text="مدرسین"></Title>
                <div className='grid grid-cols-4 gap-4 mt-8'>
                    {tutors.map((tutor, index) => {
                    return(
                        <TutorCard name={tutor.name} avatar={tutor.avatar} key={index} about={tutor.about}></TutorCard>
                    )
                    })}
                </div>
            </section>
        );
    }
}
 
export default Tutors;