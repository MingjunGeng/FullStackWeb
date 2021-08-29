#!/bin/bash

echo -e "1 > del .DS_store.\n"
find ../ -name .DS_Store  -exec rm {} \;
find ../ -name  *.exe -exec rm {} \;
find ../ -name  *.o -exec rm {} \;
find ../ -name  a.out -exec rm {} \;
echo -e "2 > git add . "
git add .
echo -e "3 > git commit -m ‘' \n"
read -p "enter a commit: " commit
if [ ! -n "$commit" ] ;then
  echo "you have not input a word!"
else
  echo "the word you input is $commit"
fi
git commit -m "$commit"
echo -e "5 > git push -u origin main.\n"
git push -u origin main
echo -e "* > done !!!\n"
exit 0;

