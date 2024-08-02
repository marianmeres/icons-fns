export const iconPhDuotoneMapPinSimpleArea = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,64a32,32,0,1,1-32-32A32,32,0,0,1,160,64Z" opacity="0.2"/><path d="M120,103.2V176a8,8,0,0,0,16,0V103.2a40,40,0,1,0-16,0ZM128,40a24,24,0,1,1-24,24A24,24,0,0,1,128,40ZM240,176c0,31.18-57.71,48-112,48S16,207.18,16,176c0-7.74,3.81-19.13,22-29.41,12.26-6.94,29.12-12.27,48.77-15.42A8,8,0,1,1,89.27,147c-17.54,2.82-33,7.63-43.42,13.55C37.05,165.5,32,171.14,32,176c0,13.36,36.52,32,96,32s96-18.64,96-32c0-4.86-5.05-10.5-13.85-15.49-10.46-5.92-25.88-10.73-43.42-13.55a8,8,0,1,1,2.54-15.79c19.65,3.15,36.51,8.48,48.77,15.42C236.19,156.87,240,168.26,240,176Z"/></svg>`;
}
