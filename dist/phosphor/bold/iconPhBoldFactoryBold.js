export const iconPhBoldFactoryBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,176a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h28A12,12,0,0,1,120,176Zm56-12H148a12,12,0,0,0,0,24h28a12,12,0,0,0,0-24Zm68,52a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24h4V88a12,12,0,0,1,19.2-9.6L92,112V88a12,12,0,0,1,19.2-9.6l33.33,25,10.61-74.23A20.1,20.1,0,0,1,174.94,12h18.12a20.1,20.1,0,0,1,19.8,17.17l15,105.13c0,.1.12,1.34.12,1.7v68h4A12,12,0,0,1,244,216Zm-77.57-96.17L172,124h30.16L189.59,36H178.41ZM52,204H204V148H168a12,12,0,0,1-7.2-2.4l-14.38-10.78-.06,0L116,112v24a12,12,0,0,1-19.2,9.6L52,112Z"/></svg>`;
}
