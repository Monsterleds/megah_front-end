import styled from 'styled-components';
import { darken } from 'polished';

import backgroundImage from '../../assets/createCompanyBG.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: 85%;
    background-position: right top;
    background-repeat: no-repeat;
    padding: 0 64px;

    @media only screen and (max-width: 500px) {
        padding: 0;
    }
`;

export const FormContainer = styled.div`
    margin-top: 50px;
    max-width: 400px;
    width: 100%;
    height: 350px;
    background: #fff;
    box-shadow: 2px 2px 6px #4A7BEE;
    border-radius: 10px;
    padding: 20px 10px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;

        h2 {
            color: #00000099;
            font-size: 20px;
        }

        svg {
            height: 20px;
            width: auto;
            margin-left: 16px;
            margin-right: 8px;
            color: #51ACEF;
        }

        input {
            border: 0;
            height: 100%;
            flex: 1;
            -webkit-text-fill-color: ${darken(0.2, '#D1D1D1')};
            -webkit-box-shadow: 0 0 0px 1000px white inset;

            ::placeholder {
                color: #D1D1D1;
            }
        }

        label {
            display: flex;
            align-items: center;
            flex-direction: row;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #51ACEF29;
            border-radius: 12px;
            justify-content: center;
            max-width: 300px;
            width: 100%;
            height: 45px;
            border: none;
        }

        div {
            display: flex;
            align-items: center;
            flex-direction: row;
            
            p {
                color: rgba(0,0,0,0.4);
                margin-right: 15px;
            }

            button {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                border: 0;

                & + button {
                    margin-left: 8px;
                }

                :nth-of-type(1) {
                    background-color: #FF372C;
                }

                :nth-of-type(2) {
                    background-color: #5961FF;
                }

                :nth-of-type(3) {
                    background-color: #55FF48;
                }
            }
        }
    }
`;

export const SubmitButton = styled.button`
    width: 195px;
    height: 48px;
    border: none;
    border-radius: 50px;
    background: transparent linear-gradient(135deg, #50D1F1 0%, #535CEB 100%) 0% 0% no-repeat padding-box;
    opacity: 90%;
    color: #FFFFFF;
    transition: 0.2s;

    :hover {
        opacity: 100%;
    }
`;
