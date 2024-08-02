export const iconPhDuotoneRewindCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM112,164,64,128l48-36Zm64,0-48-36,48-36Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM115.58,84.84a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,112,172a8,8,0,0,0,8-8V92A8,8,0,0,0,115.58,84.84ZM104,148,77.33,128,104,108Zm75.58-63.16a8,8,0,0,0-8.38.76l-48,36a8,8,0,0,0,0,12.8l48,36A8,8,0,0,0,176,172a8,8,0,0,0,8-8V92A8,8,0,0,0,179.58,84.84ZM168,148l-26.67-20L168,108Z"/></svg>`;
}
