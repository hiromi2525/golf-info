<template>
  <h1>Golf Facilty</h1>
  <div>Addnew Page</div>
  <div>
    ゴルフ場名<br />
    <input class="textFormTitleArea" type="text" id="golfCourseName" />
  </div>
  <div>
    所在地<br />
    <input class="textFormMemoArea" type="text" id="location" />
  </div>
  <div>
    ショット練習場<br />
    <div>
      打席数<br />
      <select name="pref">
        <option value="none">なし</option>
        <option value="10">10打席以内</option>
        <option value="20">20打席以内</option>
        <option value="30">20打席以上</option>
      </select>
    </div>
    <dev>
      長さ<br />
      <select name="long">
        <option value="none">なし</option>
        <option value="100">100yd以内</option>
        <option value="200">100yd~200yd</option>
        <option value="300">200yd~300yd</option>
        <option value="400">300yd以上</option>
      </select>
    </dev>
  </div>
  <div>
    パター練習場<br />
    <input type="radio" name="patter" value="あり" />広い
    <input type="radio" name="patter" value="なし" />狭い
  </div>
  <dev>
    バンカー練習場<br />
    <input type="radio" name="bunker" value="あり" />あり
    <input type="radio" name="bunker" value="なし" />なし </dev
  ><br />
  <dev>
    露天風呂<br />
    <input type="radio" name="bath" value="あり" />あり
    <input type="radio" name="bath" value="なし" />なし </dev
  ><br />
  <dev>
    昼食<br />
    <input type="radio" name="lunch" value="あり" />美味しい
    <input type="radio" name="lunch" value="なし" />普通
    <input type="radio" name="lunch" value="なし" />不味い </dev
  ><br />
  <dev>
    宿泊施設<br />
    <input type="radio" name="hotel" value="あり" />あり
    <input type="radio" name="hotel" value="なし" />なし </dev
  ><br />
  <dev>
    運営会社<br />
    <input class="textFormTitleArea" type="text" id="operatingCompany" /> </dev
  ><br />
  <dev>
    移動時間<br />
    <select name="move">
      <option value="onehour">1時間以内</option>
      <option value="twohour">1時間～2時間</option>
      <option value="threehour">2時間～3時間</option>
      <option value="threemore">3時間以上</option>
    </select> </dev
  ><br />
  <dev>
    総合評価<br />
    <input type="radio" name="total" value="1" />★
    <input type="radio" name="total" value="2" />★★
    <input type="radio" name="total" value="3" />★★★
    <input type="radio" name="total" value="4" />★★★★
    <input type="radio" name="total" value="5" />★★★★★ </dev
  ><br />
  <dev>
    難易度<br />
    <input type="radio" name="difficult" value="1" />★
    <input type="radio" name="difficult" value="2" />★★
    <input type="radio" name="difficult" value="3" />★★★
    <input type="radio" name="difficult" value="4" />★★★★
    <input type="radio" name="difficult" value="5" />★★★★★ </dev
  ><br />
  <dev>
    メモ<br />
    <input class="textFormMemoArea" type="text" id="memo" /> </dev
  ><br />
  <button @click="add" :class="addNewGolf">登録する</button><br />

  <router-link to="/">Top画面に戻る</router-link>
</template>

<script></script>

<style>
.textFormMemoArea {
  width: 300px;
  height: 50px;
}

.textFormTitleArea {
  width: 300px;
  height: 20px;
}
</style>
