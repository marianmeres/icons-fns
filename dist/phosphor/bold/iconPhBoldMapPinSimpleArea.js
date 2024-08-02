export const iconPhBoldMapPinSimpleArea = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116,106.32V176a12,12,0,0,0,24,0V106.32a44,44,0,1,0-24,0ZM128,44a20,20,0,1,1-20,20A20,20,0,0,1,128,44ZM244,176c0,21.59-23.9,34-38.15,39.48C184.86,223.56,157.22,228,128,228c-57.64,0-116-17.86-116-52,0-22.23,26.12-40.2,69.88-48.06a12,12,0,1,1,4.24,23.62C51.93,157.71,36,169.78,36,176c0,4,7.12,11.07,22.77,17.08,18.3,7,42.89,10.92,69.23,10.92s50.93-3.88,69.23-10.92C212.87,187.07,220,180,220,176c0-6.22-15.93-18.29-50.12-24.44a12,12,0,1,1,4.24-23.62C217.88,135.8,244,153.77,244,176Z"/></svg>`;
}
