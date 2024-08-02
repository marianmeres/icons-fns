export const iconPhBoldMarkdownLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,44H24A20,20,0,0,0,4,64V192a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V64A20,20,0,0,0,232,44Zm-4,144H28V68H228ZM48,148V108a12,12,0,0,1,20.49-8.49L88,119l19.51-19.52A12,12,0,0,1,128,108v40a12,12,0,0,1-24,0V137l-7.51,7.52a12,12,0,0,1-17,0L72,137v11a12,12,0,0,1-24,0Zm98.63-23.5a12,12,0,0,1,16.87-1.87l.5.4V108a12,12,0,0,1,24,0v15l.5-.4a12,12,0,0,1,15,18.74l-20,16a12,12,0,0,1-15,0l-20-16A12,12,0,0,1,146.63,124.5Z"/></svg>`;
}
