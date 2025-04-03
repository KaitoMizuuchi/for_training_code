/**
 * 動的に動く処理
 * DOMの取得
 * HTMLInputElementで型アサーションすることで、inputのvalueが使用可能になる。
 * <div>タグに使用すると実行時エラーになる。
 */
// チャットの表示件数
const chatInner = document.getElementById("chat-inner");

// 入力しているとき
const inputField = document.getElementById("input-field") as HTMLInputElement;

//　送信ボタンをクリックしたとき
const inputButton = document.getElementById("input-button");

// エラーメッセージ表示用
const errorMessage = document.getElementById("error");

console.log(chatInner);
console.log(inputField);
console.log(inputButton);


// 入力した内容の確認をボタンをおして表示
/**
 * addEventListenerを使用。
 * inputButtonはHTMLElementとnullの可能性もある。
 * オブジェクトを使用するときには【?.】としてnullの場合はスルーするようにしている。
 * 他にも【innerHTML】を使ったやり方もある。
 * 最後に入力欄の文字を削除
 */

/* リファクタリングをしよう
inputButton?.addEventListener("click", () => {
  const inputValue = inputField.value;
  if (inputValue === "") {
    if (errorMessage) {
      errorMessage.innerText = "メッセージを入力してください"
    }
    return;
  }
  const li = document.createElement("li");
  li.className = "message";
  li.textContent = inputValue;
  chatInner?.appendChild(li);
  inputField.value = "";
})
*/

/* =================================================================================*/


/**
 * この関数は別の場所でも利用可能
 * 指定されたテキストを持つメッセージ用の<li>要素を作成します。
 *
 * @param text - 表示したいテキスト
 * @returns 作成された<li>要素で【class="message"】をもつ
 */
const createMessageElement = (text: string): HTMLElement => {
  const li = document.createElement("li");
  li.className = "message";
  li.textContent = text;
  return li;
}

/**
 * 入力値が空かどうかをチェックし、空の場合はエラーメッセージを表示します。
 *
 * @param text - チェックする文字列
 * @param errorElement - エラー表示用の要素
 * @returns 空なら false、入力があれば true
 */
const validateInput = (text: string, errorElement: HTMLElement | null): boolean => {
  if (text === "") {
    errorElement && (errorElement.innerText = "メッセージを入力してください");
    return false;
  }
  return true;
}

inputButton?.addEventListener("click", () => {
  const inputValue = inputField.value;
  const isEmptyValue = validateInput(inputValue, errorMessage);
  if (!isEmptyValue) return;
  const message = createMessageElement(inputValue);
  chatInner?.appendChild(message);
  inputField.value = "";
})
