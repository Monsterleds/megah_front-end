import styled from 'styled-components';
import email from '../../assets/email.png'
import cadeado from '../../assets/cadiado.png'



export const Container = styled.div`
    background: transparent linear-gradient(118deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
    font-family: 'Roboto', sans-serif;
    
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100vh;    

    


`;
export const FormContainer = styled.div`
    width: 491px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    img{
        width: 100px;
        margin-top: 5px;
        margin-bottom: 20px;
    }
    
    
   input { 
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #51ACEF;
    border-radius: 12px;
    margin-top: 15.5px;
    justify-content: center;
    width: 405px;
    height: 56px;
    border: none;
    padding-left: 50px;
    }  
    #email {
        background-image: url(${email});
        background-position: 10px;       
    }
    #password {
        background-image: url(${cadeado});
        background-position: 10px;
    }
    
    button {      
    width: 195px;
    height: 48px;
    background: transparent linear-gradient(135deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000042;
    opacity: 1;
    border-radius: 50px;
    margin-top: 20px;
    margin-bottom: 12px;
    color: white;
    font-size: 18px;
    border: none;

}
    a {
        
        color: rgba(0,0,0,0.8);
        text-decoration: none;
        outline: 0;
}
    a:hover {
    color: black;
    text-decoration: none;
    outline: 0;    
}
`;