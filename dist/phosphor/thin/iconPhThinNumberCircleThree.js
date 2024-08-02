export const iconPhThinNumberCircleThree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm28-68a32,32,0,0,1-54.86,22.4,4,4,0,1,1,5.72-5.6A24,24,0,1,0,124,128a4,4,0,0,1-3.28-6.29L144.32,88H104a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L131.12,120.8A32.06,32.06,0,0,1,156,152Z"/></svg>`;
}
