export const iconPhDuotoneMetronomeDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,216H56a8,8,0,0,1-7.63-10.43l12-37.57H195.66l12,37.57A8,8,0,0,1,200,216Z" opacity="0.2"/><path d="M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM184.72,160H146.08l28.62-31.48ZM106.91,48h42.17l20,62.9L124.46,160H71.27ZM56,208l10.18-32H189.81L200,208Z"/></svg>`;
}
