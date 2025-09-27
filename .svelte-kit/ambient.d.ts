
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
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
	export const SECRET_MONGODB_URI: string;
	export const SECRET_JWT_KEY: string;
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const NVM_RC_VERSION: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_CONFIG_HOME: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const DIFFPROG: string;
	export const SSH_AGENT_PID: string;
	export const NO_AT_BRIDGE: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const PANEL_GDK_CORE_DEVICE_EVENTS: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const MOTD_SHOWN: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const AMD_VULKAN_ICD: string;
	export const STARSHIP_SHELL: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const CHROME_DESKTOP: string;
	export const STARSHIP_SESSION_KEY: string;
	export const XDG_CACHE_HOME: string;
	export const npm_lifecycle_script: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const LC_TELEPHONE: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const BUN_INSTALL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const GTK3_MODULES: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const BROWSER: string;
	export const PATH: string;
	export const GDMSESSION: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const MAIL: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
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
		SECRET_MONGODB_URI: string;
		SECRET_JWT_KEY: string;
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		NVM_RC_VERSION: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		NODE: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		XDG_CONFIG_HOME: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		DIFFPROG: string;
		SSH_AGENT_PID: string;
		NO_AT_BRIDGE: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		PANEL_GDK_CORE_DEVICE_EVENTS: string;
		_: string;
		XAUTHORITY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XDG_GREETER_DATA_DIR: string;
		MOTD_SHOWN: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LC_PAPER: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		AMD_VULKAN_ICD: string;
		STARSHIP_SHELL: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		CHROME_DESKTOP: string;
		STARSHIP_SESSION_KEY: string;
		XDG_CACHE_HOME: string;
		npm_lifecycle_script: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		LC_TELEPHONE: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		LC_TIME: string;
		BUN_INSTALL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		GTK3_MODULES: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		BROWSER: string;
		PATH: string;
		GDMSESSION: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		MAIL: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
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
