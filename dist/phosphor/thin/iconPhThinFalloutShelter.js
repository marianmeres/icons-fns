export const iconPhThinFalloutShelter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm67.53-93.89A4,4,0,0,0,192,124H135.47l27.86-41.78A4,4,0,0,0,160,76H96a4,4,0,0,0-3.33,6.22L120.53,124H64a4,4,0,0,0-3.33,6.22l32,48a4,4,0,0,0,6.66,0l28.67-43,28.67,43a4,4,0,0,0,6.66,0l32-48A4,4,0,0,0,195.53,126.11ZM152.53,84,128,120.79,103.47,84ZM96,168.79,71.47,132h49.06Zm64,0L135.47,132h49.06Z"/></svg>`;
}
