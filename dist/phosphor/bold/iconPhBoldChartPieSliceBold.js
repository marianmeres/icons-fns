export const iconPhBoldChartPieSliceBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M93.82,116.64A12,12,0,0,0,100,106.15V40.74A12,12,0,0,0,83,29.83,108.26,108.26,0,0,0,20,128c0,3.37.16,6.76.47,10.1a12,12,0,0,0,17.76,9.38ZM76,62.06v37L44.81,116.36A84.39,84.39,0,0,1,76,62.06ZM128,20a12,12,0,0,0-12,12v89.53L39.18,166.27a12,12,0,0,0-4.3,16.46A108,108,0,1,0,128,20Zm0,192a84.47,84.47,0,0,1-65.57-31.5L134,138.79a12,12,0,0,0,6-10.37V44.85A84,84,0,0,1,128,212Z"/></svg>`;
}
