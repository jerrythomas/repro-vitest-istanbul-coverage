# Repro for @vitest/coverage-istanbul

[Vitest Issue #3336](https://github.com/vitest-dev/vitest/issues/3336)

When testing svelte components with custom class attributes, Istanbul reporter seems to be showing coverage < 100% where I expected it to be 100%.

```svelte
//AliasClass.svelte

<script>
  let className = ''
  export { className as class }
</script>

<div class="flex {className}">Test</div>
```

Test both the scenarios below

```svelte
<AliasClass />
<AliasClass class="flex-col" />
```

I expected the coverage to be 100%. However, branch coverage shows as 33% with line 6 as the line that is not covered.

I assumed that the issue is with the alias, but this seems to be a problem with the class attribute itself. The same problem occurs if I use the `className` property without the alias.

```text
✓ src/AliasClass.spec.js (2)
 ✓ src/WithoutAlias.spec.js (2)

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  09:37:21
   Duration  2.21s (transform 663ms, setup 0ms, collect 1.33s, tests 29ms, environment 1.08s, prepare 280ms)

 % Coverage report from istanbul
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files            |     100 |    33.33 |     100 |     100 |
 AliasClass.svelte   |     100 |    33.33 |     100 |     100 | 6
 WithoutAlias.svelte |     100 |    33.33 |     100 |     100 | 5
---------------------|---------|----------|---------|---------|-------------------
```
