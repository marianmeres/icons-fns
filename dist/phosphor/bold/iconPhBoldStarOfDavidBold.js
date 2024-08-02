export const iconPhBoldStarOfDavidBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M205.82,128l28.6-50A12,12,0,0,0,224,60H167l-28.55-50A12,12,0,0,0,128,4h0a12,12,0,0,0-10.42,6.05L89,60H32A12,12,0,0,0,21.58,78l28.58,50L21.58,178A12,12,0,0,0,32,196H89l28.57,50a12,12,0,0,0,20.84,0L167,196h57a12,12,0,0,0,10.42-17.95Zm-2.5-44L192,103.81,180.68,84Zm-25.14,44L153,172h-50.1L77.81,128l25.13-44H153ZM128,40.18,139.33,60H116.66ZM52.68,84H75.29L64,103.82Zm0,87.92L64,152.18,75.29,172ZM128,215.82,116.66,196h22.67ZM180.68,172,192,152.19,203.32,172Z"/></svg>`;
}
