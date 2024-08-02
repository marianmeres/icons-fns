export const iconPhFillCameraSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,80V192a24.52,24.52,0,0,1-.45,4.65,4,4,0,0,1-6.9,2L86,46.08a4,4,0,0,1-.37-4.91l3.74-5.61A8,8,0,0,1,96,32h64a8,8,0,0,1,6.66,3.56L180.28,56H208A24,24,0,0,1,232,80ZM213.92,210.62a8,8,0,1,1-11.84,10.76L197.19,216H48a24,24,0,0,1-24-24V80A24,24,0,0,1,48,56h3.73L42.08,45.38A8,8,0,1,1,53.92,34.62ZM148,161.92l-47.88-52.68A36,36,0,0,0,148,161.92Z"/></svg>`;
}
