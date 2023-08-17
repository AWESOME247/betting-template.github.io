<template>
    <div ref="container" :class="className">
        <template v-if="isLoading || isImageNotFound" :class="className">
            <img :class="className" :src="loadingImage ? loadingImage : errorImage" :alt="alt" />
        </template>
        <img v-else-if="isVisible" :src="mainImage" :alt="alt" :class="className" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        mainImage: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        },
        loadingImage: {
            type: String,
            default: "/Ripple-1s-200px.svg",
        },
        errorImage: {
            type: String,
            default: "/3024051.webp",
        },
        className: {
            type: String
        }
    },
    data() {
        return {
            isVisible: false,
            isLoading: true,
            isImageNotFound: false,
        };
    },
    mounted() {

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.isVisible = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
        );
        observer.observe(this.$refs.container as Element); // Type assertion added here
        const img = new Image();
        img.onload = () => {
            this.isLoading = false;
        };
        img.onerror = () => {
            this.isLoading = false;
            this.isImageNotFound = true;
        };
        img.src = this.mainImage;
    }
});
</script>
  