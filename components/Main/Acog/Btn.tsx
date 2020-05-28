
import { useToggle } from '../../../hooks';
import styled from 'styled-components';
import {linkTo} from '../../../components/modals/Nav/PageList';

type MainProps = {
    on: boolean;
}
const Main = styled.div<MainProps>`
    opacity: ${props => props.on ? 1 : 0};
`;
const Img = styled.img`
    width: 825px;
    height: 78px;
`;

type Props = {

    svgClicked: string;
    page: string;
}

const Btn:React.FC<Props> = ({  svgClicked, page }) => {
    const {isToggled, toggle} = useToggle(false);
    return (
        <Main on={isToggled} onClick={ () => {toggle(); linkTo(page, true)} }>
             <Img src={`/img/svg/${svgClicked}.svg`}   />
        </Main>
    )
}
export default Btn;
