// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint-config test with option: { dirName: 'invalid-config--lint-config-warn', option: 'warn' } 1`] = `

[1] .redocly.yaml:6:5 at #/styleguide/rules/context

Property \`context\` is not expected here.

4 | styleguide:
5 |   rules:
6 |     context: null
  |     ^^^^^^^
7 |

Warning was generated by the configuration spec rule.


You have 1 warning.
validating ../__fixtures__/valid-openapi.yaml...
../__fixtures__/valid-openapi.yaml: validated in <test>ms

Woohoo! Your OpenAPI definition is valid. 🎉

[WARNING] Unused rules found in .redocly.yaml: context.
Check the spelling and verify the added plugin prefix.

`;
