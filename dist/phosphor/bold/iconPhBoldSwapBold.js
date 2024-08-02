export const iconPhBoldSwapBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,48V152a20,20,0,0,1-20,20H112.92a12,12,0,0,1-17.41,16.49l-20-20a12,12,0,0,1,0-17l20-20A12,12,0,0,1,112.92,148H204V52H100a12,12,0,0,1-24,0V48A20,20,0,0,1,96,28H208A20,20,0,0,1,228,48ZM168,192a12,12,0,0,0-12,12H52V108h91.08a12,12,0,0,0,17.41,16.49l20-20a12,12,0,0,0,0-17l-20-20A12,12,0,0,0,143.08,84H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H160a20,20,0,0,0,20-20v-4A12,12,0,0,0,168,192Z"/></svg>`;
}
