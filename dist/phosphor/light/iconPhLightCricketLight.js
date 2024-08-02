export const iconPhLightCricketLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M241.9,82.79,189.21,30.1a14,14,0,0,0-19.79,0L62.1,137.42a14,14,0,0,0,0,19.79l22.1,22.1L35.76,227.76a6,6,0,1,0,8.48,8.48L92.69,187.8l22.1,22.1a14,14,0,0,0,19.79,0L241.9,102.58a14,14,0,0,0,0-19.79ZM126.1,201.42a2,2,0,0,1-2.83,0l-22.1-22.11,31.07-31.07a6,6,0,0,0-8.48-8.48L92.69,170.83l-22.11-22.1a2,2,0,0,1,0-2.83l35.9-35.9H162v55.52ZM233.42,94.1,174,153.52V104a6,6,0,0,0-6-6H118.48L177.9,38.58a2,2,0,0,1,2.83,0l52.69,52.69A2,2,0,0,1,233.42,94.1ZM60,86A26,26,0,1,0,34,60,26,26,0,0,0,60,86Zm0-40A14,14,0,1,1,46,60,14,14,0,0,1,60,46Z"/></svg>`;
}
