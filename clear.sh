#!/bin/bash

echo -e "1 > del .DS_store.\n"
find ../ -name .DS_Store  -exec rm {} \;
find ../ -name  *.exe -exec rm {} \;
find ../ -name  *.o -exec rm {} \;
find ../ -name  a.out -exec rm {} \;
echo -e "* > done !!!\n"
exit 0;

