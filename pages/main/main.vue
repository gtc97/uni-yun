<template>
	<view style="width: 100%;">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item v-for="(img, index) in bannerImgs" :key="index">
							<image mode="aspectFill" style="width: 100%; height: 100%;" :src="img"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''"
					v-for="(item,index) in ticket" :key="index" @tap="tabSelect" :data-id="index">
					<view class="flex">
						<view class="flex-sub"></view>
						<view class="flex-sub">{{item.name}}</view>
						<view class="flex-sub flex align-center justify-center">
							<view v-if="item.isPromotion" class="cu-tag tag round sm bg-gradual-orange">
								{{item.promotionContent}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<start-end-point class="top-line" @startClick="startClick()" @endClick="endClick()"></start-end-point>
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='startModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog width100" @click.stop="">
				<view class="" style="height: 120upx;"></view>
				<z-calendar :datePrice="datePrice" howManyMonth="12" @changeDate="changeDate" defaultSelect="2019-12-12"
					mode="1">
				</z-calendar>
			</view>
		</view>
		<view class="cu-form-group top-line">
			<picker mode="date" :value="date" :start="nowtime" end="2050-12-31" @change="DateChange"
				style="padding-right: 0px">
				<view style="display: flex; justify-content: space-between;">
					<view class="">
						{{date}}
					</view>
					<view class="cuIcon-right"></view>
				</view>
			</picker>
		</view>
		<view class="bg-white padding top-line">
			<button class="cu-btn bg-gradual-orange lg" style="width: 100%;" @click="goSearchList()">开始搜索</button>
			<view class="padding-top-sm flex justify-between">
				<view class="text-sm">
					<text class="padding-lr-xs">
						北京 <text class="myIcon-jiantou padding-lr-xs"></text> 唐山
					</text>
					<text class="padding-lr-xs">
						唐山 <text class="myIcon-jiantou padding-lr-xs"></text> 北京
					</text>
					<text class="padding-lr-xs">
						北京 <text class="myIcon-jiantou padding-lr-xs"></text> 秦皇岛
					</text>
				</view>
				<view>清空历史</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		univerifyLogin
	} from '@/common/univerify.js'
	import zCalendar from "@/components/njzz-calendar/njzz-calendar.vue"
    import StartEndPoint from './components/StartEndPoint'
    import Indexes from '@/pages/common/indexes'
	export default {
        components: {StartEndPoint, Indexes,zCalendar},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				bannerImgs: [
					'http://qqpublic.qpic.cn/qq_public/0/0-2899385233-231CF477E468697EF065A15FF5353315/0?fmt=jpg&size=81&h=434&w=733&ppv=1',
					'http://qqpublic.qpic.cn/qq_public/0/0-2899385233-231CF477E468697EF065A15FF5353315/0?fmt=jpg&size=81&h=434&w=733&ppv=1',
					'http://qqpublic.qpic.cn/qq_public/0/0-2899385233-231CF477E468697EF065A15FF5353315/0?fmt=jpg&size=81&h=434&w=733&ppv=1',
				],
				ticket: [{
						name: '汽车票',
						isPromotion: false,
						promotionContent: ''
					},
					{
						name: '专车票',
						isPromotion: true,
						promotionContent: 'new'
					}
				],
				TabCur: 0,
				scrollLeft: 0,
				date: '2018-12-25',
				modalName: '',
				datePrice: [{
						date: "2019-12-11",
						price: "111"
					},
					{
						date: "2019-12-12",
						price: "333"
					},
					{
						date: "2019-12-10",
						price: "222",
					},
				],
				nowtime: '',
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			const loginType = uni.getStorageSync('login_type')
			if (loginType === 'local') {
				this.login(uni.getStorageSync('username'))
				return
			}
			let uniIdToken = uni.getStorageSync('uni_id_token')
			if (uniIdToken) {
				this.login(uni.getStorageSync('username'))
				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'checkToken',
					},
					success: (e) => {

						console.log('checkToken success', e);

						if (e.result.code > 0) {
							//token过期或token不合法，重新登录
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					},
					fail(e) {
						uni.showModal({
							content: JSON.stringify(e),
							showCancel: false
						})
					}
				})
			} else {
				this.guideToLogin()
			}
			var myDate = new Date();
			this.nowtime = myDate.toLocaleDateString();
		},
		methods: {
			...mapMutations(['login']),
			guideToLogin() {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							univerifyLogin().catch((err) => {
								if (err === false) return;
								/**
								 * 如果需要强制登录，使用reLaunch方式
								 */
								if (this.forcedLogin) {
									uni.reLaunch({
										url: '../login/login'
									});
								} else {
									uni.navigateTo({
										url: '../login/login'
									});
								}
							})
						}
					}
				});
			},
			changeDate(data) { //选择日期事件  可以将data绑定到此页面以用来提交等操作
				console.log("日期：" + data.date);
				console.log("价格:" + data.price);
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			DateChange(e) {
				this.showModal('startModal')
				this.date = e.detail.value
			},
			goSearchList() {
				uni.navigateTo({
					url: "../home/searchlist/SearchList"
				})
			},
			startClick() {
				uni.navigateTo({
					url: '/pages/common/indexes'
				})
				// this.showModal('startModal')
			},
			endClick() {
				uni.navigateTo({
					url: '/pages/common/indexes'
				})
				console.log("5")
			},
			// 隐藏modal
			hideModal(e) {
				this.modalName = null
			},
			// 显示某个modal
			showModal(modalName) {
				this.modalName = modalName
			},
		}

	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}

	.tag {
		border-top-right-radius: 0px
	}
</style>
