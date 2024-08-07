export const iconPhThinSmileyXEyes = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM186.83,98.83,173.66,112l13.17,13.17a4,4,0,0,1-5.66,5.66L168,117.66l-13.17,13.17a4,4,0,0,1-5.66-5.66L162.34,112,149.17,98.83a4,4,0,0,1,5.66-5.66L168,106.34l13.17-13.17a4,4,0,1,1,5.66,5.66Zm-80,0L93.66,112l13.17,13.17a4,4,0,0,1-5.66,5.66L88,117.66,74.83,130.83a4,4,0,0,1-5.66-5.66L82.34,112,69.17,98.83a4,4,0,0,1,5.66-5.66L88,106.34l13.17-13.17a4,4,0,0,1,5.66,5.66ZM136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"/></svg>`;
}
