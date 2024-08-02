export const iconPhLightEngineLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,106H226.49L190.58,70.1a13.9,13.9,0,0,0-9.89-4.1H138V38h26a6,6,0,0,0,0-12H100a6,6,0,0,0,0,12h26V66H64A14,14,0,0,0,50,80v54H22V108a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V146H50v22.69a13.9,13.9,0,0,0,4.1,9.89L93.42,217.9a13.9,13.9,0,0,0,9.89,4.1h77.38a13.9,13.9,0,0,0,9.89-4.1L226.49,182H240a14,14,0,0,0,14-14V120A14,14,0,0,0,240,106Zm2,62a2,2,0,0,1-2,2H224a6,6,0,0,0-4.24,1.76L182.1,209.42a2,2,0,0,1-1.41.58H103.31a2,2,0,0,1-1.41-.58L62.58,170.1a2,2,0,0,1-.58-1.41V80a2,2,0,0,1,2-2H180.69a2,2,0,0,1,1.41.58l37.66,37.66A6,6,0,0,0,224,118h16a2,2,0,0,1,2,2Z"/></svg>`;
}
