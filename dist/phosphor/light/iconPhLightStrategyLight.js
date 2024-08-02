export const iconPhLightStrategyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,154a34,34,0,1,0,34,34A34,34,0,0,0,76,154Zm0,56a22,22,0,1,1,22-22A22,22,0,0,1,76,210ZM43.76,107.76,59.52,92,43.76,76.24a6,6,0,0,1,8.48-8.48L68,83.52,83.76,67.76a6,6,0,0,1,8.48,8.48L76.48,92l15.76,15.76a6,6,0,1,1-8.48,8.48L68,100.48,52.24,116.24a6,6,0,0,1-8.48-8.48Zm184.48,96a6,6,0,1,1-8.48,8.48L204,196.48l-15.76,15.76a6,6,0,0,1-8.48-8.48L195.52,188l-15.76-15.76a6,6,0,0,1,8.48-8.48L204,179.52l15.76-15.76a6,6,0,0,1,8.48,8.48L212.48,188ZM182.55,112.3c-6,21.66-24.55,40.38-45.09,45.52A6.14,6.14,0,0,1,136,158a6,6,0,0,1-1.46-11.82c16.29-4.07,31.62-19.67,36.44-37.09,3.33-12,3.39-30.24-15.22-48.85L150,54.48V80a6,6,0,0,1-12,0V40a6,6,0,0,1,6-6h40a6,6,0,0,1,0,12H158.48l5.76,5.76C182,69.47,188.45,91,182.55,112.3Z"/></svg>`;
}
