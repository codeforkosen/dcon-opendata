# 高専DCONオープンデータ

## sample

- [DCON作品検索(2022-2024)](https://codeforkosen.github.io/dcon-opendata/app/)
- [高専DCON2024 結果](https://codeforkosen.github.io/dcon-opendata/app/result2024.html)
- [高専DCON2023 結果](https://codeforkosen.github.io/dcon-opendata/app/result2023.html)
- [高専DCON2022 結果](https://codeforkosen.github.io/dcon-opendata/app/result2022.html)
- [高専DCON2022 写真](https://codeforkosen.github.io/dcon-opendata/app/photo2022.html)

## tool

makejsonfromcsv.js 内の year を設定し、下記コマンドで team.json を team.csv から生成する
```sh
cd tool
deno run -A makejsonfromcsv.js
```

img.json, img,csv を画像ディレクトリから作成する
```sh
cd tool
deno run -A makeimgjson.js
```

登録分のteam.csvデータをまとめる
```sh
cd tool
deno run -A makeAll.js
```
