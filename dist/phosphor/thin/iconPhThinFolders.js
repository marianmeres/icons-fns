export const iconPhThinFolders = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,68H153.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H192.89A11.12,11.12,0,0,0,204,200.89V180h20.89A11.12,11.12,0,0,0,236,168.89V80A12,12,0,0,0,224,68ZM196,200.89a3.12,3.12,0,0,1-3.11,3.11H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H85.33a4,4,0,0,1,2.4.8l29.87,22.4a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4Zm32-32a3.12,3.12,0,0,1-3.11,3.11H204V112a12,12,0,0,0-12-12H121.33L92.53,78.4a12.05,12.05,0,0,0-7.2-2.4H68V56a4,4,0,0,1,4-4h45.33a4,4,0,0,1,2.4.8L149.6,75.2a4,4,0,0,0,2.4.8h72a4,4,0,0,1,4,4Z"/></svg>`;
}
