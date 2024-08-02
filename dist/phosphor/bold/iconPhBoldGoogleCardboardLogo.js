export const iconPhBoldGoogleCardboardLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H96a12,12,0,0,0,8.49-3.51L128,185l23.51,23.52A12,12,0,0,0,160,212h64a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H165l-22.83-22.83a20,20,0,0,0-28.28,0L91,188H36V68H220ZM82,160a34,34,0,1,0-34-34A34,34,0,0,0,82,160Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,82,116Zm92,44a34,34,0,1,0-34-34A34,34,0,0,0,174,160Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,174,116Z"/></svg>`;
}
