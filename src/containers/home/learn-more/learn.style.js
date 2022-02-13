import styled from "styled-components";
export const LearnWrap = styled.div`
  background: #eaebf8;
  position: relative;
  width: 100%;
  margin-top: -250px;
  transform: skew(0deg, -10deg);
  z-index:30;

  .skewed-div {
    transform: skew(0deg, 10deg);
    padding-top: 350px;
    padding-bottom: 100px;

    @media screen and (max-width: 983px) {
      padding-top: 700px;
    }

    @media screen and (max-width: 789px) {
      padding-top: 100px;
    }

    .content-div {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 792px) {
        flex-wrap: wrap;
        margin-top:70px;
      }

      .content-div1 {
        width: 35%;

        @media screen and (max-width: 879px) {
          width: 40%;
        }
        @media screen and (max-width: 792px) {
          width: 100%;
        }

        h3 {
          font-size: 42px;
          font-weight: 700;
          color: rgba(40, 54, 177, 1);
          margin-top: 30px;

          @media screen and (max-width: 500px) {
            font-size: 32px;
            line-height: 30px;
          }
        }
        p {
          font-size: 20px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.5);

          line-height: 32px;

          @media screen and (max-width: 500px) {
            font-size: 18px;
            line-height: 30px;
          }
        }

        button {
          margin-top: 30px;
          background: rgba(40, 54, 177, 1);
          width: 180px;
          height: 50px;
          border-radius: 10px;
          border: 2px solid rgba(40, 54, 177, 1);
          font-size: 14px;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;

          &:hover {
            background: transparent;
            color: rgba(40, 54, 177, 1);
          }
        }
      }

      .content-div2 {
        width: 60%;
        padding-bottom:70px;

        @media screen and (max-width: 792px) {
          margin-top: 50px;
          width: 100%;
        }
        .content-sub {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 50px;

          img {
            margin-right: 30px;
            margin-top: 20px;

            @media screen and (max-width: 500px) {
              margin-right: 20px;
              width: 50px;
              height: auto;
            }
          }
          h4 {
            font-size: 24px;
            color: rgba(40, 54, 177, 1);
            font-weight: 700;
            margin: 0;

            @media screen and (max-width: 500px) {
              font-size: 20px;
            }
          }

          p {
            font-size: 16px;
            line-height: 28px;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.5);

            @media screen and (max-width: 500px) {
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
  .absolute-latest {
    position: absolute;
    width: 100%;
    background: rgba(248, 248, 248, 1);
    border: 1px solid rgba(196, 196, 196, 1);
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 40px;
    z-index: 1000;
  

    text-align: center;
    margin-top:-15px;

    .div-relative{
        position:relative;
        z-index:5;
        padding:0 20px;

        .absolute{
            position:absolute;
            z-index:1;

            @media screen and (max-width: 930px){
                display:none;
            }
        }

        .green-slant{
            left:0;
            top:5px;
        }
        .grey-slant{
            left:0;
            top:80px;
        }
        .blue-slant{
            right:0;
            bottom:0;
        }
        .grey2-slant{
            right:0;
            bottom:60px;
        }
    }
    h4 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 30px;

      @media screen and (max-width:789px){
          font-size:30px;
      margin-bottom: 20px;

      }

      @media screen and (max-width:500px){
        font-size:24px;
    margin-bottom: 20px;

    }
    }
    p {
      margin-bottom: 30px;
      font-size: 20px;

      @media screen and (max-width:789px){
        font-size:16px;

    }

      @media screen and (max-width:500px){
        font-size:14px;

    }
    }
    input {
      border: 1px solid rgba(27, 38, 136, 0.5);
      background: rgba(255, 255, 255, 1);
      height: 50px;
      padding-left: 25px;
      width: 500px;
      border-radius: 5px;
      margin-right: 50px;
      font-size: 18px;
      outline: none;

      @media screen and (max-width:800px){
          width:90%;
      margin-right: 0;

      }
    }

    input:placeholder {
      color: rgba(0, 0, 0, 0.25);
    }

    button {
      margin-top: 30px;
      background: rgba(98, 217, 110, 1);
      width: 180px;
      height: 50px;
      border-radius: 5px;
      border: 2px solid rgba(98, 217, 110, 1);
      font-size: 14px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      outline: none;

      &:hover {
        background: #fff;
        color: rgba(98, 217, 110, 1);
      }
    }
  }
`;
