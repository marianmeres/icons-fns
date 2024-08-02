export const iconPhFillNotSupersetOfFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164.09,98.9A24,24,0,0,1,144,136H131.63ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.27,58a8,8,0,0,0-11.29.75L162.42,76.51A39.82,39.82,0,0,0,144,72H80a8,8,0,0,0,0,16h64a23.87,23.87,0,0,1,7.36,1.16l-41,46.84H80a8,8,0,0,0,0,16H96.37L66,186.73a8,8,0,0,0,12,10.54L89.63,184H176a8,8,0,0,0,0-16H103.63l14-16H144a40,40,0,0,0,30.87-65.41L190,69.27A8,8,0,0,0,189.27,58Z"/></svg>`;
}
