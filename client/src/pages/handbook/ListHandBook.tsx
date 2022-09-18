import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


import HandBook from "./HandBook";


const ListHandBook = () => {
    return (
        <section className="sm:py-6">
            <div className="container__responsive lg:px-12 px-4">
                <div className="heading__block">
                    <h1 className="heading__main">CẨM NANG DU LỊCH</h1>
                </div>
                <div className="flex flex-row">
                    <div className="lg:w-2/3 py-8">
                        <div>
                            <HandBook />
                            <HandBook />
                            <HandBook />
                            <HandBook />
                        </div>
                        <div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                previousLabel="<"
                                className="flex justify-center max-w-[350px] gap-1 mx-auto text-sm mt-2"
                                pageLinkClassName="px-2 py-[2px] rounded-sm"
                                activeLinkClassName="bg-color_04"
                                previousLinkClassName="px-2 py-1"
                                nextLinkClassName="px-2 py-1"
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={40}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListHandBook;