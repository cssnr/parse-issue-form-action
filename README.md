[![Tags](https://github.com/cssnr/parse-issue-form-action/actions/workflows/tags.yaml/badge.svg)](https://github.com/cssnr/parse-issue-form-action/actions/workflows/tags.yaml)
# Parse Issue Form Action

Parse GitHub Issue Forms Action and Set as Outputs. This is a WIP.

> [!NOTE]   
> Please submit a [Feature Request](https://github.com/cssnr/parse-issue-form-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/parse-issue-form-action/issues) if you find any bugs.

## Inputs

| input | required | default | description         |
|-------|----------|---------|---------------------|
| body  | Yes      | -       | Issue Body to Parse |

### Outputs

Outputs are heading titles, to lower case, with spaces replaced with `_`'s.  
A heading of `Site Link` will be an output with key `site_link`.

```yaml
  - name: "Update Tags"
    uses: cssnr/parse-issue-form-action@v1
    with:
      token: ${{ secrets.GITHUB_TOKEN }}
      body: ${{ github.event.issue.body }}
```

## Simple Example

Coming Soon...
