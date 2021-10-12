import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5rem 10rem;
                color: white;
                @media(max-width:768px) {
                   display: block;
                   padding: 2rem 2rem;
                   text-align: center;
                   height: 80vh;
                }
                `;

export const Description = styled.div`
                flex: 1;
                padding:2rem 2rem;
                z-index:2;
                margin: 2rem 0rem 5rem 0rem;
                h2{
                    font-weight:lighter;
                }
                button{
                    margin:0rem 0rem 3rem 0rem;
                        cursor: pointer;
                }
                @media(max-width:768px) {
                    min-height: 1vh;
                    padding: 0;
                    margin: 2rem 0rem 1rem 0rem;
                    z-index:2;
                    button { 
                        margin:1rem 0rem 2rem 0rem;
                        cursor: pointer;
                    }
                    }
                `;
export const Image = styled.div`
flex:1;
z-index:2;
overflow:hidden;
img{
    width:100%;
    height: 75vh;
    object-fit: cover;
}
@media(max-width:768px) {
    img{
    width:100%;
    height: 50vh;
    object-fit: cover;
}    
                    }
`;
export const Hide = styled.div`
overflow: hidden;
@media(max-width:768px) {
                    overflow: hidden;   
                    
                    }

`;

