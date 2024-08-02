export const iconPhRegularMaskSad = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M158.66,188.43a8,8,0,0,1-11.09,2.23C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43ZM224,48v55.77c0,35.84-9.65,69.65-27.18,95.18-18.16,26.46-42.6,41-68.82,41s-50.66-14.57-68.82-41C41.65,173.44,32,139.63,32,103.79V48A16,16,0,0,1,53.79,33.09C67.84,38.55,96.18,47.71,128,47.71s60.15-9.16,74.21-14.62A16,16,0,0,1,224,48Zm-16,0v0c-15.1,5.89-45.57,15.73-80,15.73S63.1,53.87,48,48v55.79c0,32.64,8.66,63.23,24.37,86.13C87.46,211.9,107.21,224,128,224s40.54-12.1,55.63-34.08C199.34,167,208,136.43,208,103.79Zm-18.66,66a8,8,0,0,0-11.3.62c-2.68,3-8.85,5.34-14,5.34s-11.36-2.35-14-5.34A8,8,0,0,0,138,125.33c5.71,6.38,16.14,10.67,26,10.67s20.25-4.29,26-10.67A8,8,0,0,0,189.34,114ZM118,125.33A8,8,0,0,0,106,114.66c-2.68,3-8.85,5.34-14,5.34s-11.36-2.35-14-5.34A8,8,0,0,0,66,125.33C71.75,131.71,82.18,136,92,136S112.25,131.71,118,125.33Z"/></svg>`;
}
