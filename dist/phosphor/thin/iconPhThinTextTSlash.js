export const iconPhThinTextTSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.69,219a4,4,0,0,1-5.65-.27l-73-80.34V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V129.55L60.78,60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,2-3.45l-9-9.86A4,4,0,0,1,51,37.31l160,176A4,4,0,0,1,210.69,219ZM105.79,60H124V80.43a4,4,0,0,0,8,0V60h64V88a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H105.79a4,4,0,0,0,0,8Z"/></svg>`;
}
