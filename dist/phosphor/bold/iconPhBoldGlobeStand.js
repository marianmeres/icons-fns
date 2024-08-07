export const iconPhBoldGlobeStand = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,176a72,72,0,1,0-72-72A72.08,72.08,0,0,0,136,176Zm0-120a48,48,0,1,1-48,48A48.05,48.05,0,0,1,136,56Zm12,159.35V228h20a12,12,0,0,1,0,24H104a12,12,0,0,1,0-24h20V215.36A112,112,0,0,1,53.88,27.84,12,12,0,1,1,71.47,44.16,88,88,0,0,0,195.84,168.53a12,12,0,1,1,16.32,17.59A111.51,111.51,0,0,1,148,215.35Z"/></svg>`;
}
