export const iconPhDuotoneWaveSquare = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,72v56H24V72Zm0,56v56H232V128Z" opacity="0.2"/><path d="M240,128v56a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V80H32v48a8,8,0,0,1-16,0V72a8,8,0,0,1,8-8H128a8,8,0,0,1,8,8V176h88V128a8,8,0,0,1,16,0Z"/></svg>`;
}
