export const iconPhThinProjectorScreenChartThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,144V128a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V120a4,4,0,0,0-8,0v24A4,4,0,0,0,128,148Zm32,0a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,160,148Zm52-72V180h12a4,4,0,0,1,0,8H132v24.4a20,20,0,1,1-8,0V188H32a4,4,0,0,1,0-8H44V76H40A12,12,0,0,1,28,64V48A12,12,0,0,1,40,36H216a12,12,0,0,1,12,12V64a12,12,0,0,1-12,12ZM128,220a12,12,0,1,0,12,12A12,12,0,0,0,128,220ZM40,68H216a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V64A4,4,0,0,0,40,68Zm164,8H52V180H204Z"/></svg>`;
}
