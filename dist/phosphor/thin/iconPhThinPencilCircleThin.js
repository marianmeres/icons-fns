export const iconPhThinPencilCircleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm-94,74.71h46.58l17.28,37.45A28,28,0,0,0,128,177.6a28,28,0,0,0-40.57-8.15Zm3.7-8L128,81.55,147.59,124ZM132,192a20,20,0,0,1,40,0v16.83a91.31,91.31,0,0,1-40,11.07Zm-48,0a20,20,0,0,1,40,0v27.9a91.31,91.31,0,0,1-40-11.07Zm109.05,1.05A92.41,92.41,0,0,1,180,203.9V176a4.07,4.07,0,0,0-.37-1.68l-48-104a4,4,0,0,0-7.26,0l-48,104A4.07,4.07,0,0,0,76,176v27.9a92.41,92.41,0,0,1-13-10.85,92,92,0,1,1,130.1,0Z"/></svg>`;
}
