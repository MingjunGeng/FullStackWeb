# FullStackWeb



Clone - The clone command downloads an existing Git repository to your local computer. You will then have a full-blown, local version of that Git repo and can start working on the project. Typically, the "original" repository is located on GitHub. That remote repository's URL is then later referred to as the "origin".

Branch - A Git branch is essentially an independent line of development. You can take advantage of branching when working on new features or bug fixes because it isolates your work from that of other team members. Different branches can be merged into any one branch as long as they belong to the same repository.

Commit - The commit command is used to save your changes to the local repository. Each commit will store the changes that have occurred since the last commit. This allows us to save our repository often so we don't lose work. But most importantly, we can go see the old versions of the files in our project and be able to turn back changes to a specific commit.

Push - The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repository.

Pull - The git pull is a Git command used to update the local version of a repository from a remote. By default, git pull updates the current local working branch (currently checked out branch) and updates the remote tracking branches for all other branches.

Merge - Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

Status - The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.



```
git pull

git add .
git commit -m "first commit"
git push -u origin main
or
git add --all
git commit -m "first commit"
git push -u origin main



```
…or create a new repository on the command line

echo "# FullStackWeb" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sooof/FullStackWeb.git
git push -u origin main


…or push an existing repository from the command line

git remote add origin https://github.com/sooof/FullStackWeb.git
git branch -M main
git push -u origin main

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
