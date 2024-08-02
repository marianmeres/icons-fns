export const iconPhLightTabsLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M253.75,166.28h0v0l0,0L231.46,92a13.91,13.91,0,0,0-13.41-10H208a6,6,0,0,0,0,12h10.05A2,2,0,0,1,220,95.42l20,66.58H204.46l-21-70a13.91,13.91,0,0,0-13.41-10H160a6,6,0,0,0,0,12h10.05A2,2,0,0,1,172,95.42l20,66.58H156.46l-21-70a13.91,13.91,0,0,0-13.41-10H38A13.91,13.91,0,0,0,24.54,92L2.28,166.2l0,.05v0l0,.15a2.79,2.79,0,0,0-.1.39.11.11,0,0,0,0,.05A6,6,0,0,0,8,174H248a6,6,0,0,0,5.75-7.72ZM36,95.42A2,2,0,0,1,38,94h84.1A2,2,0,0,1,124,95.43l20,66.57H16.06Z"/></svg>`;
}
