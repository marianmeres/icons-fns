export const iconPhBoldToolboxBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,64H180V56a28,28,0,0,0-28-28H104A28,28,0,0,0,76,56v8H32A20,20,0,0,0,12,84V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V84A20,20,0,0,0,224,64ZM100,56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM220,88v32H196v-4a12,12,0,0,0-24,0v4H84v-4a12,12,0,0,0-24,0v4H36V88ZM36,188V144H60v4a12,12,0,0,0,24,0v-4h88v4a12,12,0,0,0,24,0v-4h24v44Z"/></svg>`;
}
