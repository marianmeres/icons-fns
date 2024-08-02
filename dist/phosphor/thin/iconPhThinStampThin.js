export const iconPhThinStampThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,224a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,224Zm0-80v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h61.37L92.63,53.87A28,28,0,0,1,120,20h16a28,28,0,0,1,27.38,33.87L146.63,132H208A12,12,0,0,1,220,144ZM117.55,132h20.9l17.1-79.81A20,20,0,0,0,136,28H120a20,20,0,0,0-19.56,24.19ZM212,144a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z"/></svg>`;
}
