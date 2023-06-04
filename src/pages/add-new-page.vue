<template>
  <h1>Golf Facilty</h1>
  <div>Addnew Page</div>
  <div>
    ゴルフ場名
    <input type="text" id="golfCourseName" />
  </div>
  <div>
    所在地
    <input type="text" id="location" />
  </div>
  <div>
    ショット練習場
    <div>
      打席数
      <select name="pref">
        <option value="10">10打席以内</option>
        <option value="20">20打席以内</option>
        <option value="30">20打席以上</option>
      </select>
    </div>
    <dev>
      長さ
      <select name="long">
        <option value="100">100yd以内</option>
        <option value="200">100yd~200yd</option>
        <option value="300">200yd~300yd</option>
        <option value="400">300yd以上</option>
      </select>
    </dev>
  </div>
  <div>
    パター練習場
    <input type="radio" name="wide" value="あり" />広い
    <input type="radio" name="narrow" value="なし" />狭い
  </div>
  <dev>
    バンカー練習場
    <input type="radio" name="yes" value="あり" />あり
    <input type="radio" name="no" value="なし" />なし
  </dev>
  <dev>
    露天風呂
    <input type="radio" name="yes" value="あり" />あり
    <input type="radio" name="no" value="なし" />なし
  </dev>
  <dev>
    昼食
    <input type="radio" name="delicious" value="あり" />美味しい
    <input type="radio" name="usually" value="なし" />普通
    <input type="radio" name="unpalatable" value="なし" />不味い
  </dev>
  <dev>
    宿泊施設
    <input type="radio" name="yes" value="あり" />あり
    <input type="radio" name="no" value="なし" />なし
  </dev>
  <dev>
    運営会社
    <input type="text" id="operatingCompany" />
  </dev>
  <dev>
    移動時間
    <select name="move">
      <option value="onehour">1時間以内</option>
      <option value="twohour">1時間～2時間</option>
      <option value="threehour">2時間～3時間</option>
      <option value="threemore">3時間以上</option>
    </select>
  </dev>
  <dev>
    総合評価
    <input type="radio" name="one" value="1" />★
    <input type="radio" name="two" value="2" />★★
    <input type="radio" name="three" value="3" />★★★
    <input type="radio" name="four" value="4" />★★★★
    <input type="radio" name="five" value="5" />★★★★★
  </dev>
  <dev>
    難易度
    <input type="radio" name="one" value="1" />★
    <input type="radio" name="two" value="2" />★★
    <input type="radio" name="three" value="3" />★★★
    <input type="radio" name="four" value="4" />★★★★
    <input type="radio" name="five" value="5" />★★★★★
  </dev>
  <dev>
    メモ
    <input type="text" id="memo" />
  </dev>

  <router-link to="/">Top画面に戻る</router-link>
</template>

<script></script>

<style></style>
