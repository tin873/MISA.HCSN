<template>
    <div class="view-device">
        <div class="features-pane">
          <div class="features-pane-left">
            <input
              id="assetSearchBox"
              class="input-search icon-search"
              type="text"
              placeholder="Tìm kiếm theo tên, mã tài sản. "
              @input="onSearch($event.target.value)"
            />
          </div>

          <div class="features-pane-right">
            <div
              class="btn-add-asset btn features-pane-item"
              @click="showModel()"
            >
              Thêm
            </div>

            <div
              class="btn icon-refresh features-pane-item"
            ></div>
            <div
              id="preventLeftClick"
              class="btn icon-trash features-pane-item"
            ></div>
          </div>
        </div>
        <div class="content-grid">
        <table class="table-asset" id="tableAsset">
          <colgroup>
            <col width="50" />
            <!-- <col width="120" /> -->
            <col width="120" />
            <col min-width="800" />
            <col min-width="200" />
            <col min-width="500" />
            <col width="150" />
            <col width="100" />
          </colgroup>
          <thead>
            <tr>
              <th style="text-align: left">STT</th>
              <th
                sortProp="code"
                sortOrder="asc"
                id="columnAssetCode"
                class="hover-pointer"
                style="text-align: left"
              >
                mã tài sản
              </th>
              <th
                sortProp="name"
                sortOrder="asc"
                id="columnAssetName"
                class="hover-pointer"
                style="text-align: left"
              >
                Tên tài sản
              </th>
              <th
                sortProp="type"
                style="text-align: left"
                sortOrder="asc"
                id="columnAssetType"
                class="hover-pointer"
              >
                Loại tài sản
              </th>
              <th
                sortProp="department"
                sortOrder="asc"
                id="columnDepartment"
                class="hover-pointer"
                style="text-align: left"
              >
                Phòng ban
              </th>
              <th
                sortProp="price"
                sortOrder="asc"
                id="columnPrice"
                class="hover-pointer"
                style="text-align: right"
              >
                nguyên giá
              </th>
              <th style="text-align: left">chức năng</th>
            </tr>
          </thead>

          <tbody class="scroll-y">
            <tr
              v-for="(asset, index) in list"
              :key="asset.AssetId"
            >
              <td class="no-border-left index">{{ index + 1 }}</td>
              <td>{{ asset.AssetCode }}</td>
              <td>{{ asset.AssetName }}</td>
              <td>{{ asset.AssetTypeName }}</td>
              <td>{{ asset.DepartmentName }}</td>
              <td style="text-align: right">
                {{ asset.OriginalPrice }}
              </td>
              <td class="no-border-right function">
                <div class="features-box">
                  <div
                    :id="'tableRow' + index + '_edit'"
                    class="table-icon icon-edit-pen"
                    title="Sửa"
                    @click="rowClick(asset)"
                  ></div>
                  <div
                    id="preventLeftClick"
                    class="table-icon icon-trash-table"
                    title="Xóa" 
                  ></div>
                  <div
                    class="table-icon icon-refresh-time"
                    title="Chức năng chưa phát triển"
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
           
        </table>
        <div class="ctx-menu" id="ctxMenu">
          <div class="ctx-menu-item">Thêm</div>
          <div class="ctx-menu-item">Sửa</div>
          <div id="preventLeftClick" class="ctx-menu-item">Xóa</div>
        </div>
      </div>

      <div class="table-summary">
        <div class="asset-number">Tổng số tài sản: {{ amountAsset }}</div>
        <div class="price-number">
          Tổng nguyên giá: {{ totalPrice }}
        </div>
      </div>
       <div v-if="true" class="loading-dialog">
            <div class="icon-loading"></div>
          </div>
          <div v-if="isSuccess" class="loading-dialog-execute">
            <div class="icon-loading"></div>
          </div>
          <div v-if="getEmty" class="loading-emty">Không có dữ liệu</div>
      <Details v-if="isShow" @closeTab="closeTab" v-bind:title="title" v-bind:assets="assets"/>
    </div>
</template>

<script>
import axios from "axios";
import Details from "./DetailDevice.vue";
export default ({
    name: 'DeviceManagement',
    components: {
    Details,
    },
    data(){
        return{
            listAsset: [
            ],
            list: [],
            amountAsset: 234234,
            totalPrice: 234234,
            assets:{},
            title: null,
            isShow: false,
            getSuccess: true,
            isSuccess: true,
        }
    },
    created() {
      this.getAllAsset();
    },
    methods: {
      showModel() {
        this.assets = {};
        this.title = "Thêm thiết bị mới";
        this.isShow = !this.isShow;
      },
      closeTab(){
        this.isShow = !this.isShow;
      },
      rowClick(asset){
        this.assets = asset;
        this.title = "Sửa Thiết bị";
        this.isShow = !this.isShow;
      },
      onSearch(value){
         if(value == "")
         {
           this.list = this.listAsset;
         }
         else
         {
           this.list = this.listAsset.filter(lists => lists.AssetName.toLowerCase().includes(value.toLowerCase()) || lists.AssetCode.toLowerCase().includes(value.toLowerCase()));
         }
        console.log(value);
      },
      async getAllAsset(){
        this.getSuccess = true;
        await axios.get("https://localhost:44395/api/v1/Assets").then(respon =>{
          this.listAsset = respon.data.Data;
          this.list = this.listAsset;
          this.getSuccess = false;
        }).catch(error => {
          console.log(error);
          setTimeout(() => {
            this.getSuccess = false; // tắt dialog loading
          }, 3000);
        })
        
      },
    },
    filters: {
    formatMoney: function (money) {
      if (money != null)
        var num = money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      else return "0";
      return num;
    },
  },
})
</script>
<style>
@import '../../styles/dictionary/deviceManagement.css';
</style>