import styled from "styled-components";
export const ProductWrap = styled.div`
  background: #fff;
  width: 100%;
  transform: skew(0deg, -10deg);
  position:relative;
  z-index:20;

  .skewed-div {
    transform: skew(0deg, 10deg);
    padding-top: 300px;
    padding-bottom: 100px;

    h3 {
      font-size: 36px;
      font-weight: 700;
      color: rgba(40, 54, 177, 1);
      margin: 0;

      @media screen and (max-width: 789px) {
        font-size: 30px;
      }
      @media screen and (max-width: 500px) {
        font-size: 26px;
      }
    }

    p {
      font-size: 20px;
      line-height: 32px;
      text-align: left;
      padding-right: 100px;
      @media screen and (max-width: 789px) {
        font-size: 18px;
        padding-right: 50px;
      }
      @media screen and (max-width: 500px) {
        font-size: 16px;
        padding-right: 0;
        line-height: 28px;

        padding-bottom: 20px;
      }
    }

    .content {
      display: flex;
      align-items: center;
      height: 460px;
      justify-content: space-between;
      padding-top: 50px;

      @media screen and (max-width: 1062px) {
        flex-direction: column-reverse;
        height: auto;

        img {
          margin-top: 70px;
          width: 100%;
        }
      }
      .content-text1 {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 1062px) {
          width: 80%;
        }
        @media screen and (max-width: 789px) {
            width: 100%;
          }
      }

      small {
        color: rgba(47, 46, 65, 1);
        font-size: 16px;
        line-height: 28px;
        display: block;

        @media screen and (max-width: 500px) {
          font-size: 14px;
          line-height: 24px;
        }
      }

      
    }

    .content2 {
      margin-top: 100px;
      position:relative;
      height:300px;

      @media screen and (max-width:979px){
          height:450px;
      }

      @media screen and (max-width:789px){
        height:700px;
    }

      .heading {
        width: 50%;
        margin: 0 auto;
        text-align: center;

        @media screen and (max-width:1024px){
            width:70%;
        }

        @media screen and (max-width:500px){
            width:100%;
        }

        p {
          text-align: center;
          padding-right: 0;
        }
      }

      .cards {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top:80px;

        position: relative;

        @media screen and (max-width: 983px) {
            flex-wrap: wrap;
            justify-content: space-evenly;
          }

        .card {
          width: 300px;
          height: 350px;
          background: rgba(255, 255, 255, 1);
          border-radius: 10px;
          text-align: center;
          padding: 20px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
          border: 1px solid rgba(196, 196, 196, 1);
          overflow: hidden;

          @media screen and (max-width: 1160px) {
            width: 250px;
          }
    
          @media screen and (max-width: 983px) {
            width: 280px;
            margin-bottom: 40px;
          }
          @media screen and (max-width: 789px) {
            width: 100%;
            padding:10px;
          }

          img {
            margin-top: -80px;
          }

          .text{
              margin-top:-100px;
              color:#2F2E41;
              ;


              h4{
                  font-size:20px;
                    font-weight:700;
                    margin-bottom:30px;
                    text-transform:capitalize;
              }

              
              h5{
                font-size:16px;
                  font-weight:600;
                  margin-bottom:10px;
                  text-transform:capitalize;

            }

            p{
              
                    font-size:16px;
                      font-weight:400;
                      margin-bottom:10px;
                      padding-right:0;
                      text-align:center;
                      font-style:italic;
                
            }
          }
        }
      }
    }
  }


  .absolute-cards {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    // z-index: 10;

    @media screen and (max-width: 983px) {
      bottom: -500px;
    }

    @media screen and (max-width: 789px) {
      position: relative;
      bottom: 60px;
      left: 0;
      transform: translate(0, 0);
    }
  }

`;
