export const iconPhThinFolderSimpleDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M125.6,83.2,95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V80a4,4,0,0,1-8,0V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4L130.4,76.8a4,4,0,1,1-4.8,6.4ZM88,204H39.38A3.39,3.39,0,0,1,36,200.62V192a4,4,0,0,0-8,0v8.62A11.4,11.4,0,0,0,39.38,212H88a4,4,0,0,0,0-8Zm72,0H128a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm64-56a4,4,0,0,0-4,4v48.89a3.12,3.12,0,0,1-3.11,3.11H200a4,4,0,0,0,0,8h16.89A11.12,11.12,0,0,0,228,200.89V152A4,4,0,0,0,224,148Zm-8-72H168a4,4,0,0,0,0,8h48a4,4,0,0,1,4,4v24a4,4,0,0,0,8,0V88A12,12,0,0,0,216,76ZM32,156a4,4,0,0,0,4-4V120a4,4,0,0,0-8,0v32A4,4,0,0,0,32,156Z"/></svg>`;
}
