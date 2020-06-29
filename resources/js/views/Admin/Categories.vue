<template>
    <div class="categories">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Categories Component</div>

                    <div class="card-body">
                        I'm an Categories component.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:"Categories",
        props: {
            msg: String
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
