export const iconPhLightCloudSun = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,74a74.15,74.15,0,0,0-21.18,3.09,54.08,54.08,0,0,0-11.14-13.61l10.52-15a6,6,0,1,0-9.83-6.89l-10.52,15A53.9,53.9,0,0,0,96,50c-1.15,0-2.28,0-3.41.12L89.4,32.05a6,6,0,1,0-11.81,2.09L80.77,52.2A54,54,0,0,0,55.52,68.32L40.47,57.78a6,6,0,0,0-6.89,9.83l15,10.52A53.7,53.7,0,0,0,42,104c0,1.13,0,2.26.12,3.39l-18.07,3.18a6,6,0,0,0,1,11.91,6.38,6.38,0,0,0,1.05-.09L44.2,119.2a53.51,53.51,0,0,0,7.08,15A50,50,0,0,0,84,222h80a74,74,0,0,0,0-148ZM54,104a42,42,0,0,1,77.48-22.49A74.29,74.29,0,0,0,94.2,123,50.36,50.36,0,0,0,84,122a49.65,49.65,0,0,0-22.79,5.52A42,42,0,0,1,54,104ZM164,210H84a38,38,0,1,1,7.08-75.34,75.84,75.84,0,0,0-1.07,9,6,6,0,0,0,12,.7,61.54,61.54,0,0,1,2-12.24c0-.15.08-.29.11-.43A62.06,62.06,0,1,1,164,210Z"/></svg>`;
}
