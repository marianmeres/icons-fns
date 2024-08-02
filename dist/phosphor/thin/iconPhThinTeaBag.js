export const iconPhThinTeaBag = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,164a20,20,0,0,1-20-20V64a52,52,0,0,0-104,0V76H76.53a12.06,12.06,0,0,0-10.29,5.83L45.71,116A12,12,0,0,0,44,122.22V216a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12V122.22a12,12,0,0,0-1.71-6.18L141.76,81.83A12.06,12.06,0,0,0,131.47,76H108V64a44,44,0,0,1,88,0v80a28,28,0,0,0,28,28,4,4,0,0,0,0-8ZM131.47,84a4,4,0,0,1,3.43,1.94l20.53,34.22a4,4,0,0,1,.57,2.06V216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V122.22a4,4,0,0,1,.57-2.06L73.1,85.94A4,4,0,0,1,76.53,84H100v52a4,4,0,0,0,8,0V84Z"/></svg>`;
}
