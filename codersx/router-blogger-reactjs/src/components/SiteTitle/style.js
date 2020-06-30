import styled from 'styled-components';
import img from './../../assets/Background-image.png';

const Styles=styled.div`
    section{
        background:url(${img});
        background-size:cover;
    }
    .SiteTitle{
        height:110vh;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button.btn:hover {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
`;
export default Styles