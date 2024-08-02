export const iconPhThinSpinnerBallThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.92,96.44c-33.69,24.71-58.55,15.45-83.94,3,23.54-15.86,45.85-33.95,43.34-75.81A92,92,0,0,1,219.92,124.44ZM170.86,46.61C175.4,88.13,155,105,131.55,120.83c-2-28.32-6.47-56.69-44-75.45a91.87,91.87,0,0,1,83.3,1.23ZM79,50.18c38.22,16.83,42.63,43,44.58,71.16-25.5-12.46-52.33-22.75-87.34.38A92.07,92.07,0,0,1,79,50.18Zm-42.9,81.38c33.69-24.71,58.55-15.45,83.94-3.05-23.54,15.86-45.85,34-43.34,75.81A92,92,0,0,1,36.08,131.56Zm49.06,77.83C80.6,167.87,101,151,124.45,135.17c2,28.32,6.47,56.69,44,75.45a91.87,91.87,0,0,1-83.3-1.23ZM177,205.82c-38.22-16.83-42.63-43-44.58-71.16,14.43,7.05,29.29,13.41,45.81,13.41,12.67,0,26.33-3.74,41.53-13.78A92.06,92.06,0,0,1,177,205.82Z"/></svg>`;
}
