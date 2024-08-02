export const iconPhThinCarBatteryThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,136a4,4,0,0,1-4,4H172v12a4,4,0,0,1-8,0V140H152a4,4,0,0,1,0-8h12V120a4,4,0,0,1,8,0v12h12A4,4,0,0,1,188,136Zm-84-4H72a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM236,88v96a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V88A12,12,0,0,1,32,76H52V56A12,12,0,0,1,64,44H96a12,12,0,0,1,12,12V76h40V56a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12V76h20A12,12,0,0,1,236,88ZM156,76h40V56a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4ZM60,76h40V56a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4ZM228,88a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z"/></svg>`;
}
