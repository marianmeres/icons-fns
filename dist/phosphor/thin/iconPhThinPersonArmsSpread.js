export const iconPhThinPersonArmsSpread = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,68a28,28,0,1,0-28-28A28,28,0,0,0,128,68Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,20Zm99.6,68.57A15.7,15.7,0,0,0,212,76H44a16,16,0,0,0-6.7,30.52l.06,0,53.89,23.73-21.92,83.3a16,16,0,0,0,7.9,20.91A15.82,15.82,0,0,0,84,236a16,16,0,0,0,14.42-9.07L128,176l29.58,51a16,16,0,0,0,29.07-13.35l-21.92-83.3,54-23.76A15.69,15.69,0,0,0,227.6,88.57ZM215.39,99.23l-57,25.11a4,4,0,0,0-2.26,4.68L179,215.94a4.12,4.12,0,0,0,.24.67,8,8,0,0,1-3.87,10.63,8,8,0,0,1-10.63-3.87,3,3,0,0,0-.16-.31L131.46,166a4,4,0,0,0-6.92,0L91.42,223.06a3,3,0,0,0-.16.31,8,8,0,1,1-14.5-6.76,4.12,4.12,0,0,0,.24-.67L99.87,129a4,4,0,0,0-2.26-4.68l-57-25.09A8,8,0,0,1,44,84H212a8,8,0,0,1,3.41,15.23Z"/></svg>`;
}
