import styled from 'styled-components';
import backgroundImage from  '../../assets/createCompanyBG.svg'

export const Nav = styled.div`
width: 99vw;
display:flex;
justify-content: space-between;
align-items: center;
    #logo{
        width: 100px;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-left: 45px;
        
    }
    ul{
        display:flex;
        
        align-items: center;
    }
    a{
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 0px 20px;
        color:white;
        font-family: roboto, bold;
    }
    #avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 25px;
        margin-left: 10px;
    }
`;

export const Container = styled.div`

    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: 85%;
    background-position: right top;
    background-repeat: no-repeat;
    
        
 
  
`;
export const ContainerAux = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
        
 
  
`;

export const FormContainer = styled.div`
    
    margin-top: 50px;
    width: 400px;
    height: 350px;
    background: rgb(253,253,253);
    border-radius: 10px;
    h2{
        color: #50D1F1;
        margin-top: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    input{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #51ACEF;
    border-radius: 12px;
    margin-top: 15.5px;
    justify-content: center;
    width: 300px;
    height: 45px;
    border: none;
    padding-left: 50px;
    }
    #SubmitButton{
        width: 195px;
        height: 48px;
        border: none;
        border-radius: 50px;
        background: transparent linear-gradient(135deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
        color: #FFFFFF;
    }
    button{
        margin-top: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:none;
        
    }
    #red{
        background-color: #FF372C;
    }
    #blue{
        background-color: #5961FF; 
    }
    #green{
        background-color: #55FF48;
    }

`;
export const Paleta = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    p{
        color: rgba(0,0,0,0.4);
        margin-right: 15px;
    }
`;

