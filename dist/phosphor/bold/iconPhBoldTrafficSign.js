export const iconPhBoldTrafficSign = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246,113.46,142.54,10a20.57,20.57,0,0,0-29.08,0L10,113.46a20.57,20.57,0,0,0,0,29.08L113.46,246h0a20.57,20.57,0,0,0,29.08,0L246,142.54a20.57,20.57,0,0,0,0-29.08ZM128,226.57,29.43,128,128,29.43,226.57,128Zm7.51-122.08a12,12,0,0,1,17-17l24,24a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L139,132H112a12,12,0,0,0-12,12v4a12,12,0,0,1-24,0v-4a36,36,0,0,1,36-36h27Z"/></svg>`;
}
