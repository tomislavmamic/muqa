'use client';

import { Share_Tech_Mono } from 'next/font/google';

import { MuqaConnectButton } from '../MuqaConnectButton';

const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'] });

export function HomepageIntro() {
	return (
		<div className='mx-auto flex flex-col items-center justify-center px-5 xl:max-w-7xl xl:px-48 2xl:max-w-7xl'>
			<h1
				className={`${shareTechMono.className} mb-7 text-center text-5xl font-normal uppercase text-primaryBlack`}
			>
				Sudjeluj u prvom kvadratnom financiranju grada splita
			</h1>
			<div className='text-center text-xl font-normal text-gray'>
				This round is open to people from Split. Connect your wallet to verify
				your eligibility and generate a key.
			</div>
			<div className='mt-10'>
				<MuqaConnectButton />
			</div>
		</div>
	);
}
