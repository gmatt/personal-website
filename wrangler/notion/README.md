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

Warning, the current local setup will use links from the staging url, and will only work after having deployed to staging.

```bash
wrangler dev --env dev
```

```bash
wrangler publish --env staging
```
