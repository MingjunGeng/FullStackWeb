
…or create a new repository on the command line

```sh
echo "# FullStackWeb" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sooof/FullStackWeb.git
git push -u origin main
```

…or push an existing repository from the command line

```sh
git remote add origin https://github.com/sooof/FullStackWeb.git
git branch -M main
git push -u origin main
```


Show git branch name

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```