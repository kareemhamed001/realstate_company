import ServiceController from "./controller.js";
import Swal from "sweetalert2";
import ExceptionHandler from "../../../helpers/ExceptionHandler.js";

let serviceController = new ServiceController();

let addServiceForm = document.getElementById('addServiceForm');
let editServiceForm = document.getElementById('editServiceForm');
let perPageSelect = document.getElementById('perPage');

if (addServiceForm) {
    addServiceForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let data = new FormData(addServiceForm);
        let response = await serviceController.store(data, 'swal', 'json');
        listServices();
        Swal.fire(response.swalResponse);
    });
}

if (editServiceForm) {
    editServiceForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let data = new FormData(editServiceForm);
        let id=data.get('id');
        let response = await serviceController.update(id,data, 'swal', 'json');
        listServices();
        Swal.fire(response.swalResponse);
    });
}


let currentPage = 1;
let perPage=11
if (perPageSelect){
    perPage= perPageSelect.value;
    perPageSelect.addEventListener('change', async (e) => {
        perPage = e.target.value;
        await listServices()
    })
}

function onPageChange(page) {
    console.log(page);
    currentPage = page;
}


async function listServices() {
    try {
        let services = await serviceController.list(currentPage, perPage, 'swal', 'json');

        if (services.response.status === 200) {
            console.log(services.response.data.data.data);
            await serviceController.showPreview(services.response.data.data.data, 'servicesContainer');
            await serviceController.showPagination(services.response.data.data, 'pagination',onPageChange);
        }
    }catch (e) {
        ExceptionHandler(e)
    }

}

listServices()


