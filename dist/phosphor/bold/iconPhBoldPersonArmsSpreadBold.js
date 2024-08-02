export const iconPhBoldPersonArmsSpreadBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.4,86.85A23.55,23.55,0,0,0,212,68H150.59a36,36,0,1,0-45.18,0H44A24,24,0,0,0,34,113.79l.19.09,47.63,21L61.76,211a24,24,0,0,0,12.11,30.74A23.77,23.77,0,0,0,84,244a24,24,0,0,0,21.52-13.29L128,191.91l22.51,38.8A24,24,0,0,0,194.24,211l-20-76.15,47.63-21,.19-.09A23.55,23.55,0,0,0,235.4,86.85ZM128,28a12,12,0,1,1-12,12A12,12,0,0,1,128,28Zm27.16,89a12,12,0,0,0-6.77,14L171.26,218a11.87,11.87,0,0,0,.73,2c-.15-.32-.32-.64-.5-.95L138.38,162a12,12,0,0,0-20.76,0L84.51,219.05c-.18.31-.35.63-.5.95a11.87,11.87,0,0,0,.73-2l22.87-86.92a12,12,0,0,0-6.77-14L44,92H212Z"/></svg>`;
}
