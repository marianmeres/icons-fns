export const iconPhDuotoneCricket = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,104v64l-37.66,37.66a8,8,0,0,1-11.31,0L66.34,153a8,8,0,0,1,0-11.31L104,104ZM80,60A20,20,0,1,0,60,80,20,20,0,0,0,80,60Z" opacity="0.2"/><path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM232,92.69l-56,56V104a8,8,0,0,0-8-8H123.31l56-56L232,92.68ZM60,88A28,28,0,1,0,32,60,28,28,0,0,0,60,88Zm0-40A12,12,0,1,1,48,60,12,12,0,0,1,60,48Z"/></svg>`;
}
