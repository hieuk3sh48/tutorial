import styled from 'styled-components';

const Style = styled.section`
    /* Sign Up */
    .SignUp{
        background: -webkit-gradient(linear,left top,right top,from(#bd3381),to(#ee583f));
        background: -webkit-linear-gradient(left,#bd3381,#ee583f);
        background: linear-gradient(to right,#bd3381,#ee583f);
        height: 100vh;
        padding: 0 2rem;
        align-items:center;
        text-align:center;
    }

    /* Title */
    .title{
        margin: 3rem 0;
    }
    .title h1{
        font-family: 'Dancing Script', cursive;
    }

    /* Form SignUp */
    form .btn-primary{
        background: transparent;
        border-color: #fff;
        border-radius: 10vw;
        padding: .5rem 2rem;
    }
    
     /* Sign in */
     .sign-in {
        display: flex;
        margin-top: 5rem;
    }
`;

export default Style