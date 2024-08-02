export const iconPhThinHourglass = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,75.64V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V76a12,12,0,0,0,4.8,9.6L121.33,128,64.8,170.4A12,12,0,0,0,60,180v36a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180.36a12.05,12.05,0,0,0-4.76-9.57L134.63,128l56.61-42.79A12.05,12.05,0,0,0,196,75.64Zm-8,104.72V216a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V180a4,4,0,0,1,1.6-3.2L128,133l58.42,44.16A4,4,0,0,1,188,180.36Zm0-104.72a4,4,0,0,1-1.59,3.19L128,123,69.6,79.2A4,4,0,0,1,68,76V40a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z"/></svg>`;
}
