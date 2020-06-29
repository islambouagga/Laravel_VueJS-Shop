<template>
    <div class="customers">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Customers Component</div>

                    <div class="card-body">
                        I'm an Customers component.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:"Customers",
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
