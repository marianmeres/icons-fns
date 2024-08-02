export const iconPhBoldWaveSine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M242.86,133.1c-23,49-43,70.9-64.82,70.9-27.64,0-43.8-34.44-60.9-70.9C110,117.78,102.53,102,94.92,90.73,88.39,81.09,82.53,76,78,76c-3.82,0-18.24,4.12-43.09,57.1a12,12,0,0,1-21.73-10.2c23-49,43-70.9,64.82-70.9,27.64,0,43.8,34.44,60.9,70.9,7.19,15.32,14.61,31.15,22.22,42.37,6.53,9.64,12.39,14.73,17,14.73,3.82,0,18.24-4.12,43.09-57.1a12,12,0,0,1,21.73,10.2Z"/></svg>`;
}
