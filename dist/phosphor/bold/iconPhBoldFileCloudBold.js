export const iconPhBoldFileCloudBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v84a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H180a12,12,0,0,0,0,24h20a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160Zm-52,67a56,56,0,0,0-50.65,32.09A40,40,0,0,0,60,236h48a56,56,0,0,0,0-112Zm0,88H60a16,16,0,0,1-6.54-30.6,12,12,0,0,0,22.67-4.32,32.78,32.78,0,0,1,.92-5.3c.12-.36.22-.72.31-1.09A32,32,0,1,1,108,212Z"/></svg>`;
}
