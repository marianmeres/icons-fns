export const iconPhLightDropHalfLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM202,144a75,75,0,0,1-.69,10H134V134h67.44A92.09,92.09,0,0,1,202,144ZM186.8,90H134V70h39.89A176,176,0,0,1,186.8,90ZM134,198h44.52A73.76,73.76,0,0,1,134,217.74Zm0-12V166h64.66a74.05,74.05,0,0,1-9.78,20Zm0-64V102h58.7a117.43,117.43,0,0,1,6.69,20Zm30.29-64H134V28.3A257.09,257.09,0,0,1,164.29,58ZM54,144c0-53.42,47.35-98.56,68-115.7V217.74A74.09,74.09,0,0,1,54,144Z"/></svg>`;
}
