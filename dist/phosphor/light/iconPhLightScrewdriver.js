export const iconPhLightScrewdriver = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.24,51.74a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48-8.49l56-56A6,6,0,0,1,204.24,51.74ZM246,58.41a48.12,48.12,0,0,1-14.18,34.24l-53.24,53.24a13.9,13.9,0,0,1-9.89,4.1H152a2,2,0,0,0-2,2v16.83a14.07,14.07,0,0,1-2.84,8.45,6.48,6.48,0,0,1-.54.62l-8,8a14,14,0,0,1-19.8,0L98.7,165.77,20.24,244.24a6,6,0,0,1-8.48-8.48l78.46-78.47L70.1,137.17h0a14,14,0,0,1,0-19.8l8-8a4.53,4.53,0,0,1,.62-.54A14,14,0,0,1,87.17,106H104a2,2,0,0,0,2-2V87.3a13.92,13.92,0,0,1,4.1-9.9l53.23-53.24A48.43,48.43,0,0,1,246,58.41Zm-12,0a36.43,36.43,0,0,0-62.18-25.76L118.58,85.88A2,2,0,0,0,118,87.3V104a14,14,0,0,1-14,14H87.17a2.1,2.1,0,0,0-1,.25l-7.61,7.61a2,2,0,0,0,0,2.83h0l48.73,48.73a2,2,0,0,0,2.82,0l7.62-7.61a2.1,2.1,0,0,0,.25-1V152a14,14,0,0,1,14-14h16.69a2,2,0,0,0,1.41-.59l53.23-53.23A36.19,36.19,0,0,0,234,58.41Z"/></svg>`;
}
