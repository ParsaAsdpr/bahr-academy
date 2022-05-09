import React from 'react';

const CourseTutor = props => {
    return ( 
        <React.Fragment>
            <div className='flex flex-row justify-between my-5 items-center'>
                <div className='flex flex-row gap-3 items-center'>
            <div className="rounded-full overflow-hidden float-right h-12">
                <img src="https://pbs.twimg.com/media/FCQddC_WYAEzxfA.jpg:large" alt="" className="w-full h-full" />
              </div>
              <p className='text-sm text-stone-800'>سالار نیلی</p>
                </div>
              <p className='text-2xs text-stone-400'>۳ سال سابقه کار</p>
            </div>
            <div>
                <p className='text-xs leading-loose text-stone-500 pb-3'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان
                </p>
                <a className='text-blue-500 cursor-pointer hover:underline text-xs'>مشاهده رزومه</a>
            </div>

        </React.Fragment>
     );
}
 
export default CourseTutor;