export const iconPhDuotoneSiren = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,129v39H48V128a80,80,0,0,1,80.61-80C172.72,48.33,208,84.89,208,129Z" opacity="0.2"/><path d="M120,16V8a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm80,32a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,200,48ZM50.34,45.66A8,8,0,0,0,61.66,34.34l-8-8A8,8,0,0,0,42.34,37.66Zm87,26.45a8,8,0,1,0-2.64,15.78C153.67,91.08,168,108.32,168,128a8,8,0,0,0,16,0C184,100.6,163.93,76.57,137.32,72.11ZM232,176v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16V128a88,88,0,0,1,88-88h.68c48.15.36,87.33,40.29,87.33,89v31A16,16,0,0,1,232,176ZM56,160H200V129c0-40-32.05-72.71-71.45-73H128a72,72,0,0,0-72,72Zm160,40V176H40v24H216Z"/></svg>`;
}
