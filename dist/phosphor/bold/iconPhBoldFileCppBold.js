export const iconPhBoldFileCppBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M48,180c0,8.67,5.5,16,12,16a10.23,10.23,0,0,0,7.33-3.43,12,12,0,1,1,17.34,16.6A34,34,0,0,1,60,220c-19.85,0-36-17.94-36-40s16.15-40,36-40a34,34,0,0,1,24.67,10.83,12,12,0,1,1-17.34,16.6A10.27,10.27,0,0,0,60,164C53.5,164,48,171.33,48,180ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,57V80h23ZM148,168h-8v-8a12,12,0,0,0-24,0v8h-8a12,12,0,0,0,0,24h8v8a12,12,0,0,0,24,0v-8h8a12,12,0,0,0,0-24Zm72,0h-8v-8a12,12,0,0,0-24,0v8h-8a12,12,0,0,0,0,24h8v8a12,12,0,0,0,24,0v-8h8a12,12,0,0,0,0-24Z"/></svg>`;
}
