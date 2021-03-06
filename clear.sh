#!/bin/bash

echo -e "1 > del link file.\n"
rm codeLearn/LS/LSchoolProject
echo -e "2 > del .DS_store.\n"
find ./ -name .DS_Store  -exec rm {} \;
find ./ -name .gitignore  -exec rm {} \;
find ./ -name  *.exe -exec rm {} \;
find ./ -name  *.o -exec rm {} \;
find ./ -name  a.out -exec rm {} \;
find ./ -name 'node_modules' -type d -print -exec rm -rf {} \;
find ./ -name '.cache' -type d -print -exec rm -rf {} \;
find ./codeLearn -name  '.git' -type d -exec rm -rf {} \;
echo -e "* > done !!!\n"
exit 0;

