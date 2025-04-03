// 変数宣言：let / const
let count = 0;
count = count + 1;

const name = "太郎";
console.log(name);
// 再代入不可のためエラーが出る
// name = "次郎";

// データ型：string, number, boolean

/**
 * nullとundefinedの違い
 */
// nullを自ら定義
const nullVal = null;
console.log(nullVal);

// valを宣言したが値が入っていないため、undefinedになる
let val;
console.log(val);


/**
 * unknownとanyの違い
 */
const anyNumber: any = 12;
const unknownName: unknown = "abc";

// 実行時のエラーになる
// console.log(anyNumber.toUpperCase());

// 型がわからないためstring型で使用される【toUpperCase()】が使用できない
// console.log(unknownName.toUpperCase());


if (typeof unknownName === "string") {
  console.log(unknownName.toUpperCase());
}
// テンプレート文字列：`こんにちは、${name}`
// 配列：[], push()
// オブジェクト：{ key: value }
// 条件分岐：if / else
const age = 24;
const value = age >= 20 ? "20歳以上" : "20歳未満";
if (age >= 20) {
  console.log("年齢は20歳を超えています。")
} else {
  console.log("年齢は20歳未満です。")
}
// 関数：function / アロー関数
// イベント処理：addEventListener
// DOM操作：getElementById, innerText
