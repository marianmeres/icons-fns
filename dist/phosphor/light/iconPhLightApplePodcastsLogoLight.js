export const iconPhLightApplePodcastsLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M151,139.2a30,30,0,1,0-46.06,0,22.14,22.14,0,0,0-10.35,7.39,21.68,21.68,0,0,0-3.94,18.77l12.18,48A22.17,22.17,0,0,0,124.44,230h7.12a22.17,22.17,0,0,0,21.58-16.64l12.18-48a21.68,21.68,0,0,0-3.94-18.77A22.14,22.14,0,0,0,151,139.2ZM128,102a18,18,0,1,1-18,18A18,18,0,0,1,128,102Zm25.69,60.4-12.18,48a10.19,10.19,0,0,1-9.95,7.6h-7.12a10.19,10.19,0,0,1-10-7.6l-12.18-48a9.75,9.75,0,0,1,1.78-8.44,10.25,10.25,0,0,1,8.16-4h31.5a10.25,10.25,0,0,1,8.16,4A9.75,9.75,0,0,1,153.69,162.4ZM186,128A58,58,0,1,0,72.11,143.58a6,6,0,0,1-11.56,3.21,70,70,0,1,1,134.9,0,6,6,0,0,1-11.56-3.21A58.31,58.31,0,0,0,186,128Zm44,0a101.91,101.91,0,0,1-45.29,84.79,6,6,0,1,1-6.68-10,90,90,0,1,0-100.06,0,6,6,0,0,1-6.68,10A102,102,0,1,1,230,128Z"/></svg>`;
}