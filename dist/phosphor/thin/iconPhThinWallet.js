export const iconPhThinWallet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,68H56a12,12,0,0,1,0-24H192a4,4,0,0,0,0-8H56A20,20,0,0,0,36,56V184a20,20,0,0,0,20,20H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68Zm4,124a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V72a19.86,19.86,0,0,0,12,4H216a4,4,0,0,1,4,4Zm-32-60a8,8,0,1,1-8-8A8,8,0,0,1,188,132Z"/></svg>`;
}
