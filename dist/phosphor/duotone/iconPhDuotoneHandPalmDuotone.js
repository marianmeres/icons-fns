export const iconPhDuotoneHandPalmDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,116v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0V44a20,20,0,0,1,40,0V60a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0Z" opacity="0.2"/><path d="M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z"/></svg>`;
}
