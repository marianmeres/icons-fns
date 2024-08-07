export const iconPhBoldCactus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,204H172V188a72.08,72.08,0,0,0,72-72,32,32,0,0,0-64,0,8,8,0,0,1-8,8V56a44,44,0,0,0-88,0V84a8,8,0,0,1-8-8,32,32,0,0,0-64,0,72.08,72.08,0,0,0,72,72v56H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM96,124H84A48.05,48.05,0,0,1,36,76a8,8,0,0,1,16,0,32,32,0,0,0,32,32H96a12,12,0,0,0,12-12V56a20,20,0,0,1,40,0v80a12,12,0,0,0,12,12h12a32,32,0,0,0,32-32,8,8,0,0,1,16,0,48.05,48.05,0,0,1-48,48H160a12,12,0,0,0-12,12v28H108V136A12,12,0,0,0,96,124Z"/></svg>`;
}
