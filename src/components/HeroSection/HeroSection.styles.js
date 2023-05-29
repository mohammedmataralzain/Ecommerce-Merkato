import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 12rem 0;

    img{
        min-width: 10rem;
        /* height: 10rem; */
        width: 100%;
        height: auto;
    }

    .hero-data{
        p{
            margin: 2rem 0;
        }

        h1{
            font-weight: bold;
        }

        .intro{
            margin-bottom: 0;
        }
    }

    .hero-img{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::after{
            content: "";
            width: 60%;
            height: 80%;
            background-color: rgba(81, 56, 238, 0.4);
            position: absolute;
            left: 50%;
            top: -5rem;
            z-index: -1;
        }

        @media (max-width: ${({theme}) => theme.media.mobile}){
            .grid{
                gap: 10rem;
            }

            &::after{
                content: "";
                width: 50%;
                height: 100%;
                left: 0;
                top: 10%;
                


            }
        }
    }

    
`