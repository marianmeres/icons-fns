export const iconPhLightHourglassSimpleMediumLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M209.8,198l-73.12-70L209.8,58l.09-.09A14,14,0,0,0,200,34H56a14,14,0,0,0-9.9,23.9l.09.09,73.12,70L46.2,198l-.09.09A14,14,0,0,0,56,222H200a14,14,0,0,0,9.9-23.9ZM92.81,86h70.38L128,119.69ZM54.16,47.23A1.91,1.91,0,0,1,56,46H200a2,2,0,0,1,1.45,3.38L175.72,74H80.28L54.56,49.38A1.91,1.91,0,0,1,54.16,47.23ZM201.84,208.77A1.91,1.91,0,0,1,200,210H56a2,2,0,0,1-1.45-3.38L122,142.05V168a6,6,0,0,0,12,0V142.05l67.44,64.57A1.91,1.91,0,0,1,201.84,208.77Z"/></svg>`;
}
