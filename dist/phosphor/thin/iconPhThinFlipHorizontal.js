export const iconPhThinFlipHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M106.38,28.26a11.76,11.76,0,0,0-13.44,7.08l0,.08L29,195.32A12,12,0,0,0,40,212h64a12,12,0,0,0,12-12V40A11.75,11.75,0,0,0,106.38,28.26ZM108,200a4,4,0,0,1-4,4H40a3.93,3.93,0,0,1-3.33-1.79,4,4,0,0,1-.32-3.84l64-159.94A4,4,0,0,1,108,40Zm119.07-4.6-64-160,0-.08A12,12,0,0,0,140,40V200a12,12,0,0,0,12,12h64a12,12,0,0,0,11.08-16.6Zm-7.75,6.81A3.93,3.93,0,0,1,216,204H152a4,4,0,0,1-4-4V40a3.81,3.81,0,0,1,3.2-3.92,4.64,4.64,0,0,1,.9-.09,3.69,3.69,0,0,1,3.57,2.42l64,160A3.9,3.9,0,0,1,219.32,202.21Z"/></svg>`;
}
