export const iconPhLightTiktokLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,74a50.06,50.06,0,0,1-50-50,6,6,0,0,0-6-6H128a6,6,0,0,0-6,6V156a22,22,0,1,1-31.43-19.89A6,6,0,0,0,94,130.69V88a6,6,0,0,0-7-5.91C52.2,88.28,26,120.05,26,156a74,74,0,0,0,148,0V112.93A101.28,101.28,0,0,0,224,126a6,6,0,0,0,6-6V80A6,6,0,0,0,224,74Zm-6,39.8a89.13,89.13,0,0,1-46.5-16.69A6,6,0,0,0,162,102v54a62,62,0,0,1-124,0c0-27.72,18.47-52.48,44-60.38v31.53A34,34,0,1,0,134,156V30h28.29A62.09,62.09,0,0,0,218,85.71Z"/></svg>`;
}
