export const iconPhLightFireTruck = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M253.57,117.77l-14-35a13.93,13.93,0,0,0-13-8.8H190V64a6,6,0,0,0-12,0V165.48A30.1,30.1,0,0,0,162.6,186H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V136a6,6,0,0,0-12,0v48a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V120A6.1,6.1,0,0,0,253.57,117.77ZM226.58,86a2,2,0,0,1,1.86,1.26L239.14,114H190V86ZM80,210a18,18,0,1,1,18-18A18,18,0,0,1,80,210Zm112,0a18,18,0,1,1,18-18A18,18,0,0,1,192,210Zm48-24H221.4A30.05,30.05,0,0,0,192,162c-.67,0-1.34,0-2,.07V126h52v58A2,2,0,0,1,240,186ZM24,98a6,6,0,0,0,0,12H152a6,6,0,0,0,0-12H134V70h18a6,6,0,0,0,0-12H24a6,6,0,0,0,0,12H42V98Zm98,0H94V70h28ZM54,70H82V98H54Z"/></svg>`;
}
