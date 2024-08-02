export const iconPhThinWavesThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.08,179.84a4,4,0,0,1-.53,5.63C203.56,197.9,188.9,204,173.93,204a54.84,54.84,0,0,1-6.12-.34c-15-1.65-28.6-9-41.72-16.14-25.52-13.86-49.62-27-83.54,1.18a4,4,0,0,1-5.1-6.16c17-14.12,33.62-20.08,50.74-18.19,15,1.64,28.6,9,41.72,16.14,25.52,13.86,49.62,26.94,83.54-1.18A4,4,0,0,1,219.08,179.84Zm-5.63-56.53c-33.92,28.12-58,15-83.54,1.17-13.12-7.12-26.69-14.49-41.72-16.14-17.12-1.88-33.72,4.07-50.74,18.19a4,4,0,1,0,5.1,6.16c33.92-28.12,58-15,83.54-1.17,13.12,7.12,26.69,14.49,41.72,16.14a57.34,57.34,0,0,0,6.12.34c15,0,29.63-6.1,44.62-18.53a4,4,0,1,0-5.1-6.16ZM42.55,76.69c33.92-28.13,58-15,83.54-1.18,13.12,7.13,26.69,14.5,41.72,16.14a54.84,54.84,0,0,0,6.12.34c15,0,29.63-6.1,44.62-18.53a4,4,0,1,0-5.1-6.16c-33.92,28.13-58,15-83.54,1.18C116.79,61.35,103.22,54,88.19,52.34c-17.12-1.88-33.72,4.07-50.74,18.19a4,4,0,1,0,5.1,6.16Z"/></svg>`;
}
