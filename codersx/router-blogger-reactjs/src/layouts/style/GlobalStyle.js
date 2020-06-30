import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .btn{
        background: var(--sky);
        color:#000;
        border: none;
        border-radius: 2rem;
        padding: 1rem 3rem;
        font-size: 1rem;
    }
    .text-gray {
        color: var(--text-gray);
    }
    a{
        font-size:1.5rem;
    }
    p{
        color:var(--text-light);
    }
    h2{
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    .flex-row{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }

    :root {
        --text-gray: #3f4954;
        --text-light: #686666da;
        --bg-color: #0f0f0f;
        --white: #ffffff;
        --midnight: #104f55;
        --sky: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        --Abel: 'Abel', cursive;
        --Anton: 'Anton', cursive;
        --Josefin: 'Josefin', cursive;
        --Lexend: 'Lexend', cursive;
        --Livvic: 'Livvic', cursive;
    }

    /* Media */
    @media only screen and (max-width:1130px){
        .Content .post-content > .post-image .post-info {
            left: 0 !important;
            bottom: 0 !important;
            border-radius: 0% !important;
        }   
        .Content .sidebar .post-info{
            display:none!important;
        } 
        .Footer .container{
            grid-template-columns:50% 50%;
        }
        .Footer .ScrollToTop{
            display:none;
        }
        h1{
            font-size:1.7rem;
        }
        h3{
            font-size:1.5rem;
        }
        a{
            font-size:1.3rem;
        }
    }
    @media only screen and (max-width:750px){
        main .Content, .Footer .container{
            grid-template-columns:100%!important;
        }
        .Content .post-info{
            display:none!important;
        } 
    }
    @media only screen and (max-width:520px){
        main .Blog{
            height: 125vh;
        }
        .Footer .contain >div{
            padding:1rem .9rem !important;
        }
    }
`
export default GlobalStyle