export const iconPhThinCourtBasketballThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,112H216a36,36,0,0,1,0-72h12ZM28,92H40a36,36,0,0,1,0,72H28Zm0,100V172H40a44,44,0,0,0,0-88H28V64a4,4,0,0,1,4-4h92V196H32A4,4,0,0,1,28,192Zm196,4H132V60h92a4,4,0,0,1,4,4V84H216a44,44,0,0,0,0,88h12v20A4,4,0,0,1,224,196Z"/></svg>`;
}
