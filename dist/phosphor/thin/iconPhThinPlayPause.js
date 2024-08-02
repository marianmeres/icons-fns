export const iconPhThinPlayPause = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,64V192a4,4,0,0,1-8,0V64a4,4,0,0,1,8,0Zm44-4a4,4,0,0,0-4,4V192a4,4,0,0,0,8,0V64A4,4,0,0,0,224,60Zm-84,68a11.76,11.76,0,0,1-5.48,10L46.33,194.12a12,12,0,0,1-12.18.39A11.66,11.66,0,0,1,28,184.15V71.85a11.66,11.66,0,0,1,6.15-10.36,12,12,0,0,1,12.18.39L134.52,118A11.76,11.76,0,0,1,140,128Zm-8,0a3.77,3.77,0,0,0-1.78-3.22L42,68.63A3.94,3.94,0,0,0,39.91,68a4,4,0,0,0-1.91.5,3.76,3.76,0,0,0-2,3.35v112.3a3.76,3.76,0,0,0,2,3.35,3.91,3.91,0,0,0,4-.13l88.18-56.15A3.77,3.77,0,0,0,132,128Z"/></svg>`;
}
