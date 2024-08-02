export const iconPhDuotonePhoneDisconnect = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,157a8,8,0,0,1-9.26,2.47L171.58,142a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,142L35.29,159.42A8,8,0,0,1,26,157c-14.6-18.83-13.26-43.83,4-61.12,53.11-53.11,142.77-53.11,195.88,0C243.23,113.12,244.57,138.12,230,157Z" opacity="0.2"/><path d="M231.59,90.13h0C175.44,34,80.56,34,24.41,90.13c-20,20-21.92,49.49-4.69,71.71A16,16,0,0,0,32.35,168a15.8,15.8,0,0,0,5.75-1.08l49-17.37.29-.11a16,16,0,0,0,9.75-11.73l5.9-29.52a76.52,76.52,0,0,1,49.68-.11h0l6.21,29.75a16,16,0,0,0,9.72,11.59l.29.11,49,17.39a16,16,0,0,0,18.38-5.06C253.51,139.62,251.58,110.13,231.59,90.13ZM223.67,152l-.3-.12-48.82-17.33-6.21-29.74A16,16,0,0,0,158,93a92.56,92.56,0,0,0-60.34.13,16,16,0,0,0-10.32,12l-5.9,29.51L32.63,151.86c-.1,0-.17.13-.27.17-12.33-15.91-11-36.23,3.36-50.58,25-25,58.65-37.53,92.28-37.53s67.27,12.51,92.28,37.53C234.61,115.8,236,136.12,223.67,152Zm.32,48a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,200Z"/></svg>`;
}
