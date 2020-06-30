import React from 'react';
import { Pagination } from 'react-bootstrap';

function Page(props){
    const {prev,item,next}=props;
    const {postsPerPage, totalPosts}=props;

    const pageNumber =[];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <Pagination>
            <Pagination.Prev  onClick={()=>prev()}/>
            { pageNumber.map((number,index)=>(
                <Pagination.Item key={index} onClick={()=>item(number)}>
                    {number}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={()=>next()}/>
        </Pagination>
    )
}
export default Page;
