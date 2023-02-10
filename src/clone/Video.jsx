import React from 'react';

export const Video = ({
	video: {
		id: { videoId },
		snippet: { title, channelTitle, description },
	},
}) => {
	if (!videoId) return <p className='noResult'>No Results</p>;

	const videoSrc = `https://www.youtube.com/embed/${videoId}`;

	return (
		<>
			<div className='videoFrame'>
				<iframe
					frameBorder='0'
					allowFullScreen
					title='Video player'
					src={videoSrc}
				/>
			</div>
			<div className='videoInfo'>
				<h1 className='titleVideo'>{title}</h1>
				<h3 className='descriptionVideo'>{channelTitle}</h3>
				<p className='descriptionVideo'>{description}</p>
			</div>
		</>
	);
};
