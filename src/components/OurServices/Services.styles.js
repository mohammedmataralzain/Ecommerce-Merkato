import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 9rem 0;
    .grid{
        gap: 4.8rem;
    }

    .service-1,
    .service-2,
    .service-3{
        width: auto;
        height: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${({theme}) => theme.colors.bg};
        text-align: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
    
    .service-2{
        gap: 4rem;
        background-color: transparent;
        box-shadow: none;
        
        .service-column-2{
            background-color: ${({theme}) => theme.colors.bg};
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex: 1;
            border-radius: 2rem;
            width: 100%;
        }

        div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }

    h3{
        margin-top: 1.4rem;
        font-size: 2rem;
    }

    .icon{
        width: 8rem;
        height: 8rem;
        padding: 2rem;
        border-radius: 50%;
        color: #fff;
        background-color: #5138ee;
    }
`
