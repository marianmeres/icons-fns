export const iconPhBoldCarBattery = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,140a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4v-4a12,12,0,0,1,24,0v4h4A12,12,0,0,1,200,140ZM100,128H68a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM244,92v92a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V92A20,20,0,0,1,32,72H44V56A20,20,0,0,1,64,36H96a20,20,0,0,1,20,20V72h24V56a20,20,0,0,1,20-20h32a20,20,0,0,1,20,20V72h12A20,20,0,0,1,244,92ZM164,72h24V60H164ZM68,72H92V60H68ZM220,96H36v84H220Z"/></svg>`;
}
