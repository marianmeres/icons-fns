export const iconPhDuotoneCloudX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,127.62a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.36l0,.1A80,80,0,0,1,240,127.62Z" opacity="0.2"/><path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm29.66-82.34L171.31,136l18.35,18.34a8,8,0,0,1-11.32,11.32L160,147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L148.69,136l-18.35-18.34a8,8,0,0,1,11.32-11.32L160,124.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"/></svg>`;
}
