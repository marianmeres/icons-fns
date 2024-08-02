export const iconPhThinOfficeChair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,128a4,4,0,0,1-4,4H219.82A44.06,44.06,0,0,1,176,172H132v32h28a28,28,0,0,1,28,28,4,4,0,0,1-8,0,20,20,0,0,0-20-20H132v20a4,4,0,0,1-8,0V212H96a20,20,0,0,0-20,20,4,4,0,0,1-8,0,28,28,0,0,1,28-28h28V172H80a44.06,44.06,0,0,1-43.82-40H16a4,4,0,0,1,0-8H40a4,4,0,0,1,4,4,36,36,0,0,0,36,36h96a36,36,0,0,0,36-36,4,4,0,0,1,4-4h24A4,4,0,0,1,244,128ZM70.94,135.86a12,12,0,0,1-2.82-9.56l13.72-96A12.06,12.06,0,0,1,93.72,20h68.56a12.06,12.06,0,0,1,11.88,10.3l13.72,96A12,12,0,0,1,176,140H80A12,12,0,0,1,70.94,135.86Zm6-5.24A3.93,3.93,0,0,0,80,132h96a3.93,3.93,0,0,0,3-1.38,4,4,0,0,0,.94-3.19l-13.72-96a4,4,0,0,0-4-3.43H93.72a4,4,0,0,0-4,3.43L76,127.43A4,4,0,0,0,77,130.62Z"/></svg>`;
}