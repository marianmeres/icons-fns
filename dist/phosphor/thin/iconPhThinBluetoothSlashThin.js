export const iconPhThinBluetoothSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219,213.31,59,37.31A4,4,0,0,0,53,42.69l74,81.42-.14,0a5.17,5.17,0,0,0-.51.18l-.15.06-.05,0a4,4,0,0,0-.56.35l-.05,0-64,48a4,4,0,0,0,4.8,6.4L124,136v88a4,4,0,0,0,2.21,3.58A4.05,4.05,0,0,0,128,228a4,4,0,0,0,2.4-.8l53.74-40.3L213,218.69a4,4,0,1,0,5.92-5.38ZM132,216V136l18.44,13.83L178.73,181ZM124,71.63V32a4,4,0,0,1,6.4-3.2l64,48a4,4,0,0,1,0,6.4l-33.53,25.15a4,4,0,0,1-2.4.8,4,4,0,0,1-2.4-7.2l29.26-22L132,40V71.63a4,4,0,0,1-8,0Z"/></svg>`;
}
