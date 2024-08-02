export const iconPhBoldOfficeChair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,128a12,12,0,0,1-12,12H226.6A52.09,52.09,0,0,1,176,180H140v16h20a36,36,0,0,1,36,36,12,12,0,0,1-24,0,12,12,0,0,0-12-12H140v12a12,12,0,0,1-24,0V220H96a12,12,0,0,0-12,12,12,12,0,0,1-24,0,36,36,0,0,1,36-36h20V180H80a52.09,52.09,0,0,1-50.6-40H16a12,12,0,0,1,0-24H40a12,12,0,0,1,12,12,28,28,0,0,0,28,28h96a28,28,0,0,0,28-28,12,12,0,0,1,12-12h24A12,12,0,0,1,252,128ZM72.82,133a20,20,0,0,1-4.59-16L81.8,29a19.91,19.91,0,0,1,19.79-17h52.82A19.91,19.91,0,0,1,174.2,29l13.57,88A20,20,0,0,1,168,140H88A20,20,0,0,1,72.82,133Zm19.85-17h70.66L151,36H105Z"/></svg>`;
}
