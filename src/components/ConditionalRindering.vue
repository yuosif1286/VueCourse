<template>
    <div v-if="color === color.one">
        a
    </div>
    <div v-else-if="color === color.two">
        b
    </div>
    <div v-else>
        c
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
props:['type']
,
data(){
    return {
        color:this.type
    }
}
})
</script>

