export const iconPhThinBabyCarriage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,36h-8a12,12,0,0,0-12,12v60H51.77A36,36,0,0,0,16,76a4,4,0,0,0,0,8,28,28,0,0,1,28,28,76.08,76.08,0,0,0,76,76h40a76,76,0,0,0,0-152Zm67.87,72H155.4l53.71-43A67.76,67.76,0,0,1,227.87,108ZM152,44h8a67.72,67.72,0,0,1,43.2,15.52L148,103.68V48A4,4,0,0,1,152,44Zm8,136H120a68.08,68.08,0,0,1-67.88-64H227.88A68.08,68.08,0,0,1,160,180Zm-60,44a12,12,0,1,1-12-12A12,12,0,0,1,100,224Zm104,0a12,12,0,1,1-12-12A12,12,0,0,1,204,224Z"/></svg>`;
}
