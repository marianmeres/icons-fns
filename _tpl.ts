interface Props extends Record<string, any> {
	size: number;
	class: string;
	style: string;
	strokeWidth: number;
}
// prettier-ignore
export function outName(props?: Partial<Props>): string {
	let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"` ]), [] as string[]).join(' ');
	return `{{svg}}`;
}
