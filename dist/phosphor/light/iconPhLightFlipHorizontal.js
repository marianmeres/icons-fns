export const iconPhLightFlipHorizontal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M106.78,26.29A13.88,13.88,0,0,0,91.1,34.55s0,.08,0,.12l-64,159.94A14,14,0,0,0,40,214h64a14,14,0,0,0,14-14V40A13.87,13.87,0,0,0,106.78,26.29ZM106,200a2,2,0,0,1-2,2H40a2,2,0,0,1-1.85-2.78l.05-.11,64-159.92A2,2,0,0,1,106,40Zm122.92-5.39-64-159.94s0-.08,0-.12A14,14,0,0,0,138,40V200a14,14,0,0,0,14,14h64a14,14,0,0,0,12.93-19.39Zm-11.26,6.49a1.93,1.93,0,0,1-1.67.9H152a2,2,0,0,1-2-2V40a1.82,1.82,0,0,1,1.6-2,2.62,2.62,0,0,1,.54-.06,1.76,1.76,0,0,1,1.69,1.2l64,159.92.05.11A2,2,0,0,1,217.66,201.1Z"/></svg>`;
}
