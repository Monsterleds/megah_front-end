import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    min-height: 100vh;
    #red{
        background-color: #B93939;
    }
    #blue{
        background-color: #5961FF; 
    }
    #green{
        background-color: #36E369;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    li{
        list-style-type: none;
    }
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100vw;
    h1{
        margin-left: 50px;
        color: #EBEBEB;
        font-size: 40px;
    }
    
    ul{
        
        margin-right: 50px;
        color: #CCCCCC;
        a {
    
            margin-right: 10px;
            color: #EBEBEB;
            font-size: 16px;
    }
    }
    

`;
export const Grid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

`;
export const Product = styled.div`
    display: flex;

    flex-direction: column;
    img{
        width: 300px;
        height: 280px;
    }
    div{
        background-color: rgba(0,0,0,0.05);
        display: flex;
        flex-direction: column;
        a{
            color: #fff;
            padding: 4% 35% ;
            font-weight: bolder;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    }
    h1{
        margin-left: 10px;
        margin-top: 8px;

        font-weight: 100;
        font-size: 18px;
    }
    span{
        font-size: 25px;
    }
    #exception{
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    
`;