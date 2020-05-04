import styled from 'styled-components';
<<<<<<< HEAD
import email from '../../assets/email.png';
import cadeado from '../../assets/cadeado.png';

export const Container = styled.div`
    background: transparent linear-gradient(118deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
    font-family: 'Roboto', sans-serif;    
=======
import email from '../../assets/email.png'
import cadeado from '../../assets/cadiado.png'



export const Container = styled.div`
    background: transparent linear-gradient(118deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
    font-family: 'Roboto', sans-serif;
    
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100vh;    
<<<<<<< HEAD
`;
export const FormContainer = styled.div`
    width: 491px;
    height: 460px;
=======

    


`;
export const FormContainer = styled.div`
    width: 491px;
    height: 400px;
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
    background-color: white;
    border-radius: 10px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

<<<<<<< HEAD
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        font-size: 14px;
        color: #8F8F8F;
        margin: 10px 0px 0px 10px;
      }

      strong {
        margin-left: 10px;
      }
    }

    img {
      width: 100px;
      margin-top: 5px;
      margin-bottom: 35.5px;
    }
    
  input { 
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #51ACEF;
    border-radius: 12px;
    margin-bottom: 30px;
=======
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
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
    justify-content: center;
    width: 405px;
    height: 56px;
    border: none;
<<<<<<< HEAD
    padding-left: 66px;
    }
    
    #email {
      background-image: url(${email});
      background-position: 17px 16px;       
    }
    
    #password {
      background-image: url(${cadeado});
      background-position: 17px 10px;
    }
    
    button {      
      width: 195px;
      height: 48px;
      background: transparent linear-gradient(135deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000042;
      opacity: 80%;
      border-radius: 50px;
      margin-top: 20px;
      margin-bottom: 12px;
      color: white;
      font-size: 18px;
      border: none;
      transition: 0.2s;

      :hover {
          opacity: 100%;
          transition: 0.2s;
        }
    }

    a {
      font-size: 14px;
      color: rgba(0,0,0,0.8);
    }

    a:hover {
      color: black;   
    }
`;
=======
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
>>>>>>> ee15df13ccaeae07aff0def25fa7f79bd02a7e09
