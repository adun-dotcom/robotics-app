import styled from "styled-components";
export const FooterWrapper = styled.div`
background:#273186;
margin-top:-170px;
padding:370px 0 110px 0;
z-index:-3;
position:relative;


.content{
    width:60%;margin:0 auto;
    text-align:center;
    color:#fff;

    @media screen and (max-width: 1024px){
        width:80%;
    }

    
    @media screen and (max-width: 769px){
        width:100%;
    }


  .brand {
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
  
        @media screen and (max-width: 923px) {
          font-size:18px;
        }
      }


      .footer-menu{
          display:flex;
          justify-content: space-around;
          align-items:center;
          margin-top: 40px;
         padding-left:0;

          @media screen and (max-width: 540px){
            justify-content: space-between;
        }

          li{
              text-transform:uppercase;
              font-size:16px;
              font-weight: 300;

              @media screen and (max-width: 769px){
                font-size:14px;
            }
            @media screen and (max-width: 540px){
                font-size:12px;
            }
          }
      }


      .bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:40px;

          @media screen and (max-width: 354px){
           flex-direction: column;
           align-items:flex-start;
           margin-top:50px;
    
         }

          .support{
            font-weight:300;
            font-size:16px;
  
            @media screen and (max-width: 769px){
              font-size:14px;
          }
          @media screen and (max-width: 540px){
              font-size:12px;
          }

      }



      .copyright-div{
          display:flex;
          align-items: center;
      

          img{
            margin-right:20px;

            @media screen and (max-width: 540px){
              margin-right:10px;
              width:14px;
          }

          @media screen and (max-width: 354px){
              margin-right:0;
              width:14px;
          }
        
        }

          }
          
         
      }


      .mediums{
        @media screen and (max-width: 354px){
           margin: 30px 0;
        }
        p{
            font-weight:300;
            font-size:16px;
    
            @media screen and (max-width: 769px){
              font-size:14px;
          }
          @media screen and (max-width: 540px){
            font-size:12px;
        }

        }
        

          img{
              width:24px;
              margin:0 20px ;

        @media screen and (max-width: 540px){
         width:20px;
         margin:0 10px ;

      }
          }
      }
}
`