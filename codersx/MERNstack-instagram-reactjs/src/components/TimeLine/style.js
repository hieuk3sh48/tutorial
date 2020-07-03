import styled from 'styled-components';
import model2 from './../../assets/img/model2.jpeg';

const Style = styled.section`
    /* Time Line */
    .TimeLine{
        background: #fff;
    }

    /* Header */
    .header{
        justify-content:space-between;
        align-items:center;
        box-shadow: 0 1px 2px;
        padding:0 .5rem;
        position:fixed;
        width:100%;
        background:#fff;
        z-index:999;
    }
    .header h1{
        font-family: 'Dancing Script', cursive;
    }

    /* Body */
    .body {
        margin: 3rem 0;
    }
    /* Posts */
    .posts{
        padding: 1rem 0;
    }
    /* Title */
    .title-post{
        justify-content:space-around;
        align-items:center;
        padding:0 .5rem;
    }
    .title-post p{
        margin-bottom:0;
    }
    .title-post .user{
        flex-basis:70%;
        text-align:left;
    }
    .title-post .border-avatar{
        background: -webkit-gradient(linear,left top,right top,from(#bd3381),to(#ee583f));
        background: -webkit-linear-gradient(left,#bd3381,#ee583f);
        background: linear-gradient(to right,#bd3381,#ee583f);
        border-radius: 50%;
        padding: 1px;
    }
    .title-post .avatar{
        padding: 1px;
        background: #fff;
    }
    /* Img Post */
    .img-post {
        background:url(${model2}) no-repeat center center ;
        height: 55vh;
    }
    /* Icon-post */
    .icon-post{
        justify-content:space-between;
        padding:.5rem .5rem;
    }
    .icon-post i{
        padding-left: .5rem;
    }
    /* Liked */
    .liked{
        text-align: left;
        padding: 0 .5rem;
    }
    /* content */
    .content{
        text-align: left;
        padding: 0 .5rem;
    }
    /* comments */
    .comments{
        text-align: left;
        padding: 0 .5rem;
    }
    .comments form{
        align-items:center;
        justify-content:space-around;
    }
    .comments .icons i{
        font-size:1rem;
    }
    .comments form .addcomment{
        flex-basis:70%;
        margin-bottom: 0;
    }

   
`;

export default Style