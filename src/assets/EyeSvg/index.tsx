/*
 * Icon provided by IconPacks.
 * https://www.iconpacks.net/free-icon/view-6445.html
 */

export interface IEyeSvgProps {
	style?: React.CSSProperties;
}

export default function ({ style }: IEyeSvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			width="256"
			height="256"
			viewBox="0 0 256 256"
			xmlSpace="preserve"
			style={{ ...style }}
		>
			<defs></defs>
			<g
				style={{
					stroke: 'none',
					strokeWidth: '0',
					strokeDasharray: 'none',
					strokeLinecap: 'butt',
					strokeLinejoin: 'miter',
					strokeMiterlimit: '10',
					// fill: 'none',
					fillRule: 'nonzero',
					opacity: '1',
				}}
				transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
			>
				<path
					d="M 88.328 41.398 c -28.75 -24.214 -57.905 -24.215 -86.656 0 C 0.609 42.292 0 43.605 0 45 s 0.609 2.708 1.672 3.603 C 16.047 60.709 30.523 66.763 45 66.763 s 28.953 -6.054 43.328 -18.161 C 89.391 47.707 90 46.395 90 45 S 89.391 42.293 88.328 41.398 z M 45 60.739 c -8.679 0 -15.74 -7.061 -15.74 -15.739 S 36.321 29.26 45 29.26 S 60.739 36.321 60.739 45 S 53.679 60.739 45 60.739 z"
					style={{
						stroke: 'none',
						strokeWidth: '1',
						strokeDasharray: 'none',
						strokeLinecap: 'butt',
						strokeLinejoin: 'miter',
						strokeMiterlimit: '10',
						// fill: 'rgb(0,0,0)',
						fillRule: 'nonzero',
						opacity: '1',
					}}
					transform=" matrix(1 0 0 1 0 0) "
					strokeLinecap="round"
				/>
				<circle
					cx="45"
					cy="45"
					r="7"
					style={{
						stroke: 'none',
						strokeWidth: '1',
						strokeDasharray: 'none',
						strokeLinecap: 'butt',
						strokeLinejoin: 'miter',
						strokeMiterlimit: '10',
						// fill: 'rgb(0,0,0)',
						fillRule: 'nonzero',
						opacity: '1',
					}}
					transform="  matrix(1 0 0 1 0 0) "
				/>
			</g>
		</svg>
	);
}
