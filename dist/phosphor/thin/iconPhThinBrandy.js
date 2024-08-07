export const iconPhThinBrandy = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,88h0a91.67,91.67,0,0,0-14.88-50.18A4,4,0,0,0,201.77,36H54.23a4,4,0,0,0-3.35,1.82A91.67,91.67,0,0,0,36,88h0a92.11,92.11,0,0,0,88,91.91V220H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V179.91A92.11,92.11,0,0,0,220,88ZM56.43,44H199.57a83.5,83.5,0,0,1,12.32,40H44.11A83.5,83.5,0,0,1,56.43,44ZM128,172A84.1,84.1,0,0,1,44.1,92H211.9A84.1,84.1,0,0,1,128,172Z"/></svg>`;
}
