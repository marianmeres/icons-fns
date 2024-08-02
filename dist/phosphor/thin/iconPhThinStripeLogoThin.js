export const iconPhThinStripeLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,152c0,15.44-16.15,28-36,28s-36-12.56-36-28a4,4,0,0,1,8,0c0,11,12.56,20,28,20s28-9,28-20c0-12.58-11.79-16.92-29.78-22.11C111,125.51,93.78,120.54,93.78,104c0-16,14.71-28,34.22-28,14.2,0,26.3,6.46,31.55,16.85a4,4,0,1,1-7.13,3.61C148.53,88.78,139.17,84,128,84c-15,0-26.22,8.6-26.22,20,0,9.81,10.07,13.43,26.66,18.21S164,132.46,164,152ZM220,48V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48Zm-8,0a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z"/></svg>`;
}
