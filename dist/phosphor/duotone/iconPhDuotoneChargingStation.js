export const iconPhDuotoneChargingStation = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z" opacity="0.2"/><path d="M134.62,123.51a8,8,0,0,1,.81,7.46l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128A8,8,0,0,1,134.62,123.51ZM248,86.63V168a24,24,0,0,1-48,0V128a8,8,0,0,0-8-8H176v88h16a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H48V56A24,24,0,0,1,72,32h80a24,24,0,0,1,24,24v48h16a24,24,0,0,1,24,24v40a8,8,0,0,0,16,0V86.63A8,8,0,0,0,229.66,81L210.34,61.66a8,8,0,0,1,11.32-11.32L241,69.66A23.85,23.85,0,0,1,248,86.63ZM160,208V56a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208Z"/></svg>`;
}
