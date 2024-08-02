export const iconPhThinCrownCrossThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M180,60c-15.15,0-29.15,5.06-39.43,14.25a49.31,49.31,0,0,0-8.57,10V36h20a4,4,0,0,0,0-8H132V8a4,4,0,0,0-8,0V28H104a4,4,0,0,0,0,8h20V84.26a49.31,49.31,0,0,0-8.57-10C105.15,65.06,91.15,60,76,60a56.06,56.06,0,0,0-56,56c0,28.36,13.79,46.38,25.37,56.51A85.57,85.57,0,0,0,68,186.74V208a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12V186.74a85.57,85.57,0,0,0,22.63-14.23C222.21,162.38,236,144.36,236,116A56.06,56.06,0,0,0,180,60Zm25.59,106.29a75.53,75.53,0,0,1-22.85,13.92A4,4,0,0,0,180,184v24a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V184a4,4,0,0,0-2.73-3.79,75.38,75.38,0,0,1-22.86-13.92C35.54,153.17,28,136.25,28,116A48.05,48.05,0,0,1,76,68c27.81,0,48,18.5,48,44v64a4,4,0,0,0,8,0V112c0-25.5,20.19-44,48-44a48.05,48.05,0,0,1,48,48C228,136.25,220.46,153.17,205.59,166.29Z"/></svg>`;
}
