export const iconPhBoldHandEye = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,184a16,16,0,1,1-16-16A16,16,0,0,1,144,184Zm76-72v40a92,92,0,0,1-184,0V76A32,32,0,0,1,76,45V44a32,32,0,0,1,60.79-14A32,32,0,0,1,180,60V81a32,32,0,0,1,40,31Zm-24,0a8,8,0,0,0-16,0,12,12,0,0,1-24,0V60a8,8,0,0,0-16,0v44a12,12,0,0,1-24,0V44a8,8,0,0,0-16,0v68a12,12,0,0,1-24,0V76a8,8,0,0,0-16,0v76a68,68,0,0,0,136,0Zm-68,16a55.8,55.8,0,0,0-49.89,30.54,12,12,0,0,0,21.37,10.92,32,32,0,0,1,57,0A12,12,0,0,0,167.21,176a11.83,11.83,0,0,0,5.45-1.32,12,12,0,0,0,5.23-16.14A55.8,55.8,0,0,0,128,128Z"/></svg>`;
}
