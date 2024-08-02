export const iconPhBoldPersonBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.29,131.34,176.17,80.19A36,36,0,0,0,150.55,68a36,36,0,1,0-45.1,0A36,36,0,0,0,79.83,80.19L34.71,131.34a24,24,0,0,0,33.7,34.16l6.73-5.39L61.74,211a24,24,0,0,0,43.74,19.69L128,191.9l22.52,38.79a23.82,23.82,0,0,0,13.27,11.85A24,24,0,0,0,194.26,211l-13.4-50.89,6.73,5.39a24,24,0,0,0,33.7-34.16ZM128,28a12,12,0,1,1-12,12A12,12,0,0,1,128,28Zm75,119.12-35.52-28.49a12,12,0,0,0-19.11,12.42L171.27,218a12.18,12.18,0,0,0,.73,2,10.72,10.72,0,0,0-.5-1L138.38,162a12,12,0,0,0-20.76,0L84.5,219a10.72,10.72,0,0,0-.5,1,13.16,13.16,0,0,0,.73-2l22.87-86.92a12,12,0,0,0-19.11-12.42L53,147.12a11.5,11.5,0,0,0-1,.87c.18-.17.35-.36.52-.54L97.83,96.06a12,12,0,0,1,9-4.06h42.34a12,12,0,0,1,9,4.06l45.32,51.39c.17.18.34.37.52.54A11.5,11.5,0,0,0,203,147.12Z"/></svg>`;
}