export const iconPhDuotoneFileCloud = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,88H152V32ZM108,136a44,44,0,0,0-42.34,32v0H60a28,28,0,0,0,0,56h48a44,44,0,0,0,0-88Z" opacity="0.2"/><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM108,128a52,52,0,0,0-48,32,36,36,0,0,0,0,72h48a52,52,0,0,0,0-104Zm0,88H60a20,20,0,0,1-3.81-39.64,8,8,0,0,0,16,.36,38,38,0,0,1,1.06-6.09,7.56,7.56,0,0,0,.27-1A36,36,0,1,1,108,216Z"/></svg>`;
}
