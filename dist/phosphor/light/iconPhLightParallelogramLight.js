export const iconPhLightParallelogramLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.75,48.4A14,14,0,0,0,232,42H88.81A14,14,0,0,0,76,50.25l-64.8,144A14,14,0,0,0,24,214H167.19A14,14,0,0,0,180,205.75l64.8-144A14,14,0,0,0,243.75,48.4Zm-9.93,8.42-64.8,144a2,2,0,0,1-1.83,1.18H24a2,2,0,0,1-1.83-2.82L87,55.18A2,2,0,0,1,88.81,54H232a2,2,0,0,1,1.83,2.82Z"/></svg>`;
}
