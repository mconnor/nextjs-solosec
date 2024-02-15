import styled from 'styled-components';

interface StyleProps {

}

interface ChildrenProps {
    logo?: string;

}
const MainDiv = styled.div`
    width: var(--ipad-width);
    //max-width: var(--ipad-max-width);
    height: 86vw;
    position: relative;
    top: -9vw;
    left:0.32vw;
    //width: 100vw;
    overflow:hidden;
   
`;


type BG = {
    bg: string;
}
const LogoBG = styled.div<BG>`
    position: absolute;
    z-index: 2;
    top: var(--ipad-header-height);
    left: 6.88vw;
    width: 21vw;
    height: 21vh;
    background: ${props => `url(${props.bg})`};
    background-repeat:no-repeat;
    
`;



interface Props extends StyleProps, ChildrenProps { }

const Splash: React.FC<Props> = ({logo}) => {
    return (
        <>

            <LogoBG bg={logo || ""}>

            </LogoBG>
            <MainDiv>
                {/*<img src="./img/svg/pg2-vector-nologo.svg" alt="splash page"/>*/}
            </MainDiv>

        </>
    )
}

export default Splash
