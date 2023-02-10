import React from 'react';
import logo from './assets/icons/logo1.png';
import functions from './assets/icons/functions.png';
import profileImg from './assets/imgs/20210815_080402.jpg';

export const Search = ({ onSubmit }) => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};
	const keyPress = (e) => {
		if (e.key === 'Enter') {
			onSubmit(searchTerm);
		}
	};

	return (
		<div className='header'>
			<a href='/' className='brand'>
				<img className='logoBrand' src={logo} alt='logo' />
			</a>
			<input
				type='text'
				placeholder='Search...'
				value={searchTerm}
				onChange={handleChange}
				onKeyPress={keyPress}
			/>
			<div className='icons'>
				<img className='functions' src={functions} alt='functions' />
				<a className='profile' href='/'>
					<img src={profileImg} alt='profileImg' />
				</a>
			</div>
		</div>
	);
};
