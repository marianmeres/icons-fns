const fs = require('node:fs');
const path = require('node:path');
const mkdirp = require('mkdirp');
const { yellow, red, cyan, gray } = require('kleur/colors');
const { totalist } = require('totalist/sync');
const args = require('minimist')(process.argv.slice(2));

const COMMAND = args._[0];

// return early with help?
const isHelp = !!args.h || !!args.help || !COMMAND;
if (isHelp) return help();

//
const isSilent = args.silent;
const log = (...args) => {
	if (isSilent) return;
	console.log.apply(null, args);
};

// run now
main().catch(onError);

//////////////////////////////////////////////////////////////////////////////////////////
async function main() {
	switch (COMMAND.toLowerCase()) {
		case 'help':
			return help();
		case 'build':
			return await build();
		default:
			throw new Error(`Command "${COMMAND}" not found`);
	}
}

async function build() {
	const DISTDIR = './dist/';
	const config = [
		{
			indir: './src/bootstrap-icons/1.10.3',
			outdir: './bootstrap',
			fnPrefix: 'iconBs',
		},
		{
			indir: './src/heroicons/2.0.16/optimized/20/solid',
			outdir: './heroicons',
			fnPrefix: 'iconHeroMini',
		},
		{
			indir: './src/heroicons/2.0.16/optimized/24/outline',
			outdir: './heroicons',
			fnPrefix: 'iconHeroOutline',
		},
		{
			indir: './src/heroicons/2.0.16/optimized/24/solid',
			outdir: './heroicons',
			fnPrefix: 'iconHeroSolid',
		},
		{
			indir: './src/bytesize-icons/1.4/icons',
			outdir: './bytesize',
			fnPrefix: 'iconBytesize',
		},
	];

	let indexdts = '';

	config.forEach(({ indir, outdir, fnPrefix }) => {
		totalist(indir, (name, abs, stats) => {
			if (/\.svg/i.test(name)) {
				mkdirp.sync(path.join(DISTDIR, outdir));

				let size = 16;
				let svg = fs.readFileSync(abs, 'utf8').replace(/[\n\r]/g, ' ');

				// original size detect ugly special case
				const m = /viewBox=['"](?<viewBox>[^"']+)['"]/.exec(svg);
				if (m?.groups?.viewBox && /heroicons|bytesize/.test(indir)) {
					const [_1, _2, w, h] = m.groups.viewBox.split(' ');
					if (w === h) {
						//sanity
						size = w;
					}
				}

				svg = svg
					.replace(' xmlns="http://www.w3.org/2000/svg"', '')
					.replace(/ class="[^"]+"/, '')
					.replace(/ width="[^"]+"/, '')
					.replace(/ height="[^"]+"/, '')
					.replace(/ id="[^"]+"/, '')
					.replace(
						'<svg ',
						'<svg style="${style || \'\'}" class="${cls || \'\'}" width="${size || ' + size + '}" height="${size || ' + size + '}" '
					)
					.replace(/>\s+</g, '><')
					.trim();

				const outname = fnPrefix + safeId(name.replace(/\.svg$/, ''));
				let content = `export const ${outname} = (cls = null, size = null, style = null) => \`${svg}\`;\n`;
				log(gray(`    ✔ ${outname}`));
				fs.writeFileSync(path.join(DISTDIR, outdir, outname + '.js'), content);

				// types
				let dts = `export declare const ${outname}: (cls?: string, size?: number, style?: string) => string;\n`;
				fs.writeFileSync(path.join(DISTDIR, outdir, outname + '.d.ts'), dts);
				indexdts += `export { ${outname} } from '${outdir}/${outname}.js';\n`;
			}
		});

		log(gray(`\nDone -> ${path.join(DISTDIR, outdir)}\n`));
	});

	fs.writeFileSync(path.join(DISTDIR, 'index.js'), indexdts);
	fs.writeFileSync(path.join(DISTDIR, 'index.d.ts'), indexdts);

	log(gray(`Done all\n`));
}

function onError(e) {
	console.log('\n' + red(e.toString().trim()) + '\n');
	process.exit(1);
}

function help() {
	const self = path.basename(__filename);
	console.log(`
    This script will create wraped icon svgs as functions. Each fn as separate file.

    ${yellow('Usage:')}
        node ${self} build

`);
	process.exit();
}

function ucfirst(str) {
	return `${str}`.charAt(0).toUpperCase() + `${str}`.slice(1);
}

function safeId(name) {
	return name.split(/[\/-]/).filter(Boolean).map(ucfirst).join('');
}
