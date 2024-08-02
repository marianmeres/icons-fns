export const iconPhLightDetectiveLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,114H219.06L171,47.77a14,14,0,0,0-22.16-.61L135.93,62.08a1.15,1.15,0,0,0-.14.17,10,10,0,0,1-15.58,0,1.15,1.15,0,0,0-.14-.17L107.2,47.16A14,14,0,0,0,85,47.77L36.94,114H8a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12ZM94.75,54.82a2,2,0,0,1,3.15-.07l.15.17,12.86,14.92A21.88,21.88,0,0,0,128,78h0a21.88,21.88,0,0,0,17.09-8.16L158,54.92l.15-.17a2,2,0,0,1,3.15.07l43,59.18H51.77ZM180,146a34,34,0,0,0-33.94,32H109.94a34,34,0,1,0-1.44,12h39A34,34,0,1,0,180,146ZM76,202a22,22,0,1,1,22-22A22,22,0,0,1,76,202Zm104,0a22,22,0,1,1,22-22A22,22,0,0,1,180,202Z"/></svg>`;
}
