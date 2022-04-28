import React, { Component } from 'react';
import SignFlip from '../../components/Signup/SignFlip';
import signuppic from "../../assets/images/signup.png"

class Signup extends Component {
    state = {  } 
    render() { 
        return (
            <div className='max-w-7xl mx-auto flex row h-screen'>
                <div className='h-full pt-32 md:w-2/5 w-full'> <SignFlip></SignFlip> </div>
                <div className='h-full pt-28 w-3/5 md:block hidden'><img src={signuppic} alt="" className='w-full'/></div>
            </div>
        );
    }
}
 
export default Signup;