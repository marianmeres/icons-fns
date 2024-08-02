export const iconPhThinOptionThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,192a4,4,0,0,1-4,4H160.94a11.94,11.94,0,0,1-10.73-6.63L98.63,86.21A4,4,0,0,0,95.06,84H32a4,4,0,0,1,0-8H95.06a11.94,11.94,0,0,1,10.73,6.63l51.58,103.16a4,4,0,0,0,3.57,2.21H224A4,4,0,0,1,228,192ZM152,84h72a4,4,0,0,0,0-8H152a4,4,0,0,0,0,8Z"/></svg>`;
}
