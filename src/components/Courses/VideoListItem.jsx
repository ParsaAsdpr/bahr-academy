import React from 'react';
import {HiDownload} from 'react-icons/hi'

const VideoListItem = props => {
    return ( 
        <a className='border-b border-stone-200 flex flex-row justify-between py-4 cursor-pointer'>
            <div className='flex flex-row items-center gap-2'>
                <p className='text-blue-500 text-xs'>{props.index+1}</p>
                <p className='text-stone-700 text-sm'>{props.title}</p>
                <HiDownload className="text-blue-500" />
            </div>

            <p className='text-stone-500 text-sm'>{props.duration}</p>
        </a>
     );
}
 
export default VideoListItem;