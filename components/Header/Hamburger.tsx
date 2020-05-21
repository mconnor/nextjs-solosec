import styled from 'styled-components';
import { useAppState } from "../../state";

const Svg = styled.svg`
    cursor: pointer;
    width: 38px;
    height: 52px;
    fill: var(--primary);
    &:hover {
         fill: var( --primary-btn-hover-color);
    }
`;

const CloseBtn = styled.div`
    color: white;
    font-size: 64px;
`;


const Main = styled.div`
    cursor: pointer;
    width: 54px;
    height: 54px;
    font-size: 36px;
    font-weight: bold;
    display:grid;
    grid-template-columns:1fr;
    place-items: center center;
    border: 1px solid gray;
`;

const Hamburger = () => {
    const { isNavOpen, setNav } = useAppState()
    return (
        <Main>
            {isNavOpen ?
                <CloseBtn role="button" onClick={prevState =>setNav &&  setNav(false)}>&times;</CloseBtn>
                :
                <div onClick={prevState => setNav &&  setNav(true)}>
                    <Svg focusable="false" viewBox="0 0 24 24">
                        <path d="M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z"></path>
                     </Svg>
                </div>

            }
        </Main>
    )
}

export default Hamburger
