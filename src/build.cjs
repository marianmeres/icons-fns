const fs = require('node:fs');
const path = require('node:path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
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
	const DIST_DIR = './dist/';
	const config = [
		{
			indir: './node_modules/bootstrap-icons/icons',
			outdir: './bootstrap',
			fnPrefix: 'iconBs',
			// size: 32,
		},
		{
			indir: './node_modules/heroicons/16/solid',
			outdir: './heroicons/micro',
			fnPrefix: 'iconHeroMicro',
		},
		{
			indir: './node_modules/heroicons/20/solid',
			outdir: './heroicons/mini',
			fnPrefix: 'iconHeroMini',
		},
		{
			indir: './node_modules/heroicons/24/outline',
			outdir: './heroicons/outline',
			fnPrefix: 'iconHeroOutline',
		},
		{
			indir: './node_modules/heroicons/24/solid',
			outdir: './heroicons/solid',
			fnPrefix: 'iconHeroSolid',
		},
		{
			indir: './node_modules/bytesize-icons/dist/icons',
			outdir: './bytesize',
			fnPrefix: 'iconBytesize',
			allowStrokeWidth: true,
		},
		{
			indir: './node_modules/feather-icons/dist/icons',
			outdir: './feather',
			fnPrefix: 'iconFeather',
			allowStrokeWidth: true,
		},
		{
			indir: './node_modules/boxicons/svg/regular',
			outdir: './boxicons/regular',
			fnPrefix: 'iconBxRegular',
			transformName: (v) => v.replace(/^bx-/, ''),
		},
		{
			indir: './node_modules/boxicons/svg/solid',
			outdir: './boxicons/solid',
			fnPrefix: 'iconBxSolid',
			transformName: (v) => v.replace(/^bxs-/, ''),
		},
		{
			indir: './src/font-awesome/6.5.2/regular',
			outdir: './font-awesome/regular',
			fnPrefix: 'iconFaRegular',
			size: 24,
		},
		{
			indir: './src/font-awesome/6.5.2/solid',
			outdir: './font-awesome/solid',
			fnPrefix: 'iconFaSolid',
			size: 24,
		},
	];

	rimraf.sync(DIST_DIR);
	mkdirp.sync(DIST_DIR);

	let indexDts = '';

	const fnTpl =
		fs.readFileSync('./_tpl.js', 'utf8').replace('// prettier-ignore', '').trim() + '\n';
	const fnTplDTs = fs.readFileSync('./_tpl.d.ts', 'utf8');

	config.forEach(({ indir, outdir, fnPrefix, transformName, allowStrokeWidth, size }) => {
		totalist(indir, (name, abs, stats) => {
			if (/\.svg/i.test(name)) {
				mkdirp.sync(path.join(DIST_DIR, outdir));

				let svg = fs.readFileSync(abs, 'utf8').replace(/[\n\r]/g, ' ');

				// detect size from viewBox unless not forced via config
				const m = /viewBox=['"](?<viewBox>[^"']+)['"]/.exec(svg);
				if (!size && m?.groups?.viewBox) {
					const [_1, _2, w, h] = m.groups.viewBox.split(' ');
					size = Math.max(w, h);
				}

				const buildReplace = ({ size, allowStrokeWidth, strokeWidth }) => {
					return [
						'${style ? `style="${style}" ` : ""}',
						'${cls ? `class="${cls}" ` : ""}',
						'width="${size || ' + size + '}" ',
						'height="${size || ' + size + '}" ',
						allowStrokeWidth
							? 'stroke-width="${strokeWidth ?? ' + strokeWidth + '}" '
							: '',
						'${attrs ? `${attrs} ` : ""}',
					].join('');
				};

				let strokeWidth;
				if (allowStrokeWidth) {
					const m = /stroke-width=['"](?<strokeWidth>[^"']+)['"]/.exec(svg);
					strokeWidth = m?.groups?.strokeWidth || undefined;
					svg = svg.replace(/ stroke-width="[^"]+"/, '');
				}

				// quick-n-dirty hacking
				svg = svg
					.replace(' xmlns="http://www.w3.org/2000/svg"', '')
					.replace(/ class="[^"]+"/, '')
					.replace(/ width="[^"]+"/, '')
					.replace(/ height="[^"]+"/, '')
					.replace(/ id="[^"]+"/, '')
					.replace(
						'<svg ',
						'<svg ' + buildReplace({ size, allowStrokeWidth, strokeWidth })
					)
					.replace(/>\s+</g, '><')
					.trim();

				if (typeof transformName === 'function') name = transformName(name);
				const outName = fnPrefix + safeId(name.replace(/\.svg$/, ''));
				let content = fnTpl.replace('outName', outName).replace('{{svg}}', svg);

				// log(gray(`    ✔ ${outName}`));
				fs.writeFileSync(path.join(DIST_DIR, outdir, outName + '.js'), content);

				// types
				let dts = fnTplDTs.replace('outName', outName);
				fs.writeFileSync(path.join(DIST_DIR, outdir, outName + '.d.ts'), dts);
				indexDts += `export { ${outName} } from '${outdir}/${outName}.js';\n`;
			}
		});

		log(gray(`Done -> ${path.join(DIST_DIR, outdir)}\n`));
	});

	fs.writeFileSync(path.join(DIST_DIR, 'index.js'), indexDts);
	fs.writeFileSync(path.join(DIST_DIR, 'index.d.ts'), indexDts);

	log(gray(`Done all\n`));
}

function onError(e) {
	console.log('\n' + red(e.toString().trim()) + '\n');
	process.exit(1);
}

function help() {
	const self = path.basename(__filename);
	console.log(`
    This script will wrap icon svgs as functions. Each fn in a separate file.

    ${yellow('Usage:')}
        node ${self} build

`);
	process.exit();
}

function ucFirst(str) {
	return `${str}`.charAt(0).toUpperCase() + `${str}`.slice(1);
}

function safeId(name) {
	return name.split(/[\/-]/).filter(Boolean).map(ucFirst).join('');
}
