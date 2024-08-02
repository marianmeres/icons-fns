export const iconPhBoldBedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,68H36V48a12,12,0,0,0-24,0V208a12,12,0,0,0,24,0V180H232v28a12,12,0,0,0,24,0V112A44.05,44.05,0,0,0,212,68ZM100,156H36V92h64Zm132,0H124V92h88a20,20,0,0,1,20,20Z"/></svg>`;
}
