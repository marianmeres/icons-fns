export const iconPhBoldPlayPause = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,64V192a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Zm36-12a12,12,0,0,0-12,12V192a12,12,0,0,0,24,0V64A12,12,0,0,0,224,52Zm-76,76a19.71,19.71,0,0,1-9.19,16.71L50.63,200.87A19.91,19.91,0,0,1,20,184.15V71.85A19.91,19.91,0,0,1,50.63,55.13l88.18,56.16A19.71,19.71,0,0,1,148,128Zm-27.62,0L44,79.37v97.26Z"/></svg>`;
}
