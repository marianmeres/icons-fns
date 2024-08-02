export const iconPhThinMicrophoneStageThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,20a68.08,68.08,0,0,0-68,68,67.19,67.19,0,0,0,.82,10.49L30.34,194.59a11.94,11.94,0,0,0,1.2,15.58l14.29,14.3a11.95,11.95,0,0,0,15.58,1.19l96.11-70.48A68,68,0,1,0,168,20Zm60,68a59.7,59.7,0,0,1-14.87,39.47L128.54,42.87A59.94,59.94,0,0,1,228,88ZM56.68,219.21a4,4,0,0,1-5.2-.4L37.19,204.52a4,4,0,0,1-.4-5.2l66.46-90.62a68.31,68.31,0,0,0,44.05,44.05ZM108,88a59.77,59.77,0,0,1,14.87-39.47l84.6,84.6A60,60,0,0,1,108,88Zm-1.17,61.17a4,4,0,0,1,0,5.65l-8,8a4,4,0,1,1-5.65-5.65l8-8A4,4,0,0,1,106.84,149.16Z"/></svg>`;
}
