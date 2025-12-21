import * as Handlebars from 'handlebars';

export function registerHelpers() {
  // Sanitize for XML tag names
  Handlebars.registerHelper('xmlSafe', (str: string) => {
    if (typeof str !== 'string') return str;
    return str
      .replace(/[^a-zA-Z0-9_-]/g, '')  // Remove invalid chars
      .replace(/^[0-9-]/, '_$&');      // Tags cannot start with number/hyphen
  });

  // Keep existing join helper if it's not already registered
  if (!Handlebars.helpers['join']) {
    Handlebars.registerHelper('join', function (array: any, separator: any) {
      if (Array.isArray(array)) {
        return array.join(typeof separator === 'string' ? separator : ', ');
      }
      return '';
    });
  }

  // Add 'add' helper for index offset (used in templates)
  if (!Handlebars.helpers['add']) {
    Handlebars.registerHelper('add', function (a: number, b: number) {
      return a + b;
    });
  }
}

