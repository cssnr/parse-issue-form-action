[![Tags](https://img.shields.io/badge/tags-v1_%7C_v1.0-blue?logo=git&logoColor=white)](https://github.com/cssnr/parse-issue-form-action/tags)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/parse-issue-form-action?logo=git&logoColor=white&label=latest)](https://github.com/cssnr/parse-issue-form-action/releases/latest)
[![Release](https://img.shields.io/github/actions/workflow/status/cssnr/parse-issue-form-action/release.yaml?logo=github&label=release)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/release.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/cssnr/parse-issue-form-action/test.yaml?logo=github&label=test)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/test.yaml)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/parse-issue-form-action/lint.yaml?logo=github&label=lint)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_parse-issue-form-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_parse-issue-form-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/parse-issue-form-action?logo=github&label=updated)](https://github.com/cssnr/parse-issue-form-action/graphs/commit-activity)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/parse-issue-form-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/parse-issue-form-action)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/parse-issue-form-action?logo=htmx)](https://github.com/cssnr/parse-issue-form-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# Parse Issue Form Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Known Issues](#Known-Issues)
- [Support](#Support)
- [Contributing](#Contributing)

Parse GitHub Issue Forms Action and Set as Outputs.
This is a zero configuration way to get a form value as an Output.

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/parse-issue-form-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/parse-issue-form-action/issues) if you find any bugs.

## Inputs

| input | required | default | description                                  |
| ----- | :------: | ------- | -------------------------------------------- |
| body  | **Yes**  | -       | Set this to `${{ github.event.issue.body }}` |

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
          echo Issue number: '${{ github.event.issue.number }}'
          echo Issue title: '${{ github.event.issue.title }}'
          echo Issue body: '${{ github.event.issue.body }}'

      - name: 'Parse Issue'
        id: issue
        uses: cssnr/parse-issue-form-action@v1
        with:
          body: ${{ github.event.issue.body }}

      - name: 'Debug Parsed Issue'
        run: |
          echo Site Link: '${{ steps.issue.outputs.site_link }}'
          echo Details: '${{ steps.issue.outputs.details }}'
```

For a full example, see: https://github.com/cssnr/link-extractor/blob/master/.github/workflows/issue.yaml

## Tags

The following [rolling tags](https://github.com/cssnr/parse-issue-form-action/tags) are maintained.

| Tag      | Example  | Bugs | Feat. | Description                            |
| -------- | -------- | :--: | :---: | -------------------------------------- |
| `vN`     | `v1`     |  ✅  |  ✅   | Points to latest `vN.x.x` release.     |
| `vN.N`   | `v1.0`   |  ✅  |  ❌   | Points to latest `vN.N.x` release.     |
| `vN.N.N` | `v1.0.0` |  ❌  |  ❌   | Points directly to a specific release. |

**Important:** Make sure to use one of the [latest tags](https://github.com/cssnr/parse-issue-form-action/tags).

You can view the release notes for each version on the [releases page](https://github.com/cssnr/parse-issue-form-action/releases).

## Known Issues

- As previously mentioned, this currently parses raw content, therefore, will not parse check box/dropdown values, yet...
- If a users uses `###` at the start of a line, it would be interpreted as an output. Will be fixed if an issue is opened.
- If you use an IDE to validate actions, it will display the outputs as invalid since outputs are arbitrary based on input.

This is a **very** simple action, for more details see: [src/index.js](src/index.js)

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/parse-issue-form-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/parse-issue-form-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/parse-issue-form-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Parse%20Issue%20Form)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)

For more information, see the CSSNR [CONTRIBUTING.md](https://github.com/cssnr/.github/blob/master/.github/CONTRIBUTING.md#contributing).
