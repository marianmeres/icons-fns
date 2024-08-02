export const iconPhThinClockUser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,72v49.53l42.21-21.11a4,4,0,1,1,3.58,7.16l-48,24A4.05,4.05,0,0,1,128,132a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0Zm-4,148a92,92,0,1,1,92-92,4,4,0,0,0,8,0A100,100,0,1,0,128,228a4,4,0,0,0,0-8Zm99.86,3a4,4,0,1,1-7.73,2.05c-3.29-12.37-14.86-21-28.13-21s-24.84,8.65-28.14,21a4,4,0,0,1-3.86,3,3.7,3.7,0,0,1-1-.14,4,4,0,0,1-2.84-4.89A36.24,36.24,0,0,1,176.5,199.3a28,28,0,1,1,31,0A36.2,36.2,0,0,1,227.86,223ZM192,196a20,20,0,1,0-20-20A20,20,0,0,0,192,196Z"/></svg>`;
}
