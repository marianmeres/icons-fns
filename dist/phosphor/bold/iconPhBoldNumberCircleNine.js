export const iconPhBoldNumberCircleNine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM148,73.36a40,40,0,1,0-25.06,74.32L109.7,169.85a12,12,0,1,0,20.6,12.3L162.64,128A40,40,0,0,0,148,73.36ZM141.86,116l0,0A16,16,0,1,1,136,94.14,16,16,0,0,1,141.84,116Z"/></svg>`;
}
