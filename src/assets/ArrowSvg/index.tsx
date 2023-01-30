/*
 * Icon provided by IconPacks.
 * https://www.iconpacks.net/free-icon/arrow-234.html
 */

export interface IArrowSvgProps {
	style?: React.CSSProperties;
}

export default function ({ style }: IArrowSvgProps) {
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
					// fill: 'currentColor',
					fillRule: 'nonzero',
					opacity: '1',
				}}
				transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
			>
				<path
					d="M 58.799 58.33 L 16.466 15.998 c -1.059 -1.059 -2.776 -1.059 -3.835 0 L 0.794 27.834 c -1.059 1.059 -1.059 2.776 0 3.835 l 42.333 42.333 c 1.059 1.059 2.776 1.059 3.835 0 l 11.837 -11.837 C 59.858 61.107 59.858 59.39 58.799 58.33 z"
					// style={{
					// 	stroke: 'none',
					// 	strokeWidth: '1',
					// 	strokeDasharray: 'none',
					// 	strokeLinecap: 'butt',
					// 	strokeLinejoin: 'miter',
					// 	strokeMiterlimit: '10',
					// 	fill: 'currentColor',
					// 	fillRule: 'nonzero',
					// 	opacity: '1',
					// }}
					transform=" matrix(1 0 0 1 0 0) "
					strokeLinecap="round"
				/>
				<path
					d="M 31.201 58.33 l 42.333 -42.333 c 1.059 -1.059 2.776 -1.059 3.835 0 l 11.837 11.837 c 1.059 1.059 1.059 2.776 0 3.835 L 46.873 74.002 c -1.059 1.059 -2.776 1.059 -3.835 0 L 31.201 62.166 C 30.142 61.107 30.142 59.39 31.201 58.33 z"
					// style={{
					// 	stroke: 'none',
					// 	strokeWidth: '1',
					// 	strokeDasharray: 'none',
					// 	strokeLinecap: 'butt',
					// 	strokeLinejoin: 'miter',
					// 	strokeMiterlimit: '10',
					// 	fill: 'currentColor',
					// 	fillRule: 'nonzero',
					// 	opacity: '1',
					// }}
					transform=" matrix(1 0 0 1 0 0) "
					strokeLinecap="round"
				/>
			</g>
		</svg>
	);
}
