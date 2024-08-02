export const iconPhFillHash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116.25,112h31.5l-8,32h-31.5ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-16,56a8,8,0,0,0-8-8H168.25l7.51-30.06a8,8,0,0,0-15.52-3.88L151.75,96h-31.5l7.51-30.06a8,8,0,0,0-15.52-3.88L103.75,96H64a8,8,0,0,0,0,16H99.75l-8,32H56a8,8,0,0,0,0,16H87.75l-7.51,30.06a8,8,0,0,0,5.82,9.7,8.13,8.13,0,0,0,2,.24,8,8,0,0,0,7.75-6.06L104.25,160h31.5l-7.51,30.06a8,8,0,0,0,5.82,9.7A8.13,8.13,0,0,0,136,200a8,8,0,0,0,7.75-6.06L152.25,160H192a8,8,0,0,0,0-16H156.25l8-32H200A8,8,0,0,0,208,104Z"/></svg>`;
}
