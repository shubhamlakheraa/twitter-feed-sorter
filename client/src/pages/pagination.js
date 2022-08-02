import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <ul className='flex justify-center'>
        {pageNumbers.map(number => (
          <li key={number} className='ml-5 mb-3  rounded-lg pl-3 pr-3 bg-[#1DA1F2] text-[#ffffff] '>
            <a className='flex justify-center active:bg-[##ff6314]' onClick={() => paginate(number)} href={":" + currentPage} >
              {number}
            </a>
          </li>
        ))}
      </ul>
    
  );
};

export default Pagination;