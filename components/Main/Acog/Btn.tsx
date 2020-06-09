
import {useToggle, useCookie} from '../../../hooks';
import styled from 'styled-components';

import {Navigate} from "../../utils/Navigate";

type MainProps = {
    on: boolean;
}
const Main = styled.div<MainProps>`
    opacity: ${props => props.on ? 1 : 0};
`;
const Img = styled.img`
    width: 64vw;
    height: 5.75vw;
`;

type Props = {

    svgClicked: string;
    page: string;
    seq: string
}

const Btn: React.FC<Props> = ({svgClicked, page, seq}) => {
    const {isToggled, toggle} = useToggle(false);
    const [cookie, setCookie] = useCookie({key: "seq"});

    return (
        <Main on={isToggled} onClick={() => {
            toggle();
            setTimeout(() => {
                setCookie(seq);
                if (typeof window !== 'undefined') window.localStorage.seq = seq;
                Navigate(page);
            }, 100)
        }}>
            <Img src={`./img/svg/${svgClicked}.svg`}/>
        </Main>
    )
}
export default Btn;
