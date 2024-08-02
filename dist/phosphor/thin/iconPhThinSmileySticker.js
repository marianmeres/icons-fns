export const iconPhThinSmileySticker = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28a100,100,0,1,0,29.39,195.61,3.94,3.94,0,0,0,1.66-1L222.62,159a4,4,0,0,0,1-1.65A100.07,100.07,0,0,0,128,28Zm88.25,126.1L154.1,216.25a91.88,91.88,0,1,1,62.15-62.15ZM84,108a8,8,0,1,1,8,8A8,8,0,0,1,84,108Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,172,108Zm-.54,46c-9.55,16.52-25.39,26-43.46,26s-33.91-9.48-43.46-26a4,4,0,0,1,6.92-4c8.21,14.19,21.19,22,36.54,22s28.33-7.81,36.54-22a4,4,0,1,1,6.92,4Z"/></svg>`;
}
