export const iconPhLightChurch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.09,146.86,190,124.6V104a6,6,0,0,0-3-5.21L134,68.52V46h18a6,6,0,0,0,0-12H134V16a6,6,0,0,0-12,0V34H104a6,6,0,0,0,0,12h18V68.52L69,98.79A6,6,0,0,0,66,104v20.6L28.91,146.86A6,6,0,0,0,26,152v64a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V168a10,10,0,0,1,20,0v48a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V152A6,6,0,0,0,227.09,146.86ZM38,155.4l28-16.8V210H38Zm90-9.4a22,22,0,0,0-22,22v42H78V107.48l50-28.57,50,28.57V210H150V168A22,22,0,0,0,128,146Zm90,64H190V138.6l28,16.8Z"/></svg>`;
}
