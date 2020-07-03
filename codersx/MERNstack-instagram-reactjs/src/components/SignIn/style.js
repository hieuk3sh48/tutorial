import styled from 'styled-components';

const Style = styled.section`
    /* SignIn */
    .SignIn{
        align-items: center;
        background: -webkit-gradient(linear,left top,right top,from(#bd3381),to(#ee583f));
        background: -webkit-linear-gradient(left,#bd3381,#ee583f);
        background: linear-gradient(to right,#bd3381,#ee583f);
        color:#000;
        height: 100vh;
    }

    /* Header */
    .header .btn{
        background:transparent!important;
        border: none;
    }
    .header .btn:focus{
        background:transparent !important;
        border: none !important;
        box-shadow: none!important;
    }
    .header .btn i{
        margin-left: .2rem;
    }

    /* Title */
    .title {
        padding: 2rem 0;
    }
    .title h1{
        font-family: 'Dancing Script', cursive;
    }

    /* Form SignIn */
    form .btn-primary{
        width:100%;
        background: transparent;
        border-color: #fff;
        
    }
    form .text-muted{
        color:#000!important;
    }

    /* Line Or */
    .line-or{
        position: relative;
    }
    hr{
        background:#000;
        width: 90vw;
    }
    .line-or div{
        position: absolute;
        left: 40%;
        background:#fff;
        background: -webkit-gradient(linear,left top,right top,from(#bd3381),to(#ee583f));
        background: -webkit-linear-gradient(left,#bd3381,#ee583f);
        background: linear-gradient(to right,#bd3381,#ee583f);
        padding: 0 1rem;
        top: 1vw;
    }

    /* SignIn with */


    /* Sign up */
    .sign-up {
        display: flex;
        margin-top: 5rem;
    }
`;

export default Style