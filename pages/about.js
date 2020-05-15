import Link from 'next/link';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const MainDiv = styled.div`display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 800px 20px;
`;

export default function AboutPage() {
	return (
		<MainDiv>
			<Header />
			<Main>
				Hello About
				<Link href="/index">
					<a>About</a>
				</Link>
			</Main>
			<Footer />
		</MainDiv>
	);
}
