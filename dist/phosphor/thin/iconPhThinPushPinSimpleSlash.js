export const iconPhThinPushPinSimpleSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M87.25,40a4,4,0,0,1,4-4H192a4,4,0,0,1,0,8H180.77l19.58,111a4,4,0,0,1-3.24,4.63,3.33,3.33,0,0,1-.7.07,4,4,0,0,1-3.93-3.31L172.64,44H91.25A4,4,0,0,1,87.25,40ZM210.69,219a4,4,0,0,1-5.65-.27L169.87,180H132v60a4,4,0,0,1-8,0V180H40a4,4,0,0,1,0-8H52.64L70.52,70.72,45,42.69A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219Zm-48.1-47L77.32,78.2,60.77,172Z"/></svg>`;
}
