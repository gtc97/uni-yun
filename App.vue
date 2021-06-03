<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
    import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
			    success: function(e) {
			        // console.log(e);
			        Vue.prototype.ScreenHeight = e.screenHeight
			        // #ifndef MP
			        Vue.prototype.StatusBar = e.statusBarHeight;
			        if (e.platform == 'android') {
			            Vue.prototype.CustomBar = e.statusBarHeight + 50;
			        } else {
			            Vue.prototype.CustomBar = e.statusBarHeight + 45;
			        };
			        // #endif
			        // #ifdef MP-WEIXIN
			        Vue.prototype.StatusBar = e.statusBarHeight;
			        let custom = wx.getMenuButtonBoundingClientRect();
			        Vue.prototype.Custom = custom;
			        Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			        // #endif
			        // #ifdef MP-ALIPAY
			        Vue.prototype.StatusBar = e.statusBarHeight;
			        Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
			        // #endif
			    }
			})
			console.log('App Launch');
			let uniIdToken = uni.getStorageSync('uni_id_token')
			if (uniIdToken) {
				this.login(uni.getStorageSync('username'))
			}

			// #ifdef APP-PLUS
			// 一键登录预登陆，可以显著提高登录速度
			uni.preLogin({
				provider: 'univerify',
				success: (res) => {
					this.setUniverifyErrorMsg()
					this.setHideUniverify(false);
					console.log("preLogin success: ", res);
				},
				fail: (err) => {
					this.setUniverifyErrorMsg(err.errMsg)
					// 没有开通一键登录
					this.setHideUniverify(true);
					console.log("preLogin fail: ", err);
				}
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods: {
			...mapMutations(['login', 'setUniverifyErrorMsg', 'setHideUniverify']),
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/animation.css";
	@import "myui/my.css";
	@import "myui/myicon/iconfont.css";
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	@import "components/m-icon/m-icon.css";

	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
		font-size: 14px;
	}

	input,
	textarea,
	button {
		font-size: 14px;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		/* min-height: 100%; */
		display: flex;
		flex: 1;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 10px;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		/* font-size: 18px; */
		height: 40px;
		line-height: 40px;
	}

	.input-row .title {
		width: 70px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 10px;
	}

	button.primary {
		background-color: #0faeff;
	}
</style>
