interface Props extends Record<string, any> {
	size: number;
	class: string;
	style: string;
	strokeWidth: number;
}
// prettier-ignore
export function outName(props?: Partial<Props>): string {
	// Backward compatible signature support: fn(cls, size, style)
	if (props === null || props === undefined) props = {};
	if (typeof props !== 'object') props = { class: props || '' };
	if (arguments.length > 1) props.size ??= arguments[1];
	if (arguments.length > 2) props.style ??= arguments[2];
	// 
	const { size, class: cls, style, strokeWidth } = props;
	let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"` ]), [] as string[]).join(' ');
	return `{{svg}}`;
}
