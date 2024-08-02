export const iconPhLightShuffleSimpleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214,48V88a6,6,0,0,1-12,0V62.48l-47.13,47.14a6,6,0,0,1-8.49-8.49L193.52,54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48Zm-6,114a6,6,0,0,0-6,6v25.52L52.24,43.76a6,6,0,0,0-8.48,8.48L193.52,202H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM101.13,146.38,43.76,203.76a6,6,0,1,0,8.48,8.48l57.38-57.37a6,6,0,0,0-8.49-8.49Z"/></svg>`;
}
