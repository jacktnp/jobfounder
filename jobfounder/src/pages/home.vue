<template>
    <div>
        <authen v-if="$store.getters.user.status != 'success'" />
        <div v-else>
            <navbar />
            <router-view />
        </div>
        
    </div>
</template>

<script>
import navbar from '@/components/navbar';
import authen from '@/pages/authen';

export default {
  name: 'Home',
  components:{
    navbar, authen
  },
}
</script>