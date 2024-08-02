export const iconPhThinEngineThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,108H225.66L189.17,71.51A11.93,11.93,0,0,0,180.69,68H136V36h28a4,4,0,0,0,0-8H100a4,4,0,0,0,0,8h28V68H64A12,12,0,0,0,52,80v56H20V108a4,4,0,0,0-8,0v64a4,4,0,0,0,8,0V144H52v24.69a11.93,11.93,0,0,0,3.51,8.48l39.32,39.32a11.93,11.93,0,0,0,8.48,3.51h77.38a11.93,11.93,0,0,0,8.48-3.51L225.66,180H240a12,12,0,0,0,12-12V120A12,12,0,0,0,240,108Zm4,60a4,4,0,0,1-4,4H224a4,4,0,0,0-2.83,1.17l-37.66,37.66a4,4,0,0,1-2.82,1.17H103.31a4,4,0,0,1-2.82-1.17L61.17,171.51A4,4,0,0,1,60,168.69V80a4,4,0,0,1,4-4H180.69a4,4,0,0,1,2.82,1.17l37.66,37.66A4,4,0,0,0,224,116h16a4,4,0,0,1,4,4Z"/></svg>`;
}
