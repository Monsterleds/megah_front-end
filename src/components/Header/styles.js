import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li > a {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #FCFCFCF5;
      transition: 0.2s;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-color: #fff;
    overflow: hidden;
    margin-left: 8px;
  }
`;

export const Li = styled.li.attrs((props) => ({
  isSelected: props.isSelected,
}))`
  cursor: pointer;
  font-size: 16px;
  opacity: 70%;

  a:hover {
    color: ${darken(0.2, '#FCFCFCF5')};
  }

  ${(props) => props.isSelected && css`
    font-weight: bold;
    opacity: 1;

    a:hover {
      color: #FCFCFCF5;
    }
  `};

  :first-child {
    margin-right: 48px;
  }
`;
