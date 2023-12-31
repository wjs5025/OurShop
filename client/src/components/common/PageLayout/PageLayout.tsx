import React, { ReactNode } from 'react';
import './style.css';

interface IPageLayoutProps {
	children: ReactNode;
}
function PageLayout(props: IPageLayoutProps) {
	const { children } = props;
	return (
		<div className="container">
			<div className="inner">{children}</div>
		</div>
	);
}

export default PageLayout;
