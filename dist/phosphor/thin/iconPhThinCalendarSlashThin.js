export const iconPhThinCalendarSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,48,36,12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a4,4,0,0,0,3-6.69Zm-4.46,7L82.59,84H44V48A4,4,0,0,1,46.5,44.29ZM48,212a4,4,0,0,1-4-4V92H89.87L199,212ZM220,48V177.23a4,4,0,1,1-8,0V92H134.88a4,4,0,0,1,0-8H212V48a4,4,0,0,0-4-4H180V56a4,4,0,0,1-8,0V44H91.25a4,4,0,0,1,0-8H172V24a4,4,0,0,1,8,0V36h28A12,12,0,0,1,220,48Z"/></svg>`;
}
