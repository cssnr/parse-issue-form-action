[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/parse-issue-form-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/parse-issue-form-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/parse-issue-form-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/parse-issue-form-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/parse-issue-form-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/parse-issue-form-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/parse-issue-form-action/dist%2Findex.js?branch=release&logo=bookstack&logoColor=white&label=dist)](https://github.com/cssnr/parse-issue-form-action/tree/release)
[![Action Run Using](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fcssnr%2Fparse-issue-form-action%2Frefs%2Fheads%2Fmaster%2Faction.yml&query=%24.runs.using&logo=githubactions&logoColor=white&label=runs)](https://github.com/cssnr/actionlint-action/blob/master/action.yml)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/parse-issue-form-action/release.yaml?logo=norton&logoColor=white&label=release)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/parse-issue-form-action/test.yaml?logo=norton&logoColor=white&label=test)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/parse-issue-form-action/lint.yaml?logo=norton&logoColor=white&label=lint)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_parse-issue-form-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_parse-issue-form-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/parse-issue-form-action?logo=github&label=updated)](https://github.com/cssnr/parse-issue-form-action)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/parse-issue-form-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/parse-issue-form-action)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/parse-issue-form-action?logo=buffer&label=repo%20size)](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/parse-issue-form-action?logo=devbox)](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/parse-issue-form-action?logo=southwestairlines)](https://github.com/cssnr/parse-issue-form-action/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues/cssnr/parse-issue-form-action?logo=codeforces&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/parse-issue-form-action?logo=livechat&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/parse-issue-form-action?style=flat&logo=forgejo&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/parse-issue-form-action?style=flat&logo=gleam&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=apachespark&logoColor=white&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Parse Issue Form Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Known Issues](#Known-Issues)
- [Support](#Support)
- [Contributing](#Contributing)

Parse GitHub issue forms into outputs.  
This turns all issue form inputs into action outputs with zero configuration.

This is a **very** simple action, for more details see: [src/index.js](src/index.js)

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/parse-issue-form-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/parse-issue-form-action/issues) if you find any bugs.

> [!WARNING]  
> This action no longer works on the `master` branch.  
> If you need a rolling tag use the [@release](https://github.com/cssnr/parse-issue-form-action/tree/release) branch.

## Inputs

| Input |  Req.   | Default | Input&nbsp;Description                  |
| :---- | :-----: | :------ | :-------------------------------------- |
| body  | **Yes** | -       | Set to `${{ github.event.issue.body }}` |

```yaml
- name: 'Parse Issue'
  id: issue
  uses: cssnr/parse-issue-form-action@v1
  with:
    body: ${{ github.event.issue.body }}
```

## Outputs

Outputs are headings/labels, to lower case, with spaces replaced with `_`'s.  
A heading/label of `Site Link` will be an output with key `site_link`.

> [!WARNING]  
> This only parses values as strings and will not parse check boxes or dropdowns correctly.  
> Once I have a use or request for this feature, the functionality will be added...

```yaml
- name: 'Parse Issue'
  id: issue
  uses: cssnr/parse-issue-form-action@v1
  with:
    body: ${{ github.event.issue.body }}

- name: 'Echo Outputs'
  run: |
    echo "URL: ${{ steps.issue.outputs.url }}"
    echo "Details: ${{ steps.issue.outputs.details }}"
```

## Examples

Using this issue form template:

```yaml
name: 'Issue'
description: 'Open an Issue'

body:
  - type: input
    id: url
    attributes:
      label: Site URL
      description: Enter a URL

  - type: textarea
    id: description
    attributes:
      label: Details
      description: Please describe the issue...
```

Will generate these 2 outputs:

- `${{ steps.issue.outputs.site_url }}`
- `${{ steps.issue.outputs.details }}`

```yaml
name: 'Issue'

on:
  issues:
    types: [opened]

jobs:
  issue:
    name: 'Issue'
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: 'Checkout'
        uses: actions/checkout@v4

      - name: 'Debug Issue'
        run: |
          echo "Issue number: ${{ github.event.issue.number }}"
          echo "Issue title: ${{ github.event.issue.title }}"
          echo "Issue body: ${{ github.event.issue.body }}"

      - name: 'Parse Issue'
        id: issue
        uses: cssnr/parse-issue-form-action@v1
        with:
          body: ${{ github.event.issue.body }}

      - name: 'Debug Parsed Issue'
        run: |
          echo "Site Link: ${{ steps.issue.outputs.site_link }}"
          echo "Details: ${{ steps.issue.outputs.details }}"
```

For a full example, see: https://github.com/cssnr/link-extractor/blob/master/.github/workflows/issue.yaml

## Known Issues

- As mentioned, this currently parses raw content, therefore, will not parse check box/dropdown values, yet.
- If a users uses `###` at the start of a line, it would be interpreted as an output. Let us know if this is an issue.
- If you use an actions validator, it will display the outputs as invalid since outputs are arbitrary based on input.

## Tags

The following rolling [tags](https://github.com/cssnr/parse-issue-form-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                                               | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/parse-issue-form-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/parse-issue-form-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/parse-issue-form-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/parse-issue-form-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/parse-issue-form-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/parse-issue-form-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/parse-issue-form-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

If you run into any issues or need help getting started, please do one of the following:

- [Report an Issue](https://github.com/cssnr/parse-issue-form-action/issues)
- [Q&A Discussion](https://github.com/cssnr/parse-issue-form-action/discussions/categories/q-a)
- [Request a Feature](https://github.com/cssnr/parse-issue-form-action/issues/new?template=1-feature.yaml)
- [Chat with us on Discord](https://discord.gg/wXy6m2X8wY)

[![Features](https://img.shields.io/badge/features-brightgreen?style=for-the-badge&logo=rocket&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/issues/new?template=1-feature.yaml)
[![Issues](https://img.shields.io/badge/issues-red?style=for-the-badge&logo=southwestairlines&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/issues)
[![Discussions](https://img.shields.io/badge/discussions-blue?style=for-the-badge&logo=livechat&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/discussions)
[![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wXy6m2X8wY)

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

[![Actions Tools](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions/actions-tools.png)](https://actions-tools.cssnr.com/)

Additionally, you can support other [GitHub Actions](https://actions.cssnr.com/) I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [AI Issue Action](https://github.com/cssnr/ai-issue-action?tab=readme-ov-file#readme)
- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Webstore Publish Action](https://github.com/cssnr/webstore-publish-action?tab=readme-ov-file#readme)
- [Rhysd Actionlint Action](https://github.com/cssnr/actionlint-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Homebrew Action](https://github.com/cssnr/homebrew-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Create Pull Action](https://github.com/cssnr/create-pull-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/create-files-action](https://github.com/cssnr/create-files-action?tab=readme-ov-file#readme) - Create various files from templates.
- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.
- [smashedr/openai-translate-action](https://github.com/smashedr/openai-translate-action?tab=readme-ov-file#readme) - OpenAI translate action.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [javascript-action](https://github.com/smashedr/javascript-action?tab=readme-ov-file#readme) - JavaScript
- [typescript-action](https://github.com/smashedr/typescript-action?tab=readme-ov-file#readme) - TypeScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Dockerfile Python
- [test-action-uv](https://github.com/smashedr/test-action-uv?tab=readme-ov-file#readme) - Dockerfile Python UV
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image Python

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)

<a href="https://github.com/cssnr/parse-issue-form-action">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=cssnr/parse-issue-form-action&type=date&legend=bottom-right&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=cssnr/parse-issue-form-action&type=date&legend=bottom-right" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=cssnr/parse-issue-form-action&type=date&legend=bottom-right" />
 </picture>
</a>
