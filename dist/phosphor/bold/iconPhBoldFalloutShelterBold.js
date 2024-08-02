export const iconPhBoldFalloutShelterBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm66-73.34-24,36a12,12,0,0,1-20,0l-22-33-22,33a12,12,0,0,1-20,0l-24-36A12,12,0,0,1,72,120h41.58L94,90.66A12,12,0,0,1,104,72h48a12,12,0,0,1,10,18.66L142.42,120H184a12,12,0,0,1,10,18.66Z"/></svg>`;
}
