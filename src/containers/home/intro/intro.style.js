import styled from "styled-components";
import img from '../../../assets/interval.svg';
export const IntroWrap = styled.div`
  background: #1b2688;
  position: relative;
  padding-top: 150px;

  @media screen and (max-width: 789px) {
    padding-top: 50px;
  }

  @media screen and (max-width: 500px) {
    padding-top: 30px;
  }

  .skewed-div2 {
    position: relative;
    height: 420px;
    width: 100%;
    margin-top: 50px;
    background: #1e2990;

    @media screen and (max-width: 789px) {
      height: 300px;
    }
  }

  .skewed-div {
    position: absolute;
    background: #1e2990;
    transform: skewY(-15deg);
    right: 0;
    left: 0;
    width: 100%;
    min-height: 400px;
    max-height: 500px;
  }

  .absolute {
    position: absolute;
  }

  .skewed-green {
    right: 0;
    top: 50;

    @media screen and (max-width: 789px) {
      display:none;
    }
  }
  .content-div {
    display: flex;
    justify-content: space-between;
    color: #fff;

    @media screen and (max-width: 789px) {
      flex-direction: column;
    }

    .content-text {
      @media screen and (max-width: 1149px) {
        width: 50%;
      }

      @media screen and (max-width: 789px) {
        width: 80%;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
      }

      h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: 68px;
        margin-bottom: 50px;
        text-transform: capitalize;
        padding-right: 80px;

        @media screen and (max-width: 1024px) {
          padding-right: 0;
          font-size: 40px;
          line-height: 58px;
          margin-bottom: 30px;
        }

        @media screen and (max-width: 500px) {
          font-size: 30px;
          line-height: 42px;
        }
      }

      p {
        font-size: 24px;
        line-height: 36px;
        padding-right: 20px;

        @media screen and (max-width: 1024px) {
          padding-right: 0;
          font-size: 20px;
          line-height: 30px;
        }

        @media screen and (max-width: 500px) {
          font-size: 16px;
          line-height: 26px;
        }
      }

      .count-down {
        display: flex;
        margin-top: 50px;
        justify-content: flex-start;

.time:after{
  position: absolute;
  content:'';
  background-image:url(${img});
  background-repeat: no-repeat;
  background-position: center;
  width:30px;
  height:50px;
  right:-40px;
display:flex;
justify-content: flex-end;

@media (max-width: 956px) {
  right:-30px;
 
 }
@media (max-width: 500px) {
 right:-30px;

}

}

.time:nth-child(4):after{
  display:none;
}

        .time {
          position:relative;
          width: 70px;
          height: 80px;
          border-radius: 10px;
          background: #2836b1;
          border: 1px solid #c4c4c480;
          margin-right: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          @media (max-width: 956px) {
            width:90px;
            height:85px;
          margin-right: 30px;

          }

          @media (max-width: 500px) {
            width:90px;
            height:85px;
          margin-right: 30px;

          }

          p {
            padding: 0;
            margin: 0;
          }

          .integer {
            font-size: 36px;
            font-weight: 700;

            @media (max-width: 956px) {
              font-size:30px;
            }
          }

          .hour {
            font-size: 18px;
            color: #c4c4c4;
            @media (max-width: 956px) {
              font-size:16px;
            }
          }
        }
      }
    }

    .content-image {
      margin-top: 70px;
      position: relative;

      @media screen and (max-width: 1149px) {
        width: 500px;

        .img {
          width: inherit;
        }
      }
      @media screen and (max-width: 970px) {
        width: 400px;
      }

      @media screen and (max-width: 789px) {
        width: 100%;
      }

      .skewed-dot {
        right: 55px;
        top: 180px;
      }
    }
  }

  .absolute-cards {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;

    @media screen and (max-width: 983px) {
      bottom: -400px;
    }

    @media screen and (max-width: 789px) {
      position: relative;
      bottom: 130px;
      left: 0;
      transform: translate(0, 0);
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 983px) {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .content {
      width: 300px;
      height: 300px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      padding: 20px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

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

      h4 {
        color: #2f2e41;
        font-size: 16px;
        font-weight: 700;
        margin-top: 30px;
      }

      p {
        color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
        line-height: 28px;

        @media screen and (max-width: 789px) {
            width: 70%;
            margin:0 auto 30px auto;
          }
          @media screen and (max-width: 500px) {
            width: 100%;
            margin:0 auto 30px auto;
          }
      }

      .learn-more{
        color: rgba(27, 38, 136, 1);
        font-size: 18px;
        cursor: pointer;
        cursor: pointer;
        border: 0;
        transition: all 0.5s;
        width: auto;
        position: relative;

        &::after {
        content: "\f054";
        font-family: "Font Awesome 5 Pro";
        font-weight: 400;
        position: absolute;
        left: 65%;
        top: 31%;
        right: 5%;
        bottom: 0;
        opacity: 0;

    }

    &:hover {
        transition: all 0.5s;

        &::after {
            opacity: 1;
            transition: all 0.5s;

        }
      }
    }
  }


`;
