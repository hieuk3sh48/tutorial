import styled from 'styled-components';

const Styles=styled.div`
    .Footer{
        height: 100%;
        background: var(--bg-color);
        position: relative;
       

    }
    .container{
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        position:relative;
    }
    .container > div{
        flex-grow:1;
        flex-basis:0;
        padding:3rem .9rem;
    }
    h2{
        color:#fff;
    }

    /* Newsletter */
    .form-group{
        display: flex;
        position:relative;
    }
    .form-control{
        color: #fff;
        border: none;
        border-radius: 0;
        background: #000;
    }
    .btn-form{
        background: var(--sky);
        position: absolute;
        padding: 2vh;
        right: .2vw;
        top: -1vh;

    }
    
    /* Instagram */
    .instagram img{
        display: inline-block;
        width: 25%;
        height: 50%;
        margin: .3rem .4rem;
    }

    /* Follow */
    .follow i{
        color:#fff;
        padding:0.4rem;
    }

    /* ScrollToTop */
    .ScrollToTop{
        position: absolute;
        right: 1vw;
        bottom: 30%;
    }
    .ScrollToTop span{
        color:var(--midnight);
    }
    .ScrollToTop span:hover{
        color:#fff;
        cursor:pointer;
    }
`;
export default Styles