<template>
    <div class="container">
        <div>
            
            <button id="editar" class="btn btn-success">Editar</button>
        </div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Curso</th>
                    <th scope="col" class="">Nota</th>
                    <th scope="col">Opcion</th>
                </tr>
            </thead>
            <tbody>
                <fila-component
                    v-for="(curso,index) in cursos"
                    :key="curso.id"
                    :index="index"
                    :curso="curso"
                    :cursos="cursos"
                    @eliminar="eliminar(index)"
                ></fila-component>
                <tr>
                    <td colspan="2" class="text-primary">Promedio</td>
                    <td>{{this.promedio}}</td>
                </tr>
                <tr>
                    <td colspan="3">
                        <form action="" v-on:submit.prevent="guardar()">
                            <input type="button" id="nuevo" value="+" class="btn btn-success" v-on:click.prevent="nuevo">
                            <input type="submit" value="Guardar" class="btn btn-primary" v-on:click.prevent="guardar">
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
    // $(document).ready(function(){
    //     $("#editar").click(function(){
    //         $("#nuevo").attr("disabled",true);
    //         return true;  
    //     })
    // });
    
    // alert()->message('Notificación solo con mensaje');
    export default{
        data(){
            return{
                cursos:[],
                nota:'',
                nombre:'',
                promedio:'',
            };
        },
        mounted(){
            console.log('Component mounted.');
            
        },
        methods:{
            nuevo(nuevocurso){
                // alert("kajska")
                this.cursos.push(nuevocurso)
                // this.elementos.push(nuevocurso)

                // this.cursos.forEach(element => {
                //     console.log("*"+element.nota)
                // });
            },
            validar(){
                var campvacios = false;
                this.cursos.forEach(element => {
                    console.log(campvacios+"**"+element.nombre)
                    if (element.nota === undefined || element.nombre === undefined) {
                        campvacios = true;
                        // console.log(campvacios)
                    }
                });
                if(campvacios==false){
                    this.promedio = this.promediar();
                    const params = {
                        nombre:this.nombre,
                        nota:this.nota
                    };
                    axios.post('curso',params)
                        .then((response)=>{
                            const curso = response.data;
                            this.cursos.push(nuevocurso)
                        });
                    swal("Guardado", "Se ha guardado los datos", "success");
                    
                    // Swal.fire('Any fool can use a computer')
                }else{
                    swal ( "Campos Vacíos" ,  "Por favor llene los campos" ,  "error" )
                    
                }
            },
            promediar(){
                var suma = 0;
                var dimens = this.cursos.length;
                var promedio;
                this.cursos.forEach(element => {
                    suma = suma + parseInt(element.nota);
                });
                promedio = suma/dimens;
                promedio= Number.parseFloat(promedio).toFixed(2);
                return promedio;
            },
            guardar(){
                this.validar();    
            },
            eliminar(index){
                this.cursos.splice(index,1)
            }
        }        
    }
</script>
