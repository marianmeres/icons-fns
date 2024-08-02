export const iconPhBoldFileCssBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M48,180c0,8.67,5.5,16,12,16a10.27,10.27,0,0,0,7.33-3.43,12,12,0,1,1,17.34,16.6A34,34,0,0,1,60,220C40.15,220,24,202,24,180s16.15-40,36-40a34,34,0,0,1,24.67,10.83,12,12,0,1,1-17.34,16.6A10.27,10.27,0,0,0,60,164C53.5,164,48,171.31,48,180Zm97.51-5.71c-5.12-3.45-11.32-5.24-16.8-6.82a79.5,79.5,0,0,1-7.91-2.59c2.45-1.18,9.71-1.3,16.07.33A12,12,0,0,0,143,142a69,69,0,0,0-12-1.86c-9.93-.66-18,1.08-24.1,5.17a24.45,24.45,0,0,0-10.69,17.76c-1.1,8.74,2.49,16.27,10.11,21.19,4.78,3.09,10.36,4.7,15.75,6.26,3,.89,7.94,2.3,9.88,3.53a2.48,2.48,0,0,1-.21.71c-1.37,1.55-9.58,1.79-16.39-.06a12,12,0,1,0-6.46,23.11A63.75,63.75,0,0,0,125.1,220c6.46,0,13.73-1.17,19.73-5.15a24.73,24.73,0,0,0,10.95-18C157,187.53,153.33,179.53,145.51,174.27Zm68,0c-5.12-3.45-11.32-5.24-16.8-6.82a79.5,79.5,0,0,1-7.91-2.59c2.45-1.18,9.71-1.3,16.07.33A12,12,0,0,0,211,142a69,69,0,0,0-12-1.86c-9.93-.66-18,1.08-24.1,5.17a24.45,24.45,0,0,0-10.69,17.76c-1.1,8.74,2.49,16.27,10.11,21.19,4.78,3.09,10.36,4.7,15.75,6.26,3,.89,7.94,2.3,9.88,3.53a2.48,2.48,0,0,1-.21.71c-1.37,1.55-9.58,1.79-16.39-.06a12,12,0,1,0-6.46,23.11A63.75,63.75,0,0,0,193.1,220c6.46,0,13.73-1.17,19.73-5.15a24.73,24.73,0,0,0,10.95-18C225,187.53,221.33,179.53,213.51,174.27ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88v20a12,12,0,1,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,1,1-24,0ZM160,80h23L160,57Z"/></svg>`;
}
