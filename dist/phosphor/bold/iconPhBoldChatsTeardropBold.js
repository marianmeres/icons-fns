export const iconPhBoldChatsTeardropBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172.29,68.9A84,84,0,0,0,12,104v64a20,20,0,0,0,20,20H84.1A84.18,84.18,0,0,0,160,236h64a20,20,0,0,0,20-20V152A84,84,0,0,0,172.29,68.9ZM36,104a60,60,0,1,1,60,60H36ZM220,212H160a60.14,60.14,0,0,1-49-25.37,83.93,83.93,0,0,0,68.55-91.37A60,60,0,0,1,220,152Z"/></svg>`;
}
