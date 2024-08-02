export const iconPhLightScanSmileyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,40V76a6,6,0,0,1-12,0V46H180a6,6,0,0,1,0-12h36A6,6,0,0,1,222,40Zm-6,134a6,6,0,0,0-6,6v30H180a6,6,0,0,0,0,12h36a6,6,0,0,0,6-6V180A6,6,0,0,0,216,174ZM76,210H46V180a6,6,0,0,0-12,0v36a6,6,0,0,0,6,6H76a6,6,0,0,0,0-12ZM40,82a6,6,0,0,0,6-6V46H76a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6V76A6,6,0,0,0,40,82Zm88,116a70,70,0,1,1,70-70A70.08,70.08,0,0,1,128,198Zm58-70a58,58,0,1,0-58,58A58.07,58.07,0,0,0,186,128Zm-72-12a10,10,0,1,0-10,10A10,10,0,0,0,114,116Zm38-10a10,10,0,1,0,10,10A10,10,0,0,0,152,106Zm-4,41.5c-4.2,3.71-12.81,6.5-20,6.5s-15.83-2.79-20-6.5a6,6,0,0,0-7.94,9c7.44,6.56,19.41,9.5,28,9.5s20.53-2.94,28-9.5a6,6,0,1,0-7.94-9Z"/></svg>`;
}
