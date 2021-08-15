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
git diff 1a36c503 src/index.ts > scripts/fruition-amendments.patch
```

Development

```bash
wrangler dev
```

```bash
wrangler publish
```
