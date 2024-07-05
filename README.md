[![Tags](https://github.com/cssnr/parse-issue-form-action/actions/workflows/tags.yaml/badge.svg)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/tags.yaml)

# Parse Issue Form Action

Parse GitHub Issue Forms Action and Set as Outputs. This is a WIP.

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
    id: parse
    uses: cssnr/parse-issue-form-action@master
    with:
      body: ${{ github.event.issue.body }}
```

### Outputs

Outputs are headings, to lower case, with spaces replaced with `_`'s.  
A heading of `Site Link` will be an output with key `site_link`.  
The above example would provide this output: `${{ steps.parse.outputs.site_link }}`

Note: This only parses values as strings and will not parse check boxes or dropdowns.
Once I have a use or a request for this, the functionality will be added...

## Simple Example

Coming Soon...

For a full example, see: https://github.com/cssnr/link-extractor/blob/master/.github/workflows/issue.yaml
