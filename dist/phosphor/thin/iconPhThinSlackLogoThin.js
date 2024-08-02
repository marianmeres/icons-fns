export const iconPhThinSlackLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214.4,128A28,28,0,1,0,180,84.43V56a28,28,0,0,0-52-14.4A28,28,0,1,0,84.43,76H56a28,28,0,0,0-14.4,52A28,28,0,1,0,76,171.57V200a28,28,0,0,0,52,14.41A28,28,0,1,0,171.57,180H200a28,28,0,0,0,14.4-52ZM76,152a20,20,0,1,1-20-20H76Zm48,48a20,20,0,0,1-40,0V152a20,20,0,0,1,20-20h20Zm0-76H56a20,20,0,0,1,0-40h48a20,20,0,0,1,20,20Zm0-48H104a20,20,0,1,1,20-20Zm56,28a20,20,0,1,1,20,20H180ZM132,56a20,20,0,0,1,40,0v48a20,20,0,0,1-20,20H132Zm40,144a20,20,0,0,1-40,0V180h20A20,20,0,0,1,172,200Zm28-28H152a20,20,0,0,1-20-20V132h68a20,20,0,0,1,0,40Z"/></svg>`;
}
