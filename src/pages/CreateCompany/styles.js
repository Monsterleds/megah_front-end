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
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 25px;
        margin-left: 10px;
    }
`;

export const Wrapped = styled.div`
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
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(250,250,250);
        padding: 30px 20px;
        border-radius: 5px;
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
            
            
        }
    }
`;


