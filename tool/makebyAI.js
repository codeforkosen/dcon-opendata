import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchChat } from "https://code4fukui.github.io/ai_chat/fetchChat.js";

const year = 2023;
const data = await CSV.fetchJSON(`../data/${year}/team.csv`);
const list = [];
for (const t of data) {
  //const q = "下記の作品の魅力を技術とビジネスを学ぶ高専生向けに分かりやすく伝える文章を作成してください。"
  const q = "下記のビジネス概要から特徴的なキーワードを5つ抽出して、コンマ区切りで列挙してください。";
  const prompt = q + "\n" + t.作品概要;
  console.log("... fetching");
  const ans = await fetchChat(prompt);
  console.log("# " + t.作品名);
  console.log(prompt);
  console.log("->");
  console.log(ans);
  list.push({ id: t.ID, keyword: ans });
}
await Deno.writeTextFile(`../data/${year}/team_keywoard_by_AI.csv`, CSV.stringify(list));
