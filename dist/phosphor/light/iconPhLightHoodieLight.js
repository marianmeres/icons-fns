export const iconPhLightHoodieLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.65,121.64,181.38,40.23A14,14,0,0,0,169.73,34H86.27a14,14,0,0,0-11.65,6.23L20.35,121.64a14,14,0,0,0-1.86,11.45l21.44,78.59A14,14,0,0,0,53.43,222H80a14,14,0,0,0,14-14V190h68v18a14,14,0,0,0,14,14h26.57a14,14,0,0,0,13.5-10.32l21.44-78.59A14,14,0,0,0,235.65,121.64ZM80,178a2,2,0,0,1-2-2V65.49L106,82v54a6,6,0,0,0,12,0V89.07l7,4.1a6,6,0,0,0,6.1,0l6.95-4.1V128a6,6,0,0,0,12,0V82l28-16.51V176a2,2,0,0,1-2,2ZM86.27,46h83.46a2,2,0,0,1,1.66.89l4.1,6.15L128,81,80.51,53l4.1-6.15A2,2,0,0,1,86.27,46ZM82,208a2,2,0,0,1-2,2H53.43a2,2,0,0,1-1.92-1.47l-21.44-78.6a2,2,0,0,1,.27-1.63L66,74.8V176a14,14,0,0,0,14,14h2Zm143.93-78.07-21.44,78.6a2,2,0,0,1-1.92,1.47H176a2,2,0,0,1-2-2V190h2a14,14,0,0,0,14-14V74.8l35.66,53.5A2,2,0,0,1,225.93,129.93Z"/></svg>`;
}