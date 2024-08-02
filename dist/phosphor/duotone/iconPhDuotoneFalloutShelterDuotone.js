export const iconPhDuotoneFalloutShelterDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,144-32-48L96,176,64,128h64L96,80h64l-32,48h64Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm71.05-91.77A8,8,0,0,0,192,120H143l23.71-35.56A8,8,0,0,0,160,72H96a8,8,0,0,0-6.66,12.44L113.05,120H64a8,8,0,0,0-6.66,12.44l32,48a8,8,0,0,0,13.32,0l25.34-38,25.34,38a8,8,0,0,0,13.32,0l32-48A8,8,0,0,0,199.05,124.23ZM145.05,88,128,113.58,111,88ZM96,161.58,79,136h34.1Zm64,0L143,136h34.1Z"/></svg>`;
}
