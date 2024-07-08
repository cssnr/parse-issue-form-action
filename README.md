[![Tags](https://github.com/cssnr/parse-issue-form-action/actions/workflows/tags.yaml/badge.svg)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/tags.yaml)

# Parse Issue Form Action

Parse GitHub Issue Forms Action and Set as Outputs. This is currently a WIP but functional.

> [!NOTE]   
> Please submit
> a [Feature Request](https://github.com/cssnr/parse-issue-form-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/parse-issue-form-action/issues) if you find any bugs.

## Inputs

| input | required | default | description                                  |
|-------|----------|---------|----------------------------------------------|
| body  | Yes      | -       | Set this to `${{ github.event.issue.body }}` |

```yaml
  - name: "Parse Issue"
    id: issue
    uses: cssnr/parse-issue-form-action@v1
    with:
      body: ${{ github.event.issue.body }}
```

### Outputs

Outputs are headings, to lower case, with spaces replaced with `_`'s.  
A heading of `Site Link` will be an output with key `site_link`.  
The above example would provide this output: `${{ steps.issue.outputs.site_link }}`

> [!WARNING]  
> This only parses values as strings and will not parse check boxes or dropdowns correctly.  
> Once I have a use or request for this feature, the functionality will be added...

## Simple Example

Using this issue form template:

```yaml
name: "Issue"
description: "Open an Issue"

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

This will generate these 2 outputs:
- `${{ steps.issue.outputs.site_link }}`
- `${{ steps.issue.outputs.details }}`

```yaml
name: "Issue"

on:
  issues:
    types:
      - opened

jobs:
  issue:
    name: "Issue"
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: "Checkout"
        uses: actions/checkout@v4

      - name: "Debug Issue"
        run: |
          echo Issue number: '${{ github.event.issue.number }}'
          echo Issue title: '${{ github.event.issue.title }}'
          echo Issue body: '${{ github.event.issue.body }}'

      - name: "Parse Issue"
        id: issue
        uses: cssnr/parse-issue-form-action@v1
        with:
          body: ${{ github.event.issue.body }}

      - name: "Debug Parsed Issue"
        run: |
          echo Site Link: '${{ steps.issue.outputs.site_link }}'
          echo Details: '${{ steps.issue.outputs.details }}'
```

For a full example, see: https://github.com/cssnr/link-extractor/blob/master/.github/workflows/issue.yaml

## Known Issues

- As previously mentioned, this currently parses raw content, therefore, will not parse check box/dropdown values, yet...
- If a users uses `###` at the start of a line, it would be interpreted as an output. Will be fixed if an issue is opened.
- If you use an IDE to validate actions, it will display the outputs as invalid since outputs are arbitrary based on input.

This is a very simple action, for more details see: [src/index.js](src%2Findex.js)
