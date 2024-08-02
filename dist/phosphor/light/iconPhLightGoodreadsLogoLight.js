export const iconPhLightGoodreadsLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,26a6,6,0,0,0-6,6V51.4A62,62,0,0,0,66,88v24a62,62,0,0,0,112,36.6V168a50.06,50.06,0,0,1-50,50c-17.09,0-34-8.41-43.08-21.43a6,6,0,1,0-9.84,6.86C86.34,219.57,107.11,230,128,230a62.07,62.07,0,0,0,62-62V32A6,6,0,0,0,184,26ZM128,162a50.06,50.06,0,0,1-50-50V88a50,50,0,0,1,100,0v24A50.06,50.06,0,0,1,128,162Z"/></svg>`;
}
