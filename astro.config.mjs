import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: process.env.CI ? "https://grew-development.github.io" : "http://localhost:4321",
	base: process.env.CI ? "/serverdocs" : undefined,
	integrations: [
		starlight({
			title: 'Hetzner Server Instruction',
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
				de : {
					label: "Deutsch",
					lang: "de",
				}
			},
			social: {
				github: 'https://github.com/grew-development/serverdocs',
				email: 'mailto:info@grew-development.de',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Instruction', link: '/getting-started/1-instruction/' },
						{ label: 'FAQ (coming soon)', link: '/getting-started/2-faq/' },
						{ label: 'Serverinfos', link: '/getting-started/3-serverinfos/' },
					],
				},
				{
					label: 'Setups',
					items: [
						{
							label: 'Installing Proxmox',
							items: [
								{ label: 'Start Rescue Mode', link: '/setups/1-installing-proxmox/1-hetzner-rescue-mode' },
								{ label: 'Installing Proxmox', link: '/setups/1-installing-proxmox/2-install-proxmox' },
							],
						},
					],
				},
			],
		}),
	],
});
