
/**
 * 入力値が空かどうかをチェック
 * @param value - 入力値
 * @param errorMsg - 出力したいエラーメッセージ
 * @return 入力値が空の場合は出力したいエラーメッセージを返す。それ以外は空文字を返す
 */

export const validateRequired = (value: string, errorMsg: string) => {
  if (!value.trim()) {
    return errorMsg;
  }
  return "";
}
