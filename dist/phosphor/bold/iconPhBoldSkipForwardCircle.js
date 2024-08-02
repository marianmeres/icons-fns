export const iconPhBoldSkipForwardCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM160,76a12,12,0,0,0-12,12v18.35L102.36,77.82A12,12,0,0,0,84,88v80a12,12,0,0,0,18.36,10.18L148,149.65V168a12,12,0,0,0,24,0V88A12,12,0,0,0,160,76Zm-52,70.35v-36.7L137.36,128Z"/></svg>`;
}
