export const iconPhBoldJeep = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,84h-6.3l-8.61-40.19A20.11,20.11,0,0,0,205.53,28H50.47A20.11,20.11,0,0,0,30.91,43.81L22.3,84H16a12,12,0,0,0,0,24h4v92a20,20,0,0,0,20,20H68a20,20,0,0,0,20-20V180h80v20a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V108h4a12,12,0,0,0,0-24ZM53.7,52H202.3l6.86,32H46.84ZM64,196H44V180H64Zm128,0V180h20v16Zm20-40H180V132a12,12,0,0,0-24,0v24H140V132a12,12,0,0,0-24,0v24H100V132a12,12,0,0,0-24,0v24H44V108H212Z"/></svg>`;
}
