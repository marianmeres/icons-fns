export const iconPhRegularFunction = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,40a8,8,0,0,1-8,8H170.71a24,24,0,0,0-23.62,19.71L137.59,120H184a8,8,0,0,1,0,16H134.68l-10,55.16A40,40,0,0,1,85.29,224H56a8,8,0,0,1,0-16H85.29a24,24,0,0,0,23.62-19.71l9.5-52.29H72a8,8,0,0,1,0-16h49.32l10-55.16A40,40,0,0,1,170.71,32H200A8,8,0,0,1,208,40Z"/></svg>`;
}
