export const iconPhBoldSpotifyLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm66.59-84.36a12,12,0,0,1-16.24,4.93,106.7,106.7,0,0,0-100.7,0A11.83,11.83,0,0,1,72,134a12,12,0,0,1-5.66-22.58,130.61,130.61,0,0,1,123.3,0A12,12,0,0,1,194.59,127.64Zm-16,36a12,12,0,0,1-16.23,5,73,73,0,0,0-68.72,0,12,12,0,0,1-11.28-21.18,97,97,0,0,1,91.28,0A12,12,0,0,1,178.59,163.64Z"/></svg>`;
}
