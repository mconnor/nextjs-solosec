import styled from 'styled-components';

const Svg = styled.svg`
cursor: pointer;
    width: 38px;
    height: 52px;
    fill: white;
    :hover {
         fill: gray;
    }
`;

const Hamburger = () => {
    return (
        <Svg focusable="false" viewBox="0 0 24 24">
            <path d="M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z"></path>
        </Svg>
    )
}

export default Hamburger
