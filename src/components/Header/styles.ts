import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 40px;
`;
export const Menu = styled.div`
    ul{
        display: flex;
        list-style: none;
        gap: 32px;
        li a{
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #fff;
        }
    }
`;
export const Button = styled.div`
    a{
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
    }
    border: 1px solid #8257e5;
    border-radius: 6px;
    padding: 11px 38px;
    display: flex;
    align-items: center;
    justify-content: center;
`;