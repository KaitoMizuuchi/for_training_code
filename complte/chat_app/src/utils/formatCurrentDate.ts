

/**
 * 現在取得した日付から表示するための文字列に変更
 * return 〇月〇日 ○○:○○ (minutesだけ2桁右詰)
 */
export const formatCurrentData = () => {
  const now = new Date();

  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${month}月${day}日${" "}${hour}:${minutes}`
}
