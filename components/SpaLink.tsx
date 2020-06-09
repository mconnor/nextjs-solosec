

import styled from 'styled-components'

const Main = styled.div`
    color: white;
    padding: 8px;
    border: 2px solid black;
    border-radius: 4px;
    background: gray;
    a {
        text-decoration: none;
        color:yellow;
        &:active  {
            color: white;
        }
    }

`;

type Props = {
    pageName: string;
}
const SpaLink: React.FC<Props> = ({ pageName }) => {
    //const url = "/" + pageName;
    return (
        <Main>
            <div onClick={() => window.location.href = pageName + ""}>
                <a>{pageName}</a>
            </div>
        </Main>
    )
}

export default SpaLink

