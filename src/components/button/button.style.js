import styled from "styled-components";

export const ButtonDiv = styled.div`
.btn{
  width: 150px;
  height: 50px;
  border-radius: 5px;
  color: ${props => (props.blue ? '#fff' : props.green ? '#fff' : '#2836B1')};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border: ${props => (props.blue ? '2px solid #2836B1' : props.green ? '2px solid #62D96E': '2px solid #fff')};
  background: ${props => (props.blue ? '#2836B1' : props.green ? '#62D96E' : '#fff')};
  cursor: pointer;
  -webkit-transition: all .5s;
  transition: all .5s;

  @media screen and (max-width:500px){
    font-size:13px;
  }
}
   
  
  .btn:hover {
    background: transparent;
    color: ${props => (props.blue ? '#2836B1' : props.green ? '#62D96E' : '#fff')};
    }

   
`