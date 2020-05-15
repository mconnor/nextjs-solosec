import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const MainDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 40px 500px 20px;
`;

type Props = {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' })=> (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainDiv>
				<Header />
				<Main children={children} />
				<Footer />
			</MainDiv>
		</div>
	);

export default Layout;