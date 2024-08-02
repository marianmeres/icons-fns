export const iconPhThinTidalLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250.83,93.17l-40-40a4,4,0,0,0-5.66,0L168,90.34,130.83,53.17a4,4,0,0,0-5.66,0L88,90.34,50.83,53.17a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0L88,101.66,122.34,136,85.17,173.17a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66L133.66,136,168,101.66l37.17,37.17a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,250.83,93.17ZM48,130.34,13.66,96,48,61.66,82.34,96Zm80,80L93.66,176,128,141.66,162.34,176Zm0-80L93.66,96,128,61.66,162.34,96Zm80,0L173.66,96,208,61.66,242.34,96Z"/></svg>`;
}
