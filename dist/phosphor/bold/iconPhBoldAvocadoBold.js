export const iconPhBoldAvocadoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,108a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,108Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,188Zm86.76-58.68L185,45.17A60,60,0,0,0,71.42,44h0l-29.5,83.46a92,92,0,1,0,172.84,1.86ZM128,228a68.05,68.05,0,0,1-63.59-92.15c0-.09.07-.18.1-.26L94.05,52h0a36,36,0,0,1,68.17.78l.09.27,29.82,84.28A68,68,0,0,1,128,228Z"/></svg>`;
}
