export const iconPhLightFilePy = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H168a6,6,0,0,0,0,12h32a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM64,146H48a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198H64a26,26,0,0,0,0-52Zm0,40H54V158H64a14,14,0,0,1,0,28Zm89.09-30.82L134,185.72V208a6,6,0,0,1-12,0V185.72l-19.09-30.54a6,6,0,0,1,10.18-6.36L128,172.68l14.91-23.86a6,6,0,0,1,10.18,6.36Z"/></svg>`;
}
