import React from 'react';
import { Search } from './clone/Search';
import URL from './clone/api/URL.js';
import { Video } from './clone/Video';
import { ListVideos } from './clone/ListVideos';

export function App() {
	const [videos, setVideos] = React.useState([]);
	const [selectedVideo, setSelectedVideo] = React.useState({
		id: {},
		snippet: {},
	});
	async function videoSubmit(searchTerm) {
		const {
			data: { items: videos },
		} = await URL.get('search', {
			params: {
				part: 'snippet',
				maxResults: 101,
				key: 'AIzaSyDuTNTQK2DgZT4GLiRcicBdwxR8rlCvakM',
				q: searchTerm,
			},
		});
		setVideos(videos);
		setSelectedVideo(videos[1]);
	}

	return (
		<>
			<div className='searchSec'>
				<Search onSubmit={videoSubmit} />
			</div>
			<div className='videoMain'>
				<div className='videoSec'>
					<Video video={selectedVideo} />
				</div>
				<div className='videoLists'>
					<ListVideos
						video={selectedVideo}
						videos={videos}
						onVideoSelect={setSelectedVideo}
					/>
				</div>
			</div>
		</>
	);
}
