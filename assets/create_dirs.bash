#!/bin/bash
for i in {1..40}
do
  if [ $i -lt 10 ]
  then
    i="0$i"
  fi
  mkdir "$i"
done
