import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface ISectionHeaderProps {
	text: string;
	more?: boolean;
	moreUrl?: string;
}

function SectionHeader(props: ISectionHeaderProps) {
	const { text, more, moreUrl } = props;

	return (
		<div className="section-header-container">
			<h2>{text}</h2>
			{more && moreUrl && (
				<Link to={moreUrl} target="_blank">
					{text} 더보기 {'>'}
				</Link>
			)}
		</div>
	);
}

SectionHeader.defaultProps = {
	more: false,
	moreUrl: '',
};

export default SectionHeader;
