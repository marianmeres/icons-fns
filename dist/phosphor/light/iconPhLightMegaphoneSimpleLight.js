export const iconPhLightMegaphoneSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,88.59l-176.08-54A14,14,0,0,0,34,48V192a14,14,0,0,0,14,14,14.59,14.59,0,0,0,4-.59L138,179v13a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V160.62l30-9.19A14.07,14.07,0,0,0,238,138V102A14,14,0,0,0,228,88.59ZM48.56,193.92a2,2,0,0,1-1.76-.32A2,2,0,0,1,46,192V48a2,2,0,0,1,.8-1.6A2.05,2.05,0,0,1,48,46a1.79,1.79,0,0,1,.49.08L138,73.53v92.95ZM186,192a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V175.35l36-11Zm40-54a2,2,0,0,1-1.44,1.92l-.08,0L150,162.8V77.21l74.56,22.87A2,2,0,0,1,226,102Z"/></svg>`;
}
