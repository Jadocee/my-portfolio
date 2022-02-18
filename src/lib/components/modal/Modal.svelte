<script lang="ts">
    export let hidden = true;
    export let title: string;
</script>

<div class="blur">

    <div class="modal">

    </div>

</div>


<style lang="scss">
    .blur {
        position: absolute;
        z-index: 999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
    }
    .modal {
        background: white;
        width: 25%;
        height: 25%;
    }
</style>