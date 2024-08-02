export const iconPhBoldFileAudio = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M96.59,124.91a12,12,0,0,0-13.08,2.6L63,148H44a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H63l20.48,20.48A12,12,0,0,0,104,224V136A12,12,0,0,0,96.59,124.91ZM80,195l-3.51-3.52A12,12,0,0,0,68,188H56V172H68a12,12,0,0,0,8.49-3.51L80,165Zm80-15a44.55,44.55,0,0,1-21.95,38.36A12,12,0,1,1,126,197.64a20.51,20.51,0,0,0,0-35.28,12,12,0,1,1,12.1-20.72A44.55,44.55,0,0,1,160,180ZM216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v72a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H180a12,12,0,0,0,0,24h20a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160Z"/></svg>`;
}
