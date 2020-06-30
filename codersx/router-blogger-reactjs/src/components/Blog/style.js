import styled from 'styled-components';
import img from './../../assets/Abract01.png'

const Styles=styled.div`
    .Blog{
        background:url(${img});
        background-repeat: no-repeat;
        width: 100%;
        background-position: right;
        height: 100vh;
    }
    .card{
        box-shadow: 10px 10px 5px 0 rgba(0,0,0,.2);
        text-align: center;
    }
    .container{
        height: 100%;
        display: flex;
        align-items: center;
    }
`;
export default Styles