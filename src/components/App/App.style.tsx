import styled from '@emotion/styled';
import { BACKGROUND } from '../../images';

export const CWrap = styled.div({
	backgroundImage: `url(${BACKGROUND})`,
	backgroundSize: '100% 100%',
	height: '100vh',
});

export const Logo = styled.img({
	position: 'absolute',
	bottom: ' 3vh',
	left: '9vw',
});
