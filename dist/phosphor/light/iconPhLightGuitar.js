export const iconPhLightGuitar = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.24,47.76l-40-40a6,6,0,0,0-8.48,8.48L203.52,20,140.9,82.62C118.54,70.42,93.29,71,78.17,86.16a39.94,39.94,0,0,0-9,13.69A10.24,10.24,0,0,1,59.87,106c-14.06.48-26.27,5.5-35.3,14.53C13,132.18,8,149,10.72,167.79,13.32,186,22.78,204,37.37,218.63S70,242.68,88.21,245.28a70,70,0,0,0,9.88.72c14.79,0,27.81-5,37.35-14.57,9-9,14.05-21.23,14.53-35.3a10.24,10.24,0,0,1,6.18-9.35,39.94,39.94,0,0,0,13.69-8.95c15.12-15.12,15.74-40.37,3.54-62.73L236,52.48l3.76,3.76a6,6,0,0,0,8.48-8.48ZM161.36,169.35a28.06,28.06,0,0,1-9.63,6.27A22.22,22.22,0,0,0,138,195.72c-.37,11-4.18,20.39-11,27.22-8.89,8.89-22,12.61-37,10.46-15.65-2.23-31.29-10.49-44.06-23.25s-21-28.41-23.25-44.06c-2.15-15,1.57-28.16,10.46-37.05,6.83-6.84,16.25-10.65,27.22-11h0a22.21,22.21,0,0,0,20.1-13.76,28.12,28.12,0,0,1,6.27-9.62C92.52,88.77,100.57,86,109.44,86A52.74,52.74,0,0,1,132,91.49L109.4,114.12a30,30,0,1,0,32.48,32.48L164.52,124C172.63,140.82,172,158.68,161.36,169.35ZM151,105a73,73,0,0,1,7.17,8.34L139.5,132A30.18,30.18,0,0,0,124,116.5l18.62-18.62A72.16,72.16,0,0,1,151,105ZM112,126a18,18,0,0,1,18,18h0a18,18,0,1,1-18-18Zm47.44-29.44a83.19,83.19,0,0,0-8.28-7.23L176,64.48,191.52,80l-24.84,24.83A84.5,84.5,0,0,0,159.45,96.55Zm40.55-25L184.49,56,212,28.48,227.52,44ZM92.25,195.75a6,6,0,1,1-8.48,8.48l-32-32a6,6,0,0,1,8.48-8.48Z"/></svg>`;
}