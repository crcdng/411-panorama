#!/bin/bash
for i in {1..50}
do
  if [ $i -lt 10 ]
  then
    i="0$i"
  fi
  mkdir "$i"
  touch "$i/.gitkeep"
done
