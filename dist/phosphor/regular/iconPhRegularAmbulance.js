export const iconPhRegularAmbulance = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,120a8,8,0,0,1,8-8h16V96a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H120v16a8,8,0,0,1-16,0V128H88A8,8,0,0,1,80,120Zm176,0v64a16,16,0,0,1-16,16H223a32,32,0,0,1-62,0H111a32,32,0,0,1-62,0H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H184a8,8,0,0,1,8,8v8h34.58a15.93,15.93,0,0,1,14.86,10.06l14,35A7.92,7.92,0,0,1,256,120ZM192,88v24h44.18l-9.6-24ZM32,184H49a32,32,0,0,1,62,0h50a32.11,32.11,0,0,1,15-19.69V72H32Zm64,8a16,16,0,1,0-16,16A16,16,0,0,0,96,192Zm112,0a16,16,0,1,0-16,16A16,16,0,0,0,208,192Zm32-8V128H192v32a32.06,32.06,0,0,1,31,24Z"/></svg>`;
}
