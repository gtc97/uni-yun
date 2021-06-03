<template>
	<view>
		<view class="cu-bar bg-white flex justify-between align-center">
			<view class="padding-lr" :class="animation?'animation-slide-right' :''" @click="startClick()">
				{{start}}
			</view>
			<img style="width: 28px" mode="widthFix" src="@/static/exchange.svg" @tap="toggle()" />
			<view class="padding-lr" :class="animation?'animation-slide-left' :''" @click="endClick()">
				{{end}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "StartEndPoint",
		props: {
			start: {
				type: String,
			},
			end: {
				type: String,
			},
		},
		data() {
			return {
				animation: false,
			}
		},
		methods: {
			toggle() {
				this.animation = true;
				setTimeout(() => {
					this.animation = false;
				}, 1000)
				let temp = null;
				temp = this.start;
				this.start = this.end;
				this.end = temp;
			},
			startClick() {
				this.$emit('startClick');
			},
			endClick() {
				this.$emit('endClick');
			}
		}
	}
</script>

<style>

</style>
