export const iconPhLightMotorcycle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,122a38.48,38.48,0,0,0-7.87.82L200.9,104a57.83,57.83,0,0,1,15.1-2,6,6,0,0,0,0-12H195.51L181.6,53.85A6,6,0,0,0,176,50H144a6,6,0,0,0,0,12h27.88l10.77,28H152c-18,0-32.58,4.15-42.1,12A18.05,18.05,0,0,1,91,104.35C77.9,98.38,30.4,79.19,26,77.46l-5.72-2.24A14.66,14.66,0,0,0,16,74a6,6,0,0,0-2.15,11.6h0c.46.18,47.13,18.26,72.23,29.67a30.12,30.12,0,0,0,31.47-4c7.34-6,19.25-9.25,34.46-9.25h24.89a70,70,0,0,0-28.32,39.13A17.85,17.85,0,0,1,131.32,154H77.52a38,38,0,1,0,0,12h53.8a29.9,29.9,0,0,0,28.81-21.64,58,58,0,0,1,29.58-36l7.23,18.8A38,38,0,1,0,216,122ZM40,166H65.29a26,26,0,1,1,0-12H40a6,6,0,0,0,0,12Zm176,20a26,26,0,0,1-14.68-47.45l9.08,23.6a6,6,0,0,0,11.2-4.3l-9.08-23.61A26.64,26.64,0,0,1,216,134a26,26,0,0,1,0,52Z"/></svg>`;
}