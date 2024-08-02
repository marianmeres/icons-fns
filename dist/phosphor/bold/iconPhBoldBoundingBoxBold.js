export const iconPhBoldBoundingBoxBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,100a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H100V48A20,20,0,0,0,80,28H48A20,20,0,0,0,28,48V80a20,20,0,0,0,20,20h4v56H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20v-4h56v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20h-4V100ZM180,52h24V76H180ZM52,52H76V76H52ZM76,204H52V180H76Zm128,0H180V180h24Zm-24-48h-4a20,20,0,0,0-20,20v4H100v-4a20,20,0,0,0-20-20H76V100h4a20,20,0,0,0,20-20V76h56v4a20,20,0,0,0,20,20h4Z"/></svg>`;
}
