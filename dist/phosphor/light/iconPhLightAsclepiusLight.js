export const iconPhLightAsclepiusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214,79v1a38,38,0,0,1-38,38H134v84h10a18,18,0,0,0,12-31.42,6,6,0,1,1,8-8.94A30,30,0,0,1,144,214H134v18a6,6,0,0,1-12,0V214H96a6,6,0,0,1,0-12h26V118H96a18,18,0,0,0,0,36,6,6,0,0,1,0,12,30,30,0,0,1,0-60h26V24a6,6,0,0,1,12,0v82h42a26,26,0,0,0,26-26V79a25,25,0,0,0-25-25H160a6,6,0,0,1,0-12h17a37,37,0,0,1,37,37ZM56,94H32a6,6,0,0,1-6-6V80A38,38,0,0,1,64,42H96a6,6,0,0,1,0,12H94v2A38,38,0,0,1,56,94ZM82,54H64A26,26,0,0,0,38,80v2H56A26,26,0,0,0,82,56Z"/></svg>`;
}
