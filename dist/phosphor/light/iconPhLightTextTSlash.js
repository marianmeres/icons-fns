export const iconPhLightTextTSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,220.44a6,6,0,0,1-8.48-.4L134,143.52V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V130.32l-60-66V88a6,6,0,0,1-12,0V56a6,6,0,0,1,1.19-3.57L43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44ZM105.79,62H122V80.43a6,6,0,0,0,12,0V62h60V88a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H105.79a6,6,0,0,0,0,12Z"/></svg>`;
}
