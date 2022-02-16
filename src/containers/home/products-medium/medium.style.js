import styled from "styled-components";
export const ProductsMediumWrap = styled.div`
background:#F1F5FF;
position:relative;
padding:300px 0 150px 0;
transform:skew(0deg, -10deg);
z-index:10;

@media screen and (max-width: 983px) {
    padding:700px 0 100px 0;

  }

.skewed-container{
    transform:skew(0deg, 10deg);
position:relative;

}

.absolute-div{
    position:absolute;
    bottom:-410px;
    background:#fff;
    padding:35px 0;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius:10px;
    color: #2F2E41;
    z-index:2000;
    width:100%;

    @media only screen and (max-width:983px){
        bottom:-350px;
    }
    @media only screen and (max-width:565px){
        bottom:-300px;
    }

    .absolute-sub{
        position:relative;
    }


    .absolute{
        position:absolute;
        @media screen and (max-width:930px){
            display:none;
        }
    }

    .absolute.green{
        left:0;
        top:30px;
    }

    .absolute.grey{
        right:0;
        top:40px;
    }

    .absolute.grey1{
        left:0;
        top:47px;
    }


    .wrap{
        width:36%;
        margin:0 auto;
        text-align:center;

        @media only screen and (max-width:1024px){
            width:40%;

        }
        @media only screen and (max-width:889px){
            width:50%;

        }

        @media only screen and (max-width:789px){
            width:60%;
        }
        @media only screen and (max-width:577px){
            width:70%;
        }
        @media only screen and (max-width:500px){
            width:90%;
        }
        @media only screen and (max-width:388px){
            width:100%;
        }

    }

    .btn-div{
        display:flex;
        justify-content:space-between;
        margin-top:30px;
        @media only screen and (max-width:388px){
           flex-direction: column;
           align-items:center;
           justify-content:center;

        button:nth-child(1){
            margin-bottom:30px;
        }
        }
       
    }

    h4{
    font-size: 30px;
    font-weight: 700;
    margin-top:0;
    margin-bottom: 15px;

    @media only screen and (max-width:789px){
        font-size:26px;
    }

    @media only screen and (max-width:500px){
        font-size:20px;
    }
    }

    p{
        font-size:16px;

        @media only screen and (max-width:500px){
            font-size:14px;
        }
    }
}


.flexed-content{
    display: flex;
    justify-content:space-between;
    align-items:flex-end;

    @media screen and (max-width:994px){
        flex-direction:column;
        justify-content:center;
    }
}

.text{
    text-align: left;
    width:35%;
    // margin-top:20px;

    @media screen and (max-width:994px){
        width:100%;

    }

    p {
        font-size: 20px;
        line-height: 32px;
        text-align: left;
    ;
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

   .small {
    color: rgba(47, 46, 65, 1);
    font-size: 16px;
    line-height: 28px;
    display: block;
    margin-top:50px;

    @media screen and (max-width: 500px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
}

.image{
    width:55%;
    position:relative;
    z-index:-10;

    .image-oval{
        position:absolute;
        bottom:-30px;
        left:0;
        z-index:100;
    }

  
    @media screen and (max-width:994px){
        width:100%;
        margin-top:200px;

        img{
            object-fit:cover;
            width:inherit;
        }
    }
}



.channels{
    margin:150px 0;
    text-align:center;

    @media screen and (max-width:500px){
      margin:100px 0;

    }

.heading {
    width: 70%;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width:1024px){
        width:90%;
    }

    @media screen and (max-width:500px){
        width:100%;
    }



    p{
        font-size:24px;
        line-height:32px;
        color: #2F2E41;

        @media screen and (max-width:789px){
            font-size:20px;
        line-height:30px;

        }
        @media screen and (max-width:789px){
            font-size:16px;
        line-height:24px;

        }

    }
}

.channels-flex{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    margin-top:150px;

    @media screen and (max-width: 983px) {
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

      

      .card {
        width: 270px;
        height: 200px;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        text-align: center;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border: 1px solid rgba(196, 196, 196, 1);
        display:flex;
        flex-direction: column;
    justify-content:flex-start;
    align-items:center;

        @media screen and (max-width: 1160px) {
          width: 250px;
        }
  
        @media screen and (max-width: 983px) {
          width: 280px;
          margin-bottom: 80px;
        }
        @media screen and (max-width: 789px) {
          width: 100%;
          padding:10px;
        }


        .circle{
            width:90px;
            height:90px;
            border-radius:50%;
            background: #1B2688;
            margin-top:-60px;
            display:flex;
            border: 1px solid #C4C4C4;
        justify-content:center;
        align-items:center;
        }
  
        p{
            color:#000000;
            font-size:16px;
            margin:20px 0: 

        }

        a{
            color: #6A92F8;
            font-size:13px;
 
        }

    }

}



    
    
`;
