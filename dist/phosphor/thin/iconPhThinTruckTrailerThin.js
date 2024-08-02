export const iconPhThinTruckTrailerThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,100.22V96a52.06,52.06,0,0,0-52-52h-8a12,12,0,0,0-12,12V180H124V72a4,4,0,0,0-4-4H16A12,12,0,0,0,4,80V184a28,28,0,0,0,52,14.41A28,28,0,0,0,107.71,188h88.58A28,28,0,0,0,252,184V136A36.06,36.06,0,0,0,220,100.22ZM12,80a4,4,0,0,1,4-4H116V180h-8.29A28,28,0,0,0,56,169.59a28,28,0,0,0-44-5.16ZM32,204a20,20,0,1,1,20-20A20,20,0,0,1,32,204Zm48,0a20,20,0,1,1,20-20A20,20,0,0,1,80,204Zm144,0a20,20,0,1,1,20-20A20,20,0,0,1,224,204Zm0-48a28,28,0,0,0-27.71,24H156V56a4,4,0,0,1,4-4h8a44.05,44.05,0,0,1,44,44v8a4,4,0,0,0,4,4,28,28,0,0,1,28,28v28.43A27.9,27.9,0,0,0,224,156Z"/></svg>`;
}
