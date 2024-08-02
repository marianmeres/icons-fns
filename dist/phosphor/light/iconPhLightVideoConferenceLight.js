export const iconPhLightVideoConferenceLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,14v66H166V54h50A2,2,0,0,1,218,56ZM38,200V56a2,2,0,0,1,2-2H154V202H40A2,2,0,0,1,38,200Zm178,2H166V134h52v66A2,2,0,0,1,216,202ZM182,88a10,10,0,1,1,10,10A10,10,0,0,1,182,88Zm20,80a10,10,0,1,1-10-10A10,10,0,0,1,202,168Zm-68.19-1.49A38,38,0,0,0,115.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,58.19,166.5a6,6,0,0,0,11.62,3C72.67,158.38,83.93,150,96,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM78,120a18,18,0,1,1,18,18A18,18,0,0,1,78,120Z"/></svg>`;
}
