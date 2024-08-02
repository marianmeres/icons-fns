export const iconPhThinPersonSimpleBike = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,76a24,24,0,1,0-24-24A24,24,0,0,0,164,76Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,164,36Zm36,104a36,36,0,1,0,36,36A36,36,0,0,0,200,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,200,204ZM56,140a36,36,0,1,0,36,36A36,36,0,0,0,56,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,56,204Zm136-88H152a4,4,0,0,1-2.83-1.17L120,85.66,93.66,112l37.17,37.17A4,4,0,0,1,132,152v48a4,4,0,0,1-8,0V153.66L85.17,114.83a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,0L153.66,108H192a4,4,0,0,1,0,8Z"/></svg>`;
}
