
//import axios from "axios";

export const getDespachos = async (page) => {



   /*  const config = () => ({
        method: "get",
        Host: '<calculated when request is sent></calculated>',
        url: `http://localhost/api/v1/despachosx?page=${page}`,
        headers: {
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiODY1ZGE1OWI4ZjA5ZThjNTM3MGRhYjA0YzZkOWJiODQ5YmU3ZDQzMTA2MjIyNGI1NmUyZjFiNTNmYWQ3MjQ1ZTk5ZGI5OGViZWUyMzkxZTUiLCJpYXQiOjE2NzU4NzA5NjYuNzA0NzI1LCJuYmYiOjE2NzU4NzA5NjYuNzA0NzMsImV4cCI6MTcwNzQwNjk2Ni42NjQ2MDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.PwTa8rjuW-Zvw0tB-0EjqUpDxiR7mB_WaDq0Ii2NX7RMYBHang2mVTYT02TxGPZloqLWjIDwPRUEk_nN1llvESKMOlPUIK_-gsF-1WPbIWJdO-sZ4O8BAvZH4GwGa2HTSROJWmle-fag2epSI6AoYEKjP4fYdn7a82qrgKZCgCQyBQ6yYy-TtDLYmkKfLhLcdT1iO1XCPqWyy2Fc4QlG4oXzTphJXjri36st9FiQpQo0-o4sGh0b--tX6e8hNNB_OwfHbfMN3bZ2h3Xs-ml0nlndj9X6i3W7raHWuQweZrg5ZlY14jB3iDkhIgxVnOI7fATYPZSvqDD6KOKop5rJd7O579S5TASeEFPk4jllzPberi4rsDPFEn6NsT4X1oILA21zizB68JRHsmWnRNyqETZrh312hJn6feudftuKA-jHC6X9c2D83ORCzWZBNr-nfUvFhpZspJrS88WM10BmPXqK71JVlR84E6_owkR1SuV2xlS-qxrQ3Sa9uuxD924wOtsMYFbNAboSHqXI6bOneluwzTbTuMlrfi82IzInkvw6NPj147oZOpBE0ATvi9GcFKBZYHpM4JahXiXbZKptRv3ZRkUkuUdk6WFcjoYPs-yhusgTSHDhb0XY3IE5u85NJP-Q6XJjVQCcONxNQs8EBK3NK-u0EhR0Do6p7HFBj5E",
        },
    }); */

    const headers1 = [
        ['Host','<calculated when request is sent></calculated>'],
        ['Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiODY1ZGE1OWI4ZjA5ZThjNTM3MGRhYjA0YzZkOWJiODQ5YmU3ZDQzMTA2MjIyNGI1NmUyZjFiNTNmYWQ3MjQ1ZTk5ZGI5OGViZWUyMzkxZTUiLCJpYXQiOjE2NzU4NzA5NjYuNzA0NzI1LCJuYmYiOjE2NzU4NzA5NjYuNzA0NzMsImV4cCI6MTcwNzQwNjk2Ni42NjQ2MDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.PwTa8rjuW-Zvw0tB-0EjqUpDxiR7mB_WaDq0Ii2NX7RMYBHang2mVTYT02TxGPZloqLWjIDwPRUEk_nN1llvESKMOlPUIK_-gsF-1WPbIWJdO-sZ4O8BAvZH4GwGa2HTSROJWmle-fag2epSI6AoYEKjP4fYdn7a82qrgKZCgCQyBQ6yYy-TtDLYmkKfLhLcdT1iO1XCPqWyy2Fc4QlG4oXzTphJXjri36st9FiQpQo0-o4sGh0b--tX6e8hNNB_OwfHbfMN3bZ2h3Xs-ml0nlndj9X6i3W7raHWuQweZrg5ZlY14jB3iDkhIgxVnOI7fATYPZSvqDD6KOKop5rJd7O579S5TASeEFPk4jllzPberi4rsDPFEn6NsT4X1oILA21zizB68JRHsmWnRNyqETZrh312hJn6feudftuKA-jHC6X9c2D83ORCzWZBNr-nfUvFhpZspJrS88WM10BmPXqK71JVlR84E6_owkR1SuV2xlS-qxrQ3Sa9uuxD924wOtsMYFbNAboSHqXI6bOneluwzTbTuMlrfi82IzInkvw6NPj147oZOpBE0ATvi9GcFKBZYHpM4JahXiXbZKptRv3ZRkUkuUdk6WFcjoYPs-yhusgTSHDhb0XY3IE5u85NJP-Q6XJjVQCcONxNQs8EBK3NK-u0EhR0Do6p7HFBj5E']
       ];
     
       const options =()=>( {
         method: 'GET',
         headers:headers1,
        
         
       });
 
    const url1=`http://localhost/api/v1/despachosx?page=${page}`;

    const response=  await fetch(url1,options());
    const  data   =  await response.json();
    console.log('data', data);
    return  new Promise( resolve=>{
               resolve(Object.values(data)); 
            }) ;
  
   /*   axios(config())
             .then(function (response) {
            console.log('data', Object.values(response.data));
          
        })
        .catch(function (error) {
            console.log(error);
        });
 */



}