export const iconPhBoldProjectorScreenChartBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M104,128v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm24-16a12,12,0,0,0-12,12v12a12,12,0,0,0,24,0V124A12,12,0,0,0,128,112Zm36-4a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V120A12,12,0,0,0,164,108Zm56-16.4V164h4a12,12,0,0,1,0,24H140v23.22a24,24,0,1,1-24,0V188H32a12,12,0,0,1,0-24h4V91.6A20,20,0,0,1,20,72V48A20,20,0,0,1,40,28H216a20,20,0,0,1,20,20V72A20,20,0,0,1,220,91.6ZM44,68H212V52H44Zm152,96V92H60v72Z"/></svg>`;
}
