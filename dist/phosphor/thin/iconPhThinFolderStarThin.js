export const iconPhThinFolderStarThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,84a4,4,0,0,1,4,4v32a4,4,0,0,0,8,0V88a12,12,0,0,0-12-12H129.66L101.17,47.51A11.93,11.93,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.61A11.4,11.4,0,0,0,39.38,212h81.18a4,4,0,0,0,0-8H39.38A3.39,3.39,0,0,1,36,200.61V84ZM40,52H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36V56A4,4,0,0,1,40,52ZM235.81,160.41a4,4,0,0,0-3.5-2.79l-32.24-2.49-12.4-28.72a4,4,0,0,0-7.34,0l-12.4,28.72-32.24,2.49a4,4,0,0,0-2.24,7.08l24.46,20.19L150.45,215a4,4,0,0,0,5.91,4.41L184,203.18l27.64,16.27a4,4,0,0,0,2,.55,4.05,4.05,0,0,0,2.39-.79,4,4,0,0,0,1.49-4.17l-7.46-30.15,24.46-20.19A4,4,0,0,0,235.81,160.41Zm-32.76,19.91a4,4,0,0,0-1.33,4.05l5.78,23.36L186,195.09a4,4,0,0,0-4.06,0L160.5,207.73l5.78-23.36a4,4,0,0,0-1.33-4.05l-18.76-15.48L171,162.92a4,4,0,0,0,3.36-2.4L184,138.1l9.68,22.42a4,4,0,0,0,3.36,2.4l24.77,1.92Z"/></svg>`;
}
