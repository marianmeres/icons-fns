export const iconPhLightBrandyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,88h0a93.64,93.64,0,0,0-15.21-51.28,6,6,0,0,0-5-2.72H54.23a6,6,0,0,0-5,2.72A93.64,93.64,0,0,0,34,88h0a94.1,94.1,0,0,0,88,93.8V218H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V181.8A94.1,94.1,0,0,0,222,88ZM57.56,46H198.44a81.62,81.62,0,0,1,11.34,36H46.22A81.62,81.62,0,0,1,57.56,46ZM128,170A82.09,82.09,0,0,1,46.24,94H209.76A82.09,82.09,0,0,1,128,170Z"/></svg>`;
}
