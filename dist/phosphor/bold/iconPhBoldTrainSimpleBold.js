export const iconPhBoldTrainSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,20H72A36,36,0,0,0,36,56V184a36,36,0,0,0,36,36h0l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h0a36,36,0,0,0,36-36V56A36,36,0,0,0,184,20ZM72,44H184a12,12,0,0,1,12,12v60H60V56A12,12,0,0,1,72,44ZM184,196H72a12,12,0,0,1-12-12V140H196v44A12,12,0,0,1,184,196Zm-80-28a16,16,0,1,1-16-16A16,16,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16,16,0,0,1,184,168Z"/></svg>`;
}
