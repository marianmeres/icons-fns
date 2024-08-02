export const iconPhBoldSkipBackCircleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM165.82,77.5a12,12,0,0,0-12.18.32L108,106.35V88a12,12,0,0,0-24,0v80a12,12,0,0,0,24,0V149.65l45.64,28.53A12,12,0,0,0,172,168V88A12,12,0,0,0,165.82,77.5ZM148,146.35,118.64,128,148,109.65Z"/></svg>`;
}
