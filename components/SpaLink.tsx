import Link from 'next/link'

import styled from 'styled-components'

const Main = styled.div`
    color: white;
    padding: 8px;
    border: 2px solid black;
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
    const url = "/" + pageName;
    return (
        <Main>
            <Link href={url}>
                <a>{pageName}</a>
            </Link>
        </Main>
    )
}

export default SpaLink

