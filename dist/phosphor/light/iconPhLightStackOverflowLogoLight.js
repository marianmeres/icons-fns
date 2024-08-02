export const iconPhLightStackOverflowLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214,152.09V216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V152.09a6,6,0,0,1,12,0V210H202V152.09a6,6,0,0,1,12,0Zm-126,30h80a6,6,0,1,0,0-12H88a6,6,0,1,0,0,12Zm5.4-52.93,77.27,20.67a6,6,0,1,0,3.11-11.57L96.5,117.54a6,6,0,1,0-3.1,11.58Zm18.93-49.74,69.28,40a6.05,6.05,0,0,0,3,.8,6,6,0,0,0,3-11.18L118.33,69a6,6,0,1,0-6,10.38Zm87.75,13.35a6,6,0,0,0,8.48-8.48L152,27.76a6,6,0,1,0-8.48,8.47Z"/></svg>`;
}
