import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, tags as t } from '@codemirror/highlight';

const highlightBackground = '#2c313a',
  selection = '#3E4451';

const nord0 = '#2e3440',
  nord1 = '#3b4252',
  nord2 = '#434c5e',
  nord3 = '#4c566a',
  nord4 = '#d8dee9',
  nord5 = '#e5e9f0',
  nord6 = '#eceff4',
  nord7 = '#8fbcbb',
  nord8 = '#88c0d0',
  nord9 = '#81a1c1',
  nord10 = '#5e81ac',
  nord11 = '#bf616a',
  nord12 = '#d08770',
  nord13 = '#ebcb8b',
  nord14 = '#a3be8c',
  nord15 = '#b48ead';

/// The editor theme styles for Nord.
export const nordTheme = EditorView.theme(
  {
    '&': {
      color: nord4,
      backgroundColor: nord0,
    },

    '.cm-content': {
      caretColor: nord4,
    },

    '&.cm-focused .cm-cursor': { borderLeftColor: nord4 },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },

    '.cm-panels': { backgroundColor: nord0, color: nord4 },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    '.cm-searchMatch': {
      backgroundColor: '#72a1ff59',
      outline: '1px solid #457dff',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: '#6199ff2f',
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': { backgroundColor: '#aafe661a' },

    '.cm-matchingBracket, .cm-nonmatchingBracket': {
      backgroundColor: '#bad0f847',
      outline: '1px solid #515a6b',
    },

    '.cm-gutters': {
      backgroundColor: nord0,
      color: nord3,
      border: 'none',
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground,
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd',
    },

    '.cm-tooltip': {
      border: '1px solid #181a1f',
      backgroundColor: nord0,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: nord4,
      },
    },
  },
  { dark: true }
);

/// The highlighting style for code in the One Dark theme.
export const nordHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: nord9 },
  {
    tag: [t.deleted, t.character, t.propertyName, t.macroName],
    color: nord7,
  },
  { tag: [t.function(t.variableName), t.labelName], color: nord8 },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: nord4 },
  { tag: [t.definition(t.name), t.separator], color: nord4 },
  {
    tag: [
      t.typeName,
      t.className,
      t.changed,
      t.annotation,
      t.modifier,
      t.self,
      t.namespace,
    ],
    color: nord12,
  },
  {
    tag: [t.typeName],
    color: nord9,
  },
  { tag: t.number, color: nord15 },
  {
    tag: [t.url, t.link],
    color: nord8,
  },
  {
    tag: [t.operator, t.operatorKeyword],
    color: nord9,
  },
  { tag: [t.escape, t.regexp, t.special(t.string)], color: nord14 },
  { tag: [t.meta, t.comment], color: nord3 },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: nord3, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: nord7 },
  { tag: [t.bool], color: nord9 },
  { tag: [t.special(t.variableName)], color: nord5 },
  { tag: [t.processingInstruction, t.string, t.inserted], color: nord14 },
  { tag: t.invalid, color: nord11 },
]);

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).
export const nord: Extension = [nordTheme, nordHighlightStyle];
