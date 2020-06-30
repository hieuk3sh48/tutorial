import styled from 'styled-components';

const Styles=styled.div`
    .Content{
        display:grid;
        grid-template-columns:70% 30%;
        padding: 4rem 0;
    }

    /* css content */
    .post-content{
        margin-bottom:5rem;
        width:100%;
    }
    .post-image{
        margin: 1rem 2rem;
        position:relative;
    }
    .post-image .img{
        overflow:hidden;
    }
    .post-image img{
        width:100%;
        transition:all 1s ease;
    }
    .post-image img:hover{
        transform:scale(1.3);
    }
    .post-info{
        position:absolute;
        background:linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        padding:1rem;
        bottom:-7%;
        left:15vw;
        border-radius:3rem;
    }
    .post-info span{
        margin:.5rem;
    }
    .post-title{
        padding: 1rem 2rem;
    }
    .post-btn{
        border-radius:0;
        padding:.7rem 1.5rem;

    }
    
    /* css sidebar */
    .category-list{
        font-family:var(--Livvic);
    }
    .list-items{
        background:var(--sky);
        padding:.4rem 1rem;
        margin:.8rem 0;
        border-radius:3rem;
        width:80%;
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .list-items a{
        color:#000;
    }
    .sidebar .post-content{
        padding: 1rem 0;
        margin-bottom: 1rem;
    }
    .popular-post h2{
        padding-top:8rem;
    }
    .sidebar .post-info{
        padding:0 !important;
        bottom:0rem !important;
        left:0rem!important;
        border-radius:0rem!important;
        background:#fff!important;
    }
    .sidebar .post-title a{
        font-size:1rem;
    }
    .sidebar .form-group{
        padding: .5rem 2rem;
    }
    .sidebar .form-group .btn{
        border-radius: 0;
        padding: .8rem 32%;
        margin: 1rem 0;
        width:100%;
    }
    .sidebar .tag{
        padding: .4rem 1rem;
        margin: .4rem .6rem;
    }
`;
export default Styles