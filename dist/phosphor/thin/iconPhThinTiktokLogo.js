export const iconPhThinTiktokLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,76a52.06,52.06,0,0,1-52-52,4,4,0,0,0-4-4H128a4,4,0,0,0-4,4V156a24,24,0,1,1-34.28-21.69A4,4,0,0,0,92,130.69V88a4,4,0,0,0-4.7-3.94C53.49,90.08,28,121,28,156a72,72,0,0,0,144,0V109.44A99.26,99.26,0,0,0,224,124a4,4,0,0,0,4-4V80A4,4,0,0,0,224,76Zm-4,39.92a91.32,91.32,0,0,1-49.66-17.18A4,4,0,0,0,164,102v54a64,64,0,0,1-128,0c0-29.52,20.32-55.79,48-63v35.31A32,32,0,1,0,132,156V28h32.13A60.11,60.11,0,0,0,220,83.87Z"/></svg>`;
}
