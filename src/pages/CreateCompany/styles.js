<<<<<<< HEAD
import styled, { css } from 'styled-components';
import backgroundImage from '../../assets/createCompanyBG.svg';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Nav = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    #logo {
        @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
        font-family: 'Pacifico', cursive;
        font-size: 40px;
        margin: 2% 8%;
        color: #50D1F1;
    }
    ul {
        display:flex; 
        align-items: center;
    }
    a {
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        color:white;
        font-family: roboto, bold;
    }
    img{
=======
import styled from 'styled-components';
import backgroundImage from  '../../assets/createCompanyBG.svg'
import pencil from "../../assets/pencil.svg";




export const Nav = styled.div`
width: 99vw;
display:flex;
justify-content: space-between;
align-items: center;
    #logo{
        margin: 0% 3%;

    }
    ul{
        display:flex;
        
        align-items: center;
    }
    a{
        display:flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin: 5px;
        color:white;
        font-family: roboto, bold;
    }
    #avatar{
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 25px;
        margin-left: 10px;
    }
`;

export const Wrapped = styled.div`
<<<<<<< HEAD
    height: 100vh;  
    background-image: url(${backgroundImage});
    background-size: 85%;
    background-position: right top;
    background-repeat: no-repeat;
`;

export const Container = styled.div`
    opacity: 1;   
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        h1 {
            font-size: 24px;
            color: rgba(0,0,20,0.8);
            padding: 15px 0px;
        }
        width: 400px;
=======
height: 100vh;
    
background-image: url(${backgroundImage});
    background-size: 85%;
    background-position: right top;
    background-repeat: no-repeat;
    
    
`

export const Container = styled.div`
    
    
    opacity: 1;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height:82.7vh;


    form{
        h1{
            font-size: 24px;
            color: rgba(0,0,20,0.8);
            padding: 15px 0px;
            

        }
        #img{
            padding:  10px;
        }
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(250,250,250);
        padding: 30px 20px;
        border-radius: 5px;
<<<<<<< HEAD
        
        input{
            width: 90%;
            padding: 10px 20px 10px 50px;
            margin: 8px 0px;
            border:none;
            border-radius: 5px;
            background: #FFFFFF;
            box-shadow: 0px 3px 6px #51ACEF;
        }

        img {
            position: absolute;
            width: 25px;
            margin: 15px 0px 0px 13px;
        }

        div {
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
=======
        #btn{
            
            background: transparent linear-gradient(135deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
            box-shadow: none;
            color: #FFFFFF;
            
            }
        input{
            
            padding: 10px 100px 10px 50px;
            margin: 8px 0px;
            border:none;
            border-radius: 5px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            background-image: url(${pencil});
            background-size: 30px;
            background-position: 10px;
            box-shadow: 0px 3px 6px #51ACEF;
            opacity: 1;
            
            
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
        }
    }
`;

<<<<<<< HEAD
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
    width: 50%;
    height: 40px;
    background: transparent linear-gradient(135deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
    box-shadow: none;
    color: #FFFFFF;
    border: 0;
    border-radius: 40px;
`;

export const InputImage = styled.input`
    height: 100px;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 180px;
    border: 2px dashed #ddd;
    border-radius: 16px;
    margin-bottom: 20px;
  
    cursor: pointer;
  
    transition: height 0.2 ease;
  
    ${(props) => props.isDragActive && dragActive};
    ${(props) => props.isDragReject && dragReject};
  `;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5',
};

export const SubTitlePhoto = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const InputFile = styled.input`
    position: absolute;
    opacity: 0%;
`;
=======

>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
