## Contributing to this project

- Switch to dev branch and pull changes from remote

```bash
    git checkout dev 
    git fetch && git pull
    git checkout -b feat_featurename
```

- If you are adding a new feature:-
- Create new branch based on dev and replace <featurename> with the appropriate feature you are developing.

```bash
    git checkout -b feat_<featurename>
```

- If you are fixing an issue:-
- Create new branch based on dev and replace <issuename> with the appropriate fix you are developing.

```bash
    git checkout -b fix_<issuename>
```

- Make and commit your changes

## Rebasing

- Incase new commits exist on `dev` ahead your branch use `rebase` not `merge`

```bash
    git rebase dev
```

## Publish

- Publish your branch to remote

- Create a pull request merging to `dev`

- Wait for a review or request for one

- Merge if approved

- You are free to delete your branch after merging
