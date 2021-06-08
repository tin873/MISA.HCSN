<template>
    <div class="view-device">
        <div class="features-pane">
          <div class="features-pane-left">
            <input
              id="assetSearchBox"
              class="input-search icon-search"
              type="text"
              placeholder="Tìm kiếm theo tên, mã tài sản. "
            />
          </div>

          <div class="features-pane-right">
            <div
              class="btn-add-asset btn features-pane-item"
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

          <tbody>
            <tr
              v-for="(asset, index) in listAsset"
              :key="asset.assetId"
            >
              <td class="no-border-left">{{ index + 1 }}</td>
              <td>{{ asset.assetCode }}</td>
              <td>{{ asset.assetName }}</td>
              <td>{{ asset.assetTypeName }}</td>
              <td>{{ asset.departmentName }}</td>
              <td style="text-align: right">
                {{ asset.originalPrice }}
              </td>
              <td class="no-border-right">
                <div class="features-box">
                  <div
                    :id="'tableRow' + index + '_edit'"
                    class="table-icon icon-edit-pen"
                    title="Sửa"
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
          <!-- <div v-if="getSuccess" class="loading-dialog">
            <div class="icon-loading"></div>
          </div>
          <div v-if="!isSuccess" class="loading-dialog-execu">
            <div class="icon-loading"></div>
          </div>
          <div v-if="getEmty" class="loading-emty">Không có dữ liệu</div> -->
        </table>
        <div class="ctx-menu" id="ctxMenu">
          <div class="ctx-menu-item">Thêm</div>
          <div class="ctx-menu-item">Sửa</div>
          <div id="preventLeftClick" class="ctx-menu-item">Xóa</div>
        </div>
      </div>

      <div class="table-summary">
        <div class="summary">
          <div class="asset-number">Tổng số tài sản: {{ amountAsset }}</div>
          <div class="price-number">
            Tổng nguyên giá: {{ totalPrice }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default ({
    name: 'DeviceManagement',
    data(){
        return{
            listAsset: [
                {
                  assetId: null,
                  assetCode: 'edfdf3g',
                  assetName: 'sdf23fd',
                  assetTypeId: null,
                  departmentId: null,
                  timeUse: null,
                  wearRate: null,
                  originalPrice: 23423,
                  wearValue: null,
                  isUsed: false,
                  departmentName: 'sdf23fds',
                  assetTypeName: 'sdf32fds',
                  createdBy: null,
                  modifiedBy: null,
                  createDate: null,
                },
                {
                  assetId: null,
                  assetCode: 'edfdf3g',
                  assetName: 'sdf23fd',
                  assetTypeId: null,
                  departmentId: null,
                  timeUse: null,
                  wearRate: null,
                  originalPrice: 23423,
                  wearValue: null,
                  isUsed: false,
                  departmentName: 'sdf23fds',
                  assetTypeName: 'sdf32fds',
                  createdBy: null,
                  modifiedBy: null,
                  createDate: null,
                },
                {
                  assetId: null,
                  assetCode: 'edfdf3g',
                  assetName: 'sdf23fd',
                  assetTypeId: null,
                  departmentId: null,
                  timeUse: null,
                  wearRate: null,
                  originalPrice: 23423,
                  wearValue: null,
                  isUsed: false,
                  departmentName: 'sdf23fds',
                  assetTypeName: 'sdf32fds',
                  createdBy: null,
                  modifiedBy: null,
                  createDate: null,
                },
                {
                  assetId: null,
                  assetCode: 'edfdf3g',
                  assetName: 'sdf23fd',
                  assetTypeId: null,
                  departmentId: null,
                  timeUse: null,
                  wearRate: null,
                  originalPrice: 23423,
                  wearValue: null,
                  isUsed: false,
                  departmentName: 'sdf23fds',
                  assetTypeName: 'sdf32fds',
                  createdBy: null,
                  modifiedBy: null,
                  createDate: null,
                }
            ],
            amountAsset: 234234,
            totalPrice: 234234,
        }
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
