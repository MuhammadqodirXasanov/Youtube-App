import React from 'react';
import { SiteVideos } from './SiteVideos';

export const ListVideos = ({
	video: {
		id: { videoId },
	},
	videos,
	onVideoSelect,
}) => {
	const videoLists = videos.map((video) => (
		<SiteVideos
			onVideoSelect={onVideoSelect}
			key={video.id.videoId}
			video={video}
		/>
	));

	return <div className='videoItem-box' key={videoId}>{videoLists}</div>;
};
