export const iconPhLightCodaLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,86a41.82,41.82,0,0,1,22.61,6.41A10,10,0,0,0,214,84V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V172a10,10,0,0,0-15.36-8.43c-7.63,4.89-14.11,6.76-22.4,6.42H176a42,42,0,0,1,0-84Zm-54,42a54.06,54.06,0,0,0,53.88,54A46.36,46.36,0,0,0,202,175.57V208a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2V80.48A54.28,54.28,0,0,0,122,128Z"/></svg>`;
}
