export const iconPhBoldFilePptBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,152a12,12,0,0,1-12,12h-8v44a12,12,0,0,1-24,0V164h-8a12,12,0,0,1,0-24h40A12,12,0,0,1,232,152ZM92,172a32,32,0,0,1-32,32H56v4a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12H60A32,32,0,0,1,92,172Zm-24,0a8,8,0,0,0-8-8H56v16h4A8,8,0,0,0,68,172Zm96,0a32,32,0,0,1-32,32h-4v4a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12h16A32,32,0,0,1,164,172Zm-24,0a8,8,0,0,0-8-8h-4v16h4A8,8,0,0,0,140,172ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,80h23L160,57Z"/></svg>`;
}
