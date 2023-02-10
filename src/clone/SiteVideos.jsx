import React from 'react';

export const SiteVideos = ({ video, onVideoSelect }) => {
	const videoSec = document.querySelector('.videoSec')

	const blockSec = () => {
		return videoSec.style.display = 'block'
	}

	return (
		<>
			<div className='videoItem' onClick={() => onVideoSelect(video) && blockSec()}>
				<img
					src={video.snippet.thumbnails.medium.url}
					alt='overlay'
					style={{ marginBottom: '20px' }}
				/>
				<div className='titleVideo'>
					<yt-formatted-string className='videoItem-title'>{video.snippet.title}</yt-formatted-string>
				</div>
			</div>
		</>
	);
};
