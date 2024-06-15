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
								{ label: 'Proxmox WebUI Login', link: '/setups/1-installing-proxmox/3-login-into-proxmox' },
								{ label: 'Configuring Interfaces', link: '/setups/1-installing-proxmox/4-configure-interfaces' },
								{ label: 'Proxmox ReadMe', link: '/setups/1-installing-proxmox/5-proxmox-readme' },
							],
						},
						{
							label: 'Installing OPNSense',
							items: [
								{ label: 'Downloading ISO', link: '/setups/2-installing-opnsense/1-iso-download' },
								{ label: 'Creating OPNSense VM', link: '/setups/2-installing-opnsense/2-creating-opnsense-vm' },
								{ label: 'Installing OPNSense', link: '/setups/2-installing-opnsense/3-installing-opnsense' },
								{ label: 'Basic OPNSense Configuration', link: '/setups/2-installing-opnsense/4-configure-opnsense' },
								{ label: 'OPNSense Setup', link: '/setups/2-installing-opnsense/5-opnsense-setup' },
								{ label: 'OPNSense Update & Plugins', link: '/setups/2-installing-opnsense/6-update-plugin' },
								{ label: 'RFC1918 Alias', link: '/setups/2-installing-opnsense/7-rfc1918' },
								{ label: 'Tailscale Installer', link: '/setups/2-installing-opnsense/8-tailscale-installer' },
							],
						},
						{
							label: 'Installing Docker',
							items: [
								{ label: 'Download CT-Template', link: '/setups/3-installing-docker/1-cttemplate-download' },
								{ label: 'Creating Docker CT', link: '/setups/3-installing-docker/2-creating-docker-ct' },
								{ label: 'Setup Network for Docker', link: '/setups/3-installing-docker/3-create-docker-vlan' },
								{ label: 'Install Docker', link: '/setups/3-installing-docker/4-install-docker' },
								{ label: 'Tailscale Installer', link: '/setups/3-installing-docker/5-tailscale-installer' },
							],
						},
					],
				},
				{
					label: 'Configs',
					items: [
						{
							label: 'Proxmox',
							items: [
								{ label: 'Default Interface-File', link: '/configs/proxmox/etc-network-interfaces' },
							],
						},
					],
				},
			],
		}),
	],
});
