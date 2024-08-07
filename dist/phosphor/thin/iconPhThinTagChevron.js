export const iconPhThinTagChevron = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.33,125.78,197.7,57.34a12,12,0,0,0-10-5.34H32a4,4,0,0,0-3.33,6.22L75.19,128,28.67,197.78A4,4,0,0,0,32,204H187.72a12,12,0,0,0,10-5.34l45.63-68.44A4,4,0,0,0,243.33,125.78Zm-52.28,68.44a4,4,0,0,1-3.33,1.78H39.47l43.86-65.78a4,4,0,0,0,0-4.44L39.47,60H187.72a4,4,0,0,1,3.33,1.78L235.19,128Z"/></svg>`;
}
