export const iconPhLightGogglesLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M254,136a70.08,70.08,0,0,0-70-70H72A70.08,70.08,0,0,0,2,136a22,22,0,0,0,16.68,21.35c2.06,8.24,8.85,16.06,19.64,22.44S61.87,190,72,190a38.05,38.05,0,0,0,37.52-32h37A38.05,38.05,0,0,0,184,190c10.13,0,23-3.91,33.68-10.21s17.58-14.2,19.64-22.44A22,22,0,0,0,254,136ZM44.43,169.46C35.26,164,30,157.67,30,152c0-6.64,6.77-13.19,15.45-18.06l40.19,40.18A25.81,25.81,0,0,1,72,178C64.14,178,53.06,174.57,44.43,169.46Zm49.69-3.82L57.24,128.75A48.84,48.84,0,0,1,72,126a26,26,0,0,1,22.12,39.64ZM158,152a25.89,25.89,0,0,1,7.39-18.13L204.55,173c-7.07,3.07-14.63,5-20.55,5A26,26,0,0,1,158,152Zm57.46,15-39.65-39.64A25.84,25.84,0,0,1,184,126c7.86,0,18.94,3.43,27.57,8.54C220.74,140,226,146.33,226,152,226,157.32,221.65,162.58,215.46,167Zm21.31-22.18c-2.57-7.56-9.12-14.68-19.09-20.58C207,117.91,194.13,114,184,114a38.05,38.05,0,0,0-37.52,32h-37A38.05,38.05,0,0,0,72,114c-10.13,0-23,3.91-33.68,10.21-10,5.9-16.52,13-19.09,20.58A10,10,0,0,1,14,136,58.07,58.07,0,0,1,72,78H184a58.07,58.07,0,0,1,58,58A10,10,0,0,1,236.77,144.79Z"/></svg>`;
}
