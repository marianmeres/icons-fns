export const iconPhDuotoneNuclearPlantDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M178.33,216H37.67C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64C146,144.55,164.84,189.65,178.33,216Z" opacity="0.2"/><path d="M240,208H219.45C208,187.65,186.26,143.12,184.16,95.28a16,16,0,0,0-16-15.28H79.85a15.91,15.91,0,0,0-16,15.34c-1.64,44-17.35,84.83-31.12,112.66H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM50.5,208c13.56-28.93,27.74-68.94,29.35-112l55.35-.06a7.46,7.46,0,0,0,1,.06c1.62,43.09,15.8,83.09,29.35,112Zm132.76,0c-13.7-27.69-29.32-68.29-31.09-112h16c2,45.66,20.5,88.1,33.06,112ZM152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM96,56A56.06,56.06,0,0,1,152,0h8a8,8,0,0,1,0,16h-8a40,40,0,0,0-40,40,8,8,0,0,1-16,0Z"/></svg>`;
}
