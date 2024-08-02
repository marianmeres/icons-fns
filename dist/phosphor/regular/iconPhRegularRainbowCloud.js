export const iconPhRegularRainbowCloud = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,112a48.18,48.18,0,0,0-44.66,30.4,31,31,0,0,0-3.34-.18c-17.65,0-32,14.76-32,32.89S134.35,208,152,208h48a48,48,0,0,0,0-96Zm0,80H152c-8.82,0-16-7.58-16-16.89s7.18-16.89,16-16.89a15,15,0,0,1,5.78,1.14,8,8,0,0,0,10.87-5.81A32,32,0,1,1,200,192ZM24,160v16a8,8,0,0,1-16,0V160A104,104,0,0,1,184.5,85.44a8,8,0,0,1-11.15,11.47A88,88,0,0,0,24,160Zm32,0v16a8,8,0,0,1-16,0V160a72,72,0,0,1,114.6-58,8,8,0,1,1-9.47,12.89A56,56,0,0,0,56,160Zm61.57-23.35A24,24,0,0,0,88,160v16a8,8,0,0,1-16,0V160a40,40,0,0,1,49.27-38.92,8,8,0,1,1-3.7,15.57Z"/></svg>`;
}
