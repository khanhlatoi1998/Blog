import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


import HandBook from "./HandBook";


const ListHandBook = () => {
    return (
        <section className="py-6">
            <div className="container__responsive lg:px-12 px-6">
                <div className="heading__block">
                    <h1 className="heading__main">CẨM NANG DU LỊCH</h1>
                </div>
                <div className="flex flex-row">
                    <div className="w-2/3 pt-8">
                        <div>
                            <HandBook />
                            <HandBook />
                            <HandBook />
                            <HandBook />
                        </div>
                        <div>
                            <ReactPaginate 
                                nextLabel="next >"
                                // onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={50}
                                previousLabel="< previous"
                                // renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListHandBook;