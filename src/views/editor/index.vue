<!--
 * @Author: Rock Chang
 * @Date: 2021-08-21 17:26:16
 * @LastEditTime: 2021-12-03 18:25:51
 * @Description: 
-->
<template>
	<div class="editor-wrap">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'editor-wrap',
	components: {},
	props: {},
	setup() {},
});
</script>

<style lang="less"></style>
