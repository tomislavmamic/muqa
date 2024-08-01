import Image from 'next/image';

interface RoundBoxProps {
	title: string;
	dateTime: string;
	type: string;
}

export function RoundStatusBox({ title, dateTime, type }: RoundBoxProps) {
	let bgColor = type === 'past' ? 'bg-[#F0F7FE]' : 'bg-white';
	bgColor = type === 'current' ? 'bg-blue' : bgColor;

	let titleColor = type === 'past' ? 'text-blue' : 'text-grayLight';
	titleColor = type === 'current' ? 'text-white' : titleColor;

	return (
		<div
			className={`flex w-full items-center justify-between rounded-lg border border-gray-300 ${bgColor} ${titleColor} px-2.5 py-2`}
		>
			<div className='relative w-full'>
				<h4 className='mb-2 text-base font-bold'>{title}</h4>
				<p className='text-sm font-medium'>{dateTime}</p>
				{type === 'past' && (
					<span className='absolute right-1 top-1 block h-[18px] w-[18px]'>
						<Image
							width='18'
							height='18'
							alt='Confirmed Icon'
							src={`/images/icons/icon-yes.svg`}
						/>
					</span>
				)}
				{type === 'current' && (
					<span className='absolute right-1 top-1 block h-4 w-4 rounded-full bg-[#28F875]'></span>
				)}
				{type === 'future' && (
					<span className='absolute right-1 top-1 block h-4 w-4 rounded-full border border-gray'></span>
				)}
			</div>
		</div>
	);
}