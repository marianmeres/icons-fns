export const iconPhLightNumberThreeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,120,118a6,6,0,0,1-4.8-9.6L156,54H88a6,6,0,0,1,0-12h80a6,6,0,0,1,4.8,9.6l-41.67,55.55A54.1,54.1,0,0,1,174,160Z"/></svg>`;
}
