## Setup

```bash
cd wrangler/notion
yarn install

wrangler login
```

## Update Fruition script

https://github.com/stephenou/fruitionsite

```bash
git submodule update --remote --merge
yarn fruition-generate
yarn fruition-patch
```

Update patch file:

```bash
# fruition-generate
# stash src/index.ts in SmartGit
# fruition-patch
# resolve conflicts
git diff stash@{0} src/index.ts > scripts/fruition-amendments.patch
```

Development

```bash
wrangler dev
```

```bash
wrangler publish
```
