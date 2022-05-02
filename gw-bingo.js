/* 
配列を２つ用意する。
出力されたデータ（型は何？）ex, 35という数字が表示されました。
1-75の数字が格納された配列から空の配列に移動する。
 移動したら空の配列の中の数字の色を変えるイベントを作成。

*/

/*
１〜７５の配列のデータを用意し、空配列にデータを送る処理は、データの受け渡し（コピー削除）が難しいので
乱数で表示、取得してきたものを新しい空配列に格納する処理に変更する。

*/

const i = 13

// 1-75の数字が入った配列を用意。
const NumArray = [13,45,34]
NumArray.push(i)
NumArray.splice(-1,1)
console.log(NumArray)

// 空の配列を用意し、空配列に値をコピー
const yellow = Array.from(NumArray)
empty.push(i)
console.log(empty)

// ボタンを押した際に空配列の値を参照し、下の数字の色を変える。
function onClickButton() {
    document.getElementById("num").addEventListener('click', function(){
        alert("Hello")
    })
}