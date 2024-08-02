export const iconPhLightMagnetLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M205.56,51.65A85.5,85.5,0,0,0,144.6,26h-.33A85.45,85.45,0,0,0,83.42,51.22L22,113.39a14,14,0,0,0,.06,19.74l28.66,28.66a13.89,13.89,0,0,0,9.9,4.1h.08a13.9,13.9,0,0,0,9.94-4.21l60.87-62.4A18.1,18.1,0,0,1,156.76,99a17.63,17.63,0,0,1,5.34,12.62,19,19,0,0,1-5.44,13.44L94.37,185.31a14,14,0,0,0-.15,19.95l28.67,28.66a14.05,14.05,0,0,0,19.7.1l61.8-60.49C238.07,139.86,238.6,85.18,205.56,51.65ZM62.08,153.29a2,2,0,0,1-1.42.6,2.15,2.15,0,0,1-1.42-.58L30.57,124.65a2,2,0,0,1,0-2.82L55.79,96.28l31.34,31.34Zm72.11,72.15a2,2,0,0,1-2.82,0l-28.66-28.66a2,2,0,0,1-.59-1.43,2,2,0,0,1,.6-1.41L128.51,169l31.34,31.33ZM196,165l-27.52,26.94-31.29-31.29,27.9-27,.07-.08a30.93,30.93,0,0,0,9-22.06,29.47,29.47,0,0,0-9-21.15,30.17,30.17,0,0,0-42.08.46L95.51,119,64.22,87.74,91.94,59.68A73.47,73.47,0,0,1,144.27,38h.28A73.52,73.52,0,0,1,197,60.08C225.44,88.92,224.94,136,196,165Z"/></svg>`;
}
