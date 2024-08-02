export const iconPhBoldBridgeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,156H204V111.49a76.39,76.39,0,0,0,23.49,15,12,12,0,0,0,9-22.25A51.81,51.81,0,0,1,204,56a12,12,0,0,0-24,0A52,52,0,0,1,76,56a12,12,0,0,0-24,0,51.81,51.81,0,0,1-32.5,48.22,12,12,0,1,0,9,22.25,76.39,76.39,0,0,0,23.49-15V156H24a12,12,0,0,0,0,24H52v20a12,12,0,0,0,24,0V180H180v20a12,12,0,0,0,24,0V180h28a12,12,0,0,0,0-24Zm-92-24.95V156H116V131.05a76.26,76.26,0,0,0,24,0ZM76,111.38a76.44,76.44,0,0,0,16,11.53V156H76ZM164,156V122.91a76.44,76.44,0,0,0,16-11.53V156Z"/></svg>`;
}
