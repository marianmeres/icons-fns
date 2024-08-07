export const iconPhLightFileMd = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V224a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM144,146H128a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h16a34,34,0,0,0,0-68Zm0,56H134V158h10a22,22,0,0,1,0,44Zm-42-50v56a6,6,0,0,1-12,0V171L72.92,195.44a6,6,0,0,1-9.84,0L46,171v37a6,6,0,0,1-12,0V152a6,6,0,0,1,10.92-3.44l23.08,33,23.08-33A6,6,0,0,1,102,152Z"/></svg>`;
}
