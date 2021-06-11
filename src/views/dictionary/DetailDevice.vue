<template>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="header-detail">
          <div class="title">{{title}}</div>

          <div class="header-right-detail">
            <div class="icon-help btn btn-help"></div>
            <div class="icon-cancel btn btn-close" @click="hide()"></div>
          </div>
        </div>

        <div class="content-detail">
          <div class="input-field">
            <label for="">Mã tài sản (<span>*</span>)</label>
             <div class="combobox-model">
                <select>
                  <option>mã tài sản 1</option>
                  <option>mã tài sản 2</option>
                  <option>mã tài sản 3</option>
                </select>
            </div>

            <div id="assetInput1_warning" class="validate-warning">
              Thông tin bắt buộc
            </div>
          </div>
          <div class="input-field">
            <label for="">Tên tài sản (<span>*</span>)</label>
            <input
              id="assetInput2"
              maxlength="255"
              class="input-two-third input-black"
              type="text"
              @keyup="validateAssetName()"
              @blur="validateAssetName()"
              v-model="assets.AssetName"
            />

            <div id="assetInput2_warning" class="validate-warning">
              Thông tin bắt buộc
            </div>
          </div>
          <div class="clear-float"></div>
          <div class="input-field">
            <label>Mã phòng ban</label>
            <div class="combobox-model">
                <select>
                  <option>mã phòng ban 1</option>
                  <option>mã phòng ban 2</option>
                  <option>mã phòng ban 3</option>
                </select>
            </div>
          </div>
          <div class="input-field">
            <label for="">Tên phòng ban</label>
            <input
              class="input-black input-two-third"
              tabindex="-1"
              type="text"
              name=""
              v-model="assets.DepartmentName"
            />
          </div>
          <div class="clear-float"></div>
          <div class="input-field">
            <label for="">Mã loại tài sản</label>
            <div class="combobox-model">
                <select>
                  <option>mã tài sản 1</option>
                  <option>mã tài sản 2</option>
                  <option>mã tài sản 3</option>
                </select>
            </div>
          </div>
          <div class="input-field">
            <label for="">Tên loại tài sản</label>
            <input
              class="input-black input-two-third"
              tabindex="-1"
              type="text"
              name=""
              v-model="assets.AssetTypeName"
            />
          </div>
          <div class="clear-float"></div>
          <div class="input-field">
            <label for="">Ngày ghi tăng</label>
            <input
              id="assetInput"
              class="input-one-third"
              type="date"
              placeholder="_ _/ _ _/ _ _ _ _"
              name=""
              @keypress="formatNumber($event)"
              v-model="assets.IncreaseDate"
            />
          </div>
          <div class="input-field">
            <label for="">Thời gian sử dụng (năm)</label>
            <input
              id="assetInput5"
              class="input-one-third"
              type="text"
              name=""
              format="dd/mm/yy"
              @keypress="formatNumber($event)"
              v-model="assets.TimeUse"
            />
          </div>
          <div class="input-field">
            <label for="">Tỷ lệ hao mòn (%)</label>
            <input
              id="assetInput6"
              class="input-one-third"
              maxlength="10"
              type="text"
              name=""
              @keypress="formatNumber($event)"
              v-model="assets.WearRate"
            />
          </div>
          <div class="input-field">
            <label for="">Nguyên giá</label>
            <input
              id="assetInput7"
              maxlength="13"
              class="input-one-third"
              type="text"
              name=""
              style="text-align: right"
              :value="formatedMoney"
              @keypress="formatNumber($event)"
              @keyup="updateInput($event)"
            />
          </div>
          <div class="clear-float"></div>
          <div class="input-field">
            <label for="">Giá trị hao mòn năm</label>
            <input
              style="text-align: right"
              id="assetInput8"
              maxlength="10"
              class="input-one-third"
              type="text"
              name=""
              @keypress="formatNumber($event)"
              v-model="assets.WearValue"
            />
          </div>
        </div>
        <div class="footer">
          <div class="btn btn-cancel" tabindex="0" @click="hide()">Hủy</div>

          <div class="btn btn-save" tabindex="0">Lưu</div>
        </div>
      </div>
    </div>
</template>

<script>
export default ({
    name: 'DetailDevice',
    props: ['title', 'assets'],
    methods: {
        hide(){
            this.$emit('closeTab');
        },
    },
})
</script>

<style>
@import '../../styles/dictionary/detailDevice.css';
</style>
