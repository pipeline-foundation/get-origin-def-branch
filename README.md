# Get origin default branch

This is an action that dynamically outputs the default branch from the remote origin of a public repository.

By default, it outputs the default branch from the remote origin of the `current` repository.

## Inputs

### `origin`

The owner/repo pair of the target repository.

**Default**: `${{ github.repository }}`

## Outputs

### `default_branch`

The name of the default branch of the target repository e.g. 'main', 'release' etc.

## Usage

#### 1. Default action usage
- this way the action would output the default branch of the current repository from its origin remote:

```
  - name: Get default branch from origin
    id: get-origin-default-branch
    uses: pipeline-foundation/get-origin-def-branch@v1.0.0
```

#### 2. Custom action usage
- this way the action would output the default branch of a user-defined repository from its origin remote

```
  - name: Get default branch from origin of owner/repo
    id: get-origin-default-branch
    uses: pipeline-foundation/get-origin-def-branch@v1.0.0
    with:
      origin: owner/repo
```

#### 3. Consuming the output
- to consume the output, use the following reference:
```
  ${{ steps.get-origin-default-branch.outputs.default_branch }}
```

## Contributing

Thank you for considering a contribution! Please check out our detailed [contribution guide](./CONTRIBUTING.md) to learn more about how to help us improve the project.