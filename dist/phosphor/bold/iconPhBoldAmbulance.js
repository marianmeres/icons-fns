export const iconPhBoldAmbulance = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,120a12,12,0,0,1,12-12h8v-8a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0v-8H92A12,12,0,0,1,80,120Zm176,0v64a20,20,0,0,1-20,20H225.94a36,36,0,0,1-67.88,0H113.94a36,36,0,0,1-67.88,0H32a20,20,0,0,1-20-20V72A20,20,0,0,1,32,52H184a12,12,0,0,1,12,12v4h26.58a19.9,19.9,0,0,1,18.57,12.57l14,35A12,12,0,0,1,256,120ZM196,92v16h30.28l-6.4-16ZM36,180H46.06a36,36,0,0,1,67.88,0h44.12A36.32,36.32,0,0,1,172,162.08V76H36Zm56,12a12,12,0,1,0-12,12A12,12,0,0,0,92,192Zm112,0a12,12,0,1,0-12,12A12,12,0,0,0,204,192Zm28-12V132H196v24.23A36.09,36.09,0,0,1,225.94,180Z"/></svg>`;
}
