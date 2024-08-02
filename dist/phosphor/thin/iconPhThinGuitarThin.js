export const iconPhThinGuitarThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M246.83,49.17l-40-40a4,4,0,0,0-5.66,5.66L206.34,20,141.25,85.1c-21.91-12.54-46.89-12.31-61.67,2.47a38.11,38.11,0,0,0-8.5,13A12.24,12.24,0,0,1,59.94,108c-13.55.46-25.29,5.28-34,13.94C14.82,133.14,10.1,149.31,12.7,167.51c2.54,17.77,11.8,35.42,26.08,49.71s31.94,23.54,49.71,26.08a67.39,67.39,0,0,0,9.59.7c14.25,0,26.79-4.82,36-14,8.66-8.67,13.48-20.41,13.94-34a12.24,12.24,0,0,1,7.45-11.14,38.11,38.11,0,0,0,13-8.5c14.78-14.78,15-39.76,2.47-61.67L236,49.66l5.17,5.17a4,4,0,1,0,5.66-5.66ZM162.77,170.76a29.94,29.94,0,0,1-10.3,6.72A20.25,20.25,0,0,0,140,195.79c-.38,11.49-4.39,21.37-11.6,28.57-9.34,9.34-23.1,13.26-38.75,11-16.07-2.29-32.11-10.75-45.18-23.82s-21.53-29.11-23.82-45.18c-2.24-15.65,1.68-29.41,11-38.75,7.2-7.21,17.08-11.22,28.57-11.6h0a20.25,20.25,0,0,0,18.31-12.5,29.94,29.94,0,0,1,6.72-10.3c11.8-11.8,31.84-12,50.14-2.27l-25.09,25.09A28,28,0,1,0,140,145.71L165,120.62C174.81,138.92,174.57,159,162.77,170.76ZM112,124a20,20,0,0,1,20,20h0a20,20,0,1,1-20-20Zm26.71,11.63a28.06,28.06,0,0,0-18.34-18.34l22-22a74.51,74.51,0,0,1,18.35,18.35ZM158,98a81.07,81.07,0,0,0-9.9-8.44L176,61.65,194.34,80l-27.87,27.87A81.07,81.07,0,0,0,158,98Zm42-23.63L181.66,56,212,25.66,230.34,44ZM90.84,197.16a4,4,0,0,1-5.66,5.66l-32-32a4,4,0,0,1,5.66-5.66Z"/></svg>`;
}
