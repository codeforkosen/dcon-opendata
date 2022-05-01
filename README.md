# 高専DCONオープンデータ

## sample

- [結果2022](https://codeforkosen.github.io/dcon-opendata/app/result2022.html)
- [写真2022](https://codeforkosen.github.io/dcon-opendata/app/photo2022.html)

## tool

img.json, img,csv を画像ディレクトリから作成する
```
cd tool
deno run -A makeimgjson.js
```

team.json を team.csv から生成する
```
cd tool
deno run -A makejsonfromcsv.js
```
