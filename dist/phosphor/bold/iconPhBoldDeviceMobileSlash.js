export const iconPhBoldDeviceMobileSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L52,62.24V216a28,28,0,0,0,28,28h96a28,28,0,0,0,26-17.61,12,12,0,0,0,14.88-18.46ZM176,220H80a4,4,0,0,1-4-4V88.64L180,203v13A4,4,0,0,1,176,220ZM75.51,24a12,12,0,0,1,12-12H176a28,28,0,0,1,28,28v98.94a12,12,0,0,1-24,0V40a4,4,0,0,0-4-4H87.51A12,12,0,0,1,75.51,24Z"/></svg>`;
}
