export const iconPhThinSirenThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,16V8a4,4,0,0,1,8,0v8a4,4,0,0,1-8,0Zm76,28a4,4,0,0,0,2.83-1.17l8-8a4,4,0,1,0-5.66-5.66l-8,8A4,4,0,0,0,200,44ZM53.17,42.83a4,4,0,0,0,5.66-5.66l-8-8a4,4,0,0,0-5.66,5.66Zm83.49,33.22a4,4,0,0,0-1.32,7.9C156.24,87.45,172,106.39,172,128a4,4,0,0,0,8,0C180,102.53,161.37,80.2,136.66,76.05ZM228,176v24a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V176a12,12,0,0,1,12-12h4V128a84,84,0,0,1,84-84h.64c46,.34,83.36,38.47,83.36,85v35h4A12,12,0,0,1,228,176ZM52,164H204V129c0-42.15-33.83-76.69-75.42-77A76,76,0,0,0,52,128Zm168,12a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4v24a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"/></svg>`;
}
