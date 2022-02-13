import styled from "styled-components";
export const HeaderWrap = styled.nav`
  background: #1b2688;
  color: #fff;
  padding: 30px 0;

  @media screen and (max-width:500px){
      padding:20px 0;
  }

  .content-div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamburger{
        display:none;

        @media screen and (max-width: 850px) {
            display:inline-block;
            margin-left:30px;
          }
    }

    .brand {
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;

      @media screen and (max-width: 923px) {
        font-size:20px;
      }
    }

    .sub-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .web-btn{
      @media screen and (max-width:850px){
        display:none;
      }
    }
    ul {
      display: flex;

      @media screen and (max-width: 850px) {
        display:none;
      }

      li {
        margin-right: 30px;

        a {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
          padding-bottom: 5px;
          position: relative;

          @media screen and (max-width: 923px) {
            font-size:14px;
          }
        }

        a:hover {
          font-weight: 700;
        }

        a:after {
          background: none repeat scroll 0 0 transparent;
          bottom: 0;
          content: "";
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          background: #fff;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }

        a:hover:after {
          width: 100%;
          left: 0;
        }
      }
    }
  }

  .mobile-menu{
      position:absolute;
      top:400;
      left:0;
      right:0;
      background: #fff;
      width:100%; 
      padding:30px;
      height:100vh;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    z-index:5000;


      .sub-div{
        ul{
          padding-left:0;
        }
        li{
          margin-bottom:30px;
         
        }
         a{
          color:#1b2688;
          font-size:15px;
          font-weight:bold;
          text-transform:uppercase;
        }
      }
  }

  
`;
