export const iconPhFillMeteorFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,160a40,40,0,1,1-40-40A40,40,0,0,1,136,160Zm74.34-37.66-48,48a8,8,0,0,0,11.32,11.32l48-48a8,8,0,0,0-11.32-11.32Zm-20.68-12.68a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,11.32,11.32Zm40-51.32a8,8,0,0,0-11.32,0l-16,16a8,8,0,0,0,11.32,11.32l16-16A8,8,0,0,0,229.66,58.34ZM122.34,101.66a8,8,0,0,0,11.32,0l72-72a8,8,0,1,0-11.32-11.32l-72,72A8,8,0,0,0,122.34,101.66ZM135.6,199.6a56,56,0,0,1-79.2-79.2l82.75-82.74a8,8,0,1,0-11.32-11.32L45.09,109.09A72,72,0,1,0,146.91,210.91,8,8,0,0,0,135.6,199.6Z"/></svg>`;
}
