export const iconPhThinListHeartThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h64a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm80,56H40a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm124-44c0,14.51-8.56,29-25.44,43.07a143.52,143.52,0,0,1-24.77,16.51,4,4,0,0,1-3.58,0,143.52,143.52,0,0,1-24.77-16.51C148.56,173,140,158.51,140,144a28,28,0,0,1,52-14.41A28,28,0,0,1,244,144Zm-8,0a20,20,0,0,0-40,0,4,4,0,0,1-8,0,20,20,0,0,0-40,0c0,25.8,35.54,46.83,44,51.47C200.46,190.83,236,169.8,236,144Z"/></svg>`;
}
