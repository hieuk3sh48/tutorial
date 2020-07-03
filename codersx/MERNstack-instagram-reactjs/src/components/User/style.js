import styled from 'styled-components';

const Style = styled.section`
    /* User */
    .User{
        background: #fff;
        text-align:left;
    }

    /* Header */
    .navbar{
        position:fixed;
        width: 100%;
        background:#fff;
    }
    .navbar-light .navbar-brand {
        font-size: 1rem;
    }

    /* Body */
    .body {
        margin: 3rem 0;
    }
    /* Title */
    .title {
        justify-content:space-between;
        align-items:center;
        padding: 1rem;
    }
    .title .name{
        flex-basis: 100%;
        text-transform:capitalize;
    }
    .title .content {
        flex-basis: 75%;
        justify-content: space-around;
    }

    /* Profile */
    .profile{

    }
    .profile .btn-edit{
        border: 1px solid #000;
        width: 90%;
        margin: 0 1rem;
        padding: 0;
    }
    .content-profile{
        margin:1rem 0;
    }
    .content-profile .menu .border-icon{
        width: 50%;
        text-align: center;
        padding: .5rem 0;
    }
    .content-profile .menu .border-icon:hover{
        border-bottom:1px solid #000;
    }

    .content-profile .menu{

    }
    .content-profile .photo-video img {
        width: 33%;
        height: 23vh;
        border: .1px solid;
    }
`;

export default Style