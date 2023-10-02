import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const {itemsCount, pageSize,onPageChange,currentPage} = props;
    const pageCount = Math.ceil(itemsCount / pageSize) ;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <>
            <nav className='mx-auto'>
                <ul className="">
                    {pages.map(page => <li key={page} className={page===currentPage ? "p-2 m-1 cursor-pointer bg-indigo-500 text-white" : "p-2 m-1 cursor-pointer"}>
                        <a onClick={()=> onPageChange(page)} className="text-indigo-500 rounded-sm border border-stone-100">{page}</a>
                    </li>)}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;
