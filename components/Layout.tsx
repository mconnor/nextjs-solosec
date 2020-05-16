import { ReactNode } from 'react';
import Head from 'next/head';
import GlobalStyle from './utils/GobalStyle';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

type Props = {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' })=> (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
            <GlobalStyle/>
			<div className='page-container'>
				<Header gridArea='header'/>
				<Main gridArea='main' children={children} />
				<Footer gridArea='footer'/>
			</div>
		</>
	);

export default Layout;