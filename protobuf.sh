#! /bin/sh

SRC_DIR=./protos
DEST_DIR=./protos/types
OUT_FILE=index.js
OUT_TYPE_FILE=index.d.ts

mkdir -p ${DEST_DIR}

node_modules/.bin/pbjs \
  --target static-module \
  --wrap commonjs \
  --keep-case \
  --path ${SRC_DIR} \
  --out ${DEST_DIR}/${OUT_FILE} \
  ${SRC_DIR}/**/*.proto

node_modules/.bin/pbts \
  --out ${DEST_DIR}/${OUT_TYPE_FILE} \
  ${DEST_DIR}/${OUT_FILE}
