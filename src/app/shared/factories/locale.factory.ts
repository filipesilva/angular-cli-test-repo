import { SettingsService } from './../services/settings.service';

export function LocaleFactory(settingsService: SettingsService) {
  return settingsService.locale;
}
