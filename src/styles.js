import styled from 'styled-components';

export const About = styled.div`
                height: 90vh;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5rem 10rem;
                color: white;
                `;

export const Description = styled.div`
                flex: 1;
                padding-right: 5rem;
                z-index:2;
                margin: 2rem 0rem 5rem 0rem;
                h2{
                    font-weight:lighter;
                }
                `
export const Image = styled.div`
flex:1;
z-index:2;
overflow:hidden;
img{
    width:100%;
    height: 77vh;
    object-fit: cover;
}
`
export const Hide = styled.div`
overflow: hidden;
`;

