export const iconPhDuotoneEngineDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,120v48a8,8,0,0,1-8,8H224l-37.66,37.66a8,8,0,0,1-5.65,2.34H103.31a8,8,0,0,1-5.65-2.34L58.34,174.34A8,8,0,0,1,56,168.69V80a8,8,0,0,1,8-8H180.69a8,8,0,0,1,5.65,2.34L224,112h16A8,8,0,0,1,248,120Z" opacity="0.2"/><path d="M240,104H227.31L192,68.69A15.86,15.86,0,0,0,180.69,64H140V40h24a8,8,0,0,0,0-16H100a8,8,0,0,0,0,16h24V64H64A16,16,0,0,0,48,80v52H24V108a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0V148H48v20.69A15.86,15.86,0,0,0,52.69,180L92,219.31A15.86,15.86,0,0,0,103.31,224h77.38A15.86,15.86,0,0,0,192,219.31L227.31,184H240a16,16,0,0,0,16-16V120A16,16,0,0,0,240,104Zm0,64H224a8,8,0,0,0-5.66,2.34L180.69,208H103.31L64,168.69V80H180.69l37.65,37.66A8,8,0,0,0,224,120h16Z"/></svg>`;
}
