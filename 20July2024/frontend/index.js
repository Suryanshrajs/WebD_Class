function init(){
document.getElementById("jsworld").innerHTML = "Hello World From JavaScript"
}
function initProductsListTable(){
    document.getElementById("productMenu").innerHTML=`
    <table>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Product Name</th>
                    <th>Details</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Dish 1</td>
                    <td>Very Bad</td>
                    <td>20</td>
                </tr>
            </tbody>
        </table>`
}

init()
initProductsListTable()