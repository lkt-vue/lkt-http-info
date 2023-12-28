<script lang="ts">
export default {name: "LktHttpInfo", inheritAttrs: false}
</script>

<script setup lang="ts">

import {computed} from "vue";
import {getDefaultHttpInfoTitle, getDefaultHttpInfoMessage, getDefaultHttpInfoIcon} from "../functions/functions";

const props = defineProps({
    code: {type: String, required: true},
    title: {type: String, required: false, default: ''},
    message: {type: String, required: false, default: ''},
    icon: {type: String, required: false, default: ''},
    quick: {type: Boolean, required: false, default: false},
    canClose: {type: Boolean, required: false, default: false},
    palette: {type: String, required: false, default: 'warning'},
});

const emit = defineEmits(['close']);

const displayTitle = computed(() => {
        if (props.title !== '') return props.title;
        return getDefaultHttpInfoTitle(props.code);
    }),
    displayMessage = computed(() => {
        if (props.message !== '') return props.message;
        return getDefaultHttpInfoMessage(props.code);
    }),
    displayIcon = computed(() => {
        if (props.message !== '') return props.message;
        return getDefaultHttpInfoIcon(props.code);
    }),
    classes = computed(() => {
        let r = ['lkt-http-info'];
        if (props.quick) r.push('lkt-http-info-quick');
        if (props.palette) r.push(`lkt-http-info--${props.palette}`);
        return r.join(' ');
    });

const doClose = ($event: PointerEvent) => {
    emit('close', $event);
}

</script>

<template>
    <div :class="classes">
        <div class="lkt-http-info-header">
            <div v-if="displayIcon" class="lkt-http-info-icon">
                <i :class="displayIcon"></i>
            </div>
            <div>
                <div class="lkt-http-info-code">{{code}}</div>
                <div class="lkt-http-info-title">{{displayTitle}}</div>
            </div>
        </div>
        <div class="lkt-http-info-message">{{displayMessage}}</div>
        <div class="lkt-http-info-close" v-if="canClose" v-on:click="doClose"><i></i></div>
    </div>
</template>