<template>
    <!-- <div> -->
            <!-- <th scope="row">{{this.index+1}}</th>
            <td><input  type="text" class="form-control" aria-describedby="basic-addon1" v-model="curso.nombre"></td>
            <td><input  type="text" class="form-control" aria-describedby="basic-addon1" v-model="nombre"></td>
            <td><input type="text" class="form-control" aria-describedby="basic-addon1" v-model="curso.nota"></td>
            <td><input type="text" class="form-control" aria-describedby="basic-addon1" v-model="nota"></td>
            <td><a href="">Eliminar</a></td> -->
        <!-- <form action=""> -->
            <tr>
            <!-- <form action=""> -->
                <th scope="row">{{index+1}}</th>
                <td><input id="nombre"  type="text" class="form-control" aria-describedby="basic-addon1" v-model="curso.nombre" name="nombre"></td>
                <!-- <td v-else><input  type="text" class="form-control" aria-describedby="basic-addon1" v-model="nombre"></td> -->
                <td><input id="nota"   type="text" class="form-control" aria-describedby="basic-addon1" v-model="curso.nota" name="nota"></td>
                <!-- <td v-else><input type="text" class="form-control" aria-describedby="basic-addon1" v-model="nota"></td> -->
                <td><a href="" v-on:click.prevent="Oneliminar">Eliminar</a></td>
            <!-- </form> -->
            </tr>
        <!-- </form> -->
        
          
    <!-- </div> -->
</template>
<script>
 export default {
        
        props:['curso','index'],
        data(){
            return{
                // index:0,
                nuevanota:true,
                disabled:'disabled'
            };
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            // agregars(){
            //     this.nuevanota=false;
            //     let nuevocurso = {
            //         nombre:this.nombre,
            //         nota:this.nota
            //     }
            //     this.$emit('nuevo',nuevocurso);
                
            // }
            Oneliminar(){
                this.$emit('eliminar')
            }
        }
    }        

</script>