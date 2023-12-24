<script lang="ts">
export default {name: "LktHttpInfo", inheritAttrs: false}
</script>

<script setup lang="ts">

import {computed} from "vue";
import {getDefaultHttpInfoTitle, getDefaultHttpInfoMessage} from "../functions/functions";

const props = defineProps({
    code: {type: String, required: true},
    title: {type: String, required: false},
    message: {type: String, required: false},
});

const displayTitle = computed(() => {
        if (props.title !== '') return props.title;
        return getDefaultHttpInfoTitle(props.code);
    }),
    displayMessage = computed(() => {
        if (props.message !== '') return props.message;
        return getDefaultHttpInfoMessage(props.code);
    })

</script>

<template>
    <div>
        <div>
            <div>{{code}}</div>
            <div>{{displayTitle}}</div>
        </div>
        <div>{{displayMessage}}</div>
    </div>
</template>