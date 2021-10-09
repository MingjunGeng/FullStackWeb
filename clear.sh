#!/bin/bash

echo -e "1 > del .DS_store.\n"
find ./ -name .DS_Store  -exec rm {} \;
find ./ -name  *.exe -exec rm {} \;
find ./ -name  *.o -exec rm {} \;
find ./ -name  a.out -exec rm {} \;
find ./ -name 'node_modules' -type d -print -exec rm -rf {} \;
echo -e "* > done !!!\n"
exit 0;

