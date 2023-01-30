export default function (name: string) {
	return name.toLocaleLowerCase().replace(/\s+/g, '-');
}
