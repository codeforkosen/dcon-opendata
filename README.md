# 高専DCONオープンデータ

## 作品検索

- [DCON作品検索(2019-2025)](https://codeforkosen.github.io/dcon-opendata/app/)
- [DCON作品(2019-2025)](https://codeforkosen.github.io/dcon-opendata/app/result.html)

## オープンデータ＆写真

- [高専DCON2025 結果](https://codeforkosen.github.io/dcon-opendata/app/result2025.html) [空間写真(厳選)](https://code4fukui.github.io/fisheyes-viewer/slideshow.html?url=https://img.fukuno.com/vr180/20250510_dcon2025/people.m3u8) [空間写真](https://code4fukui.github.io/fisheyes-viewer/slideshow.html?url=https://img.fukuno.com/vr180/20250510_dcon2025/out.m3u8)
- [高専DCON2024 結果](https://codeforkosen.github.io/dcon-opendata/app/result2024.html) [空間写真](https://code4fukui.github.io/fisheyes-viewer/slideshow.html?url=https://tf0.code4fukui.org/vr180/2024-05-11-dcon2024/dcon2024.m3u8)
- [高専DCON2023 結果](https://codeforkosen.github.io/dcon-opendata/app/result2023.html)
- [高専DCON2022 結果](https://codeforkosen.github.io/dcon-opendata/app/result2022.html) [写真](https://codeforkosen.github.io/dcon-opendata/app/photo2022.html)
- [高専DCON2021 結果](https://codeforkosen.github.io/dcon-opendata/app/result2021.html) [web](https://dcon.ai/2021/) [YouTube](https://www.youtube.com/watch?v=kEDbfRuNZlY)
- [高専DCON2020 結果](https://codeforkosen.github.io/dcon-opendata/app/result2020.html) [web](https://dcon.ai/2020/) [list](https://www.facebook.com/photo/?fbid=475870056425373&set=pcb.475870323092013)
- [高専DCON2019 結果](https://codeforkosen.github.io/dcon-opendata/app/result2019.html) [web](https://www.jdla.org/news/20190424001/)

## tool

スクレイピングして、その年の team.csv を作成
```sh
cd tool
deno -A scrapeContent.js 2025
```

YouTubeのプレゼン再生リンクをつくる → [team_youtube.csv](data/2025/team_youtube.csv)

YouTubeのプレゼンURLを追加する
```sh
deno -A addYouTubeLink.js 2025
```

登録分のteam.csvデータをまとめる
```sh
cd tool
deno run -A makeAll.js
```

## old tool

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
