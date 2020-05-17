import styled from 'styled-components'
import { useAppState} from "../state";


const Main = styled.div`
    width: var( --ipad-max-width);
    height: 1024px;
    position: absolute;
    z-index: 2;
    background-color: rgba(255,255 ,255 ,0.3 );
    padding: 20px;
`;

const Container = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 75px auto;
        height: 100%;
`;
const Top = styled.div`
            background-color: green;
            border-top-right-radius: var(--border-radius-4);
            border-top-left-radius:  var(--border-radius-4);
            padding: 0 30px 0 30px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            justify-content: space-between;
            color: var(--primary);
            &:close {
                font-size: 36px;
                font-weight: bold;
                }
            h1{
                font-family: Lato;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                letter-spacing: 0.1em;
                text-align: left;
            }
`;
const Copy = styled.div`
    background-color:  var(--bg);
    padding: 20px 48px 0 20px;
    border-bottom-right-radius: var(--border-radius-4);
    border-bottom-left-radius: var(--border-radius-4);
    letter-spacing: 0.03em;
    line-height: 28px;
    color: var(--copy-color-secondary);
    width: 100%;
`;
const CloseBtn = styled.div`
    font-size: 36px;
    font-weight: bold;
`;

const ReferencesWrapper = () => {
    const { isMenuOpen } = useAppState();
    if (!isMenuOpen) return null;
    return <References />;
}
const References = () => {
    const { toggleMenu } = useAppState();
    return (
        <Main>
            <Container>
                <Top>
                    <h1>REFERENCES</h1>
                    <CloseBtn role="button" onClick={toggleMenu}>&times;</CloseBtn>
                </Top>
                <Copy>
                        <ol>
                            <li>
                                American College of Obstetricians and Gynecologists. ACOG Practice Bulletin: Clinical Management Guidelines for Obstetricians-Gynecologists, Number 215. Obstet Gynecol 2020:135(1):e1-e17.
                            </li>
                        </ol>
                    </Copy>
            </Container>
        </Main>
    )
}

export default ReferencesWrapper
