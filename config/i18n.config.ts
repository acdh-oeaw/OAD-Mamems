import type { LocaleObject } from "vue-i18n-routing";

import type en from "@/messages/en/common.json";
import type projectEn from "@/messages/en/project.json";

import { project } from "../config/project.config";

export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = project.defaultLocale;

export const localesMap = {
	en: { code: "en", iso: "en", files: ["en/common.json", "en/project.json", "en/crm.json"] },
} satisfies Record<Locale, LocaleObject>;

export type Messages = typeof en & typeof projectEn;

export interface Schema {
	message: Messages;
}

export function isValidLocale(value: string): value is Locale {
	return value in locales;
}

export interface Translations extends Record<Locale, Messages> {
	en: typeof en & typeof projectEn;
}
