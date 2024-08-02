export const iconPhBoldFolderUser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.51,197.94a36,36,0,1,0-57,0,43.75,43.75,0,0,0-15.08,23,12,12,0,0,0,8.52,14.67A11.77,11.77,0,0,0,160,236a12,12,0,0,0,11.59-8.92C174,218.2,182.35,212,192,212s18,6.2,20.4,15.08a12,12,0,0,0,23.19-6.17A43.7,43.7,0,0,0,220.51,197.94ZM192,164a12,12,0,1,1-12,12A12,12,0,0,1,192,164Zm24-96H133.39l-26-29.29A20,20,0,0,0,92.41,32H40A20,20,0,0,0,20,52V200.61A19.41,19.41,0,0,0,39.38,220h73.18a12,12,0,0,0,0-24H44V92H212v16a12,12,0,0,0,24,0V88A20,20,0,0,0,216,68ZM44,68V56H90.61l10.67,12Z"/></svg>`;
}
