
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const GJS_DEBUG_TOPICS: string;
	export const ATUIN_SESSION: string;
	export const GATEWAY_VM_OPTIONS: string;
	export const npm_package_devDependencies_sveltekit_superforms: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const STARSHIP_SHELL: string;
	export const WEBIDE_VM_OPTIONS: string;
	export const WEBSTORM_VM_OPTIONS: string;
	export const npm_package_devDependencies_bits_ui: string;
	export const FZF_DEFAULT_OPTS: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CONDA_SHLVL: string;
	export const npm_package_devDependencies_clsx: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ZED_TERM: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_scripts_db_push: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const __VFOX_SHELL: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GTK_MODULES: string;
	export const HOMEBREW_PREFIX: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GRADLE_HOME: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const MANAGERPID: string;
	export const npm_package_scripts_check: string;
	export const SYSTEMD_EXEC_PID: string;
	export const GOROOT: string;
	export const DATAGRIP_VM_OPTIONS: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DATASPELL_VM_OPTIONS: string;
	export const IDEA_VM_OPTIONS: string;
	export const COLORTERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const npm_package_description: string;
	export const npm_package_scripts_db_generate: string;
	export const npm_package_devDependencies_lucia: string;
	export const npm_package_devDependencies_lucide_svelte: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const INFOPATH: string;
	export const CLION_VM_OPTIONS: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_zod: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const JETBRAINSCLIENT_VM_OPTIONS: string;
	export const WINDOWID: string;
	export const JOURNAL_STREAM: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const STUDIO_VM_OPTIONS: string;
	export const TERM: string;
	export const USERNAME: string;
	export const __VFOX_CURTMPPATH: string;
	export const PHPSTORM_VM_OPTIONS: string;
	export const npm_package_devDependencies_drizzle_kit: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const WINDOWPATH: string;
	export const PATH: string;
	export const INVOCATION_ID: string;
	export const SESSION_MANAGER: string;
	export const RIDER_VM_OPTIONS: string;
	export const HOMEBREW_CELLAR: string;
	export const DEVECOSTUDIO_VM_OPTIONS: string;
	export const BAT_THEME: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const NODE: string;
	export const AQUA_VM_OPTIONS: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies_drizzle_orm: string;
	export const npm_package_devDependencies_eslint: string;
	export const TERM_PROGRAM: string;
	export const GOLAND_VM_OPTIONS: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const npm_package_devDependencies_dotenv: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_tailwind_variants: string;
	export const GOPATH: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__types_pg: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const RUSTROVER_VM_OPTIONS: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_db_studio: string;
	export const npm_package_devDependencies_svelte: string;
	export const PYCHARM_VM_OPTIONS: string;
	export const GPG_AGENT_INFO: string;
	export const MAMBA_EXE: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const npm_package_devDependencies_globals: string;
	export const RUBYMINE_VM_OPTIONS: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const QT_IM_MODULE: string;
	export const npm_package_scripts_format: string;
	export const npm_package_devDependencies_argon2: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const JETBRAINS_CLIENT_VM_OPTIONS: string;
	export const LC_ALL: string;
	export const npm_package_devDependencies_tailwind_merge: string;
	export const npm_execpath: string;
	export const HOMEBREW_NO_AUTO_UPDATE: string;
	export const CONDA_EXE: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_devDependencies__lucia_auth_adapter_drizzle: string;
	export const STARSHIP_SESSION_KEY: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_package_devDependencies__sveltejs_enhanced_img: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const npm_package_dependencies_pg: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
	export const VIPSHOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		GJS_DEBUG_TOPICS: string;
		ATUIN_SESSION: string;
		GATEWAY_VM_OPTIONS: string;
		npm_package_devDependencies_sveltekit_superforms: string;
		USER: string;
		npm_config_user_agent: string;
		STARSHIP_SHELL: string;
		WEBIDE_VM_OPTIONS: string;
		WEBSTORM_VM_OPTIONS: string;
		npm_package_devDependencies_bits_ui: string;
		FZF_DEFAULT_OPTS: string;
		XDG_SESSION_TYPE: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		CONDA_SHLVL: string;
		npm_package_devDependencies_clsx: string;
		TERM_PROGRAM_VERSION: string;
		ZED_TERM: string;
		DESKTOP_SESSION: string;
		npm_package_scripts_db_push: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		__VFOX_SHELL: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GTK_MODULES: string;
		HOMEBREW_PREFIX: string;
		GNOME_SHELL_SESSION_MODE: string;
		GRADLE_HOME: string;
		npm_package_devDependencies_svelte_check: string;
		MANAGERPID: string;
		npm_package_scripts_check: string;
		SYSTEMD_EXEC_PID: string;
		GOROOT: string;
		DATAGRIP_VM_OPTIONS: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DATASPELL_VM_OPTIONS: string;
		IDEA_VM_OPTIONS: string;
		COLORTERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		LIBVIRT_DEFAULT_URI: string;
		npm_package_description: string;
		npm_package_scripts_db_generate: string;
		npm_package_devDependencies_lucia: string;
		npm_package_devDependencies_lucide_svelte: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		INFOPATH: string;
		CLION_VM_OPTIONS: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_zod: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		npm_package_type: string;
		JETBRAINSCLIENT_VM_OPTIONS: string;
		WINDOWID: string;
		JOURNAL_STREAM: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_devDependencies_autoprefixer: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		STUDIO_VM_OPTIONS: string;
		TERM: string;
		USERNAME: string;
		__VFOX_CURTMPPATH: string;
		PHPSTORM_VM_OPTIONS: string;
		npm_package_devDependencies_drizzle_kit: string;
		GNOME_DESKTOP_SESSION_ID: string;
		WINDOWPATH: string;
		PATH: string;
		INVOCATION_ID: string;
		SESSION_MANAGER: string;
		RIDER_VM_OPTIONS: string;
		HOMEBREW_CELLAR: string;
		DEVECOSTUDIO_VM_OPTIONS: string;
		BAT_THEME: string;
		npm_package_name: string;
		npm_package_devDependencies_typescript_eslint: string;
		NODE: string;
		AQUA_VM_OPTIONS: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies_drizzle_orm: string;
		npm_package_devDependencies_eslint: string;
		TERM_PROGRAM: string;
		GOLAND_VM_OPTIONS: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		npm_package_devDependencies_dotenv: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		SSH_AGENT_LAUNCHER: string;
		CONDA_PYTHON_EXE: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_tailwind_variants: string;
		GOPATH: string;
		SHELL: string;
		npm_package_version: string;
		npm_package_devDependencies__types_pg: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		RUSTROVER_VM_OPTIONS: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_package_scripts_build: string;
		npm_package_scripts_db_studio: string;
		npm_package_devDependencies_svelte: string;
		PYCHARM_VM_OPTIONS: string;
		GPG_AGENT_INFO: string;
		MAMBA_EXE: string;
		GJS_DEBUG_OUTPUT: string;
		npm_package_devDependencies_globals: string;
		RUBYMINE_VM_OPTIONS: string;
		ALACRITTY_WINDOW_ID: string;
		QT_IM_MODULE: string;
		npm_package_scripts_format: string;
		npm_package_devDependencies_argon2: string;
		PWD: string;
		JAVA_HOME: string;
		JETBRAINS_CLIENT_VM_OPTIONS: string;
		LC_ALL: string;
		npm_package_devDependencies_tailwind_merge: string;
		npm_execpath: string;
		HOMEBREW_NO_AUTO_UPDATE: string;
		CONDA_EXE: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		npm_package_devDependencies__lucia_auth_adapter_drizzle: string;
		STARSHIP_SESSION_KEY: string;
		HOMEBREW_REPOSITORY: string;
		npm_package_devDependencies__sveltejs_enhanced_img: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		PNPM_HOME: string;
		EDITOR: string;
		npm_package_dependencies_pg: string;
		npm_package_devDependencies__types_eslint: string;
		INIT_CWD: string;
		NODE_ENV: string;
		VIPSHOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
