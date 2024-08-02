export const iconPhFillCloudSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,128.72A87.74,87.74,0,0,1,222.41,190a4,4,0,0,1-5.77-.16L103.78,65.67a4,4,0,0,1,.39-5.76A87.82,87.82,0,0,1,160.87,40C209.15,40.47,248.38,80.43,248,128.72ZM53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-.06.11A64,64,0,0,0,8,153c.53,35.12,29.84,63,65,63h87a87.65,87.65,0,0,0,31.78-5.95l10.3,11.33a8,8,0,0,0,11.33.52,8.32,8.32,0,0,0,.29-11.52Z"/></svg>`;
}
