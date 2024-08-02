export const iconPhBoldCowboyHatBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,116a12,12,0,0,0-10.18,5.64q-2.48,4-5,7.57L182.25,52.33A20,20,0,0,0,150.1,40.4l-.18.15L128,58.8,106.08,40.55l-.18-.15A20,20,0,0,0,73.75,52.3L59.14,129.22q-2.49-3.61-5-7.57A12,12,0,0,0,44,116a44,44,0,1,0,0,88H212a44,44,0,1,0,0-88ZM96.07,63.44l19.25,16,.19.15a19.89,19.89,0,0,0,25,0l.19-.15,19.25-16L171.44,124H84.56ZM44,180a20,20,0,0,1-5.94-39.1c11.7,17.38,23.7,30,35,39.1Zm35-26.75L80,148h96l1,5.25c-25.33,25-46.71,26.65-49,26.75C125.71,179.9,104.33,178.29,79,153.25ZM212,180H183c11.28-9.12,23.28-21.72,35-39.1A20,20,0,0,1,212,180Z"/></svg>`;
}
