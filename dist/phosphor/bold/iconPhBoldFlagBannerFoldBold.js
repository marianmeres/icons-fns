export const iconPhBoldFlagBannerFoldBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M242.09,41.5A12,12,0,0,0,232,36H152a12,12,0,0,0-10.92,7l-7.72,17H28a12,12,0,0,0-8.88,20.07L51.78,116,19.12,151.93A12,12,0,0,0,28,172h73.09A12,12,0,0,0,112,165l7.71-17h53.63l-32.28,71A12,12,0,1,0,162.92,229l80-176A12,12,0,0,0,242.09,41.5ZM55.13,148l21.75-23.93a12,12,0,0,0,0-16.14L55.13,84h67.32L93.36,148Zm129.14-24H130.64l29.09-64h53.63Z"/></svg>`;
}
