<template>
    <div class="navbar" v-bind:class="{isZoom: isZoom}">
        <div class="logo-site">
            <div class="logo-box" v-on:click="hideMenu()">
                <div class="logo-icon"></div>
                <div class="logo-name" :class="{isToggle: isToggle}"><b>QLTS.VN</b></div>
                <div class="toggle-icon" :class="{isToggle: isToggle}"></div>
            </div>
        </div>
        <div class="navbar-content">
            <router-link class="nav-item"
            to="/"
            active-class="Active">
                <div class="nav-item-icon nav-item-cpmputer-line"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Tổng quan</div>
            </router-link>
            <router-link class="nav-item"
            to="/about"
            active-class="Active">
                <div class="nav-item-icon nav-item-community-line"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Tài sản</div>
                <div class="icon icon-submenu" :class="{isToggle: isToggle}"></div>
                <div class="sub-navbar">
                    <div class="sub-navbar-item">Ghi tăng</div>
                    <div class="sub-navbar-item">Điều chuyển</div>
                    <div class="sub-navbar-item">Tính hao mòn</div>
                    <div class="sub-navbar-item">Ghi giảm</div>
                </div>
            </router-link>
            <router-link class="nav-item"
            to="/dictionary/DeviceManagement"
            active-class="Active">
                <div class="nav-item-icon nav-item-paint-brush-line"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Công cụ dụng cụ</div>
                <div class="icon icon-submenu" :class="{isToggle: isToggle}"></div>
                <div class="sub-navbar">
                    <div class="sub-navbar-item">Sản phẩm sản xuất</div>
                    <div class="sub-navbar-item">Dụng cụ</div>
                </div>
            </router-link>
            <router-link class="nav-item"
            to="/"
            active-class="Active">
                <div class="nav-item-icon nav-item-common"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Danh mục</div>
                <div class="icon icon-submenu" :class="{isToggle: isToggle}"></div>
                <div class="sub-navbar">
                    <div class="sub-navbar-item">Tài sản</div>
                    <div class="sub-navbar-item">Vật liệu</div>
                    <div class="sub-navbar-item">Nguyên liệu</div>
                </div>
            </router-link>
            <router-link class="nav-item"
            to="/"
            active-class="Active">
                <div class="nav-item-icon nav-item-search-eye"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Tra cứu</div>
            </router-link>
            <router-link class="nav-item"
            to="/"
            active-class="Active">
                <div class="nav-item-icon nav-item-setting"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Hệ thống</div>
            </router-link>
            <router-link class="nav-item"
            to="/"
            active-class="Active">
                <div class="nav-item-icon nav-item-pie-chart-line"></div>
                <div class="nav-item-text" :class="{isToggle: isToggle}">Báo cáo</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return{
            isToggle: false,
            isZoom: false,
        }
    },
    methods: {
        hideMenu(){
            this.isToggle = !this.isToggle;
            this.isZoom = !this.isZoom;
            this.$emit('toggleMenu');
        }
    },
}
</script>
<style>
    .isToggle{
        display: none;
    }
    .Active{
        /* background-color: #273557;
        border-left: 4px solid #00abfe; */
    }
    .isZoom{
        width: 3.66% !important;
    }
</style>