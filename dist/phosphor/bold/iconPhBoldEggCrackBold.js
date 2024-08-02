export const iconPhBoldEggCrackBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M190,57.34C171.06,29,147.88,12,128,12S84.94,29,66,57.34C46.94,86,36,120.46,36,152a92,92,0,0,0,184,0C220,120.46,209.06,86,190,57.34ZM128,220a68.07,68.07,0,0,1-68-68c0-61.12,46.19-116,68-116,7.59,0,18.13,6.65,28.64,17.88L119.05,96a12,12,0,0,0,6,19.63l20.9,5.23-5.76,28.78a12,12,0,0,0,9.42,14.12A11.87,11.87,0,0,0,152,164a12,12,0,0,0,11.76-9.65l8-40a12,12,0,0,0-8.86-14l-12.74-3.19,21.4-24C185.2,94.34,196,122.44,196,152A68.07,68.07,0,0,1,128,220Z"/></svg>`;
}
